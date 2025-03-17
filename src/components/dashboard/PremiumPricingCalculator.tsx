
import { useState } from 'react';
import { 
  usePremiumPricingCalculator,
  WatchModel
} from '@/services/DataProcessingService';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WatchSelector from './pricing-calculator/WatchSelector';
import ConditionSelector, { WatchCondition } from './pricing-calculator/ConditionSelector';
import CompletenessOptions from './pricing-calculator/CompletenessOptions';
import PriceAnalysisResult from './pricing-calculator/PriceAnalysisResult';
import EmptyAnalysisState from './pricing-calculator/EmptyAnalysisState';
import CalculateButton from './pricing-calculator/CalculateButton';
import { mockWatches } from './pricing-calculator/MockWatchData';

const PremiumPricingCalculator = () => {
  const [selectedWatch, setSelectedWatch] = useState<WatchModel | null>(null);
  const [condition, setCondition] = useState<WatchCondition>('excellent');
  const [hasBox, setHasBox] = useState(true);
  const [hasPapers, setHasPapers] = useState(true);
  const [hasServiceHistory, setHasServiceHistory] = useState(false);
  
  const { result, isCalculating, calculatePrice } = usePremiumPricingCalculator();
  
  const handleCalculate = () => {
    if (selectedWatch) {
      calculatePrice(
        selectedWatch,
        condition,
        hasBox,
        hasPapers,
        hasServiceHistory
      );
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Premium Pricing Calculator</CardTitle>
          <CardDescription>
            Get accurate price estimates based on condition and completeness
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <WatchSelector 
            watches={mockWatches} 
            onSelectWatch={setSelectedWatch} 
          />
          
          <ConditionSelector 
            condition={condition} 
            onConditionChange={setCondition} 
          />
          
          <CompletenessOptions 
            hasBox={hasBox}
            hasPapers={hasPapers}
            hasServiceHistory={hasServiceHistory}
            onBoxChange={setHasBox}
            onPapersChange={setHasPapers}
            onServiceHistoryChange={setHasServiceHistory}
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <CalculateButton 
            onClick={handleCalculate}
            disabled={!selectedWatch || isCalculating}
            isCalculating={isCalculating}
          />
        </CardFooter>
      </Card>
      
      <Card className={result ? "" : "bg-gray-50 dark:bg-gray-900/50"}>
        {result ? (
          <PriceAnalysisResult 
            result={result}
            watchBrand={selectedWatch?.brand}
            watchModel={selectedWatch?.model}
            watchReference={selectedWatch?.reference}
            onRecalculate={handleCalculate}
            isCalculating={isCalculating}
          />
        ) : (
          <EmptyAnalysisState />
        )}
      </Card>
    </div>
  );
};

export default PremiumPricingCalculator;
