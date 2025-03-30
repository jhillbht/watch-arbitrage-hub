
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface MarketComparisonItem {
  platform: string;
  price: number;
  location: string;
}

interface MarketOverviewProps {
  selectedWatch: {
    brand: string;
    model: string;
    reference: string;
    retailPrice: number;
    marketPrice: number;
    premium: number;
    trend: string;
    trendValue: number;
  };
  marketComparison: MarketComparisonItem[];
  formatCurrency: (value: number) => string;
}

const MarketOverview = ({ selectedWatch, marketComparison, formatCurrency }: MarketOverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>
          Current market data for {selectedWatch.brand} {selectedWatch.model}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Retail Price</p>
            <p className="text-xl font-semibold">{formatCurrency(selectedWatch.retailPrice)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Market Price</p>
            <p className="text-xl font-semibold">{formatCurrency(selectedWatch.marketPrice)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Premium</p>
            <p className="text-xl font-semibold">{selectedWatch.premium}%</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">30-Day Trend</p>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price movement over the last 30 days</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
            <p className="text-xl font-semibold flex items-center">
              {selectedWatch.trend === 'up' ? (
                <>
                  <ArrowUpRight className="h-5 w-5 text-green-500 mr-1" />
                  <span className="text-green-600">+{selectedWatch.trendValue}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="h-5 w-5 text-red-500 mr-1" />
                  <span className="text-red-600">-{selectedWatch.trendValue}%</span>
                </>
              )}
            </p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-sm font-medium mb-2">Market Comparison</h4>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marketComparison.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.platform}</TableCell>
                    <TableCell>{formatCurrency(item.price)}</TableCell>
                    <TableCell>{item.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
