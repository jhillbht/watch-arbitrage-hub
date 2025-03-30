
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileDown, Share } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

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
        <div className="bg-muted p-4 rounded-md text-center">
          <div className="text-2xl font-bold mb-1">
            {formatCurrency(calculation.profit)}
          </div>
          <div className="text-sm text-muted-foreground">
            Estimated Profit
          </div>
          <div className={`mt-1 text-sm ${calculation.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
            ROI: {calculation.roi.toFixed(2)}%
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium">Cost Breakdown</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Purchase Price</span>
              <span>{formatCurrency(calculation.buyPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Import Duty</span>
              <span>{formatCurrency(calculation.importDuty)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatCurrency(calculation.shippingCost)}</span>
            </div>
            <div className="flex justify-between">
              <span>Insurance</span>
              <span>{formatCurrency(calculation.insurance)}</span>
            </div>
            <div className="flex justify-between">
              <span>Currency Conversion</span>
              <span>{formatCurrency(calculation.currencyConversionFee)}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>{formatCurrency(calculation.platformFee)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Total Cost</span>
              <span>{formatCurrency(calculation.totalCost)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Sell Price</span>
              <span>{formatCurrency(calculation.sellPrice)}</span>
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
