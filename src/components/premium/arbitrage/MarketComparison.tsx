
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

interface MarketComparisonProps {
  buyMarket: string;
  buyPrice: number;
  sellMarket: string;
  sellPrice: number;
  priceDifference: number;
}

const MarketComparison = ({
  buyMarket,
  buyPrice,
  sellMarket,
  sellPrice,
  priceDifference
}: MarketComparisonProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-center space-y-1">
            <div className="text-sm text-muted-foreground">Buy From</div>
            <div className="font-medium">{buyMarket}</div>
            <div className="text-lg font-bold">{formatCurrency(buyPrice)}</div>
          </div>
          
          <div className="flex flex-col items-center">
            <ArrowRight className="h-6 w-6 text-muted-foreground" />
            <div className={`text-sm font-medium mt-1 ${priceDifference > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {priceDifference > 0 ? '+' : ''}{formatCurrency(priceDifference)}
            </div>
          </div>
          
          <div className="text-center space-y-1">
            <div className="text-sm text-muted-foreground">Sell In</div>
            <div className="font-medium">{sellMarket}</div>
            <div className="text-lg font-bold">{formatCurrency(sellPrice)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketComparison;
