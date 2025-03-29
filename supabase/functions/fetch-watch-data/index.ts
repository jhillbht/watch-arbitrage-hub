
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Mock function to simulate fetching data from an external API
async function fetchWatchDataFromAPI() {
  // In a real implementation, this would fetch from an actual API
  // For now, returning mock data that matches our database schema
  return [
    {
      brand: "Rolex",
      model: "Submariner Date",
      reference: "126610LN",
      image: "https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-4.0.3",
      prices: {
        us: 14800,
        eu: 13500,
        uk: 12700,
        jp: 16200,
        hk: 14100
      },
      arbitrage: {
        best_buy: "uk",
        best_sell: "jp",
        profit: 3500,
        roi: 27.6
      },
      historicalPrices: [
        { region: "us", date: "2023-06-01", price: 15200 },
        { region: "us", date: "2023-07-01", price: 15000 },
        { region: "us", date: "2023-08-01", price: 14900 },
        { region: "us", date: "2023-09-01", price: 14800 }
      ],
      marketDepth: [
        { market: "us", buy_orders: 120, sell_orders: 89, average_time_to_sell: 8.5, liquidity_score: 8 },
        { market: "eu", buy_orders: 95, sell_orders: 75, average_time_to_sell: 12.2, liquidity_score: 7 }
      ]
    },
    {
      brand: "Patek Philippe",
      model: "Nautilus",
      reference: "5711/1A-010",
      image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3",
      prices: {
        us: 135000,
        eu: 130000,
        uk: 128000,
        jp: 142000,
        hk: 132000
      },
      arbitrage: {
        best_buy: "uk",
        best_sell: "jp",
        profit: 14000,
        roi: 10.9
      },
      historicalPrices: [
        { region: "us", date: "2023-06-01", price: 145000 },
        { region: "us", date: "2023-07-01", price: 140000 },
        { region: "us", date: "2023-08-01", price: 138000 },
        { region: "us", date: "2023-09-01", price: 135000 }
      ],
      marketDepth: [
        { market: "us", buy_orders: 45, sell_orders: 12, average_time_to_sell: 18.5, liquidity_score: 5 },
        { market: "eu", buy_orders: 38, sell_orders: 8, average_time_to_sell: 22.8, liquidity_score: 4 }
      ]
    },
    {
      brand: "Audemars Piguet",
      model: "Royal Oak",
      reference: "15500ST.OO.1220ST.01",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3",
      prices: {
        us: 42000,
        eu: 40500,
        uk: 39800,
        jp: 44500,
        hk: 41200
      },
      arbitrage: {
        best_buy: "uk",
        best_sell: "jp",
        profit: 4700,
        roi: 11.8
      },
      historicalPrices: [
        { region: "us", date: "2023-06-01", price: 44000 },
        { region: "us", date: "2023-07-01", price: 43500 },
        { region: "us", date: "2023-08-01", price: 42800 },
        { region: "us", date: "2023-09-01", price: 42000 }
      ],
      marketDepth: [
        { market: "us", buy_orders: 78, sell_orders: 42, average_time_to_sell: 10.2, liquidity_score: 7 },
        { market: "eu", buy_orders: 65, sell_orders: 38, average_time_to_sell: 14.5, liquidity_score: 6 }
      ]
    },
    {
      brand: "Omega",
      model: "Speedmaster Moonwatch",
      reference: "310.30.42.50.01.001",
      image: "https://images.unsplash.com/photo-1620625515032-6ed0c8ed476b?ixlib=rb-4.0.3",
      prices: {
        us: 7200,
        eu: 6900,
        uk: 6700,
        jp: 7500,
        hk: 7000
      },
      arbitrage: {
        best_buy: "uk",
        best_sell: "jp",
        profit: 800,
        roi: 11.9
      },
      historicalPrices: [
        { region: "us", date: "2023-06-01", price: 7000 },
        { region: "us", date: "2023-07-01", price: 7050 },
        { region: "us", date: "2023-08-01", price: 7150 },
        { region: "us", date: "2023-09-01", price: 7200 }
      ],
      marketDepth: [
        { market: "us", buy_orders: 210, sell_orders: 185, average_time_to_sell: 5.2, liquidity_score: 9 },
        { market: "eu", buy_orders: 185, sell_orders: 160, average_time_to_sell: 6.5, liquidity_score: 8 }
      ]
    },
    {
      brand: "Richard Mille",
      model: "RM 011",
      reference: "RM011 Ti",
      image: "https://images.unsplash.com/photo-1649789186067-88e29e959c61?ixlib=rb-4.0.3",
      prices: {
        us: 225000,
        eu: 215000,
        uk: 210000,
        jp: 240000,
        hk: 218000
      },
      arbitrage: {
        best_buy: "uk",
        best_sell: "jp",
        profit: 30000,
        roi: 14.3
      },
      historicalPrices: [
        { region: "us", date: "2023-06-01", price: 230000 },
        { region: "us", date: "2023-07-01", price: 228000 },
        { region: "us", date: "2023-08-01", price: 226000 },
        { region: "us", date: "2023-09-01", price: 225000 }
      ],
      marketDepth: [
        { market: "us", buy_orders: 12, sell_orders: 8, average_time_to_sell: 30.5, liquidity_score: 3 },
        { market: "eu", buy_orders: 10, sell_orders: 5, average_time_to_sell: 35.8, liquidity_score: 2 }
      ]
    }
  ];
}

