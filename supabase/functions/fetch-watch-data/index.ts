
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { apiKey } = await req.json();
    
    if (!apiKey) {
      console.error("Missing API key");
      return new Response(
        JSON.stringify({ success: false, error: "Missing API key" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }
    
    console.log("Starting data fetch with API key:", apiKey);
    
    // Fetch data from Watch Charts API
    try {
      // This is a placeholder URL - replace with the actual Watch Charts API endpoint
      const watchChartsUrl = "https://api.watchcharts.com/v2/watches";
      
      const response = await fetch(watchChartsUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}: ${await response.text()}`);
      }
      
      const watchData = await response.json();
      console.log(`Successfully fetched data for ${watchData.length || 'unknown number of'} watches`);
      
      // In a real implementation, you would process and store this data in your Supabase database
      // For this example, we're just returning success
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Data fetched successfully",
          count: watchData.length || 0
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } catch (apiError) {
      console.error("Error fetching from Watch Charts API:", apiError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Error fetching from Watch Charts API: ${apiError.message}`
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
