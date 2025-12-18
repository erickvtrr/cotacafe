import { supabase } from '@/integrations/supabase/client';

export interface CoffeePrice {
  price: number;
  variation: number;
  variationPercent: number;
  type?: string;
  originalPrice?: number;
}

export interface CoffeePricesResponse {
  success: boolean;
  error?: string;
  data: {
    conilon: CoffeePrice;
    arabica: CoffeePrice;
    lastUpdate?: string;
  };
  source?: 'paineldocafe' | 'fallback';
  message?: string;
}

export async function fetchCoffeePrices(): Promise<CoffeePricesResponse> {
  try {
    const { data, error } = await supabase.functions.invoke('fetch-coffee-prices');

    if (error) {
      console.error('Error fetching coffee prices:', error);
      return {
        success: false,
        error: error.message,
        data: getLocalFallbackData()
      };
    }

    return data as CoffeePricesResponse;
  } catch (err) {
    console.error('Error calling coffee prices function:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
      data: getLocalFallbackData()
    };
  }
}

// Local fallback data based on paineldocafe prices
function getLocalFallbackData() {
  return {
    conilon: {
      price: 1195.45,
      variation: 0,
      variationPercent: 0,
      type: 'CONILON 7/8',
    },
    arabica: {
      price: 1481.03,
      variation: 0,
      variationPercent: 0,
      type: 'ARÁBICA RIO',
    },
    lastUpdate: new Date().toISOString()
  };
}
