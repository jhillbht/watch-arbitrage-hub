
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface CompletenessOptionsProps {
  hasBox: boolean;
  hasPapers: boolean;
  hasServiceHistory: boolean;
  onBoxChange: (checked: boolean) => void;
  onPapersChange: (checked: boolean) => void;
  onServiceHistoryChange: (checked: boolean) => void;
}

const CompletenessOptions = ({
  hasBox,
  hasPapers,
  hasServiceHistory,
  onBoxChange,
  onPapersChange,
  onServiceHistoryChange
}: CompletenessOptionsProps) => {
  return (
    <div className="space-y-2">
      <Label>Completeness</Label>
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="has-box" 
            checked={hasBox}
            onCheckedChange={(checked) => onBoxChange(checked as boolean)}
          />
          <Label htmlFor="has-box" className="cursor-pointer">
            Original Box
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="has-papers" 
            checked={hasPapers}
            onCheckedChange={(checked) => onPapersChange(checked as boolean)}
          />
          <Label htmlFor="has-papers" className="cursor-pointer">
            Original Papers/Certificate
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="has-service" 
            checked={hasServiceHistory}
            onCheckedChange={(checked) => onServiceHistoryChange(checked as boolean)}
          />
          <Label htmlFor="has-service" className="cursor-pointer">
            Service History Documentation
          </Label>
        </div>
      </div>
    </div>
  );
};

export default CompletenessOptions;
