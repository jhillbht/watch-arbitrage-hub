
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  buttonText: string;
  isPremium?: boolean;
  buttonLink: string;
}

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  buttonText, 
  isPremium = false,
  buttonLink 
}: PricingTierProps) => {
  return (
    <div 
      className={`
        rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col h-full
        ${isPremium 
          ? 'premium-card border-watch-blue/20 relative' 
          : 'glass-card'}
      `}
    >
      {isPremium && (
        <div className="absolute top-0 left-0 w-full bg-watch-blue text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className={`${isPremium ? 'pt-4' : ''}`}>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      
      <div className="space-y-4 flex-grow mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            {feature.included ? (
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
      
      <Link to={buttonLink} className="mt-auto">
        <Button 
          className={`w-full ${isPremium ? 'bg-watch-blue hover:bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
        >
          {buttonText} {isPremium && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </Link>
    </div>
  );
};

const Pricing = () => {
  const freeTier = {
    name: 'Basic',
    price: 'Free',
    description: 'Essential tools for casual research',
    features: [
      { text: 'Basic price comparison', included: true },
      { text: 'Limited historical data', included: true },
      { text: 'Single market view', included: true },
      { text: 'Monthly market report', included: true },
      { text: 'Price alerts (2 max)', included: true },
      { text: 'Arbitrage calculator', included: false },
      { text: 'Real-time price notifications', included: false },
      { text: 'Cross-market arbitrage analysis', included: false },
      { text: 'Advanced profit calculator', included: false },
      { text: 'API access', included: false },
    ],
    buttonText: 'Get Started',
    buttonLink: '/auth?register=true'
  };
  
  const premiumTier = {
    name: 'Premium',
    price: '$1,000',
    description: 'Professional tools for serious investors',
    features: [
      { text: 'Comprehensive price comparison', included: true },
      { text: 'Full historical data & trends', included: true },
      { text: 'Global market view', included: true },
      { text: 'Weekly market reports', included: true },
      { text: 'Unlimited price alerts', included: true },
      { text: 'Advanced arbitrage calculator', included: true },
      { text: 'Real-time price notifications', included: true },
      { text: 'Cross-market arbitrage analysis', included: true },
      { text: 'Advanced profit calculator', included: true },
      { text: 'API access', included: true },
    ],
    buttonText: 'Start 7-Day Free Trial',
    isPremium: true,
    buttonLink: '/auth?register=true&plan=premium'
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the plan that best fits your investment strategy and market research needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingTier {...freeTier} />
          <PricingTier {...premiumTier} />
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need a custom enterprise solution?</h3>
              <p className="text-gray-600">
                Contact us for custom pricing and features tailored to your business needs.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="outline" className="md:flex-shrink-0">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I switch plans later?</h3>
                <p className="text-gray-700">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is there a long-term commitment?</h3>
                <p className="text-gray-700">No, our premium plan is charged month-to-month and you can cancel anytime.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-700">We offer a 7-day free trial for our premium plan. If you're not satisfied, you can cancel before the trial ends with no charge.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-700 mb-4">Our team is ready to answer any questions you might have about our plans and features.</p>
              <Link to="/contact">
                <Button variant="outline" className="w-full">Contact Support</Button>
              </Link>
            </div>
            <div className="bg-blue-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
              <p className="mb-4 opacity-90">Join thousands of watch enthusiasts making smarter investment decisions.</p>
              <Link to="/auth?register=true">
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
