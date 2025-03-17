
import { Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PriceAlertForm from '@/components/dashboard/PriceAlertForm';

// Mock watch data for demonstration
const mockWatches = [
  {
    id: 'rolex-submariner-date',
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    currentPrice: 14800,
    imageUrl: 'https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-4.0.3'
  },
  {
    id: 'patek-philippe-nautilus',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    currentPrice: 150000,
    imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3'
  }
];

const AlertsTab = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Price Alert System</h2>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          <Bell className="mr-1 h-3 w-3" />
          8 Active Alerts
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockWatches.map(watch => (
          <PriceAlertForm
            key={watch.id}
            watchId={watch.id}
            watchBrand={watch.brand}
            watchModel={watch.model}
            currentPrice={watch.currentPrice}
          />
        ))}
      </div>
    </>
  );
};

export default AlertsTab;
