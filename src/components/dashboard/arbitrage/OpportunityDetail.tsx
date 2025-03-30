
import { ArrowRight, ExternalLink, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';

interface OpportunityFees {
  import: number;
  shipping: number;
  platform: number;
  tax: number;
}

interface OpportunityDetailProps {
  opportunity: {
    id: number;
    brand: string;
    model: string;
    reference: string;
    buyPrice: number;
    buyPlatform: string;
    buyLocation: string;
    sellPrice: number;
    sellPlatform: string;
    sellLocation: string;
    roi: number;
    potentialProfit: number;
    fees: OpportunityFees;
    confidence: string;
    details: string;
  };
}

const OpportunityDetail = ({ opportunity }: OpportunityDetailProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>
          {opportunity.brand} {opportunity.model}
          <Badge className="ml-2" variant="outline">Ref. {opportunity.reference}</Badge>
        </CardTitle>
        <CardDescription>
          Detail breakdown of this arbitrage opportunity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1 bg-muted p-3 rounded-md">
            <div className="text-sm text-muted-foreground">Potential ROI</div>
            <div className="text-2xl font-bold text-green-600">+{opportunity.roi}%</div>
          </div>
          <div className="space-y-1 bg-muted p-3 rounded-md">
            <div className="text-sm text-muted-foreground">Est. Profit</div>
            <div className="text-2xl font-bold">{formatCurrency(opportunity.potentialProfit)}</div>
          </div>
          <div className="space-y-1 bg-muted p-3 rounded-md">
            <div className="text-sm text-muted-foreground">Confidence</div>
            <div className="text-2xl font-bold capitalize">
              {opportunity.confidence === 'high' ? (
                <span className="text-green-600">High</span>
              ) : opportunity.confidence === 'medium' ? (
                <span className="text-amber-600">Medium</span>
              ) : (
                <span className="text-red-600">Low</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6 p-4 bg-muted rounded-md">
          <div className="text-center md:text-left">
            <div className="text-sm text-muted-foreground">Buy From</div>
            <div className="font-medium">{opportunity.buyPlatform}</div>
            <div className="text-sm">{opportunity.buyLocation}</div>
            <div className="text-xl font-bold mt-1">{formatCurrency(opportunity.buyPrice)}</div>
          </div>
          
          <div className="self-center">
            <ArrowRight className="h-8 w-8 text-muted-foreground" />
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-sm text-muted-foreground">Sell On</div>
            <div className="font-medium">{opportunity.sellPlatform}</div>
            <div className="text-sm">{opportunity.sellLocation}</div>
            <div className="text-xl font-bold mt-1 text-green-600">{formatCurrency(opportunity.sellPrice)}</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Cost Breakdown</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-background p-3 rounded-md border">
              <div className="text-sm text-muted-foreground">Import Duty</div>
              <div className="font-medium">{formatCurrency(opportunity.fees.import)}</div>
            </div>
            <div className="bg-background p-3 rounded-md border">
              <div className="text-sm text-muted-foreground">Shipping</div>
              <div className="font-medium">{formatCurrency(opportunity.fees.shipping)}</div>
            </div>
            <div className="bg-background p-3 rounded-md border">
              <div className="text-sm text-muted-foreground">Platform Fee</div>
              <div className="font-medium">{formatCurrency(opportunity.fees.platform)}</div>
            </div>
            <div className="bg-background p-3 rounded-md border">
              <div className="text-sm text-muted-foreground">Sales Tax</div>
              <div className="font-medium">{formatCurrency(opportunity.fees.tax)}</div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Watch Details</h4>
          <p className="text-sm">{opportunity.details}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
        <Button className="w-full sm:w-auto bg-watch-blue hover:bg-blue-600">
          <ExternalLink className="mr-2 h-4 w-4" /> View Buy Listing
        </Button>
        <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
          <DollarSign className="mr-2 h-4 w-4" /> View Sell Options
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OpportunityDetail;
