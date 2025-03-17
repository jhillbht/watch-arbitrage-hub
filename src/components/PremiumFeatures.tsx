
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

const PremiumFeatures = () => {
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
    <section className="py-16 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your investment strategy and market research needs.
          </p>
        </div>
        
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
            <Button variant="outline" className="md:flex-shrink-0">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
