
import { createContext, useContext, useState, ReactNode } from 'react';
import { PremiumFeatureAccess, DEFAULT_FREE_ACCESS, PREMIUM_ACCESS } from '@/types/watch';
import { useToast } from '@/components/ui/use-toast';

interface PremiumContextType {
  isPremium: boolean;
  features: PremiumFeatureAccess;
  activatePremium: () => void;
  deactivatePremium: () => void;
  canAccess: (feature: keyof PremiumFeatureAccess) => boolean;
  requirePremium: (feature: keyof PremiumFeatureAccess) => boolean;
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export const PremiumProvider = ({ children }: { children: ReactNode }) => {
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [features, setFeatures] = useState<PremiumFeatureAccess>(DEFAULT_FREE_ACCESS);
  const { toast } = useToast();
  
  const activatePremium = () => {
    setIsPremium(true);
    setFeatures(PREMIUM_ACCESS);
    toast({
      title: "Premium Activated",
      description: "You now have access to all premium features",
      variant: "default",
    });
  };
  
  const deactivatePremium = () => {
    setIsPremium(false);
    setFeatures(DEFAULT_FREE_ACCESS);
    toast({
      title: "Premium Deactivated",
      description: "Your subscription has been canceled",
      variant: "default",
    });
  };
  
  const canAccess = (feature: keyof PremiumFeatureAccess): boolean => {
    return features[feature];
  };
  
  const requirePremium = (feature: keyof PremiumFeatureAccess): boolean => {
    if (canAccess(feature)) return false;
    
    toast({
      title: "Premium Feature",
      description: "This feature requires a premium subscription",
      variant: "destructive",
    });
    
    return true;
  };
  
  return (
    <PremiumContext.Provider 
      value={{ 
        isPremium, 
        features, 
        activatePremium, 
        deactivatePremium, 
        canAccess, 
        requirePremium 
      }}
    >
      {children}
    </PremiumContext.Provider>
  );
};

export const usePremium = () => {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
};
