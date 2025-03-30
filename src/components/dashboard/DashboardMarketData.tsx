
import { useState, useEffect } from 'react';
import { formatCurrency } from '@/utils/formatters';
import MarketDataHeader from './market-data/MarketDataHeader';
import MarketOverview from './market-data/MarketOverview';
import WatchPriceTrend from './market-data/WatchPriceTrend';
import WatchDatabaseTable from './market-data/WatchDatabaseTable';
import { watchData, historicalPriceData, marketComparison } from './market-data/mockMarketData';
import { useToast } from '@/components/ui/use-toast';

interface DashboardMarketDataProps {
  initialBrand?: string | null;
  initialModel?: string | null;
}

const DashboardMarketData = ({ initialBrand, initialModel }: DashboardMarketDataProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWatch, setSelectedWatch] = useState(watchData[0]);
  const { toast } = useToast();

  // Format historical data for the chart
  const chartData = historicalPriceData.map(item => ({
    date: item.date,
    price: item.value
  }));
  
  // Find the watch in the data that matches the brand and model
  useEffect(() => {
    if (initialBrand && initialModel) {
      const matchingWatch = watchData.find(
        watch => 
          watch.brand.toLowerCase() === initialBrand.toLowerCase() && 
          watch.model.toLowerCase() === initialModel.toLowerCase()
      );
      
      if (matchingWatch) {
        setSelectedWatch(matchingWatch);
        toast({
          title: "Watch Selected",
          description: `Viewing data for ${matchingWatch.brand} ${matchingWatch.model}`,
        });
      } else {
        console.log(`No match found for ${initialBrand} ${initialModel}`);
        // Could show a toast notification that the requested watch wasn't found
        toast({
          title: "Watch Not Found",
          description: `Data for ${initialBrand} ${initialModel} is not available`,
          variant: "destructive",
        });
      }
    }
  }, [initialBrand, initialModel, toast]);

  return (
    <div className="space-y-6">
      <MarketDataHeader 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <WatchPriceTrend 
          selectedWatch={selectedWatch}
          chartData={chartData}
        />

        <MarketOverview 
          selectedWatch={selectedWatch}
          marketComparison={marketComparison}
          formatCurrency={formatCurrency}
        />
      </div>

      <WatchDatabaseTable 
        watchData={watchData}
        selectedWatch={selectedWatch}
        formatCurrency={formatCurrency}
        onSelectWatch={setSelectedWatch}
      />
    </div>
  );
};

export default DashboardMarketData;
