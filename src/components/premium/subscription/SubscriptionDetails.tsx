
import { Calendar, CreditCardIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/utils/formatters';

// Mock subscription data type
interface PaymentMethod {
  type: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
}

interface UsageStats {
  apiCalls: number;
  apiLimit: number;
  reports: number;
  reportsLimit: number;
  dataExports: number;
  dataExportsLimit: number;
}

interface SubscriptionData {
  status: string;
  plan: string;
  startDate: Date;
  renewalDate: Date;
  paymentMethod: PaymentMethod;
  usageStats: UsageStats;
}

interface SubscriptionDetailsProps {
  subscription: SubscriptionData;
}

const SubscriptionDetails = ({ subscription }: SubscriptionDetailsProps) => {
  return (
    <div className="space-y-6 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-muted p-4 rounded-md space-y-1">
          <div className="text-sm text-muted-foreground">Start Date</div>
          <div className="font-medium flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-green-600" />
            {formatDate(subscription.startDate)}
          </div>
        </div>
        <div className="bg-muted p-4 rounded-md space-y-1">
          <div className="text-sm text-muted-foreground">Next Billing Date</div>
          <div className="font-medium flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-amber-600" />
            {formatDate(subscription.renewalDate)}
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Payment Method</span>
          <Button variant="link" size="sm" className="h-auto p-0">
            Update
          </Button>
        </div>
        <div className="flex items-center p-3 border rounded-md">
          <CreditCardIcon className="h-5 w-5 mr-3 text-muted-foreground" />
          <div>
            <div className="font-medium">Visa ending in {subscription.paymentMethod.last4}</div>
            <div className="text-sm text-muted-foreground">
              Expires {subscription.paymentMethod.expiryMonth}/{subscription.paymentMethod.expiryYear}
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Usage Statistics</h3>
          <Badge variant="outline">30 days remaining</Badge>
        </div>
        
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>API Calls</span>
              <span>{subscription.usageStats.apiCalls} / {subscription.usageStats.apiLimit}</span>
            </div>
            <Progress value={subscription.usageStats.apiCalls / subscription.usageStats.apiLimit * 100} className="h-2" />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Reports Generated</span>
              <span>{subscription.usageStats.reports} / {subscription.usageStats.reportsLimit}</span>
            </div>
            <Progress value={subscription.usageStats.reports / subscription.usageStats.reportsLimit * 100} className="h-2" />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Data Exports</span>
              <span>{subscription.usageStats.dataExports} / {subscription.usageStats.dataExportsLimit}</span>
            </div>
            <Progress value={subscription.usageStats.dataExports / subscription.usageStats.dataExportsLimit * 100} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
