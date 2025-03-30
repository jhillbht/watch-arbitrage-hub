import { useState } from 'react';
import { Search, Filter, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import PriceTrendChart from './pricing-calculator/PriceTrendChart';

// Mock data
const historicalPriceData = [
  { date: 'Jan 2023', value: 32000 },
  { date: 'Feb 2023', value: 34000 },
  { date: 'Mar 2023', value: 38000 },
  { date: 'Apr 2023', value: 41000 },
  { date: 'May 2023', value: 40000 },
  { date: 'Jun 2023', value: 42000 },
  { date: 'Jul 2023', value: 45000 },
  { date: 'Aug 2023', value: 49000 },
  { date: 'Sep 2023', value: 48000 },
  { date: 'Oct 2023', value: 51000 },
  { date: 'Nov 2023', value: 54000 },
  { date: 'Dec 2023', value: 59000 },
  { date: 'Jan 2024', value: 62000 },
  { date: 'Feb 2024', value: 65000 },
  { date: 'Mar 2024', value: 68000 },
  { date: 'Apr 2024', value: 67000 },
];

const watchData = [
  { 
    id: 1,
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    retailPrice: 10100,
    marketPrice: 15500,
    premium: 53.5,
    trend: 'up',
    trendValue: 2.3
  },
  { 
    id: 2,
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    retailPrice: 35000,
    marketPrice: 132000,
    premium: 277.1,
    trend: 'down',
    trendValue: 5.7
  },
  { 
    id: 3,
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST.OO.1220ST.01',
    retailPrice: 25000,
    marketPrice: 42000,
    premium: 68.0,
    trend: 'down',
    trendValue: 1.2
  },
  { 
    id: 4,
    brand: 'Omega',
    model: 'Speedmaster Moonwatch',
    reference: '310.30.42.50.01.001',
    retailPrice: 6400,
    marketPrice: 7200,
    premium: 12.5,
    trend: 'up',
    trendValue: 0.8
  },
  { 
    id: 5,
    brand: 'Rolex',
    model: 'Daytona',
    reference: '116500LN',
    retailPrice: 14550,
    marketPrice: 35000,
    premium: 140.5,
    trend: 'down',
    trendValue: 3.1
  },
];

const marketComparison = [
  { platform: 'Chrono24', price: 15800, location: 'Global' },
  { platform: 'WatchBox', price: 15200, location: 'US' },
  { platform: 'Bob\'s Watches', price: 15700, location: 'US' },
  { platform: 'Watchfinder', price: 16100, location: 'UK' },
  { platform: 'Crown & Caliber', price: 15400, location: 'US' },
];

const DashboardMarketData = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWatch, setSelectedWatch] = useState(watchData[0]);
  const [timeRange, setTimeRange] = useState('1Y');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleWatchSelect = (watch: typeof watchData[0]) => {
    setSelectedWatch(watch);
  };

  // Format historical data for the chart
  const chartData = historicalPriceData.map(item => ({
    date: item.date,
    price: item.value
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Market Data</h2>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search watches, references..."
              className="w-full pl-9 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{selectedWatch.brand} {selectedWatch.model}</span>
              <Badge variant="outline" className="ml-2">Ref. {selectedWatch.reference}</Badge>
            </CardTitle>
            <CardDescription>
              Market price over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="1Y" className="mb-4">
              <TabsList>
                <TabsTrigger value="1M" onClick={() => setTimeRange('1M')}>1M</TabsTrigger>
                <TabsTrigger value="3M" onClick={() => setTimeRange('3M')}>3M</TabsTrigger>
                <TabsTrigger value="6M" onClick={() => setTimeRange('6M')}>6M</TabsTrigger>
                <TabsTrigger value="1Y" onClick={() => setTimeRange('1Y')}>1Y</TabsTrigger>
                <TabsTrigger value="ALL" onClick={() => setTimeRange('ALL')}>All</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {/* Use our shared PriceTrendChart component */}
            <PriceTrendChart 
              data={chartData}
              height="300px"
              showReferenceLine={false}
            />
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Data sourced from WatchCharts API and market aggregators
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
            <CardDescription>
              Current market data for {selectedWatch.brand} {selectedWatch.model}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Retail Price</p>
                <p className="text-xl font-semibold">{formatCurrency(selectedWatch.retailPrice)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Market Price</p>
                <p className="text-xl font-semibold">{formatCurrency(selectedWatch.marketPrice)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Premium</p>
                <p className="text-xl font-semibold">{selectedWatch.premium}%</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <p className="text-sm text-muted-foreground">30-Day Trend</p>
                  <TooltipProvider>
                    <UITooltip>
                      <TooltipTrigger>
                        <Info className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Price movement over the last 30 days</p>
                      </TooltipContent>
                    </UITooltip>
                  </TooltipProvider>
                </div>
                <p className="text-xl font-semibold flex items-center">
                  {selectedWatch.trend === 'up' ? (
                    <>
                      <ArrowUpRight className="h-5 w-5 text-green-500 mr-1" />
                      <span className="text-green-600">+{selectedWatch.trendValue}%</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="h-5 w-5 text-red-500 mr-1" />
                      <span className="text-red-600">-{selectedWatch.trendValue}%</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">Market Comparison</h4>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Platform</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {marketComparison.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.platform}</TableCell>
                        <TableCell>{formatCurrency(item.price)}</TableCell>
                        <TableCell>{item.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Watch Database</CardTitle>
          <CardDescription>
            Search and compare luxury watches across the market
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead className="text-right">Retail Price</TableHead>
                <TableHead className="text-right">Market Price</TableHead>
                <TableHead className="text-right">Premium</TableHead>
                <TableHead className="text-right">30d Trend</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {watchData.map((watch) => (
                <TableRow key={watch.id} className={selectedWatch.id === watch.id ? 'bg-muted' : ''}>
                  <TableCell className="font-medium">{watch.brand}</TableCell>
                  <TableCell>{watch.model}</TableCell>
                  <TableCell>{watch.reference}</TableCell>
                  <TableCell className="text-right">{formatCurrency(watch.retailPrice)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(watch.marketPrice)}</TableCell>
                  <TableCell className="text-right">{watch.premium}%</TableCell>
                  <TableCell className="text-right">
                    <span className={`flex items-center justify-end ${watch.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {watch.trend === 'up' ? (
                        <>
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          +{watch.trendValue}%
                        </>
                      ) : (
                        <>
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                          -{watch.trendValue}%
                        </>
                      )}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleWatchSelect(watch)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardMarketData;
