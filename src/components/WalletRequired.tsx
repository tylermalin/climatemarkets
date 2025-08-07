import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Lock, TrendingUp, AlertTriangle } from 'lucide-react';

interface WalletRequiredProps {
  onConnect: () => void;
  title?: string;
  description?: string;
  showConnectButton?: boolean;
}

export function WalletRequired({ 
  onConnect, 
  title = "Wallet Required", 
  description = "Connect your wallet to start trading climate predictions",
  showConnectButton = true 
}: WalletRequiredProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[400px] p-8"
    >
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center mx-auto">
            <Wallet className="h-10 w-10 text-blue-400" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center">
            <Lock className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span>Trade climate prediction markets</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <Wallet className="h-4 w-4 text-blue-400" />
            <span>Secure wallet integration</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <AlertTriangle className="h-4 w-4 text-yellow-400" />
            <span>Real-time market data</span>
          </div>
        </div>

        {/* Connect Button */}
        {showConnectButton && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConnect}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-white shadow-lg"
          >
            <Wallet className="h-5 w-5" />
            <span>Connect Wallet to Trade</span>
          </motion.button>
        )}

        {/* Additional Info */}
        <div className="mt-8 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Supported Wallets:</strong> MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and more.
            <br />
            <strong>Security:</strong> Your private keys never leave your wallet. We only request transaction signatures.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Variant for trading panels
export function TradingWalletRequired({ onConnect }: { onConnect: () => void }) {
  return (
    <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
      <div className="text-center">
        <Wallet className="h-12 w-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white mb-2">Connect Wallet to Trade</h3>
        <p className="text-gray-400 text-sm mb-4">
          You need to connect your wallet to place trades
        </p>
        <button
          onClick={onConnect}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          <Wallet className="h-4 w-4" />
          <span>Connect Wallet</span>
        </button>
      </div>
    </div>
  );
}
