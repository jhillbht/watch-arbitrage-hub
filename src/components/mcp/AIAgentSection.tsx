
import React from 'react';
import { Bot, Cpu, Brain } from 'lucide-react';

const AIAgentSection = () => {
  return (
    <section className="py-16 px-6 bg-black/90 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-watch-blue text-sm font-medium uppercase tracking-wider">Model Context Protocol</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">AI Agents as Your Trading Partners</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our MCP Server enables AI agents to leverage ChronoMarket Pro's capabilities, creating autonomous assistants that can analyze markets, identify opportunities, and execute trades on your behalf.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <Bot className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Trading</h3>
            <p className="text-gray-400">
              Give AI agents access to ChronoMarket Pro through a structured MCP interface, enabling them to make data-driven decisions about which watches to buy, sell, or hold.
            </p>
          </div>
          
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <Cpu className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Structured Data Access</h3>
            <p className="text-gray-400">
              MCP Server provides AI agents with structured access to our deep database, allowing them to query real-time pricing, historical trends, and market comparisons.
            </p>
          </div>
          
          <div className="premium-card p-6 rounded-xl">
            <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
              <Brain className="h-6 w-6 text-watch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Autonomous Operation</h3>
            <p className="text-gray-400">
              Once connected, AI agents can work autonomously 24/7, continuously scanning markets, comparing prices, and identifying profitable arbitrage opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;
