import { createClient } from '@supabase/supabase-js';
import type { MarketOrder, MarketTrade, OrderBook } from '../types/trading';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export async function getOrderBook(marketId: string): Promise<OrderBook> {
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
  const { error } = await supabase
    .from('market_orders')
    .update({ status: 'cancelled' })
    .eq('id', orderId)
    .eq('user_id', userId);

  if (error) throw error;
}

export async function getUserOrders(userId: string): Promise<MarketOrder[]> {
  const { data, error } = await supabase
    .from('market_orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getUserTrades(userId: string): Promise<MarketTrade[]> {
  const { data, error } = await supabase
    .from('market_trades')
    .select('*')
    .or(`maker_user_id.eq.${userId},taker_user_id.eq.${userId}`)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}