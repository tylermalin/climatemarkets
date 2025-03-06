/*
  # Create Prediction Markets Schema

  1. New Tables
    - `prediction_markets`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `target_date` (timestamptz)
      - `current_price` (numeric)
      - `volume` (numeric)
      - `country` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `market_trades`
      - `id` (uuid, primary key)
      - `market_id` (uuid, foreign key)
      - `user_id` (uuid, foreign key)
      - `position` (text)
      - `amount` (numeric)
      - `price` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create prediction_markets table
CREATE TABLE IF NOT EXISTS prediction_markets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  target_date timestamptz NOT NULL,
  current_price numeric NOT NULL DEFAULT 0.5,
  volume numeric NOT NULL DEFAULT 0,
  country text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create market_trades table
CREATE TABLE IF NOT EXISTS market_trades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  market_id uuid REFERENCES prediction_markets(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  position text NOT NULL CHECK (position IN ('yes', 'no')),
  amount numeric NOT NULL,
  price numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE prediction_markets ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_trades ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view prediction markets"
  ON prediction_markets
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can trade"
  ON market_trades
  FOR INSERT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own trades"
  ON market_trades
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);