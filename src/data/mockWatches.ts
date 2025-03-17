
import { Watch } from '@/types/watch';

export const mockWatches: Watch[] = [
  {
    id: 1,
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    image: 'https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-4.0.3',
    prices: {
      us: 14500,
      eu: 13800,
      uk: 12900,
      jp: 13100,
      hk: 13400
    },
    arbitrage: {
      bestBuy: 'uk',
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
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3',
    prices: {
      us: 142750,
      eu: 139000,
      uk: 136500,
      jp: 145000,
      hk: 140500
    },
    arbitrage: {
      bestBuy: 'uk',
      bestSell: 'jp',
      profit: 8500,
      roi: 6.2
    }
  },
  {
    id: 3,
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST.OO.1220ST.01',
    image: 'https://images.unsplash.com/photo-1617714651073-337e5f08a6c7?ixlib=rb-4.0.3',
    prices: {
      us: 79300,
      eu: 75500,
      uk: 72900,
      jp: 76800,
      hk: 74200
    },
    arbitrage: {
      bestBuy: 'uk',
      bestSell: 'us',
      profit: 6400,
      roi: 8.8
    }
  }
];
