
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { formatCurrency } from '@/utils/formatters';

interface MarketPriceCardProps {
  marketName: string;
  price: number;
  setPrice: (value: number) => void;
  currency: string;
  label: string;
  showFormatted?: boolean;
}

const MarketPriceCard = ({ 
  marketName, 
  price, 
  setPrice, 
  currency, 
  label,
  showFormatted = true
}: MarketPriceCardProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="font-medium">{label}</Label>
            <span className="text-sm bg-muted px-2 py-0.5 rounded">{marketName}</span>
          </div>
          
          <Input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(Number(e.target.value))}
            min={0}
            className="text-lg font-medium"
          />
          
          {showFormatted && (
            <div className="text-sm text-muted-foreground">
              {formatCurrency(price)} {currency}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketPriceCard;
