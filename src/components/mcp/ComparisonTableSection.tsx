
import React from 'react';

const ComparisonTableSection = () => {
  return (
    <section className="py-16 px-6 bg-black/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Options</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Compare integration methods for AI agents with ChronoMarket Pro
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6 text-center">Standard API</th>
                <th className="py-4 px-6 text-center bg-watch-blue/10 rounded-t-lg">MCP Server</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">AI Agent Compatibility</td>
                <td className="py-4 px-6 text-center">Limited</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">✓ Native</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Structured Tool Access</td>
                <td className="py-4 px-6 text-center">✗</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">✓</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Context-Aware Responses</td>
                <td className="py-4 px-6 text-center">✗</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">✓</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Real-time Market Access</td>
                <td className="py-4 px-6 text-center">Delayed</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">✓ Instant</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Historical Data</td>
                <td className="py-4 px-6 text-center">Limited</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">Full Access</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Autonomous Decision Making</td>
                <td className="py-4 px-6 text-center">✗</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">✓</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Transaction Capabilities</td>
                <td className="py-4 px-6 text-center">Manual</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">Automated</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Integration Complexity</td>
                <td className="py-4 px-6 text-center">High</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">Low</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Performance Optimization</td>
                <td className="py-4 px-6 text-center">✗</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5">✓</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-300">Support for LLM Integration</td>
                <td className="py-4 px-6 text-center">Basic</td>
                <td className="py-4 px-6 text-center bg-watch-blue/5 rounded-b-lg">Advanced</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
