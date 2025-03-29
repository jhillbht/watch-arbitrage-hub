
import React from 'react';
import { usePremium } from '@/hooks/use-premium';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Crown } from 'lucide-react';

const PremiumPageHeader = () => {
  const { isPremium, activatePremium } = usePremium();
  
  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Premium Features</h1>
        {isPremium ? (
          <Badge className="bg-green-600">
            <Crown className="mr-1 h-3 w-3" />
            Premium Active
          </Badge>
        ) : (
          <Button onClick={activatePremium} className="bg-watch-blue hover:bg-blue-600">
            <Crown className="mr-2 h-4 w-4" />
            Activate Premium Trial
          </Button>
        )}
      </div>
      <p className="text-muted-foreground max-w-3xl">
        WatchArbitrage Pro premium subscription unlocks advanced tools and features for serious watch investors.
      </p>
      
      {isPremium && (
        <Alert>
          <Crown className="h-4 w-4" />
          <AlertTitle>Premium Features Activated</AlertTitle>
          <AlertDescription>
            You now have access to all premium features. Your subscription will renew automatically.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default PremiumPageHeader;
