
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RefreshCw, AlertTriangle, Zap, Calculator, Bell } from 'lucide-react';
import { useDataCollection, useArbitrageAnalysis } from '@/services/DataProcessingService';
import ArbitrageOpportunityCard from '@/components/dashboard/ArbitrageOpportunityCard';
import PremiumPricingCalculator from '@/components/dashboard/PremiumPricingCalculator';
import PriceAlertForm from '@/components/dashboard/PriceAlertForm';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

// Mock watch data for demonstration
const mockWatches = [
  {
    id: 'rolex-submariner-date',
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    currentPrice: 14800,
    imageUrl: 'https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-4.0.3'
  },
  {
    id: 'patek-philippe-nautilus',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    currentPrice: 150000,
    imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3'
  }
];

const DataProcessing = () => {
  const { isPolling, lastUpdated, error, startPolling, stopPolling } = useDataCollection();
  const { opportunities, isAnalyzing, analyzeArbitrageOpportunities } = useArbitrageAnalysis();
  const [activeTab, setActiveTab] = useState('pipeline');
  
  const formatDateTime = (date: Date | null) => {
    if (!date) return 'Never';
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Data Processing Pipeline</h1>
        <p className="text-muted-foreground max-w-3xl">
          WatchArbitrage Pro's data pipeline collects, processes, and analyzes watch market data to identify arbitrage opportunities and provide pricing insights.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="pipeline">Data Pipeline</TabsTrigger>
          <TabsTrigger value="arbitrage">Arbitrage Analysis</TabsTrigger>
          <TabsTrigger value="pricing">Premium Pricing</TabsTrigger>
          <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
        </TabsList>
        
        {/* Data Pipeline Tab */}
        <TabsContent value="pipeline" className="space-y-6">
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
                
                <Separator className="my-4" />
                
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
        </TabsContent>
        
        {/* Arbitrage Analysis Tab */}
        <TabsContent value="arbitrage" className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Arbitrage Analysis Engine</h2>
            <Button 
              onClick={() => analyzeArbitrageOpportunities([], [])} 
              disabled={isAnalyzing}
              className="bg-watch-blue hover:bg-blue-600"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Find Opportunities
                </>
              )}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArbitrageOpportunityCard 
              opportunity={{
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
              }}
              watchDetails={{
                brand: 'Rolex',
                model: 'Submariner Date',
                reference: '126610LN',
                imageUrl: 'https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-4.0.3'
              }}
            />
            
            <ArbitrageOpportunityCard 
              opportunity={{
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
              }}
              watchDetails={{
                brand: 'Patek Philippe',
                model: 'Nautilus',
                reference: '5711/1A-010',
                imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3'
              }}
            />
          </div>
        </TabsContent>
        
        {/* Premium Pricing Calculator Tab */}
        <TabsContent value="pricing" className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Premium Pricing Calculator Engine</h2>
            <Badge variant="secondary">
              <Calculator className="mr-1 h-3 w-3" />
              Premium Feature
            </Badge>
          </div>
          
          <PremiumPricingCalculator />
        </TabsContent>
        
        {/* Price Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Price Alert System</h2>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Bell className="mr-1 h-3 w-3" />
              8 Active Alerts
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockWatches.map(watch => (
              <PriceAlertForm
                key={watch.id}
                watchId={watch.id}
                watchBrand={watch.brand}
                watchModel={watch.model}
                currentPrice={watch.currentPrice}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataProcessing;
