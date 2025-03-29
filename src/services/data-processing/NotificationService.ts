
import { PriceAlert } from './DataProcessingTypes';

// Mock notification service
export class NotificationService {
  static async subscribeToAlerts(
    userId: string, 
    watchId: string, 
    targetPrice: number, 
    direction: 'above' | 'below'
  ): Promise<{ success: boolean, alertId?: string, error?: string }> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          alertId: `alert-${Date.now()}`
        });
      }, 800);
    });
  }
  
  static async unsubscribeFromAlert(alertId: string): Promise<{ success: boolean, error?: string }> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true
        });
      }, 500);
    });
  }
  
  static async getActiveAlerts(userId: string): Promise<PriceAlert[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'alert-1',
            user_id: userId,
            watch_id: 'rolex-submariner-date',
            target_price: 13000,
            direction: 'below',
            active: true,
            triggered: false,
            created_at: new Date().toISOString()
          },
          {
            id: 'alert-2',
            user_id: userId,
            watch_id: 'patek-philippe-nautilus',
            target_price: 140000,
            direction: 'below',
            active: true,
            triggered: false,
            created_at: new Date().toISOString()
          }
        ]);
      }, 700);
    });
  }
}
