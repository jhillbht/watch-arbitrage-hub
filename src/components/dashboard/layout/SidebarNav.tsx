
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { 
  Home,
  Watch, 
  ListFilter, 
  Diamond, 
  Calculator, 
  Settings, 
  LogOut, 
} from 'lucide-react';

interface SidebarNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isPremiumUser: boolean;
}

const SidebarNav = ({ activeSection, setActiveSection, isPremiumUser }: SidebarNavProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, this would call auth logout function
    navigate('/');
  };

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Home" 
                onClick={() => navigate('/')}
              >
                <Home />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Market Data" 
                isActive={activeSection === 'market'}
                onClick={() => setActiveSection('market')}
              >
                <Watch />
                <span>Market Data</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Watchlist" 
                isActive={activeSection === 'watchlist'}
                onClick={() => setActiveSection('watchlist')}
              >
                <ListFilter />
                <span>Watchlist</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Arbitrage" 
                isActive={activeSection === 'arbitrage'}
                onClick={() => setActiveSection('arbitrage')}
              >
                <Diamond />
                <span>Arbitrage</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            {isPremiumUser && (
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Premium Tools" 
                  isActive={activeSection === 'premium-tools'}
                  onClick={() => setActiveSection('premium-tools')}
                >
                  <Calculator />
                  <span>Premium Tools</span>
                  <div className="ml-auto bg-purple-600/10 text-purple-600 text-xs px-1.5 py-0.5 rounded">
                    Pro
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      
      <SidebarSeparator />
      
      <SidebarGroup>
        <SidebarGroupLabel>Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Settings" 
                isActive={activeSection === 'settings'}
                onClick={() => setActiveSection('settings')}
              >
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Logout" 
                onClick={handleLogout}
              >
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default SidebarNav;
