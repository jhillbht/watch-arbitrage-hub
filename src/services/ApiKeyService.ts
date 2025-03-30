
import { supabase } from "@/integrations/supabase/client";

export interface ApiKey {
  id: number;
  key_name: string;
  key_value: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export const fetchApiKeys = async (): Promise<ApiKey[]> => {
  try {
    const { data, error } = await supabase
      .from('api_keys')
      .select('*')
      .order('key_name');

    if (error) {
      console.error('Error fetching API keys:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchApiKeys:', error);
    throw error;
  }
};

export const updateApiKey = async (keyName: string, keyValue: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('api_keys')
      .update({ key_value: keyValue, updated_at: new Date().toISOString() })
      .eq('key_name', keyName);

    if (error) {
      console.error(`Error updating API key ${keyName}:`, error);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Error in updateApiKey for ${keyName}:`, error);
    return false;
  }
};

export const createApiKey = async (keyName: string, keyValue: string, description?: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('api_keys')
      .insert([{ key_name: keyName, key_value: keyValue, description }]);

    if (error) {
      console.error('Error creating API key:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error in createApiKey:', error);
    return false;
  }
};

export const deleteApiKey = async (keyName: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('api_keys')
      .delete()
      .eq('key_name', keyName);

    if (error) {
      console.error(`Error deleting API key ${keyName}:`, error);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Error in deleteApiKey for ${keyName}:`, error);
    return false;
  }
};
