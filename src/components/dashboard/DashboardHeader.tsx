
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DataFetcher from "./DataFetcher";
import ApiConnectionStatus from "./ApiConnectionStatus";

interface DashboardHeaderProps {
  activeTab: string;
  onChange: (value: string) => void;
}

const DashboardHeader = ({ activeTab, onChange }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col space-y-4 p-4 pt-6 pb-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor global watch prices and arbitrage opportunities.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Search watches..." 
              className="w-full pl-8 bg-background" 
            />
          </div>
          <Button>Export</Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <Tabs
          value={activeTab}
          onValueChange={onChange}
          className="w-full sm:w-auto"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="market">Market Data</TabsTrigger>
            <TabsTrigger value="arbitrage">Arbitrage</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            <TabsTrigger value="settings">Account</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTab !== "settings" && <DataFetcher />}
        {/* ApiConnectionStatus is no longer displayed here */}
      </div>
    </div>
  );
};

export default DashboardHeader;
