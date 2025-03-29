
import { WatchArbitrage } from '@/types/watch';
import { formatCurrency } from '@/utils/formatters';
import { regionNames } from '@/types/watch';
import { Crown, ArrowRight } from 'lucide-react';
import { usePremium } from '@/hooks/use-premium';

interface WatchArbitrageCellProps {
  arbitrage: WatchArbitrage;
}

const WatchArbitrageCell = ({ arbitrage }: WatchArbitrageCellProps) => {
  const { isPremium } = usePremium();
  
  return (
    <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-lg p-3">
      <div className="text-center">
        <div className="text-xs text-gray-400 flex items-center justify-center mb-1">
          Best Arbitrage
          {isPremium && <Crown className="h-3 w-3 ml-1 text-amber-500" />}
        </div>
        <div className="font-medium text-blue-400 text-lg">{formatCurrency(arbitrage.profit)}</div>
        <div className="text-xs text-gray-400 my-1 flex items-center justify-center">
          Buy: {regionNames[arbitrage.bestBuy as keyof typeof regionNames]} 
          <ArrowRight className="h-3 w-3 mx-1" /> 
          Sell: {regionNames[arbitrage.bestSell as keyof typeof regionNames]}
        </div>
        <div className="text-xs font-medium text-green-400">ROI: {arbitrage.roi.toFixed(1)}%</div>
      </div>
    </div>
  );
};

export default WatchArbitrageCell;
