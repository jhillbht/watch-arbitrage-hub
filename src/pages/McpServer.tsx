
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Server, 
  Globe, 
  Shield, 
  Database, 
  Bot, 
  Cpu, 
  LineChart, 
  Terminal, 
  Workflow,
  BarChart3,
  DollarSign,
  Search,
  AlertCircle,
  RefreshCcw,
  LayoutGrid,
  PanelTop
} from 'lucide-react';
import HeroSection from '@/components/mcp/HeroSection';
import AIAgentSection from '@/components/mcp/AIAgentSection';
import McpToolsSection from '@/components/mcp/McpToolsSection';
import ApiSchemaSection from '@/components/mcp/ApiSchemaSection';
import McpAdvantageSection from '@/components/mcp/McpAdvantageSection';
import IntegrationExamplesSection from '@/components/mcp/IntegrationExamplesSection';
import ComparisonTableSection from '@/components/mcp/ComparisonTableSection';
import CtaSection from '@/components/mcp/CtaSection';

const McpServer = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection />
      <AIAgentSection />
      <McpToolsSection />
      <ApiSchemaSection />
      <McpAdvantageSection />
      <IntegrationExamplesSection />
      <ComparisonTableSection />
      <CtaSection />
    </div>
  );
};

export default McpServer;
