
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SubscriptionDetails from './SubscriptionDetails';

// Mock subscription data
interface SubscriptionCardProps {
  subscription: any;
  onCancelSubscription: () => void;
}

const SubscriptionCard = ({ subscription, onCancelSubscription }: SubscriptionCardProps) => {
  return (
    <Card className="md:col-span-2">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Premium Subscription</CardTitle>
            <CardDescription>
              Manage your premium subscription
            </CardDescription>
          </div>
          <Badge className="bg-green-600">Active</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <SubscriptionDetails subscription={subscription} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-red-600 border-red-200" onClick={onCancelSubscription}>
          Cancel Subscription
        </Button>
        <Button>
          <Shield className="mr-2 h-4 w-4" />
          Premium Support
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
