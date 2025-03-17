
import { useState } from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { NotificationService } from '@/services/DataProcessingService';

interface PriceAlertFormProps {
  watchId: string;
  watchBrand: string;
  watchModel: string;
  currentPrice: number;
}

const PriceAlertForm = ({ 
  watchId, 
  watchBrand, 
  watchModel, 
  currentPrice 
}: PriceAlertFormProps) => {
  const { toast } = useToast();
  const [targetPrice, setTargetPrice] = useState<number>(currentPrice);
  const [direction, setDirection] = useState<'above' | 'below'>('below');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, you'd get the userId from your auth context
      const userId = 'mock-user-id';
      const result = await NotificationService.subscribeToAlerts(
        userId,
        watchId,
        targetPrice,
        direction
      );

      if (result.success) {
        toast({
          title: "Alert created!",
          description: `You'll be notified when ${watchBrand} ${watchModel} goes ${direction} $${targetPrice.toLocaleString()}`,
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to create alert",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Set Price Alert</CardTitle>
        <CardDescription>
          Get notified when {watchBrand} {watchModel} hits your target price
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="target-price">Target Price (USD)</Label>
            <Input
              id="target-price"
              type="number"
              value={targetPrice}
              onChange={(e) => setTargetPrice(Number(e.target.value))}
              min={1}
              step={100}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Alert Condition</Label>
            <RadioGroup 
              value={direction} 
              onValueChange={(value) => setDirection(value as 'above' | 'below')}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="below" id="below" />
                <Label htmlFor="below" className="cursor-pointer">
                  Price falls below target
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="above" id="above" />
                <Label htmlFor="above" className="cursor-pointer">
                  Price rises above target
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-watch-blue hover:bg-blue-600" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Alert..." : "Create Alert"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <p>Current price: ${currentPrice.toLocaleString()}</p>
        <p>{direction === 'below' ? '-' : '+'}{Math.abs(((targetPrice - currentPrice) / currentPrice) * 100).toFixed(1)}%</p>
      </CardFooter>
    </Card>
  );
};

export default PriceAlertForm;
