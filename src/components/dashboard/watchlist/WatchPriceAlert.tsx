
import { Switch } from '@/components/ui/switch';

interface WatchPriceAlertProps {
  alertEnabled: boolean;
  alertPrice: number;
  formatCurrency: (value: number) => string;
  onToggleAlert: () => void;
}

const WatchPriceAlert = ({ 
  alertEnabled, 
  alertPrice, 
  formatCurrency, 
  onToggleAlert 
}: WatchPriceAlertProps) => {
  if (!alertEnabled) return null;

  return (
    <div className="mt-4 p-3 bg-muted rounded-md flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">Price Alert</p>
        <p className="text-sm text-muted-foreground">
          Alert when price falls below {formatCurrency(alertPrice)}
        </p>
      </div>
      <Switch checked={alertEnabled} onCheckedChange={onToggleAlert} />
    </div>
  );
};

export default WatchPriceAlert;
