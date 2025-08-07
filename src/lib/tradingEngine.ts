import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any = null;

if (supabaseUrl && supabaseKey && !supabaseUrl.includes('your_supabase')) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export interface Order {
  id: string;
  market_id: string;
  user_address: string;
  side: 'buy' | 'sell';
  order_type: 'market' | 'limit';
  amount: number;
  price: number;
  filled_amount: number;
  status: 'open' | 'filled' | 'cancelled' | 'expired';
  created_at: string;
  updated_at: string;
}

export interface Trade {
  id: string;
  market_id: string;
  maker_order_id: string;
  taker_order_id: string;
  maker_address: string;
  taker_address: string;
  amount: number;
  price: number;
  fee: number;
  created_at: string;
}

export interface MarketPosition {
  id: string;
  market_id: string;
  user_address: string;
  outcome: 'yes' | 'no';
  amount: number;
  average_price: number;
  unrealized_pnl: number;
  realized_pnl: number;
  created_at: string;
  updated_at: string;
}

export interface CTFCondition {
  id: string;
  question_id: string;
  oracle: string;
  outcome_slots: number;
  parent_collection_id: string;
  condition_id: string;
  resolved: boolean;
  payout_numerator: number[];
  payout_denominator: number;
  resolution_timestamp: string;
  created_at: string;
}

