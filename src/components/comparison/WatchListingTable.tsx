
import { Globe } from 'lucide-react';
import { Watch, regionNames } from '@/types/watch';
import { formatCurrency } from '@/utils/formatters';
import WatchArbitrageCell from './WatchArbitrageCell';

interface WatchListingTableProps {
  watches: Watch[];
}

const WatchListingTable = ({ watches }: WatchListingTableProps) => {
  return (
    <div className="overflow-auto pb-4">
      <table className="w-full min-w-[900px] bg-white/10 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-xl">
        <thead>
          <tr className="bg-black/40">
            <th className="text-left p-4 font-medium text-gray-200">Watch</th>
            <th className="text-center p-4 font-medium text-gray-200">
              <div className="flex items-center justify-center">
                <Globe className="h-4 w-4 mr-1" /> US
              </div>
            </th>
            <th className="text-center p-4 font-medium text-gray-200">
              <div className="flex items-center justify-center">
                <Globe className="h-4 w-4 mr-1" /> EU
              </div>
            </th>
            <th className="text-center p-4 font-medium text-gray-200">
              <div className="flex items-center justify-center">
                <Globe className="h-4 w-4 mr-1" /> UK
              </div>
            </th>
            <th className="text-center p-4 font-medium text-gray-200">
              <div className="flex items-center justify-center">
                <Globe className="h-4 w-4 mr-1" /> JP
              </div>
            </th>
            <th className="text-center p-4 font-medium text-gray-200">
              <div className="flex items-center justify-center">
                <Globe className="h-4 w-4 mr-1" /> HK
              </div>
            </th>
            <th className="text-center p-4 font-medium text-gray-200">Arbitrage</th>
          </tr>
        </thead>
        <tbody>
          {watches.map((watch) => (
            <tr key={watch.id} className="border-t border-gray-700 hover:bg-white/5 transition-colors">
              <td className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="h-16 w-16 bg-gray-800 rounded-md overflow-hidden flex-shrink-0 border border-gray-700">
                    <img 
                      src={watch.image} 
                      alt={`${watch.brand} ${watch.model}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-white">{watch.brand} {watch.model}</div>
                    <div className="text-sm text-gray-400">{watch.reference}</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-center">
                <div className={`font-medium ${watch.arbitrage.bestSell === 'us' ? 'text-green-400' : 'text-gray-300'}`}>
                  {formatCurrency(watch.prices.us)}
                </div>
              </td>
              <td className="p-4 text-center">
                <div className={`font-medium ${watch.arbitrage.bestSell === 'eu' ? 'text-green-400' : 'text-gray-300'}`}>
                  {formatCurrency(watch.prices.eu)}
                </div>
              </td>
              <td className="p-4 text-center">
                <div className={`font-medium ${watch.arbitrage.bestSell === 'uk' ? 'text-green-400' : 'text-gray-300'}`}>
                  {formatCurrency(watch.prices.uk)}
                </div>
              </td>
              <td className="p-4 text-center">
                <div className={`font-medium ${watch.arbitrage.bestSell === 'jp' ? 'text-green-400' : 'text-gray-300'}`}>
                  {formatCurrency(watch.prices.jp)}
                </div>
              </td>
              <td className="p-4 text-center">
                <div className={`font-medium ${watch.arbitrage.bestSell === 'hk' ? 'text-green-400' : 'text-gray-300'}`}>
                  {formatCurrency(watch.prices.hk)}
                </div>
              </td>
              <td className="p-4">
                <WatchArbitrageCell arbitrage={watch.arbitrage} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchListingTable;
