
import { BarChart3, Globe, Calculator, Sparkles, Bell, RefreshCw, Users, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import PriceComparison from '@/components/PriceComparison';
import PremiumFeatures from '@/components/PremiumFeatures';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Section */}
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
        
        <PriceComparison />
        
        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WatchArbitrage Pro</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform is designed specifically for watch enthusiasts, dealers, and investors looking to maximize returns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="bg-watch-lightBlue p-3 rounded-lg inline-block mb-4">
                  <RefreshCw className="h-6 w-6 text-watch-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
                <p className="text-gray-600">
                  Access up-to-the-minute pricing from dealers, auctions, and private sellers worldwide.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="bg-watch-lightBlue p-3 rounded-lg inline-block mb-4">
                  <Sparkles className="h-6 w-6 text-watch-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proprietary Algorithms</h3>
                <p className="text-gray-600">
                  Our advanced algorithms identify the most lucrative arbitrage opportunities with high accuracy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <div className="bg-watch-lightBlue p-3 rounded-lg inline-block mb-4">
                  <Lock className="h-6 w-6 text-watch-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exclusive Data</h3>
                <p className="text-gray-600">
                  Access price data not available on public platforms for a competitive edge in the market.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <PremiumFeatures />
        
        {/* Testimonials Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from watch dealers and collectors who have leveraged our platform for successful investments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" 
                      alt="User profile" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Alex Morgan</h4>
                    <p className="text-sm text-gray-500">Watch Dealer, New York</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "WatchArbitrage Pro has completely transformed my business. I've increased my profit margins by 22% in just three months by leveraging the cross-market data."
                </p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" 
                      alt="User profile" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Chen</h4>
                    <p className="text-sm text-gray-500">Collector & Investor</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The alerts feature is phenomenal. I was notified of a price drop on a rare Patek Philippe in the Japanese market and made a substantial profit reselling it in the US."
                </p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" 
                      alt="User profile" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Michael Peters</h4>
                    <p className="text-sm text-gray-500">Online Watch Retailer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The ROI calculator with its accurate fee estimation has saved me from several potentially unprofitable deals. This platform pays for itself many times over."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-watch-blue to-blue-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Maximize Your Watch Investments?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of watch enthusiasts and professionals who are already leveraging our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/auth?register=true" className="bg-white text-watch-blue font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Start Your Free Trial
              </a>
              <a href="/dashboard" className="bg-transparent border border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Explore Dashboard
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
