
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
    const { data, error } = await supabase.rpc('get_watch_with_data', {
      watch_id: watchId 
    });

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
    const { data, error } = await supabase.functions.invoke('fetch-watch-data', {
      body: { apiKey: 'itHHiAqB6pa0DHn6mAvnJ5cwVgJZCpkK2zZG3HHf' }
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
export const verifyWatchChartsAPI = async (): Promise<{success: boolean, message: string, count?: number}> => {
  try {
    const { data, error } = await supabase.functions.invoke('fetch-watch-data', {
      body: { apiKey: 'itHHiAqB6pa0DHn6mAvnJ5cwVgJZCpkK2zZG3HHf' }
    });
    
    if (error) {
      console.error('Error verifying Watch Charts API:', error);
      return { success: false, message: `Error: ${error.message}` };
    }
    
    return { 
      success: data?.success, 
      message: data?.message || 'Unknown response', 
      count: data?.count 
    };
  } catch (error) {
    console.error('Error in verifyWatchChartsAPI:', error);
    return { success: false, message: `Exception: ${error instanceof Error ? error.message : String(error)}` };
  }
};

// Create a new component to test and display API connection status
<lov-write file_path="src/components/dashboard/ApiConnectionStatus.tsx">
import { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { verifyWatchChartsAPI } from '@/services/WatchDataService';
import { useToast } from '@/hooks/use-toast';

const ApiConnectionStatus = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{
    checked: boolean;
    success: boolean;
    message: string;
    count?: number;
  }>({
    checked: false,
    success: false,
    message: 'Not checked yet'
  });
  const { toast } = useToast();

  const checkApiConnection = async () => {
    setIsChecking(true);
    try {
      const result = await verifyWatchChartsAPI();
      setConnectionStatus({
        checked: true,
        success: result.success,
        message: result.message,
        count: result.count
      });
      
      if (result.success) {
        toast({
          title: 'API Connection Successful',
          description: `Successfully connected to Watch Charts API. Retrieved data for ${result.count || 0} watches.`,
          variant: 'default',
        });
      } else {
        toast({
          title: 'API Connection Failed',
          description: result.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error checking API connection:', error);
      setConnectionStatus({
        checked: true,
        success: false,
        message: `Error: ${error instanceof Error ? error.message : String(error)}`
      });
      toast({
        title: 'API Connection Error',
        description: `An unexpected error occurred: ${error instanceof Error ? error.message : String(error)}`,
        variant: 'destructive',
      });
    } finally {
      setIsChecking(false);
    }
  };

  // Check API connection on component mount
  useEffect(() => {
    checkApiConnection();
  }, []);

  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>Watch Charts API Status</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={checkApiConnection}
            disabled={isChecking}
          >
            {isChecking ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            <span className="ml-2">Refresh</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            {connectionStatus.checked ? (
              connectionStatus.success ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )
            ) : (
              <div className="h-5 w-5 rounded-full border-2 border-gray-300 border-t-transparent animate-spin" />
            )}
          </div>
          <div>
            <p className={`font-medium ${connectionStatus.success ? 'text-green-600' : 'text-red-600'}`}>
              {connectionStatus.checked ? (connectionStatus.success ? 'Connected' : 'Connection Failed') : 'Checking...'}
            </p>
            <p className="text-sm text-muted-foreground">{connectionStatus.message}</p>
            {connectionStatus.success && connectionStatus.count !== undefined && (
              <p className="text-sm mt-1">Retrieved data for <span className="font-semibold">{connectionStatus.count}</span> watches</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiConnectionStatus;
