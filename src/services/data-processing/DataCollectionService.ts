
import { useState, useEffect } from 'react';

// Data collection service - handling data polling functionality
export const useDataCollection = () => {
  const [isPolling, setIsPolling] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const startPolling = () => {
    setIsPolling(true);
    setLastUpdated(new Date());
    console.log('Started mock data polling');
  };
  
  const stopPolling = () => {
    setIsPolling(false);
    console.log('Stopped mock data polling');
  };
  
  // Mock polling scheduler - in a real app, this would use setInterval
  useEffect(() => {
    if (isPolling) {
      const interval = setInterval(() => {
        console.log('Polling for new data...');
        // Simulate successful poll 90% of the time
        if (Math.random() > 0.1) {
          setLastUpdated(new Date());
        } else {
          setError('Simulated polling error');
          setTimeout(() => {
            console.log('Retrying after error...');
            setError(null);
            setLastUpdated(new Date());
          }, 3000);
        }
      }, 60000); // Poll every minute in this simulation
      
      return () => clearInterval(interval);
    }
  }, [isPolling]);
  
  return { isPolling, lastUpdated, error, startPolling, stopPolling };
};
