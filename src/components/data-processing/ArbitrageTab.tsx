
import { RefreshCw, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArbitrageOpportunityCard from '@/components/dashboard/ArbitrageOpportunityCard';

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

interface ArbitrageTabProps {
  isAnalyzing: boolean;
  analyzeArbitrageOpportunities: (watches: any[], prices: any[]) => void;
}

const ArbitrageTab = ({ isAnalyzing, analyzeArbitrageOpportunities }: ArbitrageTabProps) => {
  return (
    <>
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
    </>
  );
};

export default ArbitrageTab;
