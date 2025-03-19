
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CalculateButtonProps {
  onClick: () => void;
  disabled: boolean;
  isCalculating: boolean;
}

const CalculateButton = ({ onClick, disabled, isCalculating }: CalculateButtonProps) => {
  const { toast } = useToast();
  
  const handleClick = () => {
    if (disabled) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields before calculating",
        variant: "destructive",
      });
      return;
    }
    
    onClick();
  };
  
  return (
    <Button 
      onClick={handleClick} 
      disabled={isCalculating}
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
