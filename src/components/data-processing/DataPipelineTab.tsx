
import { RefreshCw, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface DataPipelineTabProps {
  isPolling: boolean;
  lastUpdated: Date | null;
  error: string | null;
  startPolling: () => void;
  stopPolling: () => void;
  formatDateTime: (date: Date | null) => string;
}

const DataPipelineTab = ({ 
  isPolling, 
  lastUpdated, 
  error, 
  startPolling, 
  stopPolling,
  formatDateTime 
}: DataPipelineTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="border rounded-lg p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Data Collection System</h2>
            <div>
              {isPolling ? (
                <Button variant="destructive" size="sm" onClick={stopPolling}>
                  Stop Polling
                </Button>
              ) : (
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-watch-blue hover:bg-blue-600"
                  onClick={startPolling}
                >
                  Start Polling
                </Button>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="text-sm font-medium mb-2">Status</h3>
              <div className="flex items-center">
                {isPolling ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin text-green-500" />
                    <span className="text-green-600 font-medium">Active</span>
                  </>
                ) : (
                  <>
                    <span className="h-3 w-3 rounded-full bg-gray-400 mr-2"></span>
                    <span className="text-gray-600">Inactive</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="text-sm font-medium mb-2">Last Updated</h3>
              <p className="text-sm">{formatDateTime(lastUpdated)}</p>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 p-4 rounded-md flex items-start">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-red-800">Error</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>API Source</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Records</TableHead>
                <TableHead>Last Poll</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">WatchCharts API</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Connected
                  </Badge>
                </TableCell>
                <TableCell>8,452</TableCell>
                <TableCell>{isPolling ? '2 min ago' : 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">WatchAnalytics API</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Connected
                  </Badge>
                </TableCell>
                <TableCell>12,105</TableCell>
                <TableCell>{isPolling ? '4 min ago' : 'N/A'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      
      <div className="border rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold">Data Processing Stats</h2>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Database Storage</span>
              <span>1.2GB / 5GB</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-watch-blue" style={{ width: '24%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>API Quota Usage (Daily)</span>
              <span>63%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: '63%' }}></div>
            </div>
          </div>
          
          <div className="my-4 h-px bg-gray-200" />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted p-3 rounded-md text-center">
              <p className="text-2xl font-bold">10,204</p>
              <p className="text-xs text-muted-foreground">Watch Models</p>
            </div>
            <div className="bg-muted p-3 rounded-md text-center">
              <p className="text-2xl font-bold">1.2M</p>
              <p className="text-xs text-muted-foreground">Price Records</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted p-3 rounded-md text-center">
              <p className="text-2xl font-bold">4</p>
              <p className="text-xs text-muted-foreground">Markets</p>
            </div>
            <div className="bg-muted p-3 rounded-md text-center">
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-muted-foreground">Platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPipelineTab;
