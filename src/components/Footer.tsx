
import { Link } from 'react-router-dom';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-watch-darkGray">WatchArbitrage</span>
              <span className="text-xs bg-watch-blue text-white px-1.5 py-0.5 rounded">Pro</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Luxury Watch Market Intelligence Platform for Arbitrage Opportunities
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-watch-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-watch-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-watch-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-watch-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-gray-600 hover:text-watch-blue transition-colors">Dashboard</Link></li>
              <li><Link to="#features" className="text-gray-600 hover:text-watch-blue transition-colors">Features</Link></li>
              <li><Link to="#pricing" className="text-gray-600 hover:text-watch-blue transition-colors">Pricing</Link></li>
              <li><Link to="/api" className="text-gray-600 hover:text-watch-blue transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-watch-blue transition-colors">Market Insights</Link></li>
              <li><Link to="/guides" className="text-gray-600 hover:text-watch-blue transition-colors">Guides</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-watch-blue transition-colors">Support</Link></li>
              <li><Link to="/api-docs" className="text-gray-600 hover:text-watch-blue transition-colors">API Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-watch-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-watch-blue transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-watch-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-watch-blue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {year} WatchArbitrage Pro. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-watch-blue text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-watch-blue text-sm transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-watch-blue text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
