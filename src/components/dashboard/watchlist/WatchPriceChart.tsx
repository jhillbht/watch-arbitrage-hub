
import PriceTrendChart from '../pricing-calculator/PriceTrendChart';

interface WatchPriceChartProps {
  chartData: { date: string; price: number }[];
  priceChangePercent: number;
  formatCurrency: (value: number) => string;
}

const WatchPriceChart = ({ chartData, priceChangePercent, formatCurrency }: WatchPriceChartProps) => {
  return (
    <PriceTrendChart 
      data={chartData}
      height="150px"
      lineColor={priceChangePercent >= 0 ? '#16a34a' : '#dc2626'}
      showReferenceLine={false}
    />
  );
};

export default WatchPriceChart;
