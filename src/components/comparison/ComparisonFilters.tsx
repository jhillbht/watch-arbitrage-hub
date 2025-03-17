
import { RefreshCw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ComparisonFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const ComparisonFilters = ({ searchTerm, onSearchChange }: ComparisonFiltersProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mb-8 gap-4">
      <Tabs defaultValue="all" className="w-full md:w-auto">
        <TabsList>
          <TabsTrigger value="all">All Models</TabsTrigger>
          <TabsTrigger value="rolex">Rolex</TabsTrigger>
          <TabsTrigger value="patek">Patek Philippe</TabsTrigger>
          <TabsTrigger value="ap">Audemars Piguet</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search by brand, model or reference..."
          className="pl-10 w-full"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <Button variant="outline" size="sm" className="whitespace-nowrap hidden md:flex">
        <RefreshCw className="mr-2 h-4 w-4" /> Update Prices
      </Button>
    </div>
  );
};

export default ComparisonFilters;
