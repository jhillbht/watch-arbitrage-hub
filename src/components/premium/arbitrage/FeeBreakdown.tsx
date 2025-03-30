
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/utils/formatters';

interface FeeBreakdownProps {
  fees: {
    importDuty: number;
    shipping: number;
    platformFee: number;
    insurance: number;
    currencyConversion: number;
  };
}

const FeeBreakdown = ({ fees }: FeeBreakdownProps) => {
  const totalFees = Object.values(fees).reduce((sum, fee) => sum + fee, 0);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Fee Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm">Import Duty:</div>
          <div className="text-sm text-right font-medium">{formatCurrency(fees.importDuty)}</div>
          
          <div className="text-sm">Shipping:</div>
          <div className="text-sm text-right font-medium">{formatCurrency(fees.shipping)}</div>
          
          <div className="text-sm">Platform Fee:</div>
          <div className="text-sm text-right font-medium">{formatCurrency(fees.platformFee)}</div>
          
          <div className="text-sm">Insurance:</div>
          <div className="text-sm text-right font-medium">{formatCurrency(fees.insurance)}</div>
          
          <div className="text-sm">Currency Conversion:</div>
          <div className="text-sm text-right font-medium">{formatCurrency(fees.currencyConversion)}</div>
        </div>
        
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between">
            <div className="font-medium">Total Fees:</div>
            <div className="font-medium">{formatCurrency(totalFees)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeeBreakdown;
