
import { usePremium } from '@/hooks/use-premium';
import { useToast } from '@/components/ui/use-toast';
import PricingCard from './subscription/PricingCard';
import SubscriptionCard from './subscription/SubscriptionCard';
import BillingHistory from './subscription/BillingHistory';

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
  
  if (!isPremium) {
    return <PricingCard handleUpgrade={handleUpgrade} />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SubscriptionCard 
        subscription={mockSubscription} 
        onCancelSubscription={handleCancelSubscription} 
      />
      <BillingHistory invoices={mockSubscription.invoices} />
    </div>
  );
};

export default SubscriptionManagement;
