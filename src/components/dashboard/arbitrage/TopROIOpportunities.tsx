
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OpportunityCard from './OpportunityCard';

interface Opportunity {
  id: number;
  brand: string;
  model: string;
  reference: string;
  roi: number;
}

interface TopROIOpportunitiesProps {
  opportunities: Opportunity[];
  onOpportunitySelect: (opportunity: Opportunity) => void;
  selectedOpportunityId?: number;
}

const TopROIOpportunities = ({ 
  opportunities, 
  onOpportunitySelect,
  selectedOpportunityId
}: TopROIOpportunitiesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
          Top ROI Opportunities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities
            .sort((a, b) => b.roi - a.roi)
            .slice(0, 3)
            .map(opportunity => (
              <OpportunityCard 
                key={opportunity.id}
                opportunity={opportunity}
                onSelect={onOpportunitySelect}
                isSelected={selectedOpportunityId === opportunity.id}
              />
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default TopROIOpportunities;
