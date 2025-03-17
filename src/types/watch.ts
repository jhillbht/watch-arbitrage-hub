
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

export interface Watch {
  id: number;
  brand: string;
  model: string;
  reference: string;
  image: string;
  prices: WatchPrice;
  arbitrage: WatchArbitrage;
}

export const regionNames: Record<string, string> = {
  us: 'United States',
  eu: 'Europe',
  uk: 'United Kingdom',
  jp: 'Japan',
  hk: 'Hong Kong'
};
