
import { Watch } from '@/types/watch';
import { mockWatches, generateMockPremiumData } from './watchDataMocks';

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
