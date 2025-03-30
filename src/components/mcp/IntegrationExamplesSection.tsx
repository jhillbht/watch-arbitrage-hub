
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Terminal, PanelTop } from 'lucide-react';

const IntegrationExamplesSection = () => {
  return (
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
  );
};

export default IntegrationExamplesSection;
