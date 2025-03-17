
import { useState } from 'react';
import { Calculator, ClipboardCheck, FileDown, Lightbulb, Clock, Search, ChevronDown, Check, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

// Mock data for brands and models
const watchBrands = [
  { value: 'rolex', label: 'Rolex' },
  { value: 'patek', label: 'Patek Philippe' },
  { value: 'ap', label: 'Audemars Piguet' },
  { value: 'omega', label: 'Omega' },
  { value: 'richard_mille', label: 'Richard Mille' },
  { value: 'tudor', label: 'Tudor' },
  { value: 'cartier', label: 'Cartier' },
];

// Mock model data based on brand selection
const watchModels: Record<string, { value: string, label: string }[]> = {
  rolex: [
    { value: 'submariner', label: 'Submariner' },
    { value: 'daytona', label: 'Daytona' },
    { value: 'datejust', label: 'Datejust' },
    { value: 'gmt_master', label: 'GMT-Master II' },
    { value: 'sky_dweller', label: 'Sky-Dweller' },
  ],
  patek: [
    { value: 'nautilus', label: 'Nautilus' },
    { value: 'aquanaut', label: 'Aquanaut' },
    { value: 'calatrava', label: 'Calatrava' },
    { value: 'grand_complications', label: 'Grand Complications' },
  ],
  ap: [
    { value: 'royal_oak', label: 'Royal Oak' },
    { value: 'royal_oak_offshore', label: 'Royal Oak Offshore' },
    { value: 'royal_oak_concept', label: 'Royal Oak Concept' },
    { value: 'code_1159', label: 'Code 11.59' },
  ],
  omega: [
    { value: 'speedmaster', label: 'Speedmaster' },
    { value: 'seamaster', label: 'Seamaster' },
    { value: 'constellation', label: 'Constellation' },
    { value: 'de_ville', label: 'De Ville' },
  ],
  richard_mille: [
    { value: 'rm11', label: 'RM 11' },
    { value: 'rm27', label: 'RM 27' },
    { value: 'rm35', label: 'RM 35' },
    { value: 'rm67', label: 'RM 67' },
  ],
  tudor: [
    { value: 'black_bay', label: 'Black Bay' },
    { value: 'pelagos', label: 'Pelagos' },
    { value: 'royal', label: 'Royal' },
    { value: 'heritage', label: 'Heritage' },
  ],
  cartier: [
    { value: 'santos', label: 'Santos' },
    { value: 'tank', label: 'Tank' },
    { value: 'panthere', label: 'Panthère' },
    { value: 'ballon_bleu', label: 'Ballon Bleu' },
  ]
};

// Mock data for pricing analysis result
const mockPricingResult = {
  estimatedPrice: 15000,
  confidenceInterval: {
    low: 14200,
    high: 16100
  },
  recentSales: [
    { date: '2024-04-03', price: 15200, platform: 'Chrono24' },
    { date: '2024-03-28', price: 14850, platform: 'WatchBox' },
    { date: '2024-03-15', price: 15650, platform: 'Bob\'s Watches' },
  ],
  marketTrend: 'stable',
  liquidityScore: 8.5,
  demandIndex: 7.9,
  recommendedPricing: {
    quick: 14500,
    optimal: 15200,
    premium: 16000
  }
};

const DashboardPremiumTools = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [hasBox, setHasBox] = useState<string>('yes');
  const [hasPapers, setHasPapers] = useState<string>('yes');
  const [watchCondition, setWatchCondition] = useState<string>('excellent');
  const [productionYear, setProductionYear] = useState<string>('');
  const [reference, setReference] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);
  const [generatingPdf, setGeneratingPdf] = useState<boolean>(false);
  
  const { toast } = useToast();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    setSelectedModel('');
  };

  const handleCalculate = () => {
    if (!selectedBrand || !selectedModel) {
      toast({
        title: "Missing information",
        description: "Please select both brand and model to continue.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would call an API
    console.log('Calculating price for:', {
      brand: selectedBrand,
      model: selectedModel,
      hasBox,
      hasPapers,
      condition: watchCondition,
      year: productionYear,
      reference,
      notes: additionalNotes
    });
    
    // Show the results after a brief delay to simulate API call
    setTimeout(() => {
      setShowResults(true);
    }, 1000);
  };

  const handleGeneratePDF = () => {
    setGeneratingPdf(true);
    
    // Simulate PDF generation
    setTimeout(() => {
      setGeneratingPdf(false);
      toast({
        title: "PDF Report Generated",
        description: "Your pricing analysis report has been downloaded.",
      });
    }, 2000);
  };

  const resetForm = () => {
    setSelectedBrand('');
    setSelectedModel('');
    setHasBox('yes');
    setHasPapers('yes');
    setWatchCondition('excellent');
    setProductionYear('');
    setReference('');
    setAdditionalNotes('');
    setShowResults(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Premium Tools</h2>
          <p className="text-muted-foreground">
            Advanced pricing tools for Pro subscribers
          </p>
        </div>
      </div>

      <Tabs defaultValue="pricing-calculator" className="space-y-6">
        <TabsList className="grid w-full md:w-auto grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="pricing-calculator" className="flex gap-2 items-center">
            <Calculator className="h-4 w-4" /> Pricing Calculator
          </TabsTrigger>
          <TabsTrigger value="market-analysis" className="flex gap-2 items-center">
            <Search className="h-4 w-4" /> Market Analysis
          </TabsTrigger>
          <TabsTrigger value="arbitrage-finder" className="flex gap-2 items-center">
            <Lightbulb className="h-4 w-4" /> Arbitrage Finder
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="pricing-calculator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Pricing Calculator</CardTitle>
                  <CardDescription>
                    Get accurate market value estimates for luxury watches
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Select value={selectedBrand} onValueChange={handleBrandChange}>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {watchBrands.map((brand) => (
                          <SelectItem key={brand.value} value={brand.value}>
                            {brand.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Select 
                      value={selectedModel} 
                      onValueChange={setSelectedModel}
                      disabled={!selectedBrand}
                    >
                      <SelectTrigger id="model">
                        <SelectValue placeholder={selectedBrand ? "Select model" : "Select brand first"} />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedBrand && watchModels[selectedBrand]?.map((model) => (
                          <SelectItem key={model.value} value={model.value}>
                            {model.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reference">Reference Number</Label>
                    <Input 
                      id="reference" 
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      placeholder="e.g. 126610LN"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="year">Production Year</Label>
                    <Input 
                      id="year" 
                      value={productionYear}
                      onChange={(e) => setProductionYear(e.target.value)}
                      placeholder="e.g. 2020"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Condition</Label>
                    <RadioGroup value={watchCondition} onValueChange={setWatchCondition} className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unworn" id="unworn" />
                        <Label htmlFor="unworn" className="font-normal">Unworn</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="excellent" id="excellent" />
                        <Label htmlFor="excellent" className="font-normal">Excellent</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="good" />
                        <Label htmlFor="good" className="font-normal">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fair" id="fair" />
                        <Label htmlFor="fair" className="font-normal">Fair</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Original Box</Label>
                      <RadioGroup value={hasBox} onValueChange={setHasBox} className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="box-yes" />
                          <Label htmlFor="box-yes" className="font-normal">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="box-no" />
                          <Label htmlFor="box-no" className="font-normal">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Papers</Label>
                      <RadioGroup value={hasPapers} onValueChange={setHasPapers} className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="papers-yes" />
                          <Label htmlFor="papers-yes" className="font-normal">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="papers-no" />
                          <Label htmlFor="papers-no" className="font-normal">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea 
                      id="notes"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Special features, service history, etc."
                      className="h-24"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button 
                    className="w-full bg-watch-blue hover:bg-blue-600"
                    onClick={handleCalculate}
                  >
                    <Calculator className="mr-2 h-4 w-4" /> Calculate Market Price
                  </Button>
                  {showResults && (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={resetForm}
                    >
                      Reset Form
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              {!showResults ? (
                <Card className="h-full flex flex-col justify-center items-center p-8 text-center">
                  <ClipboardCheck className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Enter Watch Details</h3>
                  <p className="text-muted-foreground max-w-md">
                    Fill out the form on the left to receive a comprehensive pricing analysis based on current market data.
                  </p>
                </Card>
              ) : (
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Pricing Analysis Result</CardTitle>
                      <CardDescription>
                        Based on real-time market data and sales history
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={handleGeneratePDF}
                      disabled={generatingPdf}
                    >
                      {generatingPdf ? (
                        <>
                          <Clock className="h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" />
                          Export PDF
                        </>
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium text-muted-foreground">Estimated Market Value</h4>
                        <p className="text-3xl font-bold text-watch-blue">
                          {formatCurrency(mockPricingResult.estimatedPrice)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Range: {formatCurrency(mockPricingResult.confidenceInterval.low)} - {formatCurrency(mockPricingResult.confidenceInterval.high)}
                        </p>
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium text-muted-foreground">Liquidity Score</h4>
                        <div className="flex items-center">
                          <span className="text-3xl font-bold">{mockPricingResult.liquidityScore}/10</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          High liquidity, easy to sell
                        </p>
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium text-muted-foreground">Market Trend</h4>
                        <p className="text-2xl font-bold capitalize">{mockPricingResult.marketTrend}</p>
                        <p className="text-sm text-muted-foreground">
                          Based on 90-day price movement
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Recent Sales</h4>
                      <div className="rounded-md border overflow-hidden">
                        <table className="min-w-full divide-y divide-border">
                          <thead className="bg-muted">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Platform</th>
                              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase">Price</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {mockPricingResult.recentSales.map((sale, index) => (
                              <tr key={index}>
                                <td className="px-4 py-3 text-sm">
                                  {new Date(sale.date).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-3 text-sm">{sale.platform}</td>
                                <td className="px-4 py-3 text-sm text-right font-medium">
                                  {formatCurrency(sale.price)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Recommended Pricing Strategy</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-muted p-4 rounded-md">
                          <div className="text-sm font-medium">Quick Sale</div>
                          <div className="text-xl font-bold">{formatCurrency(mockPricingResult.recommendedPricing.quick)}</div>
                          <div className="text-sm text-muted-foreground">Sell within 7-14 days</div>
                        </div>
                        <div className="bg-muted p-4 rounded-md border-2 border-watch-blue">
                          <div className="text-sm font-medium text-watch-blue">Optimal Price</div>
                          <div className="text-xl font-bold">{formatCurrency(mockPricingResult.recommendedPricing.optimal)}</div>
                          <div className="text-sm text-muted-foreground">Sell within 30-45 days</div>
                        </div>
                        <div className="bg-muted p-4 rounded-md">
                          <div className="text-sm font-medium">Premium Price</div>
                          <div className="text-xl font-bold">{formatCurrency(mockPricingResult.recommendedPricing.premium)}</div>
                          <div className="text-sm text-muted-foreground">May take 60+ days to sell</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="text-sm font-medium mb-2">Additional Insights</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-sm">Box and papers add approximately 15% value premium for this model</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-sm">Excellent condition watches in this reference sell 22% faster than those in good condition</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-sm">This model has shown resilient value retention over the past 12 months</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="market-analysis">
          <Card>
            <CardHeader>
              <CardTitle>Market Analysis</CardTitle>
              <CardDescription>
                Coming soon - In-depth market analysis for premium subscribers
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-20">
              <Clock className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Feature Coming Soon</h3>
              <p className="text-muted-foreground max-w-md text-center">
                Our team is developing advanced market analysis tools. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="arbitrage-finder">
          <Card>
            <CardHeader>
              <CardTitle>Arbitrage Finder</CardTitle>
              <CardDescription>
                Coming soon - Automated arbitrage opportunity finder
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-20">
              <Clock className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Feature Coming Soon</h3>
              <p className="text-muted-foreground max-w-md text-center">
                Our team is developing an automated arbitrage finder tool. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPremiumTools;
