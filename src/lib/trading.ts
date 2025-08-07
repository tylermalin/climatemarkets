import { createClient } from '@supabase/supabase-js';
import type { MarketOrder, MarketTrade, OrderBook } from '../types/trading';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only create Supabase client if we have valid credentials
const supabase = supabaseUrl && supabaseKey && !supabaseUrl.includes('your_supabase') && !supabaseKey.includes('your_supabase')
  ? createClient(supabaseUrl, supabaseKey)
  : null;

if (!supabase) {
  console.warn('Supabase not configured. Please add your Supabase credentials to the .env file.');
}

export async function getOrderBook(marketId: string): Promise<OrderBook> {
  if (!supabase) {
    console.warn('Supabase not configured. Using mock order book data.');
    return {
      bids: [
        { price: 0.85, size: 500, total: 425 },
        { price: 0.84, size: 400, total: 336 },
        { price: 0.83, size: 300, total: 249 },
        { price: 0.82, size: 200, total: 164 },
      ],
      asks: [
        { price: 0.89, size: 100, total: 89 },
        { price: 0.88, size: 200, total: 176 },
        { price: 0.87, size: 300, total: 261 },
        { price: 0.86, size: 400, total: 344 },
      ]
    };
  }

  const { data: orders, error } = await supabase
    .from('market_orders')
    .select('*')
    .eq('market_id', marketId)
    .eq('status', 'open');

  if (error) throw error;

  const bids = orders
    .filter(order => order.side === 'buy')
    .sort((a, b) => b.price - a.price)
    .reduce((acc: OrderBook['bids'], order) => {
      const price = Number(order.price);
      const size = Number(order.size);
      const existing = acc.find(bid => bid.price === price);
      
      if (existing) {
        existing.size += size;
        existing.total = existing.size * price;
      } else {
        acc.push({ price, size, total: size * price });
      }
      
      return acc;
    }, []);

  const asks = orders
    .filter(order => order.side === 'sell')
    .sort((a, b) => a.price - b.price)
    .reduce((acc: OrderBook['asks'], order) => {
      const price = Number(order.price);
      const size = Number(order.size);
      const existing = acc.find(ask => ask.price === price);
      
      if (existing) {
        existing.size += size;
        existing.total = existing.size * price;
      } else {
        acc.push({ price, size, total: size * price });
      }
      
      return acc;
    }, []);

  return { bids, asks };
}

export async function placeOrder(order: Omit<MarketOrder, 'id' | 'filled_size' | 'status' | 'created_at' | 'updated_at'>): Promise<MarketOrder> {
  if (!supabase) {
    console.warn('Supabase not configured. Mock order placement.');
    return {
      ...order,
      id: 'mock-order-' + Date.now(),
      filled_size: 0,
      status: 'open',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    } as MarketOrder;
  }

  const { data, error } = await supabase
    .from('market_orders')
    .insert([{
      ...order,
      filled_size: 0,
      status: 'open'
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function cancelOrder(orderId: string, userId: string): Promise<void> {
  if (!supabase) {
    console.warn('Supabase not configured. Mock order cancellation.');
    return;
  }

  const { error } = await supabase
    .from('market_orders')
    .update({ status: 'cancelled' })
    .eq('id', orderId)
    .eq('user_id', userId);

  if (error) throw error;
}

export async function getUserOrders(userId: string): Promise<MarketOrder[]> {
  if (!supabase) {
    console.warn('Supabase not configured. Using mock user orders.');
    return [];
  }

  const { data, error } = await supabase
    .from('market_orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getUserTrades(userId: string): Promise<MarketTrade[]> {
  if (!supabase) {
    console.warn('Supabase not configured. Using mock user trades.');
    return [];
  }

  const { data, error } = await supabase
    .from('market_trades')
    .select('*')
    .or(`maker_user_id.eq.${userId},taker_user_id.eq.${userId}`)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}