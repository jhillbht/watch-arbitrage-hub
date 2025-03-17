
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { formatCurrency } from "@/utils/formatters";

interface SimilarSale {
  price: number;
  date: string;
  condition: string;
}

interface PriceAnalysisResultProps {
  result: {
    estimated_price: number;
    confidence_interval: [number, number];
    price_trend: 'up' | 'down' | 'stable';
    market_liquidity: 'high' | 'medium' | 'low';
    similar_recent_sales: SimilarSale[];
  };
  watchBrand?: string;
  watchModel?: string;
  watchReference?: string;
  onRecalculate: () => void;
  isCalculating: boolean;
}

const PriceAnalysisResult = ({
  result,
  watchBrand,
  watchModel,
  watchReference,
  onRecalculate,
  isCalculating
}: PriceAnalysisResultProps) => {
  return (
    <>
      <CardHeader>
        <CardTitle>Price Analysis</CardTitle>
        {watchBrand && watchModel && watchReference && (
          <CardDescription>
            {watchBrand} {watchModel} ({watchReference})
          </CardDescription>
        )}
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
          onClick={onRecalculate} 
          variant="secondary" 
          size="sm"
          disabled={isCalculating}
        >
          Recalculate
        </Button>
      </CardFooter>
    </>
  );
};

export default PriceAnalysisResult;
