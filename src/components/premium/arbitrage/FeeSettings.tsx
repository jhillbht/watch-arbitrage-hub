
import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface FeeSettingsProps {
  importDuty: number;
  setImportDuty: (value: number) => void;
  platformFee: number;
  setPlatformFee: (value: number) => void;
  shippingCost: number;
  setShippingCost: (value: number) => void;
  includeInsurance: boolean;
  setIncludeInsurance: (value: boolean) => void;
}

const FeeSettings = ({
  importDuty,
  setImportDuty,
  platformFee,
  setPlatformFee,
  shippingCost,
  setShippingCost,
  includeInsurance,
  setIncludeInsurance
}: FeeSettingsProps) => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default FeeSettings;
