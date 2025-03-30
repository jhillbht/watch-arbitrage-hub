
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

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
    // Initialize Supabase client with admin privileges
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? '',
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Parse request body
    const { testMode, debug = false } = await req.json();
    
    // Debug logging helper
    const debugLog = (message, data = null) => {
      if (debug) {
        console.log(`DEBUG - ${message}`, data ? JSON.stringify(data) : '');
      }
    };
    
    debugLog('Request received with options', { testMode, debug });
    
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
    
    // Get primary API key from the database - using direct query instead of RPC
    let { data: primaryKeyData, error: primaryKeyError } = await supabaseAdmin
      .from('api_keys')
      .select('key_value')
      .eq('key_name', 'WATCH_CHARTS_API_KEY')
      .single();
    
    let apiKey = primaryKeyData?.key_value;
    
    if (primaryKeyError || !apiKey) {
      console.error("Error fetching primary API key:", primaryKeyError);
      debugLog('Primary key retrieval failed', primaryKeyError);
      
      // Try backup key
      console.log("Attempting to use backup API key");
      let { data: backupKeyData, error: backupKeyError } = await supabaseAdmin
        .from('api_keys')
        .select('key_value')
        .eq('key_name', 'WATCH_CHARTS_API_KEY_BACKUP')
        .single();
      
      if (backupKeyError || !backupKeyData?.key_value) {
        console.error("Error fetching backup API key:", backupKeyError);
        debugLog('Backup key retrieval also failed', backupKeyError);
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: "No valid API key found in database" 
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }
      
      apiKey = backupKeyData.key_value;
      console.log("Successfully retrieved backup API key");
      debugLog('Using backup key');
    } else {
      console.log("Successfully retrieved primary API key");
      debugLog('Using primary key');
    }
    
    // Fetch data from Watch Charts API
    try {
      // This is a placeholder URL - replace with the actual Watch Charts API endpoint
      const watchChartsUrl = "https://api.watchcharts.com/v2/watches";
      
      console.log(`Attempting to fetch data from ${watchChartsUrl}`);
      debugLog('API request details', { url: watchChartsUrl, keyLength: apiKey?.length });
      
      const response = await fetch(watchChartsUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      debugLog('Response status', { status: response.status });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API request failed with status ${response.status}: ${errorText}`);
        debugLog('API error details', { status: response.status, response: errorText });
        
        if (response.status === 403) {
          return new Response(
            JSON.stringify({ 
              success: false, 
              message: "Authentication failed: Invalid API key or insufficient permissions",
              status: response.status,
              details: errorText
            }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 403 }
          );
        }
        
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }
      
      const watchData = await response.json();
      console.log(`Successfully fetched data for ${watchData.length || 'unknown number of'} watches`);
      debugLog('Data fetched successfully', { count: watchData.length || 0 });
      
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
      debugLog('API request exception', { error: apiError.message });
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
