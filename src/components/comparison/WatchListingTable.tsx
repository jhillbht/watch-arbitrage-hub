
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatCurrency } from '@/utils/formatters';
import { Watch } from '@/types/watch';
import WatchArbitrageCell from './WatchArbitrageCell';
import { Skeleton } from '@/components/ui/skeleton';

interface WatchListingTableProps {
  watches: Watch[];
  isLoading?: boolean;
}

const WatchListingTable = ({ watches, isLoading = false }: WatchListingTableProps) => {
  const regionNames = {
    us: 'US',
    eu: 'Europe',
    uk: 'UK',
    jp: 'Japan',
    hk: 'Hong Kong'
  };

  const renderedSkeleton = (
    <TableRow>
      <TableCell colSpan={7} className="px-3 py-3">
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          ))}
        </div>
      </TableCell>
    </TableRow>
  );

  const noDataRow = (
    <TableRow>
      <TableCell colSpan={7} className="text-center py-10">
        <div className="text-muted-foreground">
          No watch data available. Please check back later.
        </div>
      </TableCell>
    </TableRow>
  );

  return (
    <div className="overflow-auto bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl">
      <Table>
        <TableHeader className="bg-black/60">
          <TableRow>
            <TableHead className="text-gray-300">Watch Model</TableHead>
            <TableHead className="text-gray-300 text-center">US</TableHead>
            <TableHead className="text-gray-300 text-center">Europe</TableHead>
            <TableHead className="text-gray-300 text-center">UK</TableHead>
            <TableHead className="text-gray-300 text-center">Japan</TableHead>
            <TableHead className="text-gray-300 text-center">Hong Kong</TableHead>
            <TableHead className="text-gray-300 text-center">Best Arbitrage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            renderedSkeleton
          ) : watches.length === 0 ? (
            noDataRow
          ) : (
            watches.map((watch) => (
              <TableRow key={watch.id} className="border-t border-gray-800 hover:bg-black/30">
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={watch.image}
                      alt={`${watch.brand} ${watch.model}`}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-bold text-white">{watch.brand} {watch.model}</h3>
                      <p className="text-sm text-gray-400">Ref. {watch.reference}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white py-3">
                  {formatCurrency(watch.prices.us)}
                </TableCell>
                <TableCell className="text-center text-white py-3">
                  {formatCurrency(watch.prices.eu)}
                </TableCell>
                <TableCell className="text-center text-white py-3">
                  {formatCurrency(watch.prices.uk)}
                </TableCell>
                <TableCell className="text-center text-white py-3">
                  {formatCurrency(watch.prices.jp)}
                </TableCell>
                <TableCell className="text-center text-white py-3">
                  {formatCurrency(watch.prices.hk)}
                </TableCell>
                <TableCell className="py-3">
                  <WatchArbitrageCell arbitrage={watch.arbitrage} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchListingTable;
