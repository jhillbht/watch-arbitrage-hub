
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, TrendingUp, FileText, CreditCard } from 'lucide-react';
import PremiumOverviewTab from './PremiumOverviewTab';
import PremiumCalculatorTab from './PremiumCalculatorTab';
import AdvancedArbitrageTools from './AdvancedArbitrageTools';
import ReportingExports from './ReportingExports';
import SubscriptionManagement from './SubscriptionManagement';

const PremiumTabsNav = () => {
  return (
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
        <PremiumOverviewTab />
      </TabsContent>
      
      <TabsContent value="calculator">
        <PremiumCalculatorTab />
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
  );
};

export default PremiumTabsNav;
