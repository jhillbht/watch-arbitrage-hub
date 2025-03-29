
import { Download, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/utils/formatters';
import { useToast } from '@/components/ui/use-toast';

interface Invoice {
  id: string;
  date: Date;
  amount: number;
  status: string;
}

interface BillingHistoryProps {
  invoices: Invoice[];
}

const BillingHistory = ({ invoices }: BillingHistoryProps) => {
  const { toast } = useToast();
  
  const handleDownloadInvoice = (invoiceId: string) => {
    toast({
      title: "Downloading Invoice",
      description: `Invoice ${invoiceId} is being downloaded.`,
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing History</CardTitle>
        <CardDescription>
          Recent invoices and payments
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex justify-between items-center p-3 border rounded-md">
            <div>
              <div className="font-medium">${invoice.amount}</div>
              <div className="text-sm text-muted-foreground">{formatDate(invoice.date)}</div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => handleDownloadInvoice(invoice.id)}>
              <Download className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <ClipboardList className="mr-2 h-4 w-4" />
          View All Invoices
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BillingHistory;
