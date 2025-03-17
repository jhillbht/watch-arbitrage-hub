
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
    <section className="py-16 px-6" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Price Comparison</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identify the best market to buy and sell luxury watches with our real-time pricing data across global regions.
          </p>
        </div>
        
        <ComparisonFilters 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <WatchListingTable watches={filteredWatches} />
        
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
