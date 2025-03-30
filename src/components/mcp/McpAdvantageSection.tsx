
import React from 'react';
import { ArrowRight } from 'lucide-react';

const McpAdvantageSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black/90 to-black/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The MCP Advantage</h2>
            <p className="text-lg text-gray-300 mb-6">
              Connecting AI agents to ChronoMarket Pro through our MCP Server provides significant advantages:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-watch-blue/20 p-1.5 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4 text-watch-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">Continuous Operation</p>
                  <p className="text-gray-400">AI agents work 24/7, scanning markets and identifying opportunities while you focus on other priorities.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-watch-blue/20 p-1.5 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4 text-watch-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">Speed Advantage</p>
                  <p className="text-gray-400">AI agents can process market changes and make decisions in milliseconds, faster than any human trader.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-watch-blue/20 p-1.5 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4 text-watch-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">Data-Driven Decisions</p>
                  <p className="text-gray-400">Every decision is backed by comprehensive data analysis, eliminating emotional trading.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-watch-blue/20 p-1.5 rounded-full mt-1">
                  <ArrowRight className="h-4 w-4 text-watch-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">Scalable Operations</p>
                  <p className="text-gray-400">AI agents can monitor thousands of watches simultaneously, identifying opportunities across the entire market.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="premium-card overflow-hidden bg-black/80 backdrop-blur-md border border-gray-800 shadow-premium rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">AI Agent Performance</h3>
              <div className="space-y-6">
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold inline-block text-white">
                        Arbitrage Identification
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-watch-blue">
                        97%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                    <div style={{ width: "97%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-watch-blue"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold inline-block text-white">
                        Analysis Speed
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-watch-blue">
                        99%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                    <div style={{ width: "99%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-watch-blue"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold inline-block text-white">
                        Decision Accuracy
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-watch-blue">
                        92%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                    <div style={{ width: "92%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-watch-blue"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold inline-block text-white">
                        Trend Prediction
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-watch-blue">
                        89%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                    <div style={{ width: "89%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-watch-blue"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default McpAdvantageSection;
