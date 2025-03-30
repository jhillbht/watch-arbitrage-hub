
import React from 'react';
import { Search, BarChart3, DollarSign, AlertCircle, LayoutGrid, RefreshCcw } from 'lucide-react';

const McpToolsSection = () => {
  return (
    <section className="py-16 px-6 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MCP Server Tools</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our MCP Server exposes these essential tools for AI agents to leverage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <Search className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">getWatchData</h3>
            <p className="text-gray-400">
              Retrieve comprehensive data for any watch by reference number, brand, or model with real-time pricing from multiple markets and detailed specifications.
            </p>
          </div>
          
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <BarChart3 className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">getHistoricalPrices</h3>
            <p className="text-gray-400">
              Access detailed price history for any watch with customizable timeframes (7d, 30d, 90d, 1y, 5y) and market segmentation for trend analysis.
            </p>
          </div>
          
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <RefreshCcw className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">findArbitrageOpportunities</h3>
            <p className="text-gray-400">
              Automatically identify price disparities across global markets, with built-in calculators for fees, shipping costs, and potential profit margins.
            </p>
          </div>
          
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <DollarSign className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">calculateROI</h3>
            <p className="text-gray-400">
              Calculate expected return on investment with comprehensive analysis of all transaction costs, holding periods, and market-specific fees.
            </p>
          </div>
          
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <AlertCircle className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">createPriceAlert</h3>
            <p className="text-gray-400">
              Set up automated alerts for specific price points, market movements, or arbitrage thresholds with customizable notification parameters.
            </p>
          </div>
          
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <LayoutGrid className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">getMarketOverview</h3>
            <p className="text-gray-400">
              Access aggregated market statistics with real-time data on top-performing brands, models, and market segments with trend indicators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default McpToolsSection;
