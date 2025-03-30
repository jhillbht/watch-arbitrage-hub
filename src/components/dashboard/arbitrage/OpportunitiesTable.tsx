
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';

interface Opportunity {
  id: number;
  brand: string;
  model: string;
  reference: string;
  buyPrice: number;
  sellPrice: number;
  roi: number;
  potentialProfit: number;
}

interface OpportunitiesTableProps {
  opportunities: Opportunity[];
  selectedOpportunityId: number;
  onOpportunitySelect: (opportunity: Opportunity) => void;
}

const OpportunitiesTable = ({ 
  opportunities, 
  selectedOpportunityId, 
  onOpportunitySelect 
}: OpportunitiesTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Opportunities ({opportunities.length})</CardTitle>
        <CardDescription>
          Sorted by highest ROI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Brand & Model</TableHead>
              <TableHead className="hidden md:table-cell">Reference</TableHead>
              <TableHead className="text-right">Buy Price</TableHead>
              <TableHead className="text-right">Sell Price</TableHead>
              <TableHead className="text-right">ROI</TableHead>
              <TableHead className="text-right">Profit</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {opportunities
              .sort((a, b) => b.roi - a.roi)
              .map((opportunity) => (
                <TableRow 
                  key={opportunity.id}
                  className={selectedOpportunityId === opportunity.id ? 'bg-muted' : ''}
                >
                  <TableCell className="font-medium">
                    {opportunity.brand} {opportunity.model}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{opportunity.reference}</TableCell>
                  <TableCell className="text-right">{formatCurrency(opportunity.buyPrice)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(opportunity.sellPrice)}</TableCell>
                  <TableCell className="text-right text-green-600">+{opportunity.roi}%</TableCell>
                  <TableCell className="text-right">{formatCurrency(opportunity.potentialProfit)}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onOpportunitySelect(opportunity)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OpportunitiesTable;
