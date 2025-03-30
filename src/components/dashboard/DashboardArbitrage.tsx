
import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArbitrageFilters from './arbitrage/ArbitrageFilters';
import TopROIOpportunities from './arbitrage/TopROIOpportunities';
import OpportunityDetail from './arbitrage/OpportunityDetail';
import OpportunitiesTable from './arbitrage/OpportunitiesTable';
import { arbitrageOpportunities } from './arbitrage/mockArbitrageData';

const DashboardArbitrage = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(arbitrageOpportunities[0]);
  const [filterBrand, setFilterBrand] = useState<string>('all');
  const [filterROI, setFilterROI] = useState<number[]>([0, 20]);
  
  const filteredOpportunities = arbitrageOpportunities.filter(opportunity => {
    const matchesBrand = filterBrand === 'all' || opportunity.brand === filterBrand;
    const matchesROI = opportunity.roi >= filterROI[0] && opportunity.roi <= filterROI[1];
    return matchesBrand && matchesROI;
  });

  const handleOpportunitySelect = (opportunity: typeof arbitrageOpportunities[0]) => {
    setSelectedOpportunity(opportunity);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Arbitrage Opportunities</h2>
        <Button variant="outline" className="flex items-center">
          <Filter className="mr-2 h-4 w-4" /> Advanced Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <ArbitrageFilters 
            filterBrand={filterBrand}
            setFilterBrand={setFilterBrand}
            filterROI={filterROI}
            setFilterROI={setFilterROI}
          />
          
          <TopROIOpportunities 
            opportunities={arbitrageOpportunities}
            onOpportunitySelect={handleOpportunitySelect}
          />
        </div>
        
        <div className="lg:col-span-2">
          <OpportunityDetail opportunity={selectedOpportunity} />
          
          <OpportunitiesTable 
            opportunities={filteredOpportunities}
            selectedOpportunityId={selectedOpportunity.id}
            onOpportunitySelect={handleOpportunitySelect}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardArbitrage;
