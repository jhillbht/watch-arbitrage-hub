
import { ReactNode } from 'react';
import DashboardMarketData from '@/components/dashboard/DashboardMarketData';
import DashboardWatchlist from '@/components/dashboard/DashboardWatchlist';
import DashboardArbitrage from '@/components/dashboard/DashboardArbitrage';
import DashboardPremiumTools from '@/components/dashboard/DashboardPremiumTools';
import DashboardSettings from '@/components/dashboard/DashboardSettings';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface DashboardContentProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const DashboardContent = ({ activeSection, setActiveSection }: DashboardContentProps) => {
  return (
    <div className="flex flex-col bg-gray-950">
      <DashboardHeader 
        activeTab={activeSection} 
        onChange={setActiveSection} 
      />
      
      <div className="flex-1 overflow-auto p-6">
        {activeSection === 'market' && <DashboardMarketData />}
        {activeSection === 'watchlist' && <DashboardWatchlist />}
        {activeSection === 'arbitrage' && <DashboardArbitrage />}
        {activeSection === 'premium-tools' && <DashboardPremiumTools />}
        {activeSection === 'settings' && <DashboardSettings />}
      </div>
    </div>
  );
};

export default DashboardContent;
