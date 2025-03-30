
import React from 'react';
import Hero from '@/components/Hero';
import PriceComparison from '@/components/PriceComparison';
import PopularWatchesCarousel from '@/components/PopularWatchesCarousel';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <main>
        <PopularWatchesCarousel />
        <PriceComparison />
      </main>
    </div>
  );
};

export default Home;
