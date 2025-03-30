
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SidebarUserProfile = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">John Patek</p>
          <p className="text-xs text-sidebar-foreground/60">Premium</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarUserProfile;
