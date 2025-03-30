
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, User, Key } from "lucide-react";
import ApiConnectionStatus from "./ApiConnectionStatus";

const DashboardSettings = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Account Settings</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="mr-2 h-5 w-5 text-blue-500" />
              API Connections
            </CardTitle>
            <CardDescription>
              Configure and check the status of external API connections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ApiConnectionStatus />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5 text-blue-500" />
              User Profile
            </CardTitle>
            <CardDescription>
              Manage your personal information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Profile settings will be available in a future update.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5 text-blue-500" />
              Application Settings
            </CardTitle>
            <CardDescription>
              Configure application-wide settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Application settings will be available in a future update.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSettings;
