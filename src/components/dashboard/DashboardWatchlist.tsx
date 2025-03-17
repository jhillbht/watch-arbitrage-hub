
import { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip as RechartsTooltip, ResponsiveContainer
} from 'recharts';
import { Plus, X, Bell, BellOff, ArrowUpRight, ArrowDownRight, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Mock data for watchlist items
const watchlistItems = [
  {
    id: 1,
    brand: 'Rolex',
    model: 'Daytona',
    reference: '116500LN',
    currentPrice: 35000,
    priceChangePercent: -3.1,
    alertEnabled: true,
    alertPrice: 32000,
    chart: [
      { date: 'Jan', price: 39000 },
      { date: 'Feb', price: 38500 },
      { date: 'Mar', price: 37000 },
      { date: 'Apr', price: 36000 },
      { date: 'May', price: 35500 },
      { date: 'Jun', price: 35000 },
    ]
  },
  {
    id: 2,
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    currentPrice: 132000,
    priceChangePercent: -5.7,
    alertEnabled: false,
    alertPrice: 120000,
    chart: [
      { date: 'Jan', price: 150000 },
      { date: 'Feb', price: 146000 },
      { date: 'Mar', price: 142000 },
      { date: 'Apr', price: 138000 },
      { date: 'May', price: 135000 },
      { date: 'Jun', price: 132000 },
    ]
  },
  {
    id: 3,
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST.OO.1220ST.01',
    currentPrice: 42000,
    priceChangePercent: -1.2,
    alertEnabled: true,
    alertPrice: 40000,
    chart: [
      { date: 'Jan', price: 43500 },
      { date: 'Feb', price: 43000 },
      { date: 'Mar', price: 42800 },
      { date: 'Apr', price: 42500 },
      { date: 'May', price: 42200 },
      { date: 'Jun', price: 42000 },
    ]
  },
  {
    id: 4,
    brand: 'Omega',
    model: 'Speedmaster Moonwatch',
    reference: '310.30.42.50.01.001',
    currentPrice: 7200,
    priceChangePercent: 0.8,
    alertEnabled: false,
    alertPrice: 7000,
    chart: [
      { date: 'Jan', price: 7000 },
      { date: 'Feb', price: 7050 },
      { date: 'Mar', price: 7100 },
      { date: 'Apr', price: 7150 },
      { date: 'May', price: 7180 },
      { date: 'Jun', price: 7200 },
    ]
  }
];

const DashboardWatchlist = () => {
  const [watchlist, setWatchlist] = useState(watchlistItems);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const toggleAlert = (id: number) => {
    setWatchlist(watchlist.map(item => 
      item.id === id ? { ...item, alertEnabled: !item.alertEnabled } : item
    ));
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist(watchlist.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">My Watchlist</h2>
        <Button className="bg-watch-blue hover:bg-blue-600">
          <Plus className="mr-2 h-4 w-4" /> Add Watch
        </Button>
      </div>

      {watchlist.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground mb-4">Your watchlist is empty</p>
            <Button className="bg-watch-blue hover:bg-blue-600">
              <Plus className="mr-2 h-4 w-4" /> Add Your First Watch
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {watchlist.map((watch) => (
            <Card key={watch.id} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div>
                  <CardTitle className="text-lg">{watch.brand} {watch.model}</CardTitle>
                  <CardDescription>Ref. {watch.reference}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => toggleAlert(watch.id)}
                        >
                          {watch.alertEnabled ? (
                            <Bell className="h-4 w-4 text-watch-blue" />
                          ) : (
                            <BellOff className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {watch.alertEnabled ? 'Disable price alert' : 'Enable price alert'}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit alert price</DropdownMenuItem>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-red-600"
                        onClick={() => removeFromWatchlist(watch.id)}
                      >
                        Remove from watchlist
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[150px] mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={watch.chart}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" fontSize={12} />
                      <YAxis
                        domain={['dataMin - 1000', 'dataMax + 1000']}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                        fontSize={12}
                      />
                      <RechartsTooltip
                        formatter={(value) => [formatCurrency(Number(value)), 'Price']}
                      />
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke={watch.priceChangePercent >= 0 ? '#16a34a' : '#dc2626'}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="text-lg font-semibold">{formatCurrency(watch.currentPrice)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">30-Day Change</p>
                    <p className="text-lg font-semibold flex items-center">
                      {watch.priceChangePercent >= 0 ? (
                        <>
                          <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-green-600">+{watch.priceChangePercent}%</span>
                        </>
                      ) : (
                        <>
                          <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                          <span className="text-red-600">{watch.priceChangePercent}%</span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
                
                {watch.alertEnabled && (
                  <div className="mt-4 p-3 bg-muted rounded-md flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Price Alert</p>
                      <p className="text-sm text-muted-foreground">
                        Alert when price falls below {formatCurrency(watch.alertPrice)}
                      </p>
                    </div>
                    <Switch checked={watch.alertEnabled} onCheckedChange={() => toggleAlert(watch.id)} />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardWatchlist;
