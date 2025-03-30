
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
    const { apiKey, testMode } = await req.json();
    
    if (!apiKey) {
      console.error("Missing API key");
      return new Response(
        JSON.stringify({ success: false, error: "Missing API key" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }
    
    console.log("Starting data fetch with API key:", apiKey);
    
    // If in test mode, return success without calling the actual API
    if (testMode) {
      console.log("Test mode enabled, returning mock data");
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Test connection successful",
          count: 25,
          test: true
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    // Fetch data from Watch Charts API
    try {
      // This is a placeholder URL - replace with the actual Watch Charts API endpoint
      const watchChartsUrl = "https://api.watchcharts.com/v2/watches";
      
      console.log(`Attempting to fetch data from ${watchChartsUrl}`);
      
      const response = await fetch(watchChartsUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API request failed with status ${response.status}: ${errorText}`);
        
        if (response.status === 403) {
          return new Response(
            JSON.stringify({ 
              success: false, 
              message: "Authentication failed: Invalid API key or insufficient permissions",
              status: response.status
            }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 403 }
          );
        }
        
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
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
