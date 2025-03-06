export interface MarketCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  created_at: string;
}

export interface PredictionMarket {
  id: string;
  category_id: string;
  title: string;
  description: string;
  target_date: string;
  current_price: number;
  volume: number;
  country: string;
  verification_sources: Array<{
    name: string;
    url: string;
  }>;
  resolution_criteria: string;
  sustainability_fee_percentage: number;
  created_at: string;
  updated_at: string;
}

export interface MarketPricePoint {
  id: string;
  market_id: string;
  price_point: number;
  probability: number;
  volume: number;
  created_at: string;
}

export interface MarketPrediction {
  id: string;
  market_id: string;
  title: string;
  description: string;
  current_price: number;
  volume: number;
  end_date: string;
  resolution_details: string;
  yes_description: string;
  no_description: string;
  created_at: string;
}

export interface MarketTrade {
  id: string;
  market_id: string;
  user_id: string;
  position: 'yes' | 'no';
  amount: number;
  price: number;
  sustainability_fee: number;
  created_at: string;
}

export interface MarketComment {
  id: string;
  market_id: string;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  likes: number;
}

export interface OrderBook {
  bids: Array<{
    price: number;
    size: number;
  }>;
  asks: Array<{
    price: number;
    size: number;
  }>;
}

export interface SustainabilityProject {
  id: string;
  title: string;
  description: string;
  target_funding: number;
  current_funding: number;
  status: 'active' | 'completed' | 'pending';
  verification_documents: Array<{
    title: string;
    url: string;
  }>;
  created_at: string;
  updated_at: string;
}

export interface ImpactMetric {
  id: string;
  project_id: string;
  metric_name: string;
  metric_value: number;
  measurement_date: string;
  verification_source: string;
  created_at: string;
}