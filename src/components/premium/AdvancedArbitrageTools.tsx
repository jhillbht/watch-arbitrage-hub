
import { useState } from 'react';
import { usePremium } from '@/hooks/use-premium';
import PremiumFeatureLock from './PremiumFeatureLock';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ArbitrageCalculatorForm from './arbitrage/ArbitrageCalculatorForm';
import ProfitAnalysisCard, { ArbitrageCalculation } from './arbitrage/ProfitAnalysisCard';

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
        <CardContent>
          <ArbitrageCalculatorForm
            buyPrice={buyPrice}
            setBuyPrice={setBuyPrice}
            sellPrice={sellPrice}
            setSellPrice={setSellPrice}
            importDuty={importDuty}
            setImportDuty={setImportDuty}
            shippingCost={shippingCost}
            setShippingCost={setShippingCost}
            platformFee={platformFee}
            setPlatformFee={setPlatformFee}
            includeInsurance={includeInsurance}
            setIncludeInsurance={setIncludeInsurance}
            onCalculate={calculateArbitrage}
          />
        </CardContent>
      </Card>
      
      <ProfitAnalysisCard calculation={calculation} />
    </div>
  );
};

export default AdvancedArbitrageTools;
