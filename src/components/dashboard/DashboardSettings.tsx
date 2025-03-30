
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, User, Key, RefreshCw, Bug, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { triggerDataFetch } from "@/services/WatchDataService";
import { useToast } from "@/hooks/use-toast";
import ApiConnectionStatus from "./ApiConnectionStatus";

const DashboardSettings = () => {
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Account Settings</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="mr-2 h-5 w-5 text-blue-500" />
              API Connections
            </CardTitle>
            <CardDescription>
              Configure and check the status of external API connections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ApiConnectionStatus />
            
            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-semibold mb-4">Market Data Fetch Settings</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 rounded-lg border border-slate-800 p-4">
                  <div>
                    <h4 className="text-base font-medium text-white mb-1">Data Fetching Options</h4>
                    <p className="text-sm text-gray-400">
                      Last updated: {formatTime(lastFetchTime)}
                      {lastFetchStatus === 'success' && (
                        <span className="ml-2 text-green-500 text-xs">Success</span>
                      )}
                      {lastFetchStatus === 'error' && (
                        <span className="ml-2 text-red-500 text-xs">Failed</span>
                      )}
                      {testMode && lastFetchStatus !== 'idle' && (
                        <span className="ml-2 text-amber-500 text-xs">(Test Mode)</span>
                      )}
                      {debugMode && (
                        <span className="ml-2 text-purple-500 text-xs">(Debug Mode)</span>
                      )}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                      <div className="flex items-center space-x-2 w-full sm:w-auto">
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
                      <div className="flex items-center space-x-2 w-full sm:w-auto">
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
                      className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
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
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5 text-blue-500" />
              User Profile
            </CardTitle>
            <CardDescription>
              Manage your personal information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Profile settings will be available in a future update.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5 text-blue-500" />
              Application Settings
            </CardTitle>
            <CardDescription>
              Configure application-wide settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Application settings will be available in a future update.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSettings;
