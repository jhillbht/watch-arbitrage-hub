
import { Crown, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PremiumFeatureLockProps {
  featureName: string;
  description: string;
}

export const PremiumFeatureLock = ({ 
  featureName, 
  description 
}: PremiumFeatureLockProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 h-full min-h-[300px] border-2 border-dashed border-gray-200 rounded-lg text-center bg-gray-50">
      <Lock className="w-12 h-12 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{featureName}</h3>
      <p className="text-gray-500 mb-6 max-w-md">{description}</p>
      <Link to="#pricing">
        <Button className="bg-watch-blue hover:bg-blue-600">
          <Crown className="mr-2 h-4 w-4" />
          Upgrade to Premium
        </Button>
      </Link>
    </div>
  );
};

export default PremiumFeatureLock;
