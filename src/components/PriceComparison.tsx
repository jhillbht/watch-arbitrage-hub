
import { useState } from 'react';
import { Search, RefreshCw, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockWatches = [
  {
    id: 1,
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    image: 'https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-4.0.3',
    prices: {
      us: 14500,
      eu: 13800,
      uk: 12900,
      jp: 13100,
      hk: 13400
    },
    arbitrage: {
      bestBuy: 'uk',
      bestSell: 'us',
      profit: 1600,
      roi: 12.4
    }
  },
  {
    id: 2,
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3',
    prices: {
      us: 142750,
      eu: 139000,
      uk: 136500,
      jp: 145000,
      hk: 140500
    },
    arbitrage: {
      bestBuy: 'uk',
      bestSell: 'jp',
      profit: 8500,
      roi: 6.2
    }
  },
  {
    id: 3,
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST.OO.1220ST.01',
    image: 'https://images.unsplash.com/photo-1617714651073-337e5f08a6c7?ixlib=rb-4.0.3',
    prices: {
      us: 79300,
      eu: 75500,
      uk: 72900,
      jp: 76800,
      hk: 74200
    },
    arbitrage: {
      bestBuy: 'uk',
      bestSell: 'us',
      profit: 6400,
      roi: 8.8
    }
  }
];

const regionNames = {
  us: 'United States',
  eu: 'Europe',
  uk: 'United Kingdom',
  jp: 'Japan',
  hk: 'Hong Kong'
};

const PriceComparison = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const filteredWatches = mockWatches.filter(watch => 
    watch.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    watch.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    watch.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-6" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Price Comparison</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identify the best market to buy and sell luxury watches with our real-time pricing data across global regions.
          </p>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="all">All Models</TabsTrigger>
              <TabsTrigger value="rolex">Rolex</TabsTrigger>
              <TabsTrigger value="patek">Patek Philippe</TabsTrigger>
              <TabsTrigger value="ap">Audemars Piguet</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by brand, model or reference..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Button variant="outline" size="sm" className="whitespace-nowrap hidden md:flex">
            <RefreshCw className="mr-2 h-4 w-4" /> Update Prices
          </Button>
        </div>
        
        <div className="overflow-auto pb-4">
          <table className="w-full min-w-[900px] bg-white rounded-xl overflow-hidden shadow-soft">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-medium text-gray-600">Watch</th>
                <th className="text-center p-4 font-medium text-gray-600">
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-1" /> US
                  </div>
                </th>
                <th className="text-center p-4 font-medium text-gray-600">
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-1" /> EU
                  </div>
                </th>
                <th className="text-center p-4 font-medium text-gray-600">
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-1" /> UK
                  </div>
                </th>
                <th className="text-center p-4 font-medium text-gray-600">
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-1" /> JP
                  </div>
                </th>
                <th className="text-center p-4 font-medium text-gray-600">
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-1" /> HK
                  </div>
                </th>
                <th className="text-center p-4 font-medium text-gray-600">Arbitrage</th>
              </tr>
            </thead>
            <tbody>
              {filteredWatches.map((watch) => (
                <tr key={watch.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={watch.image} 
                          alt={`${watch.brand} ${watch.model}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{watch.brand} {watch.model}</div>
                        <div className="text-sm text-gray-500">{watch.reference}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`font-medium ${watch.arbitrage.bestSell === 'us' ? 'text-green-600' : ''}`}>
                      {formatCurrency(watch.prices.us)}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`font-medium ${watch.arbitrage.bestSell === 'eu' ? 'text-green-600' : ''}`}>
                      {formatCurrency(watch.prices.eu)}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`font-medium ${watch.arbitrage.bestSell === 'uk' ? 'text-green-600' : ''}`}>
                      {formatCurrency(watch.prices.uk)}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`font-medium ${watch.arbitrage.bestSell === 'jp' ? 'text-green-600' : ''}`}>
                      {formatCurrency(watch.prices.jp)}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className={`font-medium ${watch.arbitrage.bestSell === 'hk' ? 'text-green-600' : ''}`}>
                      {formatCurrency(watch.prices.hk)}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="bg-watch-lightBlue rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600">Best Arbitrage</div>
                        <div className="font-medium text-watch-blue">{formatCurrency(watch.arbitrage.profit)}</div>
                        <div className="text-xs text-gray-600">
                          Buy: {regionNames[watch.arbitrage.bestBuy as keyof typeof regionNames]} → Sell: {regionNames[watch.arbitrage.bestSell as keyof typeof regionNames]}
                        </div>
                        <div className="text-xs font-medium text-green-600">ROI: {watch.arbitrage.roi}%</div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
          <Button className="button-premium">
            View Full Market Analysis <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
