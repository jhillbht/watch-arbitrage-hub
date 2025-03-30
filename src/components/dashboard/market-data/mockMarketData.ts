
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

export const historicalPriceData = [
  { date: 'Jan 2023', value: 32000 },
  { date: 'Feb 2023', value: 34000 },
  { date: 'Mar 2023', value: 38000 },
  { date: 'Apr 2023', value: 41000 },
  { date: 'May 2023', value: 40000 },
  { date: 'Jun 2023', value: 42000 },
  { date: 'Jul 2023', value: 45000 },
  { date: 'Aug 2023', value: 49000 },
  { date: 'Sep 2023', value: 48000 },
  { date: 'Oct 2023', value: 51000 },
  { date: 'Nov 2023', value: 54000 },
  { date: 'Dec 2023', value: 59000 },
  { date: 'Jan 2024', value: 62000 },
  { date: 'Feb 2024', value: 65000 },
  { date: 'Mar 2024', value: 68000 },
  { date: 'Apr 2024', value: 67000 },
];

export const marketComparison = [
  { platform: 'Chrono24', price: 15800, location: 'Global' },
  { platform: 'WatchBox', price: 15200, location: 'US' },
  { platform: 'Bob\'s Watches', price: 15700, location: 'US' },
  { platform: 'Watchfinder', price: 16100, location: 'UK' },
  { platform: 'Crown & Caliber', price: 15400, location: 'US' },
];
