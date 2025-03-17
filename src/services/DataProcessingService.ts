
import { useState, useEffect } from 'react';

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

// Mock data collection service
export const useDataCollection = () => {
  const [isPolling, setIsPolling] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const startPolling = () => {
    setIsPolling(true);
    setLastUpdated(new Date());
    console.log('Started mock data polling');
  };
  
  const stopPolling = () => {
    setIsPolling(false);
    console.log('Stopped mock data polling');
  };
  
  // Mock polling scheduler - in a real app, this would use setInterval
  useEffect(() => {
    if (isPolling) {
      const interval = setInterval(() => {
        console.log('Polling for new data...');
        // Simulate successful poll 90% of the time
        if (Math.random() > 0.1) {
          setLastUpdated(new Date());
        } else {
          setError('Simulated polling error');
          setTimeout(() => {
            console.log('Retrying after error...');
            setError(null);
            setLastUpdated(new Date());
          }, 3000);
        }
      }, 60000); // Poll every minute in this simulation
      
      return () => clearInterval(interval);
    }
  }, [isPolling]);
  
  return { isPolling, lastUpdated, error, startPolling, stopPolling };
};

// Mock arbitrage analysis service
export const useArbitrageAnalysis = () => {
  const [opportunities, setOpportunities] = useState<ArbitrageOpportunity[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const analyzeArbitrageOpportunities = (
    watches: WatchModel[], 
    prices: PriceRecord[],
    options: {
      minProfitPercentage?: number;
      maxRiskScore?: number;
    } = {}
  ) => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      // In a real application, this would be a complex algorithm
      // comparing prices across markets and calculating profits
      const mockOpportunities: ArbitrageOpportunity[] = [
        {
          watch_id: 'rolex-submariner-date',
          buy_market: 'UK',
          buy_price: 12500,
          buy_currency: 'GBP',
          sell_market: 'US',
          sell_price: 14800,
          sell_currency: 'USD',
          profit_usd: 1600,
          profit_percentage: 12.8,
          risk_score: 3,
          shipping_cost: 200,
          import_duties: 500,
          estimated_total_profit: 900,
          confidence: 0.85
        },
        {
          watch_id: 'patek-philippe-nautilus',
          buy_market: 'EU',
          buy_price: 138000,
          buy_currency: 'EUR',
          sell_market: 'JP',
          sell_price: 22000000, // JPY
          sell_currency: 'JPY',
          profit_usd: 7500,
          profit_percentage: 5.4,
          risk_score: 5,
          shipping_cost: 400,
          import_duties: 2200,
          estimated_total_profit: 4900,
          confidence: 0.72
        }
      ];
      
      const filteredOpportunities = mockOpportunities.filter(opp => {
        return (
          (!options.minProfitPercentage || opp.profit_percentage >= options.minProfitPercentage) &&
          (!options.maxRiskScore || opp.risk_score <= options.maxRiskScore)
        );
      });
      
      setOpportunities(filteredOpportunities);
      setIsAnalyzing(false);
    }, 1500);
  };
  
  return { opportunities, isAnalyzing, analyzeArbitrageOpportunities };
};

// Mock premium pricing calculator
export const usePremiumPricingCalculator = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{
    estimated_price: number;
    confidence_interval: [number, number];
    market_liquidity: 'high' | 'medium' | 'low';
    price_trend: 'up' | 'down' | 'stable';
    similar_recent_sales: Array<{price: number, date: string, condition: string}>;
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
      
      setResult({
        estimated_price: Math.round(calculatedPrice),
        confidence_interval: [
          Math.round(calculatedPrice - variance),
          Math.round(calculatedPrice + variance)
        ],
        market_liquidity: 'medium',
        price_trend: 'stable',
        similar_recent_sales: [
          { price: Math.round(calculatedPrice * 0.97), date: '2023-06-15', condition: 'excellent' },
          { price: Math.round(calculatedPrice * 1.02), date: '2023-05-28', condition: 'mint' },
          { price: Math.round(calculatedPrice * 0.95), date: '2023-05-10', condition: 'good' }
        ]
      });
      
      setIsCalculating(false);
    }, 2000);
  };
  
  return { result, isCalculating, calculatePrice };
};

// Mock notification service
export class NotificationService {
  static async subscribeToAlerts(
    userId: string, 
    watchId: string, 
    targetPrice: number, 
    direction: 'above' | 'below'
  ): Promise<{ success: boolean, alertId?: string, error?: string }> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          alertId: `alert-${Date.now()}`
        });
      }, 800);
    });
  }
  
  static async unsubscribeFromAlert(alertId: string): Promise<{ success: boolean, error?: string }> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true
        });
      }, 500);
    });
  }
  
  static async getActiveAlerts(userId: string): Promise<PriceAlert[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'alert-1',
            user_id: userId,
            watch_id: 'rolex-submariner-date',
            target_price: 13000,
            direction: 'below',
            active: true,
            triggered: false,
            created_at: new Date().toISOString()
          },
          {
            id: 'alert-2',
            user_id: userId,
            watch_id: 'patek-philippe-nautilus',
            target_price: 140000,
            direction: 'below',
            active: true,
            triggered: false,
            created_at: new Date().toISOString()
          }
        ]);
      }, 700);
    });
  }
}

// Mock exchange rate service
export class ExchangeRateService {
  private static rates: Record<string, number> = {
    USD: 1,
    EUR: 1.08,
    GBP: 1.29,
    JPY: 0.0069,
    CHF: 1.13,
    HKD: 0.128
  };
  
  static convertCurrency(
    amount: number, 
    fromCurrency: string, 
    toCurrency: string
  ): number {
    const fromRate = this.rates[fromCurrency] || 1;
    const toRate = this.rates[toCurrency] || 1;
    
    // Convert to USD then to target currency
    return (amount * fromRate) / toRate;
  }
  
  static async getLatestRates(): Promise<Record<string, number>> {
    // In a real application, this would fetch from an exchange rate API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({...this.rates});
      }, 500);
    });
  }
}
