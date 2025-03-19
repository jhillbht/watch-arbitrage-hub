
import { useState, useEffect } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardHeaderProps {
  activeSection: string;
  isPremiumUser: boolean;
}

const DashboardHeader = ({ activeSection, isPremiumUser }: DashboardHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionTitles: Record<string, string> = {
    'market-data': 'Market Data',
    'watchlist': 'Watchlist',
    'arbitrage': 'Arbitrage Opportunities',
    'premium-tools': 'Premium Tools',
    'settings': 'Settings'
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header 
      className={`sticky top-0 z-10 w-full backdrop-blur-sm border-b px-4 py-3 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'bg-background/95 shadow-sm' : 'bg-background'
      }`}
    >
      <div className="flex items-center gap-3">
        <SidebarTrigger className="lg:hidden" />
        <h1 className="text-xl font-semibold hidden sm:block">
          {sectionTitles[activeSection] || 'Dashboard'}
        </h1>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <form onSubmit={handleSearch} className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search watches, brands..."
            className="w-full pl-9 bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {isPremiumUser && (
                <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-watch-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-watch-blue"></span>
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isPremiumUser ? (
              <>
                <div className="p-4">
                  <div className="mb-4 space-y-1">
                    <h3 className="font-medium">New Arbitrage Opportunity</h3>
                    <p className="text-sm text-muted-foreground">Rolex Daytona Ref. 116500 - 12% ROI potential</p>
                    <p className="text-xs text-muted-foreground">5 minutes ago</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Price Alert: Patek Philippe</h3>
                    <p className="text-sm text-muted-foreground">Nautilus 5711 price decreased by 8%</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground mb-4">Upgrade to Premium to receive arbitrage alerts and price notifications</p>
                <Button size="sm" className="bg-watch-blue hover:bg-blue-600">
                  Upgrade Now
                </Button>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
