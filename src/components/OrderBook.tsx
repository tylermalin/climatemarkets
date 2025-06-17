import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { OrderBook } from '../types/climate';

interface OrderBookProps {
  orderBook: OrderBook;
  onPlaceOrder: (type: 'buy' | 'sell', price: number, size: number) => void;
}

export function OrderBook({ orderBook, onPlaceOrder }: OrderBookProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Order Book</h3>
      
      {/* Asks (Sell Orders) */}
      <div className="space-y-1 mb-4">
        {orderBook.asks.map((ask, index) => (
          <motion.button
            key={`ask-${index}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between p-2 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors"
            onClick={() => onPlaceOrder('buy', ask.price, ask.size)}
          >
            <div className="flex items-center text-red-400">
              <TrendingDown className="h-4 w-4 mr-2" />
              <span className="font-medium">${ask.price.toFixed(2)}</span>
            </div>
            <span className="text-gray-400">{ask.size} shares</span>
          </motion.button>
        ))}
      </div>

      {/* Spread Indicator */}
      <div className="text-center py-2 text-sm text-gray-500">
        Spread: $
        {orderBook.asks.length && orderBook.bids.length
          ? (
              Math.min(...orderBook.asks.map((a) => a.price)) -
              Math.max(...orderBook.bids.map((b) => b.price))
            ).toFixed(2)
          : 'N/A'}
      </div>

      {/* Bids (Buy Orders) */}
      <div className="space-y-1">
        {orderBook.bids.map((bid, index) => (
          <motion.button
            key={`bid-${index}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between p-2 rounded bg-green-500/10 hover:bg-green-500/20 transition-colors"
            onClick={() => onPlaceOrder('sell', bid.price, bid.size)}
          >
            <div className="flex items-center text-green-400">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span className="font-medium">${bid.price.toFixed(2)}</span>
            </div>
            <span className="text-gray-400">{bid.size} shares</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}