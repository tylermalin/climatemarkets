// Remove Supabase import and use mock data

export interface Order {
  id: string;
  marketId: string;
  type: 'buy' | 'sell';
  price: number;
  size: number;
  status: 'pending' | 'filled' | 'cancelled';
  userId: string;
  createdAt: Date;
}

export interface Trade {
  id: string;
  orderId: string;
  marketId: string;
  price: number;
  size: number;
  side: 'buy' | 'sell';
  timestamp: Date;
}

export interface MarketPosition {
  marketId: string;
  userId: string;
  shares: number;
  averagePrice: number;
  unrealizedPnL: number;
}

export class TradingEngine {
  constructor() {
    console.warn('Using mock TradingEngine for development');
  }

  async placeOrder(order: Partial<Order>): Promise<Order> {
    console.warn('Using mock data for development');
    return {
      id: Math.random().toString(36).substr(2, 9),
      marketId: order.marketId || '',
      type: order.type || 'buy',
      price: order.price || 0,
      size: order.size || 0,
      status: 'pending',
      userId: order.userId || '',
      createdAt: new Date(),
    };
  }

  async getOrderBook(marketId: string) {
    console.warn('Using mock data for development');
    return {
      bids: [
        { price: 0.75, size: 100 },
        { price: 0.70, size: 200 }
      ],
      asks: [
        { price: 0.80, size: 150 },
        { price: 0.85, size: 300 }
      ]
    };
  }

  async cancelOrder(orderId: string) {
    console.warn('Using mock data for development');
    return { success: true };
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    console.warn('Using mock data for development');
    return [];
  }

  async getUserTrades(userId: string): Promise<Trade[]> {
    console.warn('Using mock data for development');
    return [];
  }

  async getUserPositions(userId: string): Promise<MarketPosition[]> {
    console.warn('Using mock data for development');
    return [];
  }

  async executeAtomicSwap(order1: Order, order2: Order) {
    console.warn('Using mock data for development');
    return { success: true };
  }

  async resolveMarket(marketId: string, outcome: string) {
    console.warn('Using mock data for development');
    return { success: true };
  }
}

// Legacy function exports for backward compatibility
export async function placeOrder(order: any) {
  console.warn('Using mock data for development');
  return {
    id: Math.random().toString(36).substr(2, 9),
    ...order,
    status: 'pending'
  };
}

export async function getOrderBook(marketId: string) {
  console.warn('Using mock data for development');
  return {
    bids: [
      { price: 0.75, size: 100 },
      { price: 0.70, size: 200 }
    ],
    asks: [
      { price: 0.80, size: 150 },
      { price: 0.85, size: 300 }
    ]
  };
}

export async function cancelOrder(orderId: string) {
  console.warn('Using mock data for development');
  return { success: true };
}

export async function getUserOrders(userId: string) {
  console.warn('Using mock data for development');
  return [];
}

export async function getUserTrades(userId: string) {
  console.warn('Using mock data for development');
  return [];
}

export async function getUserPositions(userId: string) {
  console.warn('Using mock data for development');
  return [];
}

export async function executeAtomicSwap(order1: any, order2: any) {
  console.warn('Using mock data for development');
  return { success: true };
}

export async function resolveMarket(marketId: string, outcome: string) {
  console.warn('Using mock data for development');
  return { success: true };
}
