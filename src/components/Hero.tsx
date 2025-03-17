
import { ArrowRight, TrendingUp, DollarSign, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-watch-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block rounded-full bg-watch-lightBlue px-3 py-1 text-sm text-watch-blue">
              Luxury Watch Market Intelligence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Discover <span className="text-gradient">Arbitrage</span> Opportunities in Luxury Timepieces
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Compare prices across global markets, identify profit potential, and make informed decisions with real-time data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth?register=true">
                <Button className="button-premium w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="border-watch-blue text-watch-blue hover:bg-watch-lightBlue w-full sm:w-auto">
                  Explore Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="bg-watch-lightBlue p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-watch-blue" />
                </div>
                <span className="text-sm text-gray-600">Market Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-watch-lightBlue p-2 rounded-full">
                  <DollarSign className="h-5 w-5 text-watch-blue" />
                </div>
                <span className="text-sm text-gray-600">Profit Calculator</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-watch-lightBlue p-2 rounded-full">
                  <Bell className="h-5 w-5 text-watch-blue" />
                </div>
                <span className="text-sm text-gray-600">Price Alerts</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 p-4">
              <div className="premium-card overflow-hidden bg-white/80 backdrop-blur-md border border-gray-100 shadow-premium rounded-2xl">
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
                    <Button variant="ghost" size="sm" className="text-watch-blue hover:text-blue-700">
                      View all
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-20 w-40 h-40 bg-watch-blue/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-300/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
