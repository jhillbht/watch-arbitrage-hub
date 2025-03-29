
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ChevronLeft, 
  LayoutDashboard, 
  Watch, 
  ListFilter, 
  Diamond, 
  Calculator, 
  Settings, 
  LogOut, 
  Bell,
  Home
} from 'lucide-react';

import DashboardMarketData from '@/components/dashboard/DashboardMarketData';
import DashboardWatchlist from '@/components/dashboard/DashboardWatchlist';
import DashboardArbitrage from '@/components/dashboard/DashboardArbitrage';
import DashboardPremiumTools from '@/components/dashboard/DashboardPremiumTools';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('market-data');
  // This would come from auth context in a real app
  const isPremiumUser = true;

  const handleLogout = () => {
    // In a real app, this would call auth logout function
    navigate('/');
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gray-950 dark:bg-gray-900">
        <Sidebar>
          <SidebarHeader className="flex flex-col items-center justify-center py-4">
            <Link to="/" className="flex items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <img 
                  src="/placeholder.svg" 
                  alt="WatchArbitrage Pro" 
                  className="h-8 w-auto" 
                />
              </div>
              <h2 className="text-lg font-bold tracking-tight">WatchArbitrage</h2>
              <div className="text-xs font-medium bg-watch-blue text-white px-2 py-0.5 rounded-full ml-2">Pro</div>
            </Link>
          </SidebarHeader>

          <SidebarContent>
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
                      isActive={activeSection === 'market-data'}
                      onClick={() => setActiveSection('market-data')}
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
                        <div className="ml-auto bg-watch-blue/10 text-watch-blue text-xs px-1.5 py-0.5 rounded">
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
          </SidebarContent>
          
          <SidebarFooter className="px-3 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Patek</p>
                  <p className="text-xs text-sidebar-foreground/60">Premium</p>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="flex flex-col bg-gray-950">
          <DashboardHeader 
            activeSection={activeSection} 
            isPremiumUser={isPremiumUser} 
          />
          
          <div className="flex-1 overflow-auto p-6">
            {activeSection === 'market-data' && <DashboardMarketData />}
            {activeSection === 'watchlist' && <DashboardWatchlist />}
            {activeSection === 'arbitrage' && <DashboardArbitrage />}
            {activeSection === 'premium-tools' && <DashboardPremiumTools />}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
