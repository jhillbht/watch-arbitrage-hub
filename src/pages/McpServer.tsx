
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Server, 
  Globe, 
  Shield, 
  Clock, 
  Database, 
  Bot, 
  Cpu, 
  Brain, 
  Terminal, 
  Workflow,
  BarChart3,
  DollarSign,
  Search,
  Compare,
  AlertCircle,
  RefreshCw,
  LayoutGrid,
  PanelTop
} from 'lucide-react';

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
      
      {/* AI Agent Section */}
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
      
      {/* Features section - Updated with real tools */}
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
                <Compare className="h-6 w-6 text-watch-blue" />
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
      
      {/* API Schema Section - New */}
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
                  <Compare className="h-5 w-5 text-watch-blue" />
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
          
          <div className="mt-14 flex justify-center">
            <Link to="/contact">
              <Button className="button-premium">
                Request Full API Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* AI Advantage section */}
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
      
      {/* Integration Code Example - New Section */}
      <section className="py-16 px-6 bg-black/95 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-watch-blue text-sm font-medium uppercase tracking-wider">Developer Resources</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">AI Integration Examples</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Seamlessly integrate AI agents with ChronoMarket Pro using our MCP Server
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="premium-card p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-watch-blue/10 p-2 rounded-lg">
                  <Terminal className="h-5 w-5 text-watch-blue" />
                </div>
                <h3 className="text-xl font-semibold">OpenAI Integration</h3>
              </div>
              
              <div className="font-mono text-sm bg-black/50 p-4 rounded-lg border border-gray-700 overflow-x-auto">
                <pre className="text-gray-300">
{`// Example: Connecting GPT to ChronoMarket MCP
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chronoTools = [
  {
    "type": "function",
    "function": {
      "name": "getWatchData",
      "description": "Get data for a specific watch",
      "parameters": {
        "type": "object",
        "properties": {
          "referenceNumber": {
            "type": "string",
            "description": "Watch reference number"
          }
        },
        "required": ["referenceNumber"]
      }
    }
  },
  {
    "type": "function",
    "function": {
      "name": "findArbitrageOpportunities",
      "description": "Find arbitrage opportunities",
      "parameters": {
        "type": "object",
        "properties": {
          "minROI": {
            "type": "number",
            "description": "Minimum ROI percentage"
          }
        }
      }
    }
  }
];

// Connect to ChronoMarket's MCP Server
const chronoMarketMCP = {
  getWatchData: async (args) => {
    // API call to ChronoMarket MCP Server
    const response = await fetch(
      'https://api.chronomarket.com/mcp/getWatchData',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${process.env.CHRONO_API_KEY}\`
        },
        body: JSON.stringify(args)
      }
    );
    return await response.json();
  },
  
  findArbitrageOpportunities: async (args) => {
    // API call to ChronoMarket MCP Server
    const response = await fetch(
      'https://api.chronomarket.com/mcp/findArbitrageOpportunities',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${process.env.CHRONO_API_KEY}\`
        },
        body: JSON.stringify(args)
      }
    );
    return await response.json();
  }
};`}
                </pre>
              </div>
            </div>
            
            <div className="premium-card p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-watch-blue/10 p-2 rounded-lg">
                  <PanelTop className="h-5 w-5 text-watch-blue" />
                </div>
                <h3 className="text-xl font-semibold">AI Agent Usage</h3>
              </div>
              
              <div className="font-mono text-sm bg-black/50 p-4 rounded-lg border border-gray-700 overflow-x-auto">
                <pre className="text-gray-300">
{`// Example: Using an AI agent with ChronoMarket MCP
async function runAgentWithTools() {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "system",
        content: "You are a watch trading assistant that helps users find arbitrage opportunities."
      },
      {
        role: "user",
        content: "Find me arbitrage opportunities for Rolex watches with at least 8% ROI."
      }
    ],
    tools: chronoTools
  });

  // Handle tool calls
  const message = chatCompletion.choices[0].message;
  
  if (message.tool_calls) {
    const toolResults = await Promise.all(
      message.tool_calls.map(async (toolCall) => {
        const functionName = toolCall.function.name;
        const functionArgs = JSON.parse(toolCall.function.arguments);
        
        // Call the corresponding function in our MCP integration
        const result = await chronoMarketMCP[functionName](functionArgs);
        
        return {
          tool_call_id: toolCall.id,
          function_name: functionName,
          output: JSON.stringify(result)
        };
      })
    );
    
    // Send results back to the model
    const secondResponse = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content: "You are a watch trading assistant."
        },
        {
          role: "user",
          content: "Find me arbitrage opportunities for Rolex watches with at least 8% ROI."
        },
        message,
        ...toolResults.map((result) => ({
          role: "tool",
          tool_call_id: result.tool_call_id,
          content: result.output
        }))
      ]
    });
    
    return secondResponse.choices[0].message.content;
  }
  
  return message.content;
}`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="mt-14 flex justify-center">
            <Link to="/contact">
              <Button className="button-premium">
                Get Developer Access
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
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
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-watch-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for AI-Powered Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect your AI agents to ChronoMarket Pro and revolutionize how you navigate the luxury watch market. Let AI work for you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-watch-blue font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Request MCP Integration
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
