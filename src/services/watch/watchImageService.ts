
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
  
  // Try to find a similar watch by brand only
  const brandMatches = Object.keys(watchImageMap).filter(k => k.startsWith(`${brand}|`));
  if (brandMatches.length > 0) {
    return watchImageMap[brandMatches[0]];
  }
  
  // Fallback to a default image if no match is found
  console.log(`No image found for ${key}, using default`);
  return 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
};

// Centralized mapping function for consistent watch images 
export const getConsistentWatchImage = (brand: string, model: string, reference?: string): string => {
  const key = `${brand}|${model}`;
  
  if (watchImageMap[key]) {
    return watchImageMap[key];
  }
  
  // Mapping for common watch brands to ensure consistency
  const brandImageMap: Record<string, string> = {
    'Rolex': 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80',
    'Patek Philippe': 'https://images.unsplash.com/photo-1627910016961-ee310ef7f8cb?auto=format&fit=crop&q=80',
    'Audemars Piguet': 'https://images.unsplash.com/photo-1646192520737-36290f3341f0?auto=format&fit=crop&q=80',
    'Omega': 'https://images.unsplash.com/photo-1614947078261-73fafcefb9cb?auto=format&fit=crop&q=80',
    'Cartier': 'https://images.unsplash.com/photo-1548171699-258c183348da?auto=format&fit=crop&q=80',
    'Richard Mille': 'https://images.unsplash.com/photo-1614164184841-2e0ad4705228?auto=format&fit=crop&q=80'
  };
  
  // Return brand-specific image if available
  if (brandImageMap[brand]) {
    return brandImageMap[brand];
  }
  
  // Default fallback image
  return 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80';
};
