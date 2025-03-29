
import React from 'react';
import { usePremium } from '@/hooks/use-premium';
import { Button } from '@/components/ui/button';
import PremiumFeatureLock from './PremiumFeatureLock';

const PremiumCalculatorTab = () => {
  const { isPremium } = usePremium();
  
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Advanced Pricing Calculator</h2>
        <p className="text-muted-foreground">
          Get precise market valuations with our advanced statistical model.
        </p>
      </div>
      
      {isPremium ? (
        <div className="mb-6">
          <span className="text-muted-foreground mb-4 block">
            The premium pricing calculator is available in the Data Processing tab.
          </span>
          <Button>Go to Calculator</Button>
        </div>
      ) : (
        <PremiumFeatureLock 
          featureName="Advanced Pricing Calculator" 
          description="Our premium pricing calculator provides accurate price estimates based on condition, completeness, and market trends with confidence intervals."
        />
      )}
    </>
  );
};

export default PremiumCalculatorTab;
