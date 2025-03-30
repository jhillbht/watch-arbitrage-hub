
import { watchImageMap } from './watchDataMocks';

// Function to get watch images
export const getWatchImages = async (brand: string, model: string): Promise<string> => {
  // In a real implementation, this would call an API or database
  // For now, we return the mock data from our mapping
  const key = `${brand}|${model}`;
  
  // If we have a direct match in our mapping
  if (watchImageMap[key]) {
    return watchImageMap[key];
  }
  
  // Fallback to a default image if no match is found
  console.log(`No image found for ${key}, using default`);
  return 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
};
