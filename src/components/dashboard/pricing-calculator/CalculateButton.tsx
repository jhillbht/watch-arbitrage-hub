
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface CalculateButtonProps {
  onClick: () => void;
  disabled: boolean;
  isCalculating: boolean;
}

const CalculateButton = ({ onClick, disabled, isCalculating }: CalculateButtonProps) => {
  return (
    <Button 
      onClick={onClick} 
      disabled={disabled}
      className="bg-watch-blue hover:bg-blue-600"
    >
      {isCalculating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Calculating...
        </>
      ) : (
        "Calculate Price"
      )}
    </Button>
  );
};

export default CalculateButton;
