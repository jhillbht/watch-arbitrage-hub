
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
}

const TopROIOpportunities = ({ opportunities, onOpportunitySelect }: TopROIOpportunitiesProps) => {
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
              <div 
                key={opportunity.id} 
                className="flex justify-between items-center p-3 bg-muted rounded cursor-pointer hover:bg-accent transition-colors"
                onClick={() => onOpportunitySelect(opportunity)}
              >
                <div>
                  <p className="font-medium">{opportunity.brand} {opportunity.model}</p>
                  <p className="text-sm text-muted-foreground">Ref. {opportunity.reference}</p>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  +{opportunity.roi}% ROI
                </Badge>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default TopROIOpportunities;
