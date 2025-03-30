
import { useState } from 'react';
import { RefreshCw, CheckCircle, AlertCircle, Bug, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { triggerDataFetch, verifyWatchChartsAPI } from '@/services/WatchDataService';
import { useToast } from '@/hooks/use-toast';

const DataFetcher = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [testMode, setTestMode] = useState(true); // Default to test mode for now
  const [debugMode, setDebugMode] = useState(false);
  const [lastFetchStatus, setLastFetchStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);
  const { toast } = useToast();

  const handleFetchData = async () => {
    setIsFetching(true);
    try {
      const success = await triggerDataFetch(testMode, debugMode);
      
      if (success) {
        setLastFetchStatus('success');
        setLastFetchTime(new Date());
        toast({
          title: testMode ? 'Test Data Updated' : 'Data Updated',
          description: `Watch market data has been successfully ${testMode ? 'simulated' : 'updated'}.`,
          variant: 'default',
        });
      } else {
        setLastFetchStatus('error');
        toast({
          title: 'Update Failed',
          description: 'Failed to update watch market data. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLastFetchStatus('error');
      toast({
        title: 'Update Failed',
        description: 'An unexpected error occurred while updating data.',
        variant: 'destructive',
      });
    } finally {
      setIsFetching(false);
    }
  };

  const formatTime = (date: Date | null) => {
    if (!date) return 'Never';
    return date.toLocaleTimeString();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-800">
      <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-semibold text-white">Market Data</h3>
        <p className="text-sm text-gray-400">
          Last updated: {formatTime(lastFetchTime)}
          {lastFetchStatus === 'success' && (
            <CheckCircle className="inline-block ml-2 h-4 w-4 text-green-500" />
          )}
          {lastFetchStatus === 'error' && (
            <AlertCircle className="inline-block ml-2 h-4 w-4 text-red-500" />
          )}
          {testMode && lastFetchStatus !== 'idle' && (
            <span className="ml-2 text-amber-500 text-xs">(Test Mode)</span>
          )}
          {debugMode && (
            <span className="ml-2 text-purple-500 text-xs">(Debug Mode)</span>
          )}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center space-x-2">
            <Switch
              id="data-test-mode"
              checked={testMode}
              onCheckedChange={setTestMode}
            />
            <Label htmlFor="data-test-mode" className="text-sm text-gray-300">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex items-center">
                    Test Mode <Info className="ml-1 h-3 w-3 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-60 text-xs">
                      Test mode uses mock data for development. 
                      Enable this while the API connection is being set up.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="data-debug-mode"
              checked={debugMode}
              onCheckedChange={setDebugMode}
            />
            <Label htmlFor="data-debug-mode" className="text-sm text-gray-300">
              <span className="flex items-center">
                Debug Mode <Bug className="ml-1 h-3 w-3" />
              </span>
            </Label>
          </div>
        </div>
        <Button
          onClick={handleFetchData}
          disabled={isFetching}
          className="bg-purple-600 hover:bg-purple-700"
        >
          {isFetching ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              {testMode ? 'Simulating...' : 'Updating...'}
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Update Market Data
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default DataFetcher;
