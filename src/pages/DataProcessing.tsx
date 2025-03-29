
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  useDataCollection
} from '@/services/data-processing/DataCollectionService'; 
import { 
  useArbitrageAnalysis 
} from '@/services/data-processing/ArbitrageService';
import DataPipelineTab from '@/components/data-processing/DataPipelineTab';
import ArbitrageTab from '@/components/data-processing/ArbitrageTab';
import PricingTab from '@/components/data-processing/PricingTab';
import AlertsTab from '@/components/data-processing/AlertsTab';

const DataProcessing = () => {
  const { isPolling, lastUpdated, error, startPolling, stopPolling } = useDataCollection();
  const { opportunities, isAnalyzing, analyzeArbitrageOpportunities } = useArbitrageAnalysis();
  const [activeTab, setActiveTab] = useState('pipeline');
  
  const formatDateTime = (date: Date | null) => {
    if (!date) return 'Never';
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Data Processing Pipeline</h1>
        <p className="text-muted-foreground max-w-3xl">
          WatchArbitrage Pro's data pipeline collects, processes, and analyzes watch market data to identify arbitrage opportunities and provide pricing insights.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="pipeline">Data Pipeline</TabsTrigger>
          <TabsTrigger value="arbitrage">Arbitrage Analysis</TabsTrigger>
          <TabsTrigger value="pricing">Premium Pricing</TabsTrigger>
          <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
        </TabsList>
        
        {/* Data Pipeline Tab */}
        <TabsContent value="pipeline" className="space-y-6">
          <DataPipelineTab 
            isPolling={isPolling}
            lastUpdated={lastUpdated}
            error={error}
            startPolling={startPolling}
            stopPolling={stopPolling}
            formatDateTime={formatDateTime}
          />
        </TabsContent>
        
        {/* Arbitrage Analysis Tab */}
        <TabsContent value="arbitrage" className="space-y-6">
          <ArbitrageTab 
            isAnalyzing={isAnalyzing}
            analyzeArbitrageOpportunities={analyzeArbitrageOpportunities}
          />
        </TabsContent>
        
        {/* Premium Pricing Calculator Tab */}
        <TabsContent value="pricing" className="space-y-6">
          <PricingTab />
        </TabsContent>
        
        {/* Price Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <AlertsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataProcessing;
