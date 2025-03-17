
import { Calculator } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PremiumPricingCalculator from '@/components/dashboard/PremiumPricingCalculator';

const PricingTab = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Premium Pricing Calculator Engine</h2>
        <Badge variant="secondary">
          <Calculator className="mr-1 h-3 w-3" />
          Premium Feature
        </Badge>
      </div>
      
      <PremiumPricingCalculator />
    </>
  );
};

export default PricingTab;
