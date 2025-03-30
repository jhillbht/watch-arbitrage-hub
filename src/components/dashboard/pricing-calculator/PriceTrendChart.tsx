
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { formatCurrency } from "@/utils/formatters";

interface PriceTrendChartProps {
  data: Array<{
    date: string;
    price: number;
  }>;
  currentPrice: number;
}

const PriceTrendChart = ({ data, currentPrice }: PriceTrendChartProps) => {
  return (
    <div className="h-[200px] w-full mt-4 mb-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickMargin={5}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            domain={["dataMin - 3000", "dataMax + 3000"]}
          />
          <Tooltip
            formatter={(value) => [formatCurrency(Number(value)), "Price"]}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <ReferenceLine
            y={currentPrice}
            stroke="#ff6b6b"
            strokeDasharray="3 3"
            label={{
              value: "Current Est.",
              fill: "#ff6b6b",
              fontSize: 12,
              position: "insideBottomRight",
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#007AFF"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceTrendChart;
