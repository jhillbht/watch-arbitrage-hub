
import { RefreshCw, Sparkles, Lock } from 'lucide-react';

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;
