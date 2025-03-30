
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface MarketDataHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const MarketDataHeader = ({ searchQuery, onSearchChange }: MarketDataHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Market Data</h2>
      <div className="flex w-full md:w-auto gap-2">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search watches, references..."
            className="w-full pl-9 pr-4"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MarketDataHeader;
