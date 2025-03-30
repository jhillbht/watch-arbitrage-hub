
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import MarketPriceCard from './MarketPriceCard';
import FeeSettings from './FeeSettings';

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
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <MarketPriceCard
          marketName="Source Market"
          price={buyPrice}
          setPrice={setBuyPrice}
          currency="USD"
          label="Buy Price"
        />
        
        <MarketPriceCard
          marketName="Target Market"
          price={sellPrice}
          setPrice={setSellPrice}
          currency="USD"
          label="Sell Price"
        />
      </div>
      
      <FeeSettings
        importDuty={importDuty}
        setImportDuty={setImportDuty}
        platformFee={platformFee}
        setPlatformFee={setPlatformFee}
        shippingCost={shippingCost}
        setShippingCost={setShippingCost}
        includeInsurance={includeInsurance}
        setIncludeInsurance={setIncludeInsurance}
      />

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
