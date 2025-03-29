
// Mock types for our data models
export interface WatchModel {
  id: string;
  brand: string;
  model: string;
  reference: string;
  retail_price: number;
  image_url?: string;
  specifications?: Record<string, string>;
}

export interface PriceRecord {
  id: string;
  watch_id: string;
  source: string;
  market: string;
  price: number;
  currency: string;
  condition: string;
  timestamp: string;
  box_papers: boolean;
  link?: string;
}

export interface ArbitrageOpportunity {
  watch_id: string;
  buy_market: string;
  buy_price: number;
  buy_currency: string;
  sell_market: string;
  sell_price: number;
  sell_currency: string;
  profit_usd: number;
  profit_percentage: number;
  risk_score: number; // 1-10, 10 being highest risk
  shipping_cost: number;
  import_duties: number;
  estimated_total_profit: number;
  confidence: number; // 0-1
}

export interface PriceAlert {
  id: string;
  user_id: string;
  watch_id: string;
  target_price: number;
  direction: 'above' | 'below';
  active: boolean;
  triggered: boolean;
  created_at: string;
}
