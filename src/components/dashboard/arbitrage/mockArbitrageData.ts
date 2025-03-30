
export interface ArbitrageOpportunity {
  id: number;
  brand: string;
  model: string;
  reference: string;
  buyPrice: number;
  buyPlatform: string;
  buyLocation: string;
  sellPrice: number;
  sellPlatform: string;
  sellLocation: string;
  roi: number;
  potentialProfit: number;
  fees: {
    import: number;
    shipping: number;
    platform: number;
    tax: number;
  };
  confidence: 'high' | 'medium' | 'low';
  details: string;
}

export const arbitrageOpportunities: ArbitrageOpportunity[] = [
  {
    id: 1,
    brand: 'Rolex',
    model: 'Daytona',
    reference: '116500LN',
    buyPrice: 32500,
    buyPlatform: 'WatchBox',
    buyLocation: 'Switzerland',
    sellPrice: 35800,
    sellPlatform: 'Chrono24',
    sellLocation: 'United States',
    roi: 8.5,
    potentialProfit: 2700,
    fees: {
      import: 400,
      shipping: 250,
      platform: 1250,
      tax: 890
    },
    confidence: 'high',
    details: 'White dial, full set with box and papers, unworn condition with stickers.'
  },
  {
    id: 2,
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    buyPrice: 126000,
    buyPlatform: 'Private Seller',
    buyLocation: 'Germany',
    sellPrice: 142000,
    sellPlatform: 'Watchfinder',
    sellLocation: 'United Kingdom',
    roi: 11.2,
    potentialProfit: 12500,
    fees: {
      import: 2800,
      shipping: 600,
      platform: 4900,
      tax: 3200
    },
    confidence: 'medium',
    details: 'Blue dial, box and papers from 2019, excellent condition with minor signs of wear.'
  },
  {
    id: 3,
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15202ST.OO.1240ST.01',
    buyPrice: 85000,
    buyPlatform: 'Dubai Watch Week',
    buyLocation: 'UAE',
    sellPrice: 97000,
    sellPlatform: 'Bob\'s Watches',
    sellLocation: 'United States',
    roi: 12.8,
    potentialProfit: 9500,
    fees: {
      import: 950,
      shipping: 550,
      platform: 3400,
      tax: 2600
    },
    confidence: 'high',
    details: 'Jumbo model, blue dial, box and papers, excellent condition.'
  },
  {
    id: 4,
    brand: 'Richard Mille',
    model: 'RM 011',
    reference: 'RM011 Ti',
    buyPrice: 189000,
    buyPlatform: 'Private Collector',
    buyLocation: 'Hong Kong',
    sellPrice: 225000,
    sellPlatform: 'Sotheby\'s',
    sellLocation: 'United States',
    roi: 15.4,
    potentialProfit: 28000,
    fees: {
      import: 4200,
      shipping: 1800,
      platform: 9000,
      tax: 6000
    },
    confidence: 'medium',
    details: 'Felipe Massa edition, full set, excellent condition.'
  },
  {
    id: 5,
    brand: 'Omega',
    model: 'Speedmaster Moonwatch',
    reference: '310.30.42.50.01.001',
    buyPrice: 5900,
    buyPlatform: 'Crown & Caliber',
    buyLocation: 'United States',
    sellPrice: 7200,
    sellPlatform: 'Watchfinder',
    sellLocation: 'United Kingdom',
    roi: 17.9,
    potentialProfit: 800,
    fees: {
      import: 180,
      shipping: 120,
      platform: 300,
      tax: 250
    },
    confidence: 'high',
    details: 'Sapphire sandwich, full set, unworn condition.'
  }
];
