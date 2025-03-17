
import { useState } from 'react';
import { 
  usePremiumPricingCalculator,
  WatchModel
} from '@/services/DataProcessingService';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { FileText, Loader2 } from 'lucide-react';

// Mock watch data
const mockWatches: WatchModel[] = [
  {
    id: 'rolex-submariner-date',
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    retail_price: 10000
  },
  {
    id: 'patek-philippe-nautilus',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    retail_price: 35000
  },
  {
    id: 'ap-royal-oak',
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST.OO.1220ST.01',
    retail_price: 25000
  }
];

const PremiumPricingCalculator = () => {
  const [selectedWatch, setSelectedWatch] = useState<WatchModel | null>(null);
  const [condition, setCondition] = useState<'mint' | 'excellent' | 'good' | 'fair' | 'poor'>('excellent');
  const [hasBox, setHasBox] = useState(true);
  const [hasPapers, setHasPapers] = useState(true);
  const [hasServiceHistory, setHasServiceHistory] = useState(false);
  
  const { result, isCalculating, calculatePrice } = usePremiumPricingCalculator();
  
  const handleCalculate = () => {
    if (selectedWatch) {
      calculatePrice(
        selectedWatch,
        condition,
        hasBox,
        hasPapers,
        hasServiceHistory
      );
    }
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Premium Pricing Calculator</CardTitle>
          <CardDescription>
            Get accurate price estimates based on condition and completeness
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="watch-select">Watch Model</Label>
            <Select 
              onValueChange={(value) => {
                const watch = mockWatches.find(w => w.id === value);
                if (watch) setSelectedWatch(watch);
              }}
            >
              <SelectTrigger id="watch-select">
                <SelectValue placeholder="Select a watch model" />
              </SelectTrigger>
              <SelectContent>
                {mockWatches.map((watch) => (
                  <SelectItem key={watch.id} value={watch.id}>
                    {watch.brand} {watch.model} ({watch.reference})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="condition-select">Condition</Label>
            <Select 
              value={condition}
              onValueChange={(value: any) => setCondition(value)}
            >
              <SelectTrigger id="condition-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mint">Mint - Like New</SelectItem>
                <SelectItem value="excellent">Excellent - Minor Wear</SelectItem>
                <SelectItem value="good">Good - Visible Wear</SelectItem>
                <SelectItem value="fair">Fair - Significant Wear</SelectItem>
                <SelectItem value="poor">Poor - Heavy Wear/Damage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Completeness</Label>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="has-box" 
                  checked={hasBox}
                  onCheckedChange={(checked) => setHasBox(checked as boolean)}
                />
                <Label htmlFor="has-box" className="cursor-pointer">
                  Original Box
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="has-papers" 
                  checked={hasPapers}
                  onCheckedChange={(checked) => setHasPapers(checked as boolean)}
                />
                <Label htmlFor="has-papers" className="cursor-pointer">
                  Original Papers/Certificate
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="has-service" 
                  checked={hasServiceHistory}
                  onCheckedChange={(checked) => setHasServiceHistory(checked as boolean)}
                />
                <Label htmlFor="has-service" className="cursor-pointer">
                  Service History Documentation
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button 
            onClick={handleCalculate} 
            disabled={!selectedWatch || isCalculating}
            className="bg-watch-blue hover:bg-blue-600"
          >
            {isCalculating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Calculating...
              </>
            ) : (
              "Calculate Price"
            )}
          </Button>
        </CardFooter>
      </Card>
      
      <Card className={result ? "" : "bg-gray-50 dark:bg-gray-900/50"}>
        {result ? (
          <>
            <CardHeader>
              <CardTitle>Price Analysis</CardTitle>
              <CardDescription>
                {selectedWatch?.brand} {selectedWatch?.model} ({selectedWatch?.reference})
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <div className="text-center mb-2">
                  <Badge className="mb-1" variant={
                    result.price_trend === 'up' ? 'default' :
                    result.price_trend === 'down' ? 'destructive' : 'secondary'
                  }>
                    Market Trend: {result.price_trend === 'up' ? 'Rising' : 
                                 result.price_trend === 'down' ? 'Falling' : 'Stable'}
                  </Badge>
                  <h3 className="text-2xl font-bold">{formatCurrency(result.estimated_price)}</h3>
                  <p className="text-sm text-muted-foreground">
                    Confidence range: {formatCurrency(result.confidence_interval[0])} - {formatCurrency(result.confidence_interval[1])}
                  </p>
                </div>
                
                <div className="flex justify-between text-sm mt-2">
                  <span>Market Liquidity:</span>
                  <span className={
                    result.market_liquidity === 'high' ? 'text-green-600' :
                    result.market_liquidity === 'medium' ? 'text-amber-600' : 'text-red-600'
                  }>
                    {result.market_liquidity === 'high' ? 'High' :
                     result.market_liquidity === 'medium' ? 'Medium' : 'Low'}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Recent Similar Sales</h4>
                <div className="space-y-2">
                  {result.similar_recent_sales.map((sale, index) => (
                    <div key={index} className="flex justify-between text-sm border-b pb-1">
                      <span>{formatCurrency(sale.price)}</span>
                      <span className="text-muted-foreground">{sale.date} ({sale.condition})</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button 
                onClick={handleCalculate} 
                variant="secondary" 
                size="sm"
                disabled={isCalculating}
              >
                Recalculate
              </Button>
            </CardFooter>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center py-10 px-4 text-center text-muted-foreground">
            <p className="mb-2">Select a watch model and complete the form to generate a price analysis</p>
            <p className="text-sm">Premium pricing calculator uses market data and advanced algorithms to provide accurate price estimates</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PremiumPricingCalculator;
