
import { Bell, BellOff, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import WatchPriceChart from './WatchPriceChart';
import WatchPriceInfo from './WatchPriceInfo';
import WatchPriceAlert from './WatchPriceAlert';
import { WatchlistItem } from '@/types/watchlist';

interface WatchlistCardProps {
  watch: WatchlistItem;
  formatCurrency: (value: number) => string;
  onToggleAlert: (id: number) => void;
  onRemoveFromWatchlist: (id: number) => void;
}

const WatchlistCard = ({ 
  watch, 
  formatCurrency, 
  onToggleAlert, 
  onRemoveFromWatchlist 
}: WatchlistCardProps) => {
  return (
    <Card key={watch.id} className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div>
          <CardTitle className="text-lg">{watch.brand} {watch.model}</CardTitle>
          <CardDescription>Ref. {watch.reference}</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => onToggleAlert(watch.id)}
                >
                  {watch.alertEnabled ? (
                    <Bell className="h-4 w-4 text-watch-blue" />
                  ) : (
                    <BellOff className="h-4 w-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {watch.alertEnabled ? 'Disable price alert' : 'Enable price alert'}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit alert price</DropdownMenuItem>
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem 
                className="text-red-600"
                onClick={() => onRemoveFromWatchlist(watch.id)}
              >
                Remove from watchlist
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <WatchPriceChart 
          chartData={watch.chart}
          priceChangePercent={watch.priceChangePercent}
          formatCurrency={formatCurrency}
        />
        
        <WatchPriceInfo 
          currentPrice={watch.currentPrice}
          priceChangePercent={watch.priceChangePercent}
          formatCurrency={formatCurrency}
        />
        
        <WatchPriceAlert 
          alertEnabled={watch.alertEnabled}
          alertPrice={watch.alertPrice}
          formatCurrency={formatCurrency}
          onToggleAlert={() => onToggleAlert(watch.id)}
        />
      </CardContent>
    </Card>
  );
};

export default WatchlistCard;
