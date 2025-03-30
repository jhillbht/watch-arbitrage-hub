
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
    [key: string]: any; // Allow additional data points
  }>;
  currentPrice?: number;
  height?: string | number;
  lineColor?: string;
  referenceLineColor?: string;
  valueKey?: string;
  showReferenceLine?: boolean;
  referenceLabel?: string;
}

const PriceTrendChart = ({ 
  data, 
  currentPrice,
  height = "200px",
  lineColor = "#007AFF",
  valueKey = "price",
  showReferenceLine = true,
  referenceLineColor = "#ff6b6b",
  referenceLabel = "Current Est."
}: PriceTrendChartProps) => {
  return (
    <div className="w-full mt-4 mb-2" style={{ height }}>
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
          {showReferenceLine && currentPrice && (
            <ReferenceLine
              y={currentPrice}
              stroke={referenceLineColor}
              strokeDasharray="3 3"
              label={{
                value: referenceLabel,
                fill: referenceLineColor,
                fontSize: 12,
                position: "insideBottomRight",
              }}
            />
          )}
          <Line
            type="monotone"
            dataKey={valueKey}
            stroke={lineColor}
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
