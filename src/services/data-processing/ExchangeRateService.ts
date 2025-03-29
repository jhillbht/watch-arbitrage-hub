
// Mock exchange rate service
export class ExchangeRateService {
  private static rates: Record<string, number> = {
    USD: 1,
    EUR: 1.08,
    GBP: 1.29,
    JPY: 0.0069,
    CHF: 1.13,
    HKD: 0.128
  };
  
  static convertCurrency(
    amount: number, 
    fromCurrency: string, 
    toCurrency: string
  ): number {
    const fromRate = this.rates[fromCurrency] || 1;
    const toRate = this.rates[toCurrency] || 1;
    
    // Convert to USD then to target currency
    return (amount * fromRate) / toRate;
  }
  
  static async getLatestRates(): Promise<Record<string, number>> {
    // In a real application, this would fetch from an exchange rate API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({...this.rates});
      }, 500);
    });
  }
}
