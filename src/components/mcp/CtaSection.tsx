
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
