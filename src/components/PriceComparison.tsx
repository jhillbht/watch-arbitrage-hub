
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockWatches } from '@/data/mockWatches';
import ComparisonFilters from './comparison/ComparisonFilters';
import WatchListingTable from './comparison/WatchListingTable';

const PriceComparison = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredWatches = mockWatches.filter(watch => 
    watch.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    watch.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    watch.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-16 px-6" id="comparison">
      {/* Luxury watch background with overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?auto=format&fit=crop&q=80" 
          alt="Luxury watches" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Global Price Comparison</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Identify the best market to buy and sell luxury watches with our real-time pricing data across global regions.
          </p>
        </div>
        
        <ComparisonFilters 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <WatchListingTable watches={filteredWatches} />
        
        <div className="mt-8 text-center">
          <Button className="bg-watch-blue hover:bg-blue-600 text-white">
            View Full Market Analysis <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
