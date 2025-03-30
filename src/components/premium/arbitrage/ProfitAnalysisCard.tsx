
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileDown, Share } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import ROISummary from './ROISummary';
import MarketComparison from './MarketComparison';
import FeeBreakdown from './FeeBreakdown';

export interface ArbitrageCalculation {
  buyPrice: number;
  sellPrice: number;
  importDuty: number;
  shippingCost: number;
  platformFee: number;
  insurance: number;
  currencyConversionFee: number;
  totalCost: number;
  profit: number;
  roi: number;
}

interface ProfitAnalysisCardProps {
  calculation: ArbitrageCalculation | null;
}

const ProfitAnalysisCard = ({ calculation }: ProfitAnalysisCardProps) => {
  if (!calculation) {
    return (
      <Card>
        <div className="h-full flex items-center justify-center p-6 text-center text-muted-foreground">
          Enter values and calculate to see profit analysis
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profit Analysis</CardTitle>
        <CardDescription>
          Detailed breakdown of costs and profits
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ROISummary 
          profit={calculation.profit} 
          roi={calculation.roi} 
          totalCost={calculation.totalCost} 
        />
        
        <MarketComparison
          buyMarket="Source"
          buyPrice={calculation.buyPrice}
          sellMarket="Target"
          sellPrice={calculation.sellPrice}
          priceDifference={calculation.sellPrice - calculation.buyPrice}
        />
        
        <FeeBreakdown 
          fees={{
            importDuty: calculation.importDuty,
            shipping: calculation.shippingCost,
            platformFee: calculation.platformFee,
            insurance: calculation.insurance,
            currencyConversion: calculation.currencyConversionFee
          }}
        />
        
        <div className="space-y-3">
          <h3 className="font-medium">Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Cost</span>
              <span>{formatCurrency(calculation.totalCost)}</span>
            </div>
            <div className="flex justify-between">
              <span>Sell Price</span>
              <span>{formatCurrency(calculation.sellPrice)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Net Profit</span>
              <span className={calculation.profit > 0 ? 'text-green-600' : 'text-red-600'}>
                {formatCurrency(calculation.profit)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <FileDown className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button variant="outline" size="sm">
          <Share className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfitAnalysisCard;
