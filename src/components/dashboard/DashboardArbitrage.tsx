
import { useState } from 'react';
import { Filter, SlidersHorizontal, TrendingUp, ExternalLink, ArrowRight, DollarSign, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';

// Mock data
const arbitrageOpportunities = [
  {
    id: 1,
    brand: 'Rolex',
    model: 'Daytona',
    reference: '116500LN',
    buyPrice: 32500,
    buyPlatform: 'WatchBox',
    buyLocation: 'Switzerland',
    sellPrice: 35800,
    sellPlatform: 'Chrono24',
    sellLocation: 'United States',
    roi: 8.5,
    potentialProfit: 2700,
    fees: {
      import: 400,
      shipping: 250,
      platform: 1250,
      tax: 890
    },
    confidence: 'high',
    details: 'White dial, full set with box and papers, unworn condition with stickers.'
  },
  {
    id: 2,
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    buyPrice: 126000,
    buyPlatform: 'Private Seller',
    buyLocation: 'Germany',
    sellPrice: 142000,
    sellPlatform: 'Watchfinder',
    sellLocation: 'United Kingdom',
    roi: 11.2,
    potentialProfit: 12500,
    fees: {
      import: 2800,
      shipping: 600,
      platform: 4900,
      tax: 3200
    },
    confidence: 'medium',
    details: 'Blue dial, box and papers from 2019, excellent condition with minor signs of wear.'
  },
  {
    id: 3,
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15202ST.OO.1240ST.01',
    buyPrice: 85000,
    buyPlatform: 'Dubai Watch Week',
    buyLocation: 'UAE',
    sellPrice: 97000,
    sellPlatform: 'Bob\'s Watches',
    sellLocation: 'United States',
    roi: 12.8,
    potentialProfit: 9500,
    fees: {
      import: 950,
      shipping: 550,
      platform: 3400,
      tax: 2600
    },
    confidence: 'high',
    details: 'Jumbo model, blue dial, box and papers, excellent condition.'
  },
  {
    id: 4,
    brand: 'Richard Mille',
    model: 'RM 011',
    reference: 'RM011 Ti',
    buyPrice: 189000,
    buyPlatform: 'Private Collector',
    buyLocation: 'Hong Kong',
    sellPrice: 225000,
    sellPlatform: 'Sotheby\'s',
    sellLocation: 'United States',
    roi: 15.4,
    potentialProfit: 28000,
    fees: {
      import: 4200,
      shipping: 1800,
      platform: 9000,
      tax: 6000
    },
    confidence: 'medium',
    details: 'Felipe Massa edition, full set, excellent condition.'
  },
  {
    id: 5,
    brand: 'Omega',
    model: 'Speedmaster Moonwatch',
    reference: '310.30.42.50.01.001',
    buyPrice: 5900,
    buyPlatform: 'Crown & Caliber',
    buyLocation: 'United States',
    sellPrice: 7200,
    sellPlatform: 'Watchfinder',
    sellLocation: 'United Kingdom',
    roi: 17.9,
    potentialProfit: 800,
    fees: {
      import: 180,
      shipping: 120,
      platform: 300,
      tax: 250
    },
    confidence: 'high',
    details: 'Sapphire sandwich, full set, unworn condition.'
  }
];

const DashboardArbitrage = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(arbitrageOpportunities[0]);
  const [filterBrand, setFilterBrand] = useState<string>('all');
  const [filterROI, setFilterROI] = useState<number[]>([0, 20]);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const filteredOpportunities = arbitrageOpportunities.filter(opportunity => {
    const matchesBrand = filterBrand === 'all' || opportunity.brand === filterBrand;
    const matchesROI = opportunity.roi >= filterROI[0] && opportunity.roi <= filterROI[1];
    return matchesBrand && matchesROI;
  });

  const handleOpportunitySelect = (opportunity: typeof arbitrageOpportunities[0]) => {
    setSelectedOpportunity(opportunity);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Arbitrage Opportunities</h2>
        <Button variant="outline" className="flex items-center">
          <Filter className="mr-2 h-4 w-4" /> Advanced Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Filters</CardTitle>
              <CardDescription>Refine your arbitrage opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Brand</label>
                <Select value={filterBrand} onValueChange={setFilterBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    <SelectItem value="Rolex">Rolex</SelectItem>
                    <SelectItem value="Patek Philippe">Patek Philippe</SelectItem>
                    <SelectItem value="Audemars Piguet">Audemars Piguet</SelectItem>
                    <SelectItem value="Richard Mille">Richard Mille</SelectItem>
                    <SelectItem value="Omega">Omega</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">ROI Range (%)</label>
                <div className="pt-4 px-2">
                  <Slider 
                    defaultValue={[0, 20]} 
                    max={30} 
                    step={0.5}
                    value={filterROI}
                    onValueChange={setFilterROI}
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{filterROI[0]}%</span>
                    <span>{filterROI[1]}%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Minimum Profit</label>
                <Select defaultValue="1000">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any Amount</SelectItem>
                    <SelectItem value="1000">$1,000+</SelectItem>
                    <SelectItem value="5000">$5,000+</SelectItem>
                    <SelectItem value="10000">$10,000+</SelectItem>
                    <SelectItem value="25000">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Buy Location</label>
                <Select defaultValue="any">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Location</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="middle-east">Middle East</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Sell Location</label>
                <Select defaultValue="any">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Location</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="middle-east">Middle East</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Filters</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                Top ROI Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {arbitrageOpportunities
                  .sort((a, b) => b.roi - a.roi)
                  .slice(0, 3)
                  .map(opportunity => (
                    <div 
                      key={opportunity.id} 
                      className="flex justify-between items-center p-3 bg-muted rounded cursor-pointer hover:bg-accent transition-colors"
                      onClick={() => handleOpportunitySelect(opportunity)}
                    >
                      <div>
                        <p className="font-medium">{opportunity.brand} {opportunity.model}</p>
                        <p className="text-sm text-muted-foreground">Ref. {opportunity.reference}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        +{opportunity.roi}% ROI
                      </Badge>
                    </div>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>
                {selectedOpportunity.brand} {selectedOpportunity.model}
                <Badge className="ml-2" variant="outline">Ref. {selectedOpportunity.reference}</Badge>
              </CardTitle>
              <CardDescription>
                Detail breakdown of this arbitrage opportunity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1 bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Potential ROI</div>
                  <div className="text-2xl font-bold text-green-600">+{selectedOpportunity.roi}%</div>
                </div>
                <div className="space-y-1 bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Est. Profit</div>
                  <div className="text-2xl font-bold">{formatCurrency(selectedOpportunity.potentialProfit)}</div>
                </div>
                <div className="space-y-1 bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Confidence</div>
                  <div className="text-2xl font-bold capitalize">
                    {selectedOpportunity.confidence === 'high' ? (
                      <span className="text-green-600">High</span>
                    ) : selectedOpportunity.confidence === 'medium' ? (
                      <span className="text-amber-600">Medium</span>
                    ) : (
                      <span className="text-red-600">Low</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6 p-4 bg-muted rounded-md">
                <div className="text-center md:text-left">
                  <div className="text-sm text-muted-foreground">Buy From</div>
                  <div className="font-medium">{selectedOpportunity.buyPlatform}</div>
                  <div className="text-sm">{selectedOpportunity.buyLocation}</div>
                  <div className="text-xl font-bold mt-1">{formatCurrency(selectedOpportunity.buyPrice)}</div>
                </div>
                
                <div className="self-center">
                  <ArrowRight className="h-8 w-8 text-muted-foreground" />
                </div>
                
                <div className="text-center md:text-right">
                  <div className="text-sm text-muted-foreground">Sell On</div>
                  <div className="font-medium">{selectedOpportunity.sellPlatform}</div>
                  <div className="text-sm">{selectedOpportunity.sellLocation}</div>
                  <div className="text-xl font-bold mt-1 text-green-600">{formatCurrency(selectedOpportunity.sellPrice)}</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Cost Breakdown</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-background p-3 rounded-md border">
                    <div className="text-sm text-muted-foreground">Import Duty</div>
                    <div className="font-medium">{formatCurrency(selectedOpportunity.fees.import)}</div>
                  </div>
                  <div className="bg-background p-3 rounded-md border">
                    <div className="text-sm text-muted-foreground">Shipping</div>
                    <div className="font-medium">{formatCurrency(selectedOpportunity.fees.shipping)}</div>
                  </div>
                  <div className="bg-background p-3 rounded-md border">
                    <div className="text-sm text-muted-foreground">Platform Fee</div>
                    <div className="font-medium">{formatCurrency(selectedOpportunity.fees.platform)}</div>
                  </div>
                  <div className="bg-background p-3 rounded-md border">
                    <div className="text-sm text-muted-foreground">Sales Tax</div>
                    <div className="font-medium">{formatCurrency(selectedOpportunity.fees.tax)}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Watch Details</h4>
                <p className="text-sm">{selectedOpportunity.details}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
              <Button className="w-full sm:w-auto bg-watch-blue hover:bg-blue-600">
                <ExternalLink className="mr-2 h-4 w-4" /> View Buy Listing
              </Button>
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                <DollarSign className="mr-2 h-4 w-4" /> View Sell Options
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>All Opportunities ({filteredOpportunities.length})</CardTitle>
              <CardDescription>
                Sorted by highest ROI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Brand & Model</TableHead>
                    <TableHead className="hidden md:table-cell">Reference</TableHead>
                    <TableHead className="text-right">Buy Price</TableHead>
                    <TableHead className="text-right">Sell Price</TableHead>
                    <TableHead className="text-right">ROI</TableHead>
                    <TableHead className="text-right">Profit</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOpportunities
                    .sort((a, b) => b.roi - a.roi)
                    .map((opportunity) => (
                      <TableRow 
                        key={opportunity.id}
                        className={selectedOpportunity.id === opportunity.id ? 'bg-muted' : ''}
                      >
                        <TableCell className="font-medium">
                          {opportunity.brand} {opportunity.model}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{opportunity.reference}</TableCell>
                        <TableCell className="text-right">{formatCurrency(opportunity.buyPrice)}</TableCell>
                        <TableCell className="text-right">{formatCurrency(opportunity.sellPrice)}</TableCell>
                        <TableCell className="text-right text-green-600">+{opportunity.roi}%</TableCell>
                        <TableCell className="text-right">{formatCurrency(opportunity.potentialProfit)}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleOpportunitySelect(opportunity)}
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
        </div>
      </div>
    </div>
  );
};

export default DashboardArbitrage;
