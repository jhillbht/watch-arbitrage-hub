
export interface WatchPrice {
  us: number;
  eu: number;
  uk: number;
  jp: number;
  hk: number;
}

export interface WatchArbitrage {
  bestBuy: string;
  bestSell: string;
  profit: number;
  roi: number;
}

export interface WatchHistoricalPrice {
  date: string;
  price: number;
  market: string;
}

export interface WatchMarketDepth {
  market: string;
  buyOrders: number;
  sellOrders: number;
  averageTimeToSell: number; // in days
  liquidityScore: number; // 1-10
}

export interface WatchPremiumData {
  historicalPrices: WatchHistoricalPrice[];
  marketDepth: WatchMarketDepth[];
  salesVelocity: number; // average sales per day
  dealerPremium: number; // percentage premium over private sellers
  confidence: number; // 0-1
}

export interface Watch {
  id: number;
  brand: string;
  model: string;
  reference: string;
  image: string;
  prices: WatchPrice;
  arbitrage: WatchArbitrage;
  premiumData?: WatchPremiumData; // Only available for premium users
}

export const regionNames: Record<string, string> = {
  us: 'United States',
  eu: 'Europe',
  uk: 'United Kingdom',
  jp: 'Japan',
  hk: 'Hong Kong'
};

export interface PremiumFeatureAccess {
  advancedPricing: boolean;
  historicalData: boolean;
  arbitrageTools: boolean;
  reporting: boolean;
  apiAccess: boolean;
}

export const DEFAULT_FREE_ACCESS: PremiumFeatureAccess = {
  advancedPricing: false,
  historicalData: false,
  arbitrageTools: false,
  reporting: false,
  apiAccess: false
};

export const PREMIUM_ACCESS: PremiumFeatureAccess = {
  advancedPricing: true,
  historicalData: true,
  arbitrageTools: true,
  reporting: true,
  apiAccess: true
};
