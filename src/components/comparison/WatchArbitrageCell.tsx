
import { WatchArbitrage } from '@/types/watch';
import { formatCurrency } from '@/utils/formatters';
import { regionNames } from '@/types/watch';
import { Crown } from 'lucide-react';
import { usePremium } from '@/hooks/use-premium';

interface WatchArbitrageCellProps {
  arbitrage: WatchArbitrage;
}

const WatchArbitrageCell = ({ arbitrage }: WatchArbitrageCellProps) => {
  const { isPremium } = usePremium();
  
  return (
    <div className="bg-watch-lightBlue rounded-lg p-3">
      <div className="text-center">
        <div className="text-xs text-gray-600 flex items-center justify-center">
          Best Arbitrage
          {isPremium && <Crown className="h-3 w-3 ml-1 text-amber-500" />}
        </div>
        <div className="font-medium text-watch-blue">{formatCurrency(arbitrage.profit)}</div>
        <div className="text-xs text-gray-600">
          Buy: {regionNames[arbitrage.bestBuy as keyof typeof regionNames]} → Sell: {regionNames[arbitrage.bestSell as keyof typeof regionNames]}
        </div>
        <div className="text-xs font-medium text-green-600">ROI: {arbitrage.roi}%</div>
      </div>
    </div>
  );
};

export default WatchArbitrageCell;