async function storeWatchDataInDatabase(supabase, watchData) {
  const results = [];

  for (const watch of watchData) {
    // Insert or update watch
    const { data: watchRecord, error: watchError } = await supabase
      .from('watches')
      .upsert({
        brand: watch.brand,
        model: watch.model,
        reference: watch.reference,
        image: watch.image
      }, { onConflict: 'brand,reference', returning: true });

    if (watchError) {
      console.error('Error inserting watch:', watchError);
      continue;
    }

    const watchId = watchRecord[0].id;
    
    // Insert or update prices
    const pricePromises = Object.entries(watch.prices).map(([region, price]) => {
      return supabase
        .from('watch_prices')
        .upsert({
          watch_id: watchId,
          region,
          price,
          last_updated: new Date().toISOString()
        }, { onConflict: 'watch_id,region' });
    });
    
    await Promise.all(pricePromises);
    
    // Insert or update arbitrage data
    const { error: arbitrageError } = await supabase
      .from('watch_arbitrage')
      .upsert({
        watch_id: watchId,
        best_buy: watch.arbitrage.best_buy,
        best_sell: watch.arbitrage.best_sell,
        profit: watch.arbitrage.profit,
        roi: watch.arbitrage.roi,
        calculated_at: new Date().toISOString()
      }, { onConflict: 'watch_id' });
      
    if (arbitrageError) {
      console.error('Error inserting arbitrage data:', arbitrageError);
    }
    
    // Insert historical prices
    if (watch.historicalPrices && watch.historicalPrices.length > 0) {
      const historicalPromises = watch.historicalPrices.map(hp => {
        return supabase
          .from('watch_historical_prices')
          .upsert({
            watch_id: watchId,
            region: hp.region,
            price: hp.price,
            date: hp.date,
            currency: 'USD'
          }, { onConflict: 'watch_id,region,date' });
      });
      
      await Promise.all(historicalPromises);
    }
    
    // Insert market depth data
    if (watch.marketDepth && watch.marketDepth.length > 0) {
      const marketDepthPromises = watch.marketDepth.map(md => {
        return supabase
          .from('watch_market_depth')
          .upsert({
            watch_id: watchId,
            market: md.market,
            buy_orders: md.buy_orders,
            sell_orders: md.sell_orders,
            average_time_to_sell: md.average_time_to_sell,
            liquidity_score: md.liquidity_score,
            last_updated: new Date().toISOString()
          }, { onConflict: 'watch_id,market' });
      });
      
      await Promise.all(marketDepthPromises);
    }
    
    results.push({
      id: watchId,
      brand: watch.brand,
      model: watch.model,
      reference: watch.reference
    });
  }
  
  return results;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Create a Supabase client with the project URL and service role key
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const watchData = await fetchWatchDataFromAPI();
    const results = await storeWatchDataInDatabase(supabase, watchData);
    
    return new Response(JSON.stringify({
      success: true,
      message: "Watch data successfully stored",
      watches: results
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error in fetch-watch-data function:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }
})
