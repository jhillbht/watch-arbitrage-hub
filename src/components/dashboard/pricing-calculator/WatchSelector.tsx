
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WatchModel } from '@/services/DataProcessingService';

interface WatchSelectorProps {
  watches: WatchModel[];
  onSelectWatch: (watch: WatchModel | null) => void;
}

const WatchSelector = ({ watches, onSelectWatch }: WatchSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="watch-select">Watch Model</Label>
      <Select 
        onValueChange={(value) => {
          const watch = watches.find(w => w.id === value);
          if (watch) onSelectWatch(watch);
        }}
      >
        <SelectTrigger id="watch-select">
          <SelectValue placeholder="Select a watch model" />
        </SelectTrigger>
        <SelectContent>
          {watches.map((watch) => (
            <SelectItem key={watch.id} value={watch.id}>
              {watch.brand} {watch.model} ({watch.reference})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default WatchSelector;
