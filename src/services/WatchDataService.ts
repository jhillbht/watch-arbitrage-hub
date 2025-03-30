
import { supabase } from "@/integrations/supabase/client";
import { Watch } from "@/types/watch";
import { mockWatches } from "@/data/mockWatches";

export const fetchWatches = async (): Promise<Watch[]> => {
  try {
    // Try to fetch from supabase
    const { data, error } = await supabase
      .from('watches')
      .select(`
        id,
        brand,
        model,
        reference,
        image,
        watch_prices (region, price),
        watch_arbitrage (best_buy, best_sell, profit, roi)
      `);

    if (error) {
      console.error('Error fetching watches:', error);
      // Fall back to mock data
      console.log('Falling back to mock data');
      return mockWatches;
    }

    if (!data || data.length === 0) {
      // No data, return mock data
      console.log('No data found, using mock data');
      return mockWatches;
    }

    // Transform the data into the Watch type
    const watches: Watch[] = data.map(item => {
      // Extract prices from watch_prices array
      const prices = item.watch_prices.reduce((acc: any, curr: any) => {
        acc[curr.region as keyof typeof acc] = Number(curr.price);
        return acc;
      }, { us: 0, eu: 0, uk: 0, jp: 0, hk: 0 });

      // Extract arbitrage data
      const arbitrageData = item.watch_arbitrage[0] || {
        best_buy: 'us',
        best_sell: 'us',
        profit: 0,
        roi: 0
      };

      return {
        id: Number(item.id.substring(0, 8)), // Use part of UUID as numeric ID
        brand: item.brand,
        model: item.model,
        reference: item.reference,
        image: item.image,
        prices: prices,
        arbitrage: {
          bestBuy: arbitrageData.best_buy,
          bestSell: arbitrageData.best_sell,
          profit: Number(arbitrageData.profit),
          roi: Number(arbitrageData.roi)
        }
      };
    });

    return watches;
  } catch (error) {
    console.error('Error in fetchWatches:', error);
    // Fall back to mock data in case of any error
    console.log('Error occurred, using mock data');
    return mockWatches;
  }
};

export const fetchWatchWithPremiumData = async (watchId: string): Promise<Watch | null> => {
  try {
    // Use the database function to get all watch data including premium data
    const { data, error } = await supabase.rpc('get_watch_with_data', {
      watch_id: watchId 
    });

    if (error) {
      console.error('Error fetching watch with premium data:', error);
      // Find the watch in mock data
      const mockWatch = mockWatches.find(w => String(w.id) === watchId);
      if (mockWatch) {
        return {
          ...mockWatch,
          premiumData: {
            historicalPrices: generateMockHistoricalPrices(),
            marketDepth: generateMockMarketDepth(),
            salesVelocity: Math.random() * 10,
            dealerPremium: Math.random() * 15,
            confidence: Math.random() * 0.9 + 0.1
          }
        };
      }
      return null;
    }

    if (!data) {
      return null;
    }

    // Cast data to appropriate type and process it
    const watchData = data as any;

    // Transform the data into the Watch type with correct type assertions
    return {
      id: Number(watchData.id.substring(0, 8)), // Use part of UUID as numeric ID
      brand: watchData.brand,
      model: watchData.model,
      reference: watchData.reference,
      image: watchData.image,
      prices: watchData.prices,
      arbitrage: {
        bestBuy: watchData.arbitrage.bestBuy,
        bestSell: watchData.arbitrage.bestSell,
        profit: Number(watchData.arbitrage.profit),
        roi: Number(watchData.arbitrage.roi)
      },
      premiumData: watchData.premiumData ? {
        historicalPrices: watchData.premiumData.historicalPrices || [],
        marketDepth: watchData.premiumData.marketDepth || [],
        salesVelocity: watchData.premiumData.salesVelocity || 0,
        dealerPremium: watchData.premiumData.dealerPremium || 0,
        confidence: watchData.premiumData.confidence || 0
      } : undefined
    };
  } catch (error) {
    console.error('Error in fetchWatchWithPremiumData:', error);
    // Fall back to mock data in case of any error
    const mockWatch = mockWatches.find(w => String(w.id) === watchId);
    if (mockWatch) {
      return {
        ...mockWatch,
        premiumData: {
          historicalPrices: generateMockHistoricalPrices(),
          marketDepth: generateMockMarketDepth(),
          salesVelocity: Math.random() * 10,
          dealerPremium: Math.random() * 15,
          confidence: Math.random() * 0.9 + 0.1
        }
      };
    }
    return null;
  }
};

export const triggerDataFetch = async (testMode: boolean = false, debug: boolean = false): Promise<boolean> => {
  try {
    if (testMode) {
      // In test mode, just simulate a successful data fetch
      console.log('Test mode: Simulating successful data fetch');
      return true;
    }
    
    const { data, error } = await supabase.functions.invoke('fetch-watch-data', {
      body: { testMode, debug }
    });
    
    if (error) {
      console.error('Error triggering data fetch:', error);
      return false;
    }
    
    console.log('Data fetch response:', data);
    return data?.success;
  } catch (error) {
    console.error('Error in triggerDataFetch:', error);
    return false;
  }
};

// Function to verify API connection and log the response
export const verifyWatchChartsAPI = async (testMode: boolean = false, debug: boolean = false): Promise<{
  success: boolean, 
  message: string, 
  count?: number,
  test?: boolean,
  details?: string
}> => {
  try {
    if (testMode) {
      // In test mode, return a simulated success response
      return { 
        success: true, 
        message: 'Test mode: API connection simulated successfully', 
        test: true,
        count: mockWatches.length
      };
    }
    
    const { data, error } = await supabase.functions.invoke('fetch-watch-data', {
      body: { testMode, debug }
    });
    
    if (error) {
      console.error('Error verifying Watch Charts API:', error);
      return { success: false, message: `Error: ${error.message}` };
    }
    
    return { 
      success: data?.success, 
      message: data?.message || 'Unknown response', 
      count: data?.count,
      test: data?.test,
      details: data?.details
    };
  } catch (error) {
    console.error('Error in verifyWatchChartsAPI:', error);
    return { success: false, message: `Exception: ${error instanceof Error ? error.message : String(error)}` };
  }
};

// Helper functions to generate mock premium data
function generateMockHistoricalPrices() {
  const prices = [];
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    const date = new Date(now);
    date.setMonth(now.getMonth() - i);
    prices.push({
      date: date.toISOString(),
      price: Math.floor(10000 + Math.random() * 5000)
    });
  }
  return prices.reverse();
}

function generateMockMarketDepth() {
  return [
    { type: 'ask', price: 15500, quantity: 3 },
    { type: 'ask', price: 15000, quantity: 5 },
    { type: 'ask', price: 14800, quantity: 2 },
    { type: 'ask', price: 14500, quantity: 8 },
    { type: 'bid', price: 14200, quantity: 4 },
    { type: 'bid', price: 14000, quantity: 7 },
    { type: 'bid', price: 13800, quantity: 3 },
    { type: 'bid', price: 13500, quantity: 6 }
  ];
}
