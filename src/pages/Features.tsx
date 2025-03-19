
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Star, TrendingUp, Database, Shield, Activity } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const Features = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Watch Collectors & Investors</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our comprehensive suite of tools helps you make data-driven decisions about your luxury watch investments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          icon={Clock}
          title="Real-Time Market Data"
          description="Access up-to-date market prices from multiple sources to get a complete view of the market."
          isPremium={false}
        />
        <FeatureCard 
          icon={Star}
          title="Advanced Price Comparison"
          description="Compare prices across different dealers, marketplaces, and regions to find the best deals."
          isPremium={false}
        />
        <FeatureCard 
          icon={TrendingUp}
          title="Historical Price Trends"
          description="View and analyze historical price data to identify trends and make better investment decisions."
          isPremium={false}
        />
        <FeatureCard 
          icon={Activity}
          title="Price Alerts"
          description="Get notified when watches hit your target price points or when significant market movements occur."
          isPremium={false}
        />
        <FeatureCard 
          icon={Database}
          title="Advanced Analytics"
          description="Premium data analysis including predictive models, ROI calculators, and market correlation tools."
          isPremium={true}
        />
        <FeatureCard 
          icon={Shield}
          title="Arbitrage Opportunities"
          description="Identify price discrepancies across markets to leverage buying and selling opportunities."
          isPremium={true}
        />
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Premium Market Data</h2>
            <p className="text-gray-600 mb-6">
              Access comprehensive market data including historical trends, price volatility, and market correlation metrics to make informed investment decisions.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full h-2 w-2 mt-2 mr-3"></span>
                <span>Complete data from 50+ global sources</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full h-2 w-2 mt-2 mr-3"></span>
                <span>5+ years of historical price data</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full h-2 w-2 mt-2 mr-3"></span>
                <span>Detailed market sentiment analysis</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full h-2 w-2 mt-2 mr-3"></span>
                <span>Custom data export capabilities</span>
              </li>
            </ul>
            <Link to="/premium">
              <Button className="bg-watch-blue hover:bg-blue-600">
                Upgrade to Premium <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative h-64 md:h-auto overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Advanced Market Data" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-2xl font-bold mb-4">Personal Watch Collection</h3>
          <p className="text-gray-700 mb-6">
            Track your entire watch collection in one place. Monitor performance, manage service history, and get insights on portfolio diversification.
          </p>
          <Link to="/watchlist">
            <Button variant="outline" className="border-watch-blue text-watch-blue hover:bg-watch-lightBlue">
              Start Tracking
            </Button>
          </Link>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
          <h3 className="text-2xl font-bold mb-4">Advanced Price Calculator</h3>
          <p className="text-gray-700 mb-6">
            Get accurate market pricing based on condition, completeness, and market dynamics with our proprietary pricing algorithm.
          </p>
          <Link to="/data">
            <Button variant="outline" className="border-watch-blue text-watch-blue hover:bg-watch-lightBlue">
              Try Calculator
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to elevate your watch investment strategy?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/auth?register=true">
            <Button className="bg-watch-blue hover:bg-blue-600">
              Create Free Account
            </Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline">
              View Pricing Options
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
