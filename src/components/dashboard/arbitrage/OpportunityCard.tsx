
import { Badge } from '@/components/ui/badge';

interface OpportunityCardProps {
  opportunity: {
    id: number;
    brand: string;
    model: string;
    reference: string;
    roi: number;
  };
  onSelect: (opportunity: OpportunityCardProps['opportunity']) => void;
  isSelected?: boolean;
}

const OpportunityCard = ({ opportunity, onSelect, isSelected }: OpportunityCardProps) => {
  return (
    <div 
      key={opportunity.id} 
      className={`flex justify-between items-center p-3 ${isSelected ? 'bg-accent' : 'bg-muted'} rounded cursor-pointer hover:bg-accent transition-colors`}
      onClick={() => onSelect(opportunity)}
    >
      <div>
        <p className="font-medium">{opportunity.brand} {opportunity.model}</p>
        <p className="text-sm text-muted-foreground">Ref. {opportunity.reference}</p>
      </div>
      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
        +{opportunity.roi}% ROI
      </Badge>
    </div>
  );
};

export default OpportunityCard;
