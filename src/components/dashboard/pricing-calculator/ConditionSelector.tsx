
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type WatchCondition = 'mint' | 'excellent' | 'good' | 'fair' | 'poor';

interface ConditionSelectorProps {
  condition: WatchCondition;
  onConditionChange: (condition: WatchCondition) => void;
}

const ConditionSelector = ({ condition, onConditionChange }: ConditionSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="condition-select">Condition</Label>
      <Select 
        value={condition}
        onValueChange={(value: WatchCondition) => onConditionChange(value)}
      >
        <SelectTrigger id="condition-select">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mint">Mint - Like New</SelectItem>
          <SelectItem value="excellent">Excellent - Minor Wear</SelectItem>
          <SelectItem value="good">Good - Visible Wear</SelectItem>
          <SelectItem value="fair">Fair - Significant Wear</SelectItem>
          <SelectItem value="poor">Poor - Heavy Wear/Damage</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ConditionSelector;
export type { WatchCondition };
