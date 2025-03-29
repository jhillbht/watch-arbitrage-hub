
import { useState } from 'react';
import { RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { triggerDataFetch } from '@/services/WatchDataService';
import { useToast } from '@/hooks/use-toast';

const DataFetcher = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [lastFetchStatus, setLastFetchStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);
  const { toast } = useToast();

  const handleFetchData = async () => {
    setIsFetching(true);
    try {
      const success = await triggerDataFetch();
      
      if (success) {
        setLastFetchStatus('success');
        setLastFetchTime(new Date());
        toast({
          title: 'Data Updated',
          description: 'Watch market data has been successfully updated.',
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
        </p>
      </div>
      <Button
        onClick={handleFetchData}
        disabled={isFetching}
        className="bg-watch-blue hover:bg-blue-700"
      >
        {isFetching ? (
          <>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Updating...
          </>
        ) : (
          <>
            <RefreshCw className="mr-2 h-4 w-4" />
            Update Market Data
          </>
        )}
      </Button>
    </div>
  );
};

export default DataFetcher;
