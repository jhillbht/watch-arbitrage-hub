
import { usePremium } from '@/hooks/use-premium';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Calendar, Shield, Download, ClipboardList, CreditCardIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { formatDate } from '@/utils/formatters';

// Mock subscription data
const mockSubscription = {
  status: 'active',
  plan: 'premium',
  startDate: new Date(2023, 5, 15),
  renewalDate: new Date(2023, 6, 15),
  paymentMethod: {
    type: 'credit_card',
    last4: '4242',
    expiryMonth: 12,
    expiryYear: 2025
  },
  invoices: [
    { id: 'inv_123456', date: new Date(2023, 5, 15), amount: 1000, status: 'paid' },
    { id: 'inv_123455', date: new Date(2023, 4, 15), amount: 1000, status: 'paid' },
    { id: 'inv_123454', date: new Date(2023, 3, 15), amount: 1000, status: 'paid' }
  ],
  usageStats: {
    apiCalls: 2500,
    apiLimit: 10000,
    reports: 15,
    reportsLimit: 50,
    dataExports: 8,
    dataExportsLimit: 30
  }
};

const SubscriptionManagement = () => {
  const { isPremium, activatePremium, deactivatePremium } = usePremium();
  const { toast } = useToast();
  
  const handleUpgrade = () => {
    toast({
      title: "Redirecting to payment...",
      description: "You'll be redirected to our secure payment processor to complete your subscription.",
    });
    
    // Simulate successful payment
    setTimeout(() => {
      activatePremium();
    }, 2000);
  };
  
  const handleCancelSubscription = () => {
    toast({
      title: "Subscription Canceled",
      description: "Your premium features will remain active until the end of your billing cycle.",
      variant: "destructive",
    });
    
    // In a real app, this would have a confirmation dialog
    deactivatePremium();
  };
  
  const handleDownloadInvoice = (invoiceId: string) => {
    toast({
      title: "Downloading Invoice",
      description: `Invoice ${invoiceId} is being downloaded.`,
    });
  };
  
  if (!isPremium) {
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
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <CardContent className="space-y-6 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-md space-y-1">
              <div className="text-sm text-muted-foreground">Start Date</div>
              <div className="font-medium flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-green-600" />
                {formatDate(mockSubscription.startDate)}
              </div>
            </div>
            <div className="bg-muted p-4 rounded-md space-y-1">
              <div className="text-sm text-muted-foreground">Next Billing Date</div>
              <div className="font-medium flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                {formatDate(mockSubscription.renewalDate)}
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
                <div className="font-medium">Visa ending in {mockSubscription.paymentMethod.last4}</div>
                <div className="text-sm text-muted-foreground">
                  Expires {mockSubscription.paymentMethod.expiryMonth}/{mockSubscription.paymentMethod.expiryYear}
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
                  <span>{mockSubscription.usageStats.apiCalls} / {mockSubscription.usageStats.apiLimit}</span>
                </div>
                <Progress value={mockSubscription.usageStats.apiCalls / mockSubscription.usageStats.apiLimit * 100} className="h-2" />
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Reports Generated</span>
                  <span>{mockSubscription.usageStats.reports} / {mockSubscription.usageStats.reportsLimit}</span>
                </div>
                <Progress value={mockSubscription.usageStats.reports / mockSubscription.usageStats.reportsLimit * 100} className="h-2" />
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Data Exports</span>
                  <span>{mockSubscription.usageStats.dataExports} / {mockSubscription.usageStats.dataExportsLimit}</span>
                </div>
                <Progress value={mockSubscription.usageStats.dataExports / mockSubscription.usageStats.dataExportsLimit * 100} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="text-red-600 border-red-200">
            Cancel Subscription
          </Button>
          <Button>
            <Shield className="mr-2 h-4 w-4" />
            Premium Support
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>
            Recent invoices and payments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockSubscription.invoices.map((invoice) => (
            <div key={invoice.id} className="flex justify-between items-center p-3 border rounded-md">
              <div>
                <div className="font-medium">${invoice.amount}</div>
                <div className="text-sm text-muted-foreground">{formatDate(invoice.date)}</div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => handleDownloadInvoice(invoice.id)}>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <ClipboardList className="mr-2 h-4 w-4" />
            View All Invoices
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SubscriptionManagement;
