/*
  # Orderbook and Trading System

  1. New Tables
    - `market_orders` - Stores all orders (bids and asks)
    - `market_trades` - Records completed trades
    - `user_wallets` - Stores user wallet information

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add trading-specific security rules

  3. Changes
    - Add order matching system
    - Add wallet integration
*/

-- Market Orders Table
CREATE TABLE IF NOT EXISTS market_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  market_id uuid REFERENCES prediction_markets(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  order_type text NOT NULL,
  side text NOT NULL,
  price numeric NOT NULL,
  size numeric NOT NULL,
  filled_size numeric DEFAULT 0,
  status text DEFAULT 'open',
  wallet_address text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_order_type CHECK (order_type = ANY(ARRAY['limit', 'market'])),
  CONSTRAINT valid_side CHECK (side = ANY(ARRAY['buy', 'sell'])),
  CONSTRAINT valid_status CHECK (status = ANY(ARRAY['open', 'filled', 'cancelled', 'expired'])),
  CONSTRAINT valid_price CHECK (price > 0 AND price <= 1),
  CONSTRAINT valid_size CHECK (size > 0)
);

ALTER TABLE market_orders ENABLE ROW LEVEL SECURITY;

-- Market Trades Table
CREATE TABLE IF NOT EXISTS market_trades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  market_id uuid REFERENCES prediction_markets(id) ON DELETE CASCADE,
  maker_order_id uuid REFERENCES market_orders(id),
  taker_order_id uuid REFERENCES market_orders(id),
  maker_user_id uuid REFERENCES auth.users(id),
  taker_user_id uuid REFERENCES auth.users(id),
  price numeric NOT NULL,
  size numeric NOT NULL,
  maker_fee numeric NOT NULL,
  taker_fee numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_trade_price CHECK (price > 0 AND price <= 1),
  CONSTRAINT valid_trade_size CHECK (size > 0)
);

ALTER TABLE market_trades ENABLE ROW LEVEL SECURITY;

-- User Wallets Table
CREATE TABLE IF NOT EXISTS user_wallets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  wallet_address text NOT NULL UNIQUE,
  chain_id integer NOT NULL,
  last_connected timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_chain_id CHECK (chain_id > 0)
);

ALTER TABLE user_wallets ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Market Orders Policies
CREATE POLICY "Users can view all orders"
  ON market_orders
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can manage their own orders"
  ON market_orders
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Market Trades Policies
CREATE POLICY "Users can view all trades"
  ON market_trades
  FOR SELECT
  TO authenticated
  USING (true);

-- User Wallets Policies
CREATE POLICY "Users can manage their own wallet"
  ON user_wallets
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can view connected wallets"
  ON user_wallets
  FOR SELECT
  TO authenticated
  USING (true);

-- Functions

-- Function to match orders
CREATE OR REPLACE FUNCTION match_orders(order_id uuid)
RETURNS TABLE (
  matched_order_id uuid,
  matched_price numeric,
  matched_size numeric
) AS $$
BEGIN
  RETURN QUERY
  WITH new_order AS (
    SELECT * FROM market_orders WHERE id = order_id
  )
  SELECT
    mo.id,
    CASE 
      WHEN no.order_type = 'market' THEN mo.price
      ELSE no.price
    END as price,
    LEAST(mo.size - mo.filled_size, no.size - no.filled_size) as size
  FROM market_orders mo, new_order no
  WHERE mo.market_id = no.market_id
    AND mo.side != no.side
    AND mo.status = 'open'
    AND mo.id != no.id
    AND CASE 
      WHEN no.side = 'buy' THEN mo.price <= no.price
      ELSE mo.price >= no.price
    END
  ORDER BY 
    CASE WHEN no.side = 'buy' THEN mo.price ELSE -mo.price END,
    mo.created_at
  LIMIT 1;
END;
$$ LANGUAGE plpgsql;