
import { ArbitrageOpportunity } from '@/services/data-processing/DataProcessingTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';

interface ArbitrageOpportunityCardProps {
  opportunity: ArbitrageOpportunity;
  watchDetails: {
    brand: string;
    model: string;
    reference: string;
    imageUrl?: string;
  };
}

const ArbitrageOpportunityCard = ({ 
  opportunity, 
  watchDetails 
}: ArbitrageOpportunityCardProps) => {
  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const getRiskLabel = (score: number) => {
    if (score <= 3) return { label: 'Low Risk', color: 'bg-green-500' };
    if (score <= 6) return { label: 'Medium Risk', color: 'bg-amber-500' };
    return { label: 'High Risk', color: 'bg-red-500' };
  };
  
  const risk = getRiskLabel(opportunity.risk_score);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{watchDetails.brand} {watchDetails.model}</CardTitle>
            <p className="text-sm text-muted-foreground">Ref. {watchDetails.reference}</p>
          </div>
          <Badge className="ml-auto">
            ROI: {opportunity.profit_percentage.toFixed(1)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-2 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-center px-3 py-2 bg-muted rounded-md flex-1 mr-2">
            <p className="text-xs text-muted-foreground mb-1">Buy From</p>
            <p className="font-medium">{opportunity.buy_market}</p>
            <p className="text-md font-bold">
              {formatCurrency(opportunity.buy_price, opportunity.buy_currency)}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 mx-1 text-gray-400 flex-shrink-0" />
          <div className="text-center px-3 py-2 bg-muted rounded-md flex-1 ml-2">
            <p className="text-xs text-muted-foreground mb-1">Sell In</p>
            <p className="font-medium">{opportunity.sell_market}</p>
            <p className="text-md font-bold">
              {formatCurrency(opportunity.sell_price, opportunity.sell_currency)}
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Expected Profit:</span>
            <span className="font-medium text-green-600">
              {formatCurrency(opportunity.profit_usd, 'USD')}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span>After Fees & Shipping:</span>
            <span className="font-medium text-green-600">
              {formatCurrency(opportunity.estimated_total_profit, 'USD')}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Risk Assessment:</span>
            <span className="flex items-center">
              <span className={`w-2 h-2 rounded-full ${risk.color} mr-1.5`}></span>
              {risk.label}
            </span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Confidence Score</span>
            <span>{Math.round(opportunity.confidence * 100)}%</span>
          </div>
          <Progress value={opportunity.confidence * 100} className="h-2" />
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1">
            <AlertTriangle className="w-4 h-4 mr-1" /> Risk Details
          </Button>
          <Button size="sm" className="flex-1 bg-watch-blue hover:bg-blue-600">
            <TrendingUp className="w-4 h-4 mr-1" /> Full Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArbitrageOpportunityCard;
