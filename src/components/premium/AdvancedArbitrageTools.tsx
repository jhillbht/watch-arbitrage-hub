
import { usePremium } from '@/hooks/use-premium';
import PremiumFeatureLock from './PremiumFeatureLock';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Calculator, FileDown, Share } from 'lucide-react';
import { useState } from 'react';
import { formatCurrency, formatPercent } from '@/utils/formatters';

interface ArbitrageCalculation {
  buyPrice: number;
  sellPrice: number;
  importDuty: number;
  shippingCost: number;
  platformFee: number;
  insurance: number;
  currencyConversionFee: number;
  totalCost: number;
  profit: number;
  roi: number;
}

const AdvancedArbitrageTools = () => {
  const { canAccess } = usePremium();
  
  const [buyPrice, setBuyPrice] = useState(10000);
  const [sellPrice, setSellPrice] = useState(12000);
  const [importDuty, setImportDuty] = useState(5);
  const [shippingCost, setShippingCost] = useState(250);
  const [platformFee, setPlatformFee] = useState(3);
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [calculation, setCalculation] = useState<ArbitrageCalculation | null>(null);
  
  const calculateArbitrage = () => {
    const importDutyAmount = (buyPrice * importDuty) / 100;
    const platformFeeAmount = (sellPrice * platformFee) / 100;
    const insuranceAmount = includeInsurance ? (buyPrice * 1) / 100 : 0; // 1% insurance
    const currencyConversionFee = (buyPrice * 2) / 100; // 2% currency conversion fee
    
    const totalCost = buyPrice + importDutyAmount + shippingCost + insuranceAmount + currencyConversionFee;
    const profit = sellPrice - totalCost - platformFeeAmount;
    const roi = (profit / totalCost) * 100;
    
    setCalculation({
      buyPrice,
      sellPrice,
      importDuty: importDutyAmount,
      shippingCost,
      platformFee: platformFeeAmount,
      insurance: insuranceAmount,
      currencyConversionFee,
      totalCost,
      profit,
      roi
    });
  };
  
  if (!canAccess('arbitrageTools')) {
    return (
      <PremiumFeatureLock 
        featureName="Advanced Arbitrage Tools" 
        description="Calculate profit with custom fees, taxes, and shipping costs. Access market depth analysis and get personalized arbitrage recommendations."
      />
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Arbitrage Profit Calculator</CardTitle>
          <CardDescription>
            Factor in all costs to accurately predict your profits
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Buy Price</Label>
            <Input 
              type="number" 
              value={buyPrice} 
              onChange={(e) => setBuyPrice(Number(e.target.value))}
              min={0}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Sell Price</Label>
            <Input 
              type="number" 
              value={sellPrice} 
              onChange={(e) => setSellPrice(Number(e.target.value))}
              min={0}
            />
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Import Duty (%)</Label>
              <span className="text-sm text-muted-foreground">{importDuty}%</span>
            </div>
            <Slider 
              value={[importDuty]} 
              onValueChange={(value) => setImportDuty(value[0])} 
              max={25} 
              step={0.5}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Shipping Cost</Label>
            <Input 
              type="number" 
              value={shippingCost} 
              onChange={(e) => setShippingCost(Number(e.target.value))}
              min={0}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Platform Fee (%)</Label>
              <span className="text-sm text-muted-foreground">{platformFee}%</span>
            </div>
            <Slider 
              value={[platformFee]} 
              onValueChange={(value) => setPlatformFee(value[0])} 
              max={20} 
              step={0.5}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch 
              id="insurance" 
              checked={includeInsurance}
              onCheckedChange={setIncludeInsurance}
            />
            <Label htmlFor="insurance">Include Insurance (1%)</Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-watch-blue hover:bg-blue-600"
            onClick={calculateArbitrage}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Profit
          </Button>
        </CardFooter>
      </Card>
      
      {calculation ? (
        <Card>
          <CardHeader>
            <CardTitle>Profit Analysis</CardTitle>
            <CardDescription>
              Detailed breakdown of costs and profits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-4 rounded-md text-center">
              <div className="text-2xl font-bold mb-1">
                {formatCurrency(calculation.profit)}
              </div>
              <div className="text-sm text-muted-foreground">
                Estimated Profit
              </div>
              <div className={`mt-1 text-sm ${calculation.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                ROI: {calculation.roi.toFixed(2)}%
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium">Cost Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Purchase Price</span>
                  <span>{formatCurrency(calculation.buyPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Import Duty</span>
                  <span>{formatCurrency(calculation.importDuty)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatCurrency(calculation.shippingCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance</span>
                  <span>{formatCurrency(calculation.insurance)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Currency Conversion</span>
                  <span>{formatCurrency(calculation.currencyConversionFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span>{formatCurrency(calculation.platformFee)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total Cost</span>
                  <span>{formatCurrency(calculation.totalCost)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Sell Price</span>
                  <span>{formatCurrency(calculation.sellPrice)}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <FileDown className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <div className="h-full flex items-center justify-center p-6 text-center text-muted-foreground">
            Enter values and calculate to see profit analysis
          </div>
        </Card>
      )}
    </div>
  );
};

export default AdvancedArbitrageTools;
