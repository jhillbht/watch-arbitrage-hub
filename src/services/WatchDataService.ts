
import { supabase } from "@/integrations/supabase/client";
import { Watch } from "@/types/watch";

export const fetchWatches = async (): Promise<Watch[]> => {
  try {
    // Fetch watches with their prices and arbitrage data
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
      throw error;
    }

    if (!data) {
      return [];
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
        id: Number(item.id.substring(0, 8), 16), // Use part of UUID as numeric ID
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
    throw error;
  }
};

export const fetchWatchWithPremiumData = async (watchId: string): Promise<Watch | null> => {
  try {
    // Use the database function to get all watch data including premium data
    const { data, error } = await supabase
      .rpc('get_watch_with_data', { watch_id: watchId });

    if (error) {
      console.error('Error fetching watch with premium data:', error);
      throw error;
    }

    if (!data) {
      return null;
    }

    // Cast data to appropriate type and process it
    const watchData = data as any;

    // Transform the data into the Watch type with correct type assertions
    return {
      id: Number(watchData.id.substring(0, 8), 16), // Use part of UUID as numeric ID
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
    return null;
  }
};

export const triggerDataFetch = async (): Promise<boolean> => {
  try {
    const { data, error } = await supabase.functions.invoke('fetch-watch-data');
    
    if (error) {
      console.error('Error triggering data fetch:', error);
      return false;
    }
    
    return data?.success;
  } catch (error) {
    console.error('Error in triggerDataFetch:', error);
    return false;
  }
};
