import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
import { PremiumProvider } from './hooks/use-premium';

function App() {
  return (
    <PremiumProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/data" element={<DataProcessing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/premium" element={<PremiumFeatures />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </PremiumProvider>
  );
}

export default App;
