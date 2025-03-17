
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface WatchPriceInfoProps {
  currentPrice: number;
  priceChangePercent: number;
  formatCurrency: (value: number) => string;
}

const WatchPriceInfo = ({ 
  currentPrice, 
  priceChangePercent,
  formatCurrency 
}: WatchPriceInfoProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm text-muted-foreground">Current Price</p>
        <p className="text-lg font-semibold">{formatCurrency(currentPrice)}</p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">30-Day Change</p>
        <p className="text-lg font-semibold flex items-center">
          {priceChangePercent >= 0 ? (
            <>
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">+{priceChangePercent}%</span>
            </>
          ) : (
            <>
              <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-600">{priceChangePercent}%</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default WatchPriceInfo;
