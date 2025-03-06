import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Plus, Minus } from 'lucide-react';

interface TradePanelProps {
  type: 'buy' | 'sell';
  currentPrice: number;
  onTrade: (amount: number) => void;
}

export function TradePanel({ type, currentPrice, onTrade }: TradePanelProps) {
  const [amount, setAmount] = useState(20);
  const maxAmount = 100;

  const handleAmountChange = (value: number) => {
    setAmount(Math.min(Math.max(1, value), maxAmount));
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">
          {type === 'buy' ? 'Buy Yes' : 'Buy No'}
        </h3>
        <div className="text-sm text-gray-400">
          Max ${maxAmount}
        </div>
      </div>

      <div className="space-y-4">
        {/* Amount Input */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Amount</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="number"
              value={amount}
              onChange={(e) => handleAmountChange(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {[1, 20, 50, 100].map((value) => (
            <button
              key={value}
              onClick={() => handleAmountChange(value)}
              className={`px-2 py-1 rounded ${
                amount === value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              ${value}
            </button>
          ))}
        </div>

        {/* Quantity Controls */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Quantity</label>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleAmountChange(amount - 1)}
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700"
            >
              <Minus className="h-5 w-5" />
            </button>
            <span className="flex-1 text-center text-white text-lg font-medium">
              {(amount / currentPrice).toFixed(2)} shares
            </span>
            <button
              onClick={() => handleAmountChange(amount + 1)}
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Trade Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onTrade(amount)}
          className={`w-full py-3 rounded-lg font-medium ${
            type === 'buy'
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          {type === 'buy' ? 'Buy Yes' : 'Buy No'}
        </motion.button>

        <p className="text-sm text-gray-400 text-center">
          Est. payout: ${(amount * (1 / currentPrice)).toFixed(2)}
        </p>
      </div>
    </div>
  );
}