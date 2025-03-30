
import { Link } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter 
} from '@/components/ui/sidebar';
import SidebarNav from './SidebarNav';
import SidebarUserProfile from './SidebarUserProfile';

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isPremiumUser: boolean;
}

const DashboardSidebar = ({ 
  activeSection, 
  setActiveSection, 
  isPremiumUser 
}: DashboardSidebarProps) => {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col items-center justify-center py-4">
        <Link to="/" className="flex items-center justify-center">
          <div className="flex items-center justify-center mb-2">
            <span className="text-xl font-bold text-blue-500">Chrono</span>
            <span className="text-xl font-bold text-gray-300">Market</span>
            <span className="text-sm text-blue-500 ml-1">Pro</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarNav 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          isPremiumUser={isPremiumUser} 
        />
      </SidebarContent>
      
      <SidebarFooter className="px-3 py-4">
        <SidebarUserProfile />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
