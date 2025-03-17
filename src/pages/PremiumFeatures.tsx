
import { usePremium } from '@/hooks/use-premium';
import { PremiumProvider } from '@/hooks/use-premium';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calculator, TrendingUp, FileText, CreditCard, Crown } from 'lucide-react';
import PremiumFeatureLock from '@/components/premium/PremiumFeatureLock';
import AdvancedArbitrageTools from '@/components/premium/AdvancedArbitrageTools';
import ReportingExports from '@/components/premium/ReportingExports';
import SubscriptionManagement from '@/components/premium/SubscriptionManagement';

const PremiumFeaturesPage = () => {
  const { isPremium, activatePremium, deactivatePremium } = usePremium();
  
  return (
    <div className="container mx-auto py-8 px-4">
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
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="calculator">
            <Calculator className="h-4 w-4 mr-2" />
            Advanced Calculator
          </TabsTrigger>
          <TabsTrigger value="arbitrage">
            <TrendingUp className="h-4 w-4 mr-2" />
            Arbitrage Tools
          </TabsTrigger>
          <TabsTrigger value="reporting">
            <FileText className="h-4 w-4 mr-2" />
            Reporting
          </TabsTrigger>
          <TabsTrigger value="subscription">
            <CreditCard className="h-4 w-4 mr-2" />
            Subscription
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
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
        </TabsContent>
        
        <TabsContent value="calculator">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Advanced Pricing Calculator</h2>
            <p className="text-muted-foreground">
              Get precise market valuations with our advanced statistical model.
            </p>
          </div>
          
          {isPremium ? (
            // We already have this component from before, so we'll use it
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
        </TabsContent>
        
        <TabsContent value="arbitrage">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Advanced Arbitrage Tools</h2>
            <p className="text-muted-foreground">
              Maximize your profits with comprehensive cost analysis and ROI prediction.
            </p>
          </div>
          
          <AdvancedArbitrageTools />
        </TabsContent>
        
        <TabsContent value="reporting">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Reporting & Exports</h2>
            <p className="text-muted-foreground">
              Generate detailed reports and export data in multiple formats.
            </p>
          </div>
          
          <ReportingExports />
        </TabsContent>
        
        <TabsContent value="subscription">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Subscription Management</h2>
            <p className="text-muted-foreground">
              Manage your premium subscription and billing details.
            </p>
          </div>
          
          <SubscriptionManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const PremiumFeatures = () => {
  return (
    <PremiumProvider>
      <PremiumFeaturesPage />
    </PremiumProvider>
  );
};

export default PremiumFeatures;
