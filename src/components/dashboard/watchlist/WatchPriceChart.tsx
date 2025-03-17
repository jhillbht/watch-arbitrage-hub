
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip as RechartsTooltip, ResponsiveContainer
} from 'recharts';

interface WatchPriceChartProps {
  chartData: { date: string; price: number }[];
  priceChangePercent: number;
  formatCurrency: (value: number) => string;
}

const WatchPriceChart = ({ chartData, priceChangePercent, formatCurrency }: WatchPriceChartProps) => {
  return (
    <div className="h-[150px] mb-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" fontSize={12} />
          <YAxis
            domain={['dataMin - 1000', 'dataMax + 1000']}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            fontSize={12}
          />
          <RechartsTooltip
            formatter={(value) => [formatCurrency(Number(value)), 'Price']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={priceChangePercent >= 0 ? '#16a34a' : '#dc2626'}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WatchPriceChart;
