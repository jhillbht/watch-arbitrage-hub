
import { WatchArbitrage } from '@/types/watch';
import { formatCurrency } from '@/utils/formatters';
import { regionNames } from '@/types/watch';

interface WatchArbitrageCellProps {
  arbitrage: WatchArbitrage;
}

const WatchArbitrageCell = ({ arbitrage }: WatchArbitrageCellProps) => {
  return (
    <div className="bg-watch-lightBlue rounded-lg p-3">
      <div className="text-center">
        <div className="text-xs text-gray-600">Best Arbitrage</div>
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
