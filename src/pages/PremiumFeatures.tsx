
import { PremiumProvider } from '@/hooks/use-premium';
import PremiumPageHeader from '@/components/premium/PremiumPageHeader';
import PremiumTabsNav from '@/components/premium/PremiumTabsNav';

const PremiumFeaturesPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <PremiumPageHeader />
      <PremiumTabsNav />
    </div>
  );
};

const PremiumFeatures = () => {
  return (
    <PremiumProvider>
      <PremiumFeaturesPage />
    </PremiumProvider>
  );
};

export default PremiumFeatures;
