
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePremium } from '@/hooks/use-premium';
import { Crown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isPremium } = usePremium();
  const location = useLocation();
  
  // All hooks are called before any conditional returns
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Check if we're on the dashboard page
  const isDashboard = location.pathname.includes('/dashboard');
  
  // Don't show the navbar on dashboard pages
  if (isDashboard) {
    return null;
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-8 lg:px-12 py-4 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm shadow-md' 
          : 'bg-black/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">ChronoMarket</span>
          <span className="text-sm bg-purple-600 text-white px-1.5 py-0.5 rounded">Pro</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-purple-400 transition-colors font-medium">
            Home
          </Link>
          <Link to="/dashboard" className="text-white hover:text-purple-400 transition-colors font-medium">
            Dashboard
          </Link>
          <Link to="/features" className="text-white hover:text-purple-400 transition-colors font-medium">
            Features
          </Link>
          <Link to="/pricing" className="text-white hover:text-purple-400 transition-colors font-medium">
            Pricing
          </Link>
          <Link to="/mcp-server" className="text-white hover:text-purple-400 transition-colors font-medium flex items-center">
            <Server className="h-4 w-4 mr-1" /> MCP Server
          </Link>
          <Link 
            to="/premium" 
            className="flex items-center px-4 py-2 rounded hover:bg-gray-800/60 transition-colors text-white font-medium"
          >
            <span className="mr-1">Premium</span>
            {isPremium && <Crown className="h-3 w-3 text-amber-500" />}
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/auth">
            <Button variant="sign-in" className="border-gray-800 bg-black text-purple-500 hover:bg-black/80 hover:text-purple-400">
              Sign In
            </Button>
          </Link>
          <Link to="/auth?register=true">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 shadow-lg p-4 border-t border-gray-800 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className="text-white py-2 hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="text-white py-2 hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/features" 
              className="text-white py-2 hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-white py-2 hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/mcp-server" 
              className="text-white py-2 hover:text-purple-400 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Server className="h-4 w-4 mr-1" /> MCP Server
            </Link>
            <hr className="my-2 border-gray-700" />
            <Link 
              to="/auth" 
              className="text-purple-400 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              to="/auth?register=true" 
              className="bg-purple-600 text-white py-2 px-4 rounded-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
