
import { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle, AlertCircle, ExternalLink, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { verifyWatchChartsAPI } from '@/services/WatchDataService';
import { useToast } from '@/hooks/use-toast';

const ApiConnectionStatus = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [testMode, setTestMode] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{
    checked: boolean;
    success: boolean;
    message: string;
    count?: number;
    test?: boolean;
  }>({
    checked: false,
    success: false,
    message: 'Not checked yet'
  });
  const { toast } = useToast();

  const checkApiConnection = async () => {
    setIsChecking(true);
    try {
      const result = await verifyWatchChartsAPI(testMode);
      setConnectionStatus({
        checked: true,
        success: result.success,
        message: result.message,
        count: result.count,
        test: result.test
      });
      
      if (result.success) {
        toast({
          title: result.test ? 'Test Connection Successful' : 'API Connection Successful',
          description: `${result.test ? 'Test mode: ' : ''}${result.message}. Retrieved data for ${result.count || 0} watches.`,
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
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="test-mode"
                checked={testMode}
                onCheckedChange={setTestMode}
                size="sm"
              />
              <Label htmlFor="test-mode" className="text-sm">Test Mode</Label>
            </div>
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
          </div>
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
              {connectionStatus.test && (
                <span className="ml-2 text-amber-500 text-xs font-normal">(Test Mode)</span>
              )}
            </p>
            <p className="text-sm text-muted-foreground">{connectionStatus.message}</p>
            {connectionStatus.success && connectionStatus.count !== undefined && (
              <p className="text-sm mt-1">Retrieved data for <span className="font-semibold">{connectionStatus.count}</span> watches</p>
            )}
            
            {!connectionStatus.success && !connectionStatus.test && (
              <div className="mt-2 text-xs text-amber-500 flex items-center">
                <Gift className="h-3 w-3 mr-1" />
                <span>
                  To use a working API, you need to <a href="https://watchcharts.com/developers" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline inline-flex items-center">
                    sign up for a Watch Charts API key <ExternalLink className="h-3 w-3 ml-0.5" />
                  </a>
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiConnectionStatus;
