
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MarketSelectorProps {
  selectedMarket: string;
  onMarketChange: (market: string) => void;
  label?: string;
}

const markets = [
  { code: 'US', name: 'United States' },
  { code: 'EU', name: 'Europe' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'JP', name: 'Japan' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'AE', name: 'UAE' },
  { code: 'CH', name: 'Switzerland' },
];

const MarketSelector = ({ 
  selectedMarket, 
  onMarketChange,
  label = 'Market'
}: MarketSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select value={selectedMarket} onValueChange={onMarketChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select market" />
        </SelectTrigger>
        <SelectContent>
          {markets.map((market) => (
            <SelectItem key={market.code} value={market.code}>
              {market.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default MarketSelector;
