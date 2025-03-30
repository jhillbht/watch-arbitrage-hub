
import { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/dashboard/layout/DashboardSidebar';
import DashboardContent from '@/components/dashboard/layout/DashboardContent';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<string>('market');
  // This would come from auth context in a real app
  const isPremiumUser = true;

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gray-950 dark:bg-gray-900">
        <DashboardSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          isPremiumUser={isPremiumUser} 
        />
        
        <SidebarInset className="flex flex-col bg-gray-950">
          <DashboardContent 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
