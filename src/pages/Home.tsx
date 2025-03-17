
import React from 'react';
import Hero from '@/components/Hero';
import PriceComparison from '@/components/PriceComparison';
import FeatureCard from '@/components/FeatureCard';

const Home = () => {
  return (
    <div>
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <PriceComparison />
      </main>
    </div>
  );
};

export default Home;
