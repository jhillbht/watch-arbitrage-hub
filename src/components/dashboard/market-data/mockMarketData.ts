
// Mock data for the market dashboard

export const watchData = [
  { 
    id: 1,
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    retailPrice: 10100,
    marketPrice: 15500,
    premium: 53.5,
    trend: 'up',
    trendValue: 2.3
  },
  { 
    id: 2,
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    retailPrice: 35000,
    marketPrice: 132000,
    premium: 277.1,
    trend: 'down',
    trendValue: 5.7
  },
  { 
    id: 3,
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST.OO.1220ST.01',
    retailPrice: 25000,
    marketPrice: 42000,
    premium: 68.0,
    trend: 'down',
    trendValue: 1.2
  },
  { 
    id: 4,
    brand: 'Omega',
    model: 'Speedmaster Moonwatch',
    reference: '310.30.42.50.01.001',
    retailPrice: 6400,
    marketPrice: 7200,
    premium: 12.5,
    trend: 'up',
    trendValue: 0.8
  },
  { 
    id: 5,
    brand: 'Rolex',
    model: 'Daytona',
    reference: '116500LN',
    retailPrice: 14550,
    marketPrice: 35000,
    premium: 140.5,
    trend: 'down',
    trendValue: 3.1
  },
];

// Generate a more comprehensive historical price dataset with proper date formatting
const generateHistoricalPrices = () => {
  const currentDate = new Date();
  const data = [];
  
  // Generate 24 months of data (2 years) for more realistic trends
  for (let i = 24; i >= 0; i--) {
    const date = new Date();
    date.setMonth(currentDate.getMonth() - i);
    
    const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    
    // Create price with some volatility based on timeframe
    // Base price is 50,000, with different trends depending on time periods
    let basePrice = 50000;
    
    // Last 3 months: downward trend
    if (i <= 3) {
      basePrice = 54000 - (i * 1500);
      // Add some randomness (±3%)
      const randomFactor = 1 + ((Math.random() * 6) - 3) / 100;
      basePrice = Math.round(basePrice * randomFactor);
    } 
    // 3-6 months ago: stable with minor fluctuations
    else if (i <= 6) {
      basePrice = 54000;
      // Add some randomness (±2%)
      const randomFactor = 1 + ((Math.random() * 4) - 2) / 100;
      basePrice = Math.round(basePrice * randomFactor);
    }
    // 6-12 months ago: rising trend
    else if (i <= 12) {
      basePrice = 42000 + ((12 - i) * 2000);
      // Add some randomness (±4%)
      const randomFactor = 1 + ((Math.random() * 8) - 4) / 100;
      basePrice = Math.round(basePrice * randomFactor);
    }
    // 12-24 months ago: initial stability then rising
    else {
      basePrice = 35000 + ((24 - i) * 500);
      // Add some randomness (±5%)
      const randomFactor = 1 + ((Math.random() * 10) - 5) / 100;
      basePrice = Math.round(basePrice * randomFactor);
    }
    
    data.push({ date: monthYear, value: basePrice });
  }
  
  return data;
};

export const historicalPriceData = generateHistoricalPrices();

export const marketComparison = [
  { platform: 'Chrono24', price: 15800, location: 'Global' },
  { platform: 'WatchBox', price: 15200, location: 'US' },
  { platform: 'Bob\'s Watches', price: 15700, location: 'US' },
  { platform: 'Watchfinder', price: 16100, location: 'UK' },
  { platform: 'Crown & Caliber', price: 15400, location: 'US' },
];
