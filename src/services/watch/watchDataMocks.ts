
import { Watch, WatchPremiumData, WatchHistoricalPrice, WatchMarketDepth } from '@/types/watch';

// Mock data for testing
export const mockWatches: Watch[] = [
  {
    id: 1,
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3',
    prices: {
      us: 14500,
      eu: 13800,
      uk: 13200,
      jp: 12900,
      hk: 13600
    },
    arbitrage: {
      bestBuy: 'jp',
      bestSell: 'us',
      profit: 1600,
      roi: 12.4
    }
  },
  {
    id: 2,
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    image: 'https://images.unsplash.com/photo-1655219282516-d95e4bddce80?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    prices: {
      us: 138000,
      eu: 132000,
      uk: 128000,
      jp: 125000,
      hk: 130000
    },
    arbitrage: {
      bestBuy: 'jp',
      bestSell: 'us',
      profit: 13000,
      roi: 10.4
    }
  },
  {
    id: 3,
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST.OO.1220ST.01',
    image: 'https://images.unsplash.com/photo-1694698656381-33df28398eee?auto=format&fit=crop&q=80&w=2988&ixlib=rb-4.0.3',
    prices: {
      us: 45000,
      eu: 42000,
      uk: 41500,
      jp: 40000,
      hk: 42500
    },
    arbitrage: {
      bestBuy: 'jp',
      bestSell: 'us',
      profit: 5000,
      roi: 12.5
    }
  }
];

// Image URLs for popular watches
export const watchImageMap: Record<string, string> = {
  'Rolex|Daytona': 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Patek Philippe|Nautilus': 'https://images.unsplash.com/photo-1627910016961-ee310ef7f8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Audemars Piguet|Royal Oak': 'https://images.unsplash.com/photo-1646192520737-36290f3341f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Omega|Speedmaster Moonwatch': 'https://images.unsplash.com/photo-1614947078261-73fafcefb9cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Rolex|GMT-Master II': 'https://images.unsplash.com/photo-1592435300631-6adee20e6abd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Cartier|Santos': 'https://images.unsplash.com/photo-1548171699-258c183348da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

// Generate premium mock data for a watch
export const generateMockPremiumData = (watchId: number): WatchPremiumData => {
  // Generate historical prices
  const historicalPrices: WatchHistoricalPrice[] = [];
  const today = new Date();
  const regions = ['us', 'eu', 'uk', 'jp', 'hk'];
  
  // Create 6 months of data
  for (let i = 0; i < 180; i += 30) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Add an entry for each region
    regions.forEach(region => {
      // Base price depends on watch ID
      let basePrice = watchId === 1 ? 15000 : watchId === 2 ? 140000 : 45000;
      
      // Add some fluctuation
      const fluctuation = (Math.random() * 0.2) - 0.1; // -10% to +10%
      const price = Math.round(basePrice * (1 + fluctuation));
      
      historicalPrices.push({
        date: date.toISOString().split('T')[0], // Format as YYYY-MM-DD
        price,
        market: region
      });
    });
  }
  
  // Generate market depth data
  const marketDepth: WatchMarketDepth[] = regions.map(region => {
    return {
      market: region,
      buyOrders: Math.floor(Math.random() * 50) + 10,
      sellOrders: Math.floor(Math.random() * 50) + 10,
      averageTimeToSell: Math.floor(Math.random() * 30) + 5,
      liquidityScore: Math.floor(Math.random() * 10) + 1
    };
  });
  
  return {
    historicalPrices,
    marketDepth,
    salesVelocity: Math.random() * 5, // 0-5 sales per day
    dealerPremium: Math.random() * 0.15, // 0-15% premium
    confidence: 0.7 + (Math.random() * 0.3) // 0.7-1.0 confidence
  };
};
