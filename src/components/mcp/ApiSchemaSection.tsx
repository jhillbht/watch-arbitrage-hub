
import React from 'react';
import { Search, RefreshCcw } from 'lucide-react';

const ApiSchemaSection = () => {
  return (
    <section className="py-16 px-6 bg-black/90 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-watch-blue text-sm font-medium uppercase tracking-wider">Technical Details</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">MCP Tool Schema Examples</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Each MCP tool is defined with a structured schema for AI agent integration
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="premium-card p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-watch-blue/10 p-2 rounded-lg">
                <Search className="h-5 w-5 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold">getWatchData</h3>
            </div>
            
            <div className="font-mono text-sm bg-black/50 p-4 rounded-lg border border-gray-700 overflow-x-auto">
              <pre className="text-gray-300">
{`{
  "name": "getWatchData",
  "description": "Get comprehensive data for a specific watch",
  "parameters": {
    "type": "object",
    "properties": {
      "referenceNumber": {
        "type": "string",
        "description": "The manufacturer reference number"
      },
      "brand": {
        "type": "string",
        "description": "Watch brand name"
      },
      "model": {
        "type": "string",
        "description": "Watch model name"
      },
      "includeMarketData": {
        "type": "boolean",
        "description": "Include current market pricing data",
        "default": true
      }
    },
    "required": ["referenceNumber"]
  }
}`}
              </pre>
            </div>
          </div>
          
          <div className="premium-card p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-watch-blue/10 p-2 rounded-lg">
                <RefreshCcw className="h-5 w-5 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold">findArbitrageOpportunities</h3>
            </div>
            
            <div className="font-mono text-sm bg-black/50 p-4 rounded-lg border border-gray-700 overflow-x-auto">
              <pre className="text-gray-300">
{`{
  "name": "findArbitrageOpportunities",
  "description": "Identify price arbitrage opportunities across markets",
  "parameters": {
    "type": "object",
    "properties": {
      "brand": {
        "type": "string",
        "description": "Filter by watch brand"
      },
      "minROI": {
        "type": "number",
        "description": "Minimum ROI percentage",
        "default": 5
      },
      "maxBudget": {
        "type": "number",
        "description": "Maximum purchase budget"
      },
      "includeFees": {
        "type": "boolean",
        "description": "Include all transaction fees in calculations",
        "default": true
      },
      "marketRegions": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": ["US", "EU", "UK", "JP", "HK", "CH"]
        },
        "description": "Market regions to include in search"
      }
    }
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSchemaSection;
