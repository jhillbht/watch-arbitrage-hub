
import { useState } from 'react';
import { WatchModel } from './DataProcessingTypes';

// Premium pricing calculator service
export const usePremiumPricingCalculator = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{
    estimated_price: number;
    confidence_interval: [number, number];
    market_liquidity: 'high' | 'medium' | 'low';
    price_trend: 'up' | 'down' | 'stable';
    similar_recent_sales: Array<{price: number, date: string, condition: string}>;
    historical_prices?: Array<{date: string, price: number}>;
  } | null>(null);
  
  const calculatePrice = (
    watch: WatchModel,
    condition: 'mint' | 'excellent' | 'good' | 'fair' | 'poor',
    hasBox: boolean,
    hasPapers: boolean,
    serviceHistory: boolean
  ) => {
    setIsCalculating(true);
    setResult(null);
    
    // Simulate API call delay
    setTimeout(() => {
      // In a real implementation, this would use a complex pricing model
      const basePrice = watch.retail_price;
      let conditionMultiplier = 1;
      
      switch (condition) {
        case 'mint': conditionMultiplier = 1.1; break;
        case 'excellent': conditionMultiplier = 1.0; break;
        case 'good': conditionMultiplier = 0.9; break;
        case 'fair': conditionMultiplier = 0.75; break;
        case 'poor': conditionMultiplier = 0.6; break;
      }
      
      const boxPapersMultiplier = hasBox && hasPapers ? 1.15 : 
                                 hasBox || hasPapers ? 1.05 : 0.95;
      
      const serviceMultiplier = serviceHistory ? 1.08 : 1;
      
      const calculatedPrice = basePrice * conditionMultiplier * boxPapersMultiplier * serviceMultiplier;
      const variance = calculatedPrice * 0.12; // 12% variance for confidence interval
      
      // Generate mock historical price data
      const mockHistoricalPrices = [
        { date: '6 months ago', price: Math.round(calculatedPrice * 0.92) },
        { date: '5 months ago', price: Math.round(calculatedPrice * 0.94) },
        { date: '4 months ago', price: Math.round(calculatedPrice * 0.97) },
        { date: '3 months ago', price: Math.round(calculatedPrice * 0.99) },
        { date: '2 months ago', price: Math.round(calculatedPrice * 1.01) },
        { date: '1 month ago', price: Math.round(calculatedPrice * 1.02) },
        { date: 'Current', price: Math.round(calculatedPrice) },
      ];
      
      // Determine price trend based on historical data
      const priceTrend: 'up' | 'down' | 'stable' = 
        mockHistoricalPrices[mockHistoricalPrices.length - 1].price > 
        mockHistoricalPrices[0].price ? 'up' : 
        mockHistoricalPrices[mockHistoricalPrices.length - 1].price < 
        mockHistoricalPrices[0].price ? 'down' : 'stable';
      
      setResult({
        estimated_price: Math.round(calculatedPrice),
        confidence_interval: [
          Math.round(calculatedPrice - variance),
          Math.round(calculatedPrice + variance)
        ],
        market_liquidity: 'medium',
        price_trend: priceTrend,
        similar_recent_sales: [
          { price: Math.round(calculatedPrice * 0.97), date: '2023-06-15', condition: 'excellent' },
          { price: Math.round(calculatedPrice * 1.02), date: '2023-05-28', condition: 'mint' },
          { price: Math.round(calculatedPrice * 0.95), date: '2023-05-10', condition: 'good' }
        ],
        historical_prices: mockHistoricalPrices
      });
      
      setIsCalculating(false);
    }, 2000);
  };
  
  return { result, isCalculating, calculatePrice };
};
