
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PriceComparison from '@/components/PriceComparison';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/home/FeaturesSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import { updateWatchChartsApiKeys } from '@/scripts/updateApiKeys';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    const setupApiKeys = async () => {
      const success = await updateWatchChartsApiKeys();
      
      if (success) {
        toast({
          title: "API Keys Updated",
          description: "Watch Charts API keys have been successfully updated.",
          variant: "default",
        });
      }
    };
    
    setupApiKeys();
  }, [toast]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturesSection />
        <PriceComparison />
        <BenefitsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
