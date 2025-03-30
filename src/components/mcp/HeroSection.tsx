
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Terminal, Workflow } from 'lucide-react';

const HeroSection = () => {
  return (
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
              Model Context Protocol Integration
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-watch-blue">MCP Server</span> for AI Agent Integration
            </h1>
            
            <p className="text-xl text-gray-200 max-w-xl">
              Connect AI agents to ChronoMarket Pro through our MCP Server, allowing them to access our platform's capabilities for autonomous watch market analysis and arbitrage detection.
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
                <span className="text-sm text-gray-200">AI Agent Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-watch-blue/20 p-2 rounded-full">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-gray-200">MCP Protocol</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-watch-blue/20 p-2 rounded-full">
                  <Workflow className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-gray-200">API Integration</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-up mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="premium-card overflow-hidden bg-black/80 backdrop-blur-md border border-gray-800 shadow-premium rounded-2xl">
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">AI Agent Access</h3>
                  <span className="text-xs bg-watch-blue/10 text-watch-blue px-2 py-1 rounded-full">
                    MCP-Compatible
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="glass-card p-4 bg-black/60 border border-gray-700">
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-3">
                        <Terminal className="h-5 w-5 text-watch-blue" />
                        <h4 className="font-medium text-white">MCP Protocol</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Structured tool access</p>
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
                        <p className="text-sm text-gray-400">Immediate market access</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 bg-black/60 border border-gray-700">
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-3">
                        <Brain className="h-5 w-5 text-watch-blue" />
                        <h4 className="font-medium text-white">Autonomous Trading</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Agent-based decisions</p>
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
  );
};

export default HeroSection;
