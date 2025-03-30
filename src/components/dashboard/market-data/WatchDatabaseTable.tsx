
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface WatchData {
  id: number;
  brand: string;
  model: string;
  reference: string;
  retailPrice: number;
  marketPrice: number;
  premium: number;
  trend: string;
  trendValue: number;
}

interface WatchDatabaseTableProps {
  watchData: WatchData[];
  selectedWatch: WatchData;
  formatCurrency: (value: number) => string;
  onSelectWatch: (watch: WatchData) => void;
}

const WatchDatabaseTable = ({ 
  watchData, 
  selectedWatch, 
  formatCurrency, 
  onSelectWatch 
}: WatchDatabaseTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Watch Database</CardTitle>
        <CardDescription>
          Search and compare luxury watches across the market
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Brand</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Reference</TableHead>
              <TableHead className="text-right">Retail Price</TableHead>
              <TableHead className="text-right">Market Price</TableHead>
              <TableHead className="text-right">Premium</TableHead>
              <TableHead className="text-right">30d Trend</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {watchData.map((watch) => (
              <TableRow key={watch.id} className={selectedWatch.id === watch.id ? 'bg-muted' : ''}>
                <TableCell className="font-medium">{watch.brand}</TableCell>
                <TableCell>{watch.model}</TableCell>
                <TableCell>{watch.reference}</TableCell>
                <TableCell className="text-right">{formatCurrency(watch.retailPrice)}</TableCell>
                <TableCell className="text-right">{formatCurrency(watch.marketPrice)}</TableCell>
                <TableCell className="text-right">{watch.premium}%</TableCell>
                <TableCell className="text-right">
                  <span className={`flex items-center justify-end ${watch.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {watch.trend === 'up' ? (
                      <>
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        +{watch.trendValue}%
                      </>
                    ) : (
                      <>
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                        -{watch.trendValue}%
                      </>
                    )}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSelectWatch(watch)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default WatchDatabaseTable;
