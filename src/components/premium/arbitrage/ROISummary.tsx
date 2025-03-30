
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

interface ROISummaryProps {
  profit: number;
  roi: number;
  totalCost: number;
}

const ROISummary = ({ profit, roi, totalCost }: ROISummaryProps) => {
  const isPositive = profit > 0;
  
  return (
    <Card className="bg-muted">
      <CardContent className="p-4 text-center space-y-2">
        <div className="text-sm text-muted-foreground">Estimated Profit</div>
        
        <div className="text-2xl font-bold">
          {formatCurrency(profit)}
        </div>
        
        <div className="flex items-center justify-center space-x-1">
          {isPositive ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
          
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            ROI: {roi.toFixed(2)}%
          </span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Total Cost: {formatCurrency(totalCost)}
        </div>
      </CardContent>
    </Card>
  );
};

export default ROISummary;
