
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import { formatCurrency, formatPercent } from '@/utils/formatters';
import WatchlistCard from '@/components/dashboard/watchlist/WatchlistCard';
import EmptyWatchlist from '@/components/dashboard/watchlist/EmptyWatchlist';
import { WatchlistItem } from '@/types/watchlist';

// Mock watchlist data
const mockWatchlist: WatchlistItem[] = [
  {
    id: 1,
    brand: 'Rolex',
    model: 'Submariner',
    reference: '124060',
    currentPrice: 13500,
    priceChangePercent: 2.5,
    alertEnabled: true,
    alertPrice: 12000,
    chart: [
      { date: '2023-01', price: 13000 },
      { date: '2023-02', price: 13100 },
      { date: '2023-03', price: 13250 },
      { date: '2023-04', price: 13350 },
      { date: '2023-05', price: 13500 }
    ]
  },
  {
    id: 2,
    brand: 'Omega',
    model: 'Speedmaster',
    reference: '310.30.42.50.01.001',
    currentPrice: 6800,
    priceChangePercent: -1.2,
    alertEnabled: false,
    alertPrice: 6500,
    chart: [
      { date: '2023-01', price: 7100 },
      { date: '2023-02', price: 7000 },
      { date: '2023-03', price: 6950 },
      { date: '2023-04', price: 6850 },
      { date: '2023-05', price: 6800 }
    ]
  }
];

const WatchList = () => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(mockWatchlist);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWatchlist = watchlist.filter(watch => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      watch.brand.toLowerCase().includes(searchTerm) ||
      watch.model.toLowerCase().includes(searchTerm) ||
      watch.reference.toLowerCase().includes(searchTerm)
    );
  });

  const handleToggleAlert = (id: number) => {
    setWatchlist(prevList => 
      prevList.map(watch => 
        watch.id === id 
          ? { ...watch, alertEnabled: !watch.alertEnabled } 
          : watch
      )
    );
  };

  const handleRemoveFromWatchlist = (id: number) => {
    setWatchlist(prevList => prevList.filter(watch => watch.id !== id));
  };

  return (
    <div className="relative min-h-screen">
      {/* Luxury watch background with overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury watch collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">My Watch List</h1>
          <Button className="bg-watch-blue hover:bg-blue-600">
            <Plus className="mr-2 h-4 w-4" />
            Add Watch
          </Button>
        </div>

        {watchlist.length > 0 ? (
          <>
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 bg-black/50 border-gray-700 text-white placeholder:text-gray-400"
                placeholder="Search your watchlist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWatchlist.map(watch => (
                <WatchlistCard
                  key={watch.id}
                  watch={watch}
                  formatCurrency={formatCurrency}
                  onToggleAlert={handleToggleAlert}
                  onRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyWatchlist />
        )}
      </div>
    </div>
  );
};

export default WatchList;
