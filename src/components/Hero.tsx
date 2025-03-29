
import { ArrowRight, TrendingUp, DollarSign, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PopularWatchesCarousel from './PopularWatchesCarousel';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-width hero image background */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury watch background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up text-white" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block rounded-full bg-watch-blue/20 px-3 py-1 text-sm text-white border border-watch-blue/30">
              Luxury Watch Market Intelligence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Discover <span className="text-watch-blue">Arbitrage</span> Opportunities in Luxury Timepieces
            </h1>
            
            <p className="text-xl text-gray-200 max-w-xl">
              Compare prices across global markets, identify profit potential, and make informed decisions with real-time data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth?register=true">
                <Button className="button-premium w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="bg-watch-blue/20 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-gray-200">Market Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-watch-blue/20 p-2 rounded-full">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-gray-200">Profit Calculator</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-watch-blue/20 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-gray-200">Price Alerts</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-up mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="premium-card overflow-hidden bg-white/90 backdrop-blur-md border border-gray-100 shadow-premium rounded-2xl">
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Market Dashboard</h3>
                  <span className="text-xs bg-watch-blue/10 text-watch-blue px-2 py-1 rounded-full">
                    Live Data
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="glass-card p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Rolex Submariner</h4>
                        <p className="text-xs text-gray-500">Ref. 124060</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$14,500</p>
                        <p className="text-xs text-green-600">+$820 (5.3%)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Patek Philippe Nautilus</h4>
                        <p className="text-xs text-gray-500">Ref. 5711/1A</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$142,750</p>
                        <p className="text-xs text-red-600">-$2,300 (1.6%)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Audemars Piguet Royal Oak</h4>
                        <p className="text-xs text-gray-500">Ref. 15500ST</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$79,300</p>
                        <p className="text-xs text-green-600">+$1,250 (1.8%)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Updated: Today, 11:43 AM
                  </p>
                  <Link to="/dashboard">
                    <Button variant="ghost" size="sm" className="text-watch-blue hover:text-blue-700">
                      View all
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popular watches carousel */}
      <div className="bg-white/95 backdrop-blur-sm py-12">
        <PopularWatchesCarousel />
      </div>
    </section>
  );
};

export default Hero;
