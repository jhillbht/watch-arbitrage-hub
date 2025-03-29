
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Globe, Shield, Gauge, Clock, Database, Cloud, RefreshCw, Lock } from 'lucide-react';

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
                Enterprise Solution
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="text-watch-blue">MCP Server</span> for ChronoMarket Pro
              </h1>
              
              <p className="text-xl text-gray-200 max-w-xl">
                Enterprise-grade server solution for luxury watch market analysis with enhanced performance, security, and dedicated resources.
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
                    <Server className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-200">Dedicated Server</span>
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
                    <h3 className="text-xl font-semibold text-white">Server Specifications</h3>
                    <span className="text-xs bg-watch-blue/10 text-watch-blue px-2 py-1 rounded-full">
                      Enterprise Grade
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-card p-4 bg-black/60 border border-gray-700">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-3">
                          <Database className="h-5 w-5 text-watch-blue" />
                          <h4 className="font-medium text-white">Dedicated Resources</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">High-performance CPU & Memory</p>
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
                          <Lock className="h-5 w-5 text-watch-blue" />
                          <h4 className="font-medium text-white">Enterprise Security</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Advanced Encryption & Firewalls</p>
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
                <Server className="h-6 w-6 text-watch-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Integration</h3>
              <p className="text-gray-400">
                Connect to your existing enterprise systems with custom API integrations and data export capabilities.
              </p>
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
                  <td className="py-4 px-6 text-gray-300">Profit Calculator</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓ Enterprise</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Price Alerts</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center bg-watch-blue/5">✓ Real-time</td>
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
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Custom Integration</td>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Enterprise Performance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our enterprise sales team to discuss how MCP Server can transform your watch investment strategy.
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
