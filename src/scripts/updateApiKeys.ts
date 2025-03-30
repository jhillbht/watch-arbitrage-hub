
import { updateApiKey, createApiKey } from '@/services/ApiKeyService';

// This function updates the main Watch Charts API key and adds a backup key
export const updateWatchChartsApiKeys = async () => {
  try {
    // Update the main API key
    const mainKeyUpdated = await updateApiKey(
      'WATCH_CHARTS_API_KEY', 
      'itHHiAqB6pa0DHn6mAvnJ5cwVgJZCpkK2zZG3HHf'
    );
    
    if (!mainKeyUpdated) {
      console.error('Failed to update main Watch Charts API key');
    } else {
      console.log('Successfully updated main Watch Charts API key');
    }
    
    // Create or update backup API key
    const backupKeyCreated = await createApiKey(
      'WATCH_CHARTS_API_KEY_BACKUP',
      'CImBwHV4Wu6awOJK1cOCe99ZQltHeTvf4pYeLYNe',
      'Backup API key for Watch Charts data provider'
    );
    
    if (!backupKeyCreated) {
      // If creation fails, try updating it
      const backupKeyUpdated = await updateApiKey(
        'WATCH_CHARTS_API_KEY_BACKUP', 
        'CImBwHV4Wu6awOJK1cOCe99ZQltHeTvf4pYeLYNe'
      );
      
      if (!backupKeyUpdated) {
        console.error('Failed to create or update backup Watch Charts API key');
      } else {
        console.log('Successfully updated backup Watch Charts API key');
      }
    } else {
      console.log('Successfully created backup Watch Charts API key');
    }
    
    return true;
  } catch (error) {
    console.error('Error updating Watch Charts API keys:', error);
    return false;
  }
};
