
import { usePremium } from '@/hooks/use-premium';
import PremiumFeatureLock from './PremiumFeatureLock';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, FileSpreadsheet, FileJson, Printer, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const ReportingExports = () => {
  const { canAccess } = usePremium();
  const { toast } = useToast();
  
  const handleExport = (type: string) => {
    toast({
      title: "Export Started",
      description: `Your ${type} export is being generated and will download shortly.`,
    });
  };
  
  const handleSchedule = () => {
    toast({
      title: "Report Scheduled",
      description: "Your weekly report has been scheduled and will be sent to your email.",
    });
  };
  
  if (!canAccess('reporting')) {
    return (
      <PremiumFeatureLock 
        featureName="Premium Reporting & Exports" 
        description="Generate detailed PDF reports, export data in multiple formats, and schedule automated reports delivery."
      />
    );
  }
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="reports">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-4">
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="exports">Data Exports</TabsTrigger>
          <TabsTrigger value="schedule">Scheduling</TabsTrigger>
        </TabsList>
        
        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Arbitrage Report</CardTitle>
                <CardDescription>
                  Detailed analysis of arbitrage opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="text-sm space-y-1">
                  <li>• Top arbitrage opportunities</li>
                  <li>• Risk assessment</li>
                  <li>• Fee breakdown</li>
                  <li>• Market analysis</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleExport('arbitrage report')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Generate PDF
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Market Report</CardTitle>
                <CardDescription>
                  In-depth market trends and analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="text-sm space-y-1">
                  <li>• Price trends by brand</li>
                  <li>• Market volume analysis</li>
                  <li>• Regional price differences</li>
                  <li>• Future price predictions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleExport('market report')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Generate PDF
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Portfolio Analysis</CardTitle>
                <CardDescription>
                  Performance analysis of your collection
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="text-sm space-y-1">
                  <li>• Portfolio valuation</li>
                  <li>• Performance metrics</li>
                  <li>• Selling recommendations</li>
                  <li>• Acquisition suggestions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleExport('portfolio analysis')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Generate PDF
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="exports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Export Options</CardTitle>
              <CardDescription>
                Export your data in various formats for external analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Data to Export</Label>
                  <Select defaultValue="arbitrage">
                    <SelectTrigger>
                      <SelectValue placeholder="Select data type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arbitrage">Arbitrage Opportunities</SelectItem>
                      <SelectItem value="priceHistory">Price History</SelectItem>
                      <SelectItem value="watchlist">Watchlist</SelectItem>
                      <SelectItem value="marketData">Market Data</SelectItem>
                      <SelectItem value="portfolioData">Portfolio Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Time Range</Label>
                  <Select defaultValue="3months">
                    <SelectTrigger>
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="1month">Last month</SelectItem>
                      <SelectItem value="3months">Last 3 months</SelectItem>
                      <SelectItem value="6months">Last 6 months</SelectItem>
                      <SelectItem value="1year">Last year</SelectItem>
                      <SelectItem value="all">All time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator className="my-2" />
                
                <div className="space-y-2">
                  <Label>Export Format</Label>
                  <RadioGroup defaultValue="csv">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="csv" id="csv" />
                      <Label htmlFor="csv" className="flex items-center">
                        <FileSpreadsheet className="mr-2 h-4 w-4" />
                        CSV
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="excel" id="excel" />
                      <Label htmlFor="excel" className="flex items-center">
                        <FileSpreadsheet className="mr-2 h-4 w-4" />
                        Excel
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="json" id="json" />
                      <Label htmlFor="json" className="flex items-center">
                        <FileJson className="mr-2 h-4 w-4" />
                        JSON
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pdf" id="pdf" />
                      <Label htmlFor="pdf" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        PDF
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-watch-blue hover:bg-blue-600"
                onClick={() => handleExport('data')}
              >
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>
                Set up automated report delivery to your email
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Report Type</Label>
                  <Select defaultValue="arbitrage">
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arbitrage">Arbitrage Opportunities</SelectItem>
                      <SelectItem value="market">Market Analysis</SelectItem>
                      <SelectItem value="portfolio">Portfolio Performance</SelectItem>
                      <SelectItem value="watchlist">Watchlist Updates</SelectItem>
                      <SelectItem value="comprehensive">Comprehensive Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Frequency</Label>
                  <Select defaultValue="weekly">
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Format</Label>
                  <Select defaultValue="pdf">
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="both">Both PDF & Excel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleExport('test report')}
              >
                <Printer className="mr-2 h-4 w-4" />
                Send Test Report
              </Button>
              <Button 
                className="w-full bg-watch-blue hover:bg-blue-600"
                onClick={handleSchedule}
              >
                <Clock className="mr-2 h-4 w-4" />
                Schedule Reports
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportingExports;
