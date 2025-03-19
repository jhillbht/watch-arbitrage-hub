
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import WatchList from './pages/WatchList';
import DataProcessing from './pages/DataProcessing';
import Auth from './pages/Auth';
import PremiumFeatures from './pages/PremiumFeatures';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import { PremiumProvider } from './hooks/use-premium';

// Use this component to conditionally add padding based on route
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');
  
  return (
    <div className={`${!isDashboard ? 'pt-16 md:pt-20' : ''}`}>
      {children}
    </div>
  );
};

function App() {
  return (
    <PremiumProvider>
      <Router>
        <div>
          <Navbar />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/data" element={<DataProcessing />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/premium" element={<PremiumFeatures />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </PageWrapper>
          <Footer />
        </div>
      </Router>
    </PremiumProvider>
  );
}

export default App;
