
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
