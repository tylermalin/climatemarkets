import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Plus, Minus } from 'lucide-react';
import { TradesService } from '../lib/trades';

interface TradePanelProps {
  type: 'buy' | 'sell';
  currentPrice: number;
  onTrade: (amount: number) => void;
  isWalletConnected: boolean;
  userAddress?: string;
  marketId?: string;
  marketTitle?: string;
}

export function TradePanel({ type, currentPrice, onTrade, isWalletConnected, userAddress, marketId, marketTitle }: TradePanelProps) {
  const [amount, setAmount] = useState(20);
  const maxAmount = 100;
  const [isProcessing, setIsProcessing] = useState(false);

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
          onClick={async () => {
            if (!isWalletConnected) {
              alert('Please connect your wallet to trade. You will be prompted to create an account if you don\'t have one.');
              return;
            }
            
            setIsProcessing(true);
            try {
              // Simulate wallet confirmation
              const confirmed = window.confirm(
                `Confirm ${type === 'buy' ? 'Buy Yes' : 'Buy No'} order:\n` +
                `Amount: $${amount}\n` +
                `Shares: ${(amount / currentPrice).toFixed(2)}\n` +
                `Wallet: ${userAddress?.slice(0, 6)}...${userAddress?.slice(-4)}`
              );
              
              if (confirmed) {
                // Execute trade using trades service
                const tradesService = TradesService.getInstance();
                const trade = tradesService.executeTrade(
                  userAddress!,
                  marketId || 'unknown',
                  marketTitle || 'Unknown Market',
                  type,
                  amount,
                  currentPrice
                );
                
                // Simulate transaction processing
                await new Promise(resolve => setTimeout(resolve, 2000));
                onTrade(amount);
                alert('Trade executed successfully! Check your dashboard for details.');
              }
            } catch (error) {
              alert('Trade failed. Please try again.');
              console.error('Trade error:', error);
            } finally {
              setIsProcessing(false);
            }
          }}
          disabled={isProcessing}
          className={`w-full py-3 rounded-lg font-medium ${
            isProcessing 
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : type === 'buy'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          {isProcessing 
            ? 'Processing...' 
            : !isWalletConnected 
              ? 'Connect Wallet to Trade'
              : type === 'buy' 
                ? 'Buy Yes' 
                : 'Buy No'
          }
        </motion.button>

        <p className="text-sm text-gray-400 text-center">
          Est. payout: ${(amount * (1 / currentPrice)).toFixed(2)}
        </p>
      </div>
    </div>
  );
}