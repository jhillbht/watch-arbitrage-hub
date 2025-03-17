
export interface WatchlistItem {
  id: number;
  brand: string;
  model: string;
  reference: string;
  currentPrice: number;
  priceChangePercent: number;
  alertEnabled: boolean;
  alertPrice: number;
  chart: { date: string; price: number }[];
}
