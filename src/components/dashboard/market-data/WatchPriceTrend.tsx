
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PriceTrendChart from '../pricing-calculator/PriceTrendChart';

interface WatchPriceTrendProps {
  selectedWatch: {
    brand: string;
    model: string;
    reference: string;
  };
  chartData: { date: string; price: number }[];
}

const WatchPriceTrend = ({ selectedWatch, chartData }: WatchPriceTrendProps) => {
  const [timeRange, setTimeRange] = useState('1Y');

  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{selectedWatch.brand} {selectedWatch.model}</span>
          <Badge variant="outline" className="ml-2">Ref. {selectedWatch.reference}</Badge>
        </CardTitle>
        <CardDescription>
          Market price over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="1Y" className="mb-4">
          <TabsList>
            <TabsTrigger value="1M" onClick={() => setTimeRange('1M')}>1M</TabsTrigger>
            <TabsTrigger value="3M" onClick={() => setTimeRange('3M')}>3M</TabsTrigger>
            <TabsTrigger value="6M" onClick={() => setTimeRange('6M')}>6M</TabsTrigger>
            <TabsTrigger value="1Y" onClick={() => setTimeRange('1Y')}>1Y</TabsTrigger>
            <TabsTrigger value="ALL" onClick={() => setTimeRange('ALL')}>All</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <PriceTrendChart 
          data={chartData}
          height="300px"
          showReferenceLine={false}
        />
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Data sourced from WatchCharts API and market aggregators
      </CardFooter>
    </Card>
  );
};

export default WatchPriceTrend;
