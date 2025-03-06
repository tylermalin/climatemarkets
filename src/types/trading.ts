export interface MarketOrder {
  id: string;
  market_id: string;
  user_id: string;
  order_type: 'limit' | 'market';
  side: 'buy' | 'sell';
  price: number;
  size: number;
  filled_size: number;
  status: 'open' | 'filled' | 'cancelled' | 'expired';
  wallet_address: string;
  created_at: string;
  updated_at: string;
}

export interface MarketTrade {
  id: string;
  market_id: string;
  maker_order_id: string;
  taker_order_id: string;
  maker_user_id: string;
  taker_user_id: string;
  price: number;
  size: number;
  maker_fee: number;
  taker_fee: number;
  created_at: string;
}

export interface UserWallet {
  id: string;
  user_id: string;
  wallet_address: string;
  chain_id: number;
  last_connected: string;
  created_at: string;
}

export interface OrderBook {
  bids: Array<{
    price: number;
    size: number;
    total: number;
  }>;
  asks: Array<{
    price: number;
    size: number;
    total: number;
  }>;
}