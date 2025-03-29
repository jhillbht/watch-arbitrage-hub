
import React from 'react';
import { usePremium } from '@/hooks/use-premium';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Crown } from 'lucide-react';

const PremiumOverviewTab = () => {
  const { isPremium, activatePremium } = usePremium();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Premium Advantages</h2>
        <p className="text-muted-foreground">
          Our premium subscription provides access to advanced features designed to maximize your watch investment returns.
        </p>
        
        <div className="space-y-3 mt-6">
          <div className="flex items-start">
            <div className="bg-watch-blue rounded-full p-1 mt-0.5 mr-3">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium">Advanced Pricing Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Precision pricing with confidence intervals and market context
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-watch-blue rounded-full p-1 mt-0.5 mr-3">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium">Premium Data Access</h3>
              <p className="text-sm text-muted-foreground">
                5+ years of historical data with hourly price charts
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-watch-blue rounded-full p-1 mt-0.5 mr-3">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium">Advanced Arbitrage Tools</h3>
              <p className="text-sm text-muted-foreground">
                Profit calculator with customizable fee structures
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-watch-blue rounded-full p-1 mt-0.5 mr-3">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium">Reporting and Exports</h3>
              <p className="text-sm text-muted-foreground">
                PDF reports, data exports, and API access
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Why Go Premium?</h3>
          <p className="text-sm mb-4">
            Premium users make on average 3.5x more profitable trades than free users by leveraging our advanced tools and data.
          </p>
          <Button 
            className="w-full bg-watch-blue hover:bg-blue-600"
            onClick={activatePremium}
            disabled={isPremium}
          >
            <Crown className="mr-2 h-4 w-4" />
            {isPremium ? 'Already Premium' : 'Start 7-Day Free Trial'}
          </Button>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Premium vs Free</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 font-medium">Feature</div>
            <div className="col-span-1 text-center font-medium">Free</div>
            <div className="col-span-1 text-center font-medium text-watch-blue">Premium</div>
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">Historical Data</div>
            <div className="col-span-1 text-center">1 year</div>
            <div className="col-span-1 text-center text-watch-blue">5+ years</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">Price Updates</div>
            <div className="col-span-1 text-center">Daily</div>
            <div className="col-span-1 text-center text-watch-blue">Hourly</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">Market Analysis</div>
            <div className="col-span-1 text-center">Basic</div>
            <div className="col-span-1 text-center text-watch-blue">Advanced</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">Price Alerts</div>
            <div className="col-span-1 text-center">5 max</div>
            <div className="col-span-1 text-center text-watch-blue">Unlimited</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">Arbitrage Calculator</div>
            <div className="col-span-1 text-center">Basic</div>
            <div className="col-span-1 text-center text-watch-blue">Advanced</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">Reporting</div>
            <div className="col-span-1 text-center">None</div>
            <div className="col-span-1 text-center text-watch-blue">Full Access</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">Data Export</div>
            <div className="col-span-1 text-center">None</div>
            <div className="col-span-1 text-center text-watch-blue">All Formats</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">API Access</div>
            <div className="col-span-1 text-center">None</div>
            <div className="col-span-1 text-center text-watch-blue">Full Access</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumOverviewTab;
