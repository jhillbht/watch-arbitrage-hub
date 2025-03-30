
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Calculator } from 'lucide-react';

interface ArbitrageCalculatorFormProps {
  buyPrice: number;
  setBuyPrice: (value: number) => void;
  sellPrice: number;
  setSellPrice: (value: number) => void;
  importDuty: number;
  setImportDuty: (value: number) => void;
  shippingCost: number;
  setShippingCost: (value: number) => void;
  platformFee: number;
  setPlatformFee: (value: number) => void;
  includeInsurance: boolean;
  setIncludeInsurance: (value: boolean) => void;
  onCalculate: () => void;
}

const ArbitrageCalculatorForm = ({
  buyPrice,
  setBuyPrice,
  sellPrice,
  setSellPrice,
  importDuty,
  setImportDuty,
  shippingCost,
  setShippingCost,
  platformFee,
  setPlatformFee,
  includeInsurance,
  setIncludeInsurance,
  onCalculate
}: ArbitrageCalculatorFormProps) => {
  return (
    <div className="space-y-4">
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

      <Button 
        className="w-full bg-watch-blue hover:bg-blue-600"
        onClick={onCalculate}
      >
        <Calculator className="mr-2 h-4 w-4" />
        Calculate Profit
      </Button>
    </div>
  );
};

export default ArbitrageCalculatorForm;
