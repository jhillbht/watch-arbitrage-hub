
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { usePremium } from '@/hooks/use-premium';

interface PricingCardProps {
  handleUpgrade: () => void;
}

const PricingCard = ({ handleUpgrade }: PricingCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upgrade to Premium</CardTitle>
        <CardDescription>
          Unlock all premium features for $1,000/month
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-2">Premium Benefits:</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <span className="bg-green-500 rounded-full h-2 w-2 mt-1.5 mr-2"></span>
              Advanced pricing calculator with confidence intervals
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 rounded-full h-2 w-2 mt-1.5 mr-2"></span>
              5+ years of historical price data
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 rounded-full h-2 w-2 mt-1.5 mr-2"></span>
              Advanced arbitrage tools with ROI predictions
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 rounded-full h-2 w-2 mt-1.5 mr-2"></span>
              Premium reporting and data exports
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 rounded-full h-2 w-2 mt-1.5 mr-2"></span>
              API access for custom integrations
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-watch-blue hover:bg-blue-600"
          onClick={handleUpgrade}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Subscribe Now - $1,000/month
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
