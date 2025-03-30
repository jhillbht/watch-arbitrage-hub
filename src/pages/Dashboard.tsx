
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/dashboard/layout/DashboardSidebar';
import DashboardContent from '@/components/dashboard/layout/DashboardContent';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<string>('market');
  // This would come from auth context in a real app
  const isPremiumUser = true;
  
  // Get query parameters from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandParam = queryParams.get('brand');
  const modelParam = queryParams.get('model');
  
  // If URL has a section parameter, use it
  const sectionParam = queryParams.get('activeSection');
  
  useEffect(() => {
    // If there's a section parameter in the URL, set it as active
    if (sectionParam) {
      setActiveSection(sectionParam);
    }
    
    // If we have brand and model params, make sure we're in the market section
    if (brandParam && modelParam) {
      setActiveSection('market');
    }
  }, [sectionParam, brandParam, modelParam]);

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
            initialBrand={brandParam}
            initialModel={modelParam}
          />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
