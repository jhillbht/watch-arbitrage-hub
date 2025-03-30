
import { BarChart3, Globe, Calculator, Bell } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform offers sophisticated tools to help you make informed decisions in the luxury watch market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Globe}
            title="Global Price Tracking"
            description="Monitor prices across multiple international markets to find the best deals and arbitrage opportunities."
          />
          <FeatureCard 
            icon={BarChart3}
            title="Market Analytics"
            description="Access comprehensive data and trends to understand market dynamics and make data-driven decisions."
          />
          <FeatureCard 
            icon={Calculator}
            title="Profit Calculator"
            description="Calculate potential profits including taxes, fees, and shipping costs for accurate ROI projections."
            isPremium={true}
          />
          <FeatureCard 
            icon={Bell}
            title="Price Alerts"
            description="Get notified when watches reach your target price or when significant market shifts occur."
            isPremium={true}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
