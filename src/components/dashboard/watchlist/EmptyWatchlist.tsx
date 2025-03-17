
import { Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EmptyWatchlist = () => {
  return (
    <Card className="text-center py-12">
      <CardContent>
        <p className="text-muted-foreground mb-4">Your watchlist is empty</p>
        <Button className="bg-watch-blue hover:bg-blue-600">
          <Plus className="mr-2 h-4 w-4" /> Add Your First Watch
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmptyWatchlist;
