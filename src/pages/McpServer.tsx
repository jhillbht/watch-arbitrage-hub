
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Globe, Shield, Gauge, Clock, Database, Cloud, RefreshCw, Lock, Bot, Cpu, Brain, Sparkles } from 'lucide-react';

const McpServer = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero section */}
      <section className="relative min-h-[80vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="/lovable-uploads/4944f73a-1679-48ec-a0ba-651479454299.png" 
            alt="MCP Server background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-block rounded-full bg-watch-blue/20 px-3 py-1 text-sm text-white border border-watch-blue/30">
                AI-Powered Enterprise Solution
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="text-watch-blue">MCP Server</span> with AI Agents
              </h1>
              
              <p className="text-xl text-gray-200 max-w-xl">
                Enterprise-grade server solution with dedicated AI agents that analyze the luxury watch market in real-time, identifying arbitrage opportunities automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="button-premium w-full sm:w-auto">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" className="border-gray-700 w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-watch-blue/20 p-2 rounded-full">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-200">AI Agents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-watch-blue/20 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-200">Enhanced Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-watch-blue/20 p-2 rounded-full">
                    <Gauge className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-200">High Performance</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-up mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
              <div className="premium-card overflow-hidden bg-black/80 backdrop-blur-md border border-gray-800 shadow-premium rounded-2xl">
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">AI-Powered Server</h3>
                    <span className="text-xs bg-watch-blue/10 text-watch-blue px-2 py-1 rounded-full">
                      Enterprise Grade
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-card p-4 bg-black/60 border border-gray-700">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-3">
                          <Bot className="h-5 w-5 text-watch-blue" />
                          <h4 className="font-medium text-white">AI Market Agents</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Automated arbitrage detection</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-4 bg-black/60 border border-gray-700">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-watch-blue" />
                          <h4 className="font-medium text-white">Real-time Analysis</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Sub-second Response Time</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-4 bg-black/60 border border-gray-700">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-3">
                          <Brain className="h-5 w-5 text-watch-blue" />
                          <h4 className="font-medium text-white">Intelligent Decisions</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">ML-powered investment advice</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Agent Section */}
      <section className="py-16 px-6 bg-black/90 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-watch-blue text-sm font-medium uppercase tracking-wider">The Future of Watch Trading</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">AI Agents Working For You</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The future of luxury watch investment is here. MCP Server deploys intelligent AI agents that continuously analyze the market, enabling you to buy and sell with unprecedented precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <Bot className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Autonomous AI Agents</h3>
              <p className="text-gray-400">
                Deploy AI agents that continuously scan global markets, analyze pricing trends, and identify arbitrage opportunities without human intervention.
              </p>
            </div>
            
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <Cpu className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Database Access</h3>
              <p className="text-gray-400">
                AI agents access our deep database in real-time, processing thousands of watch listings to identify the best opportunities before anyone else.
              </p>
            </div>
            
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <Brain className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Intelligent Decision Making</h3>
              <p className="text-gray-400">
                Beyond data analysis, our AI agents make intelligent recommendations on which watches to buy, sell, or hold based on sophisticated market models.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 px-6 bg-black/95">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Features</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              ChronoMarket Pro MCP Server delivers enhanced capabilities for enterprise users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <Globe className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Market Access</h3>
              <p className="text-gray-400">
                Connect to all major luxury watch markets worldwide with dedicated high-speed connections for real-time price monitoring.
              </p>
            </div>
            
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <Database className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Data Storage</h3>
              <p className="text-gray-400">
                Store and analyze years of historical pricing data with enterprise-grade databases optimized for high-speed queries.
              </p>
            </div>
            
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <RefreshCw className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-400">
                Process market data in real-time with advanced algorithms that identify arbitrage opportunities instantly.
              </p>
            </div>
            
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <Cloud className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Cloud Infrastructure</h3>
              <p className="text-gray-400">
                Run on dedicated hardware with guaranteed uptime and resource allocation for maximum performance.
              </p>
            </div>
            
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <Lock className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-400">
                Protect your valuable market data with advanced encryption, VPN access, and comprehensive access controls.
              </p>
            </div>
            
            <div className="premium-card p-6 rounded-xl">
              <div className="bg-watch-blue/10 p-3 rounded-lg inline-block mb-4">
                <Sparkles className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Augmented Trading</h3>
              <p className="text-gray-400">
                Leverage AI to identify the perfect moment to buy or sell, with predictive analysis of market trends and arbitrage opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Advantage section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black/90 to-black/80">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The AI Advantage</h2>
              <p className="text-lg text-gray-300 mb-6">
                The future of luxury watch trading is AI-driven. MCP Server gives you the competitive edge with:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-watch-blue/20 p-1.5 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-watch-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium">24/7 Market Monitoring</p>
                    <p className="text-gray-400">AI agents never sleep, continuously scanning global markets for opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-watch-blue/20 p-1.5 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-watch-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Millisecond Decision Making</p>
                    <p className="text-gray-400">AI agents process market changes and execute decisions faster than humanly possible.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-watch-blue/20 p-1.5 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-watch-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Pattern Recognition</p>
                    <p className="text-gray-400">Identify complex market patterns that human analysis might miss.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-watch-blue/20 p-1.5 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-watch-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Automated Arbitrage</p>
                    <p className="text-gray-400">Instantly spot price differences across markets and regions for maximum profit.</p>
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
                          Arbitrage Opportunity Detection
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
                          Market Analysis Speed
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
                          Investment Decision Accuracy
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
                          Trend Prediction Accuracy
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
      
      {/* Comparison Table */}
      <section className="py-16 px-6 bg-black/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ChronoMarket Pro Editions</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Compare features between our standard edition and enterprise MCP Server
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center">Standard Edition</th>
                  <th className="py-4 px-6 text-center bg-watch-blue/10 rounded-t-lg">MCP Server</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Global Price Tracking</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓ Enhanced</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Market Analytics</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓ Advanced</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">AI Agent Integration</td>
                  <td className="py-4 px-6 text-center">✗</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Automated Arbitrage Detection</td>
                  <td className="py-4 px-6 text-center">Limited</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓ 24/7</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Profit Calculator</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓ AI-Powered</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Price Alerts</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓ Intelligent</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Historical Data</td>
                  <td className="py-4 px-6 text-center">1 Year</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">10+ Years</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">API Access</td>
                  <td className="py-4 px-6 text-center">Limited</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Dedicated Resources</td>
                  <td className="py-4 px-6 text-center">✗</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Enterprise Security</td>
                  <td className="py-4 px-6 text-center">✗</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">SLA & Support</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5 rounded-b-lg">24/7 Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-watch-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for AI-Powered Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Step into the future of luxury watch investment with AI agents that work for you 24/7, identifying opportunities and maximizing returns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-watch-blue font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Enterprise Sales
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="bg-transparent border border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                View Enterprise Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default McpServer;
