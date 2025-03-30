
import React from 'react';
import Hero from '@/components/Hero';
import PriceComparison from '@/components/PriceComparison';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <main>
        <PriceComparison />
      </main>
    </div>
  );
};

export default Home;
