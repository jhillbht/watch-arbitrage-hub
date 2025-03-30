
// This is an API service for retrieving watch market data
// Currently the implementation uses simulated data for development
// It can be connected to a real data provider API (like Watch Charts) when ready

import { Watch, WatchPrice, WatchArbitrage, WatchHistoricalPrice, WatchMarketDepth, WatchPremiumData } from '@/types/watch';

// Mock data for testing
const mockWatches: Watch[] = [
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
const watchImageMap = {
  'Rolex|Daytona': 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Patek Philippe|Nautilus': 'https://images.unsplash.com/photo-1627910016961-ee310ef7f8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Audemars Piguet|Royal Oak': 'https://images.unsplash.com/photo-1646192520737-36290f3341f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Omega|Speedmaster Moonwatch': 'https://images.unsplash.com/photo-1614947078261-73fafcefb9cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Rolex|GMT-Master II': 'https://images.unsplash.com/photo-1592435300631-6adee20e6abd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Cartier|Santos': 'https://images.unsplash.com/photo-1548171699-258c183348da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

// Function to get watch images
export const getWatchImages = async (brand: string, model: string): Promise<string> => {
  // In a real implementation, this would call an API or database
  // For now, we return the mock data from our mapping
  const key = `${brand}|${model}`;
  
  // If we have a direct match in our mapping
  if (watchImageMap[key]) {
    return watchImageMap[key];
  }
  
  // Fallback to a default image if no match is found
  console.log(`No image found for ${key}, using default`);
  return 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
};

// Generate premium mock data for a watch
const generateMockPremiumData = (watchId: number): WatchPremiumData => {
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

// Verify connection to the Watch Charts API
export const verifyWatchChartsAPI = async (testMode: boolean = false, debugMode: boolean = false): Promise<{ 
  success: boolean; 
  message: string; 
  count?: number;
  test?: boolean;
  details?: string;
}> => {
  if (testMode) {
    // Simulate API connection in test mode
    console.log('Test mode enabled, simulating successful API connection');
    return { 
      success: true, 
      message: 'Test API connection successful', 
      count: mockWatches.length,
      test: true 
    };
  }
  
  // In a real implementation, this would make an actual API call
  try {
    // Simulating a real API call failing for demonstration
    if (debugMode) {
      console.log('Debug mode enabled, showing detailed error information');
      return {
        success: false,
        message: 'Failed to connect to Watch Charts API',
        details: 'HTTP 403 Forbidden - Invalid API key or insufficient permissions',
        test: false
      };
    }
    
    // This would be replaced with actual API validation code
    return { 
      success: false, 
      message: 'API connection failed - no valid API key found', 
      test: false
    };
  } catch (error) {
    console.error('Error verifying API connection:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error', 
      test: false,
      details: debugMode ? String(error) : undefined
    };
  }
};

// Trigger data fetch from the API
export const triggerDataFetch = async (testMode: boolean = false, debugMode: boolean = false): Promise<boolean> => {
  if (testMode) {
    // In test mode, simulate successful data fetch
    console.log('Test mode enabled, simulating successful data fetch');
    
    // Simulate a delay for realism
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    return true;
  }
  
  try {
    // This would be replaced with actual API data fetching code
    // For now, we simulate a failure if not in test mode
    console.log('Attempting to fetch market data...');
    
    if (debugMode) {
      console.log('Debug mode enabled - showing failed fetch with detailed info');
      console.error('API Error: 403 Forbidden - Invalid API key or insufficient permissions');
    }
    
    return false;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
};

// Gets watch data with premium data if available
export const getWatchData = async (includePremiumData: boolean = false): Promise<Watch[]> => {
  // In a real implementation, this would fetch from an API
  // For now, we return mock data
  
  if (!includePremiumData) {
    return mockWatches;
  }
  
  // Add premium data to watches if requested
  return mockWatches.map(watch => ({
    ...watch,
    premiumData: generateMockPremiumData(watch.id)
  }));
};

export const fetchWatchDetailsById = async (watchId: number, includePremiumData: boolean = false): Promise<Watch | null> => {
  // Find the watch in our mock data
  const watch = mockWatches.find(w => w.id === watchId);
  
  if (!watch) {
    return null;
  }
  
  // Add premium data if requested
  if (includePremiumData) {
    return {
      ...watch,
      premiumData: generateMockPremiumData(watch.id)
    };
  }
  
  return watch;
};
