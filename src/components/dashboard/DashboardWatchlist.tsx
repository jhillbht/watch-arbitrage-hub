
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmptyWatchlist from './watchlist/EmptyWatchlist';
import WatchlistCard from './watchlist/WatchlistCard';
import { WatchlistItem } from '@/types/watchlist';

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
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(watchlistItems);

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
        <EmptyWatchlist />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {watchlist.map((watch) => (
            <WatchlistCard
              key={watch.id}
              watch={watch}
              formatCurrency={formatCurrency}
              onToggleAlert={toggleAlert}
              onRemoveFromWatchlist={removeFromWatchlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardWatchlist;
