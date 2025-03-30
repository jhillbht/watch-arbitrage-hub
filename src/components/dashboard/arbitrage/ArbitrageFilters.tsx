
import { Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface ArbitrageFiltersProps {
  filterBrand: string;
  setFilterBrand: (value: string) => void;
  filterROI: number[];
  setFilterROI: (value: number[]) => void;
}

const ArbitrageFilters = ({ 
  filterBrand, 
  setFilterBrand, 
  filterROI, 
  setFilterROI 
}: ArbitrageFiltersProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Filters</CardTitle>
        <CardDescription>Refine your arbitrage opportunities</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Brand</label>
          <Select value={filterBrand} onValueChange={setFilterBrand}>
            <SelectTrigger>
              <SelectValue placeholder="All Brands" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              <SelectItem value="Rolex">Rolex</SelectItem>
              <SelectItem value="Patek Philippe">Patek Philippe</SelectItem>
              <SelectItem value="Audemars Piguet">Audemars Piguet</SelectItem>
              <SelectItem value="Richard Mille">Richard Mille</SelectItem>
              <SelectItem value="Omega">Omega</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">ROI Range (%)</label>
          <div className="pt-4 px-2">
            <Slider 
              defaultValue={[0, 20]} 
              max={30} 
              step={0.5}
              value={filterROI}
              onValueChange={setFilterROI}
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>{filterROI[0]}%</span>
              <span>{filterROI[1]}%</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Minimum Profit</label>
          <Select defaultValue="1000">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any Amount</SelectItem>
              <SelectItem value="1000">$1,000+</SelectItem>
              <SelectItem value="5000">$5,000+</SelectItem>
              <SelectItem value="10000">$10,000+</SelectItem>
              <SelectItem value="25000">$25,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Buy Location</label>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Location</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="middle-east">Middle East</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Sell Location</label>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Location</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="middle-east">Middle East</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Apply Filters</Button>
      </CardFooter>
    </Card>
  );
};

export default ArbitrageFilters;
