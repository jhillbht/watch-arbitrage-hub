
import React, { useState, useMemo } from 'react';
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
  
  // Filter chart data based on selected time range
  const filteredChartData = useMemo(() => {
    const now = new Date();
    let filterDate = new Date();
    
    switch (timeRange) {
      case '1M':
        filterDate.setMonth(now.getMonth() - 1);
        break;
      case '3M':
        filterDate.setMonth(now.getMonth() - 3);
        break;
      case '6M':
        filterDate.setMonth(now.getMonth() - 6);
        break;
      case '1Y':
        filterDate.setFullYear(now.getFullYear() - 1);
        break;
      case 'ALL':
      default:
        // No filtering for "ALL" option
        return chartData;
    }
    
    // Convert date strings to Date objects for comparison
    return chartData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= filterDate;
    });
  }, [chartData, timeRange]);

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
        <Tabs defaultValue={timeRange} className="mb-4" value={timeRange} onValueChange={setTimeRange}>
          <TabsList>
            <TabsTrigger value="1M">1M</TabsTrigger>
            <TabsTrigger value="3M">3M</TabsTrigger>
            <TabsTrigger value="6M">6M</TabsTrigger>
            <TabsTrigger value="1Y">1Y</TabsTrigger>
            <TabsTrigger value="ALL">All</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <PriceTrendChart 
          data={filteredChartData}
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
