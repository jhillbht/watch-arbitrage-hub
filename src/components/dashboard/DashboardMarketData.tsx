
import { useState } from 'react';
import { formatCurrency } from '@/utils/formatters';
import MarketDataHeader from './market-data/MarketDataHeader';
import MarketOverview from './market-data/MarketOverview';
import WatchPriceTrend from './market-data/WatchPriceTrend';
import WatchDatabaseTable from './market-data/WatchDatabaseTable';
import { watchData, historicalPriceData, marketComparison } from './market-data/mockMarketData';

const DashboardMarketData = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWatch, setSelectedWatch] = useState(watchData[0]);

  // Format historical data for the chart
  const chartData = historicalPriceData.map(item => ({
    date: item.date,
    price: item.value
  }));

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