export class TradingEngine {
  // Place a new order
  static async placeOrder(orderData: {
    marketId: string;
    userAddress: string;
    side: 'buy' | 'sell';
    orderType: 'market' | 'limit';
    amount: number;
    price: number;
  }): Promise<Order | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockOrder(orderData);
    }

    try {
      const { data, error } = await supabase
        .from('orders')
        .insert({
          market_id: orderData.marketId,
          user_address: orderData.userAddress,
          side: orderData.side,
          order_type: orderData.orderType,
          amount: orderData.amount,
          price: orderData.price,
          filled_amount: 0,
          status: 'open'
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error placing order:', error);
      return null;
    }
  }

  // Get order book for a market
  static async getOrderBook(marketId: string): Promise<{
    bids: Order[];
    asks: Order[];
  }> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockOrderBook(marketId);
    }

    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('market_id', marketId)
        .eq('status', 'open')
        .order('price', { ascending: false });

      if (error) throw error;

      const bids = data?.filter((order: Order) => order.side === 'buy') || [];
      const asks = data?.filter((order: Order) => order.side === 'sell') || [];

      return { bids, asks };
    } catch (error) {
      console.error('Error fetching order book:', error);
      return { bids: [], asks: [] };
    }
  }

  // Cancel an order
  static async cancelOrder(orderId: string, userAddress: string): Promise<boolean> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return true;
    }

    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: 'cancelled' })
        .eq('id', orderId)
        .eq('user_address', userAddress);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error cancelling order:', error);
      return false;
    }
  }

  // Get user's open orders
  static async getUserOrders(userAddress: string): Promise<Order[]> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUserOrders(userAddress);
    }

    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_address', userAddress)
        .in('status', ['open', 'filled'])
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching user orders:', error);
      return [];
    }
  }

  // Get user's trading history
  static async getUserTrades(userAddress: string): Promise<Trade[]> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUserTrades(userAddress);
    }

    try {
      const { data, error } = await supabase
        .from('trades')
        .select('*')
        .or(`maker_address.eq.${userAddress},taker_address.eq.${userAddress}`)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching user trades:', error);
      return [];
    }
  }

  // Get user's positions
  static async getUserPositions(userAddress: string): Promise<MarketPosition[]> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUserPositions(userAddress);
    }

    try {
      const { data, error } = await supabase
        .from('market_positions')
        .select('*')
        .eq('user_address', userAddress)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching user positions:', error);
      return [];
    }
  }

  // Execute atomic swap (CTF pattern)
  static async executeAtomicSwap(params: {
    makerOrder: Order;
    takerOrder: Order;
    amount: number;
    price: number;
  }): Promise<Trade | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockTrade(params);
    }

    try {
      // Start transaction
      const { data: trade, error: tradeError } = await supabase
        .from('trades')
        .insert({
          market_id: params.makerOrder.market_id,
          maker_order_id: params.makerOrder.id,
          taker_order_id: params.takerOrder.id,
          maker_address: params.makerOrder.user_address,
          taker_address: params.takerOrder.user_address,
          amount: params.amount,
          price: params.price,
          fee: params.amount * params.price * 0.025 // 2.5% fee
        })
        .select()
        .single();

      if (tradeError) throw tradeError;

      // Update orders
      const { error: orderError } = await supabase
        .from('orders')
        .update({
          filled_amount: params.amount,
          status: 'filled'
        })
        .in('id', [params.makerOrder.id, params.takerOrder.id]);

      if (orderError) throw orderError;

      return trade;
    } catch (error) {
      console.error('Error executing atomic swap:', error);
      return null;
    }
  }

  // Resolve market (UMA CTF Adapter pattern)
  static async resolveMarket(marketId: string, outcome: 'yes' | 'no'): Promise<boolean> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return true;
    }

    try {
      // Update market status
      const { error: marketError } = await supabase
        .from('prediction_markets')
        .update({
          resolved: true,
          outcome: outcome,
          resolved_at: new Date().toISOString()
        })
        .eq('id', marketId);

      if (marketError) throw marketError;

      // Update CTF condition
      const { error: conditionError } = await supabase
        .from('ctf_conditions')
        .update({
          resolved: true,
          payout_numerator: outcome === 'yes' ? [1, 0] : [0, 1],
          payout_denominator: 1,
          resolution_timestamp: new Date().toISOString()
        })
        .eq('question_id', marketId);

      if (conditionError) throw conditionError;

      return true;
    } catch (error) {
      console.error('Error resolving market:', error);
      return false;
    }
  }

  // Mock data for development
  private static getMockOrder(orderData: any): Order {
    return {
      id: `order_${Date.now()}`,
      market_id: orderData.marketId,
      user_address: orderData.userAddress,
      side: orderData.side,
      order_type: orderData.orderType,
      amount: orderData.amount,
      price: orderData.price,
      filled_amount: 0,
      status: 'open',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  private static getMockOrderBook(marketId: string): { bids: Order[]; asks: Order[] } {
    return {
      bids: [
        {
          id: 'bid_1',
          market_id: marketId,
          user_address: '0x1234567890123456789012345678901234567890',
          side: 'buy',
          order_type: 'limit',
          amount: 100,
          price: 0.75,
          filled_amount: 0,
          status: 'open',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: 'bid_2',
          market_id: marketId,
          user_address: '0x2345678901234567890123456789012345678901',
          side: 'buy',
          order_type: 'limit',
          amount: 50,
          price: 0.70,
          filled_amount: 0,
          status: 'open',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ],
      asks: [
        {
          id: 'ask_1',
          market_id: marketId,
          user_address: '0x3456789012345678901234567890123456789012',
          side: 'sell',
          order_type: 'limit',
          amount: 75,
          price: 0.80,
          filled_amount: 0,
          status: 'open',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: 'ask_2',
          market_id: marketId,
          user_address: '0x4567890123456789012345678901234567890123',
          side: 'sell',
          order_type: 'limit',
          amount: 25,
          price: 0.85,
          filled_amount: 0,
          status: 'open',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ]
    };
  }

  private static getMockUserOrders(userAddress: string): Order[] {
    return [
      {
        id: 'user_order_1',
        market_id: '1',
        user_address: userAddress,
        side: 'buy',
        order_type: 'limit',
        amount: 50,
        price: 0.75,
        filled_amount: 25,
        status: 'open',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ];
  }

  private static getMockUserTrades(userAddress: string): Trade[] {
    return [
      {
        id: 'trade_1',
        market_id: '1',
        maker_order_id: 'maker_order_1',
        taker_order_id: 'taker_order_1',
        maker_address: userAddress,
        taker_address: '0x1234567890123456789012345678901234567890',
        amount: 25,
        price: 0.75,
        fee: 0.47,
        created_at: new Date().toISOString()
      }
    ];
  }

  private static getMockUserPositions(userAddress: string): MarketPosition[] {
    return [
      {
        id: 'position_1',
        market_id: '1',
        user_address: userAddress,
        outcome: 'yes',
        amount: 100,
        average_price: 0.75,
        unrealized_pnl: 12.50,
        realized_pnl: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ];
  }

  private static getMockTrade(params: any): Trade {
    return {
      id: `trade_${Date.now()}`,
      market_id: params.makerOrder.market_id,
      maker_order_id: params.makerOrder.id,
      taker_order_id: params.takerOrder.id,
      maker_address: params.makerOrder.user_address,
      taker_address: params.takerOrder.user_address,
      amount: params.amount,
      price: params.price,
      fee: params.amount * params.price * 0.025,
      created_at: new Date().toISOString()
    };
  }
}
