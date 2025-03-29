
import { Watch } from "@/types/watch";

export const mockWatches: Watch[] = [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner Date",
    reference: "126610LN",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80",
    prices: {
      us: 14500,
      eu: 13900,
      uk: 12900,
      jp: 14200,
      hk: 13800
    },
    arbitrage: {
      bestBuy: "uk",
      bestSell: "us",
      profit: 1600,
      roi: 12.4
    }
  },
  {
    id: 2,
    brand: "Patek Philippe",
    model: "Nautilus",
    reference: "5711/1A-010",
    image: "https://images.unsplash.com/photo-1629041236867-79a93b181068?auto=format&fit=crop&q=80",
    prices: {
      us: 142000,
      eu: 138000,
      uk: 136500,
      jp: 145000,
      hk: 140000
    },
    arbitrage: {
      bestBuy: "uk",
      bestSell: "jp",
      profit: 8500,
      roi: 6.2
    }
  },
  {
    id: 3,
    brand: "Audemars Piguet",
    model: "Royal Oak",
    reference: "15500ST.OO.1220ST.01",
    image: "https://images.unsplash.com/photo-1621370115429-cf6c8f4e0fd5?auto=format&fit=crop&q=80",
    prices: {
      us: 79300,
      eu: 75000,
      uk: 72900,
      jp: 78000,
      hk: 76500
    },
    arbitrage: {
      bestBuy: "uk",
      bestSell: "us",
      profit: 6400,
      roi: 8.8
    }
  },
  {
    id: 4,
    brand: "Rolex",
    model: "Daytona",
    reference: "116500LN",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80",
    prices: {
      us: 36500,
      eu: 34800,
      uk: 33900,
      jp: 35700,
      hk: 34200
    },
    arbitrage: {
      bestBuy: "uk",
      bestSell: "us",
      profit: 2600,
      roi: 7.7
    }
  },
  {
    id: 5,
    brand: "Omega",
    model: "Speedmaster Moonwatch Professional",
    reference: "310.30.42.50.01.001",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80",
    prices: {
      us: 7200,
      eu: 6900,
      uk: 6600,
      jp: 7100,
      hk: 6800
    },
    arbitrage: {
      bestBuy: "uk",
      bestSell: "us",
      profit: 600,
      roi: 9.1
    }
  },
  {
    id: 6,
    brand: "Richard Mille",
    model: "RM 11-03",
    reference: "RM11-03 RG",
    image: "https://images.unsplash.com/photo-1614164184841-2e0ad4705228?auto=format&fit=crop&q=80",
    prices: {
      us: 320000,
      eu: 310000,
      uk: 305000,
      jp: 315000,
      hk: 308000
    },
    arbitrage: {
      bestBuy: "uk",
      bestSell: "us",
      profit: 15000,
      roi: 4.9
    }
  },
  {
    id: 7,
    brand: "Patek Philippe",
    model: "Aquanaut",
    reference: "5167A-001",
    image: "https://images.unsplash.com/photo-1646380814052-97b0fdd387b8?auto=format&fit=crop&q=80",
    prices: {
      us: 95000,
      eu: 92000,
      uk: 90000,
      jp: 93000,
      hk: 91500
    },
    arbitrage: {
      bestBuy: "uk",
      bestSell: "us",
      profit: 5000,
      roi: 5.6
    }
  }
];
