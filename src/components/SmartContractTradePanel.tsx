import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  Loader2,
  Wallet,
  ExternalLink
} from 'lucide-react';
import { useClimateMarket } from '../hooks/useClimateMarket';
import { PredictionMarket } from '../types/climate';

interface SmartContractTradePanelProps {
  market: PredictionMarket;
}

export function SmartContractTradePanel({ market }: SmartContractTradePanelProps) {
  const {
    selectedMarketId,
    setSelectedMarketId,
    tradeAmount,
    setTradeAmount,
    isYes,
    setIsYes,
    marketData,
    userShares,
    executeBuyShares,
    executeRedeemShares,
    isBuyingShares,
    isRedeemingShares,
    isBuyingSharesSuccess,
    isRedeemingSharesSuccess,
    buySharesError,
    redeemSharesError,
    calculatePrices,
    calculateUserPosition,
    isConnected,
    address,
  } = useClimateMarket();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Set market ID when component mounts
  React.useEffect(() => {
    setSelectedMarketId(parseInt(market.id));
  }, [market.id, setSelectedMarketId]);

  // Handle successful transactions
  React.useEffect(() => {
    if (isBuyingSharesSuccess || isRedeemingSharesSuccess) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }, [isBuyingSharesSuccess, isRedeemingSharesSuccess]);

  // Handle errors
  React.useEffect(() => {
    if (buySharesError || redeemSharesError) {
      setErrorMessage(buySharesError?.message || redeemSharesError?.message || 'Transaction failed');
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
  }, [buySharesError, redeemSharesError]);

  const prices = calculatePrices(marketData);
  const userPosition = calculateUserPosition(userShares);

  const handleTrade = () => {
    if (!isConnected) {
      setErrorMessage('Please connect your wallet first');
      setShowError(true);
      return;
    }

    if (!tradeAmount || parseFloat(tradeAmount) <= 0) {
      setErrorMessage('Please enter a valid amount');
      setShowError(true);
      return;
    }

    executeBuyShares();
  };

  const handleRedeem = () => {
    if (!isConnected) {
      setErrorMessage('Please connect your wallet first');
      setShowError(true);
      return;
    }

    executeRedeemShares();
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Trade with Smart Contract</h3>
        <div className="flex items-center space-x-2">
          {isConnected ? (
            <div className="flex items-center space-x-2 text-green-400">
              <Wallet className="h-4 w-4" />
              <span className="text-sm">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-red-400">
              <XCircle className="h-4 w-4" />
              <span className="text-sm">Wallet not connected</span>
            </div>
          )}
        </div>
      </div>

      {/* Market Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            <span className="text-white font-medium">Yes Price</span>
          </div>
          <div className="text-2xl font-bold text-green-400">
            {prices.yesPrice.toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingDown className="h-5 w-5 text-red-400" />
            <span className="text-white font-medium">No Price</span>
          </div>
          <div className="text-2xl font-bold text-red-400">
            {prices.noPrice.toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="h-5 w-5 text-blue-400" />
            <span className="text-white font-medium">Volume</span>
          </div>
          <div className="text-2xl font-bold text-blue-400">
            ${marketData ? Number(marketData.totalVolume) / 1e18 : market.volume.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Trading Interface */}
      <div className="space-y-4 mb-6">
        {/* Trade Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Trade Amount (ETH)
          </label>
          <input
            type="number"
            value={tradeAmount}
            onChange={(e) => setTradeAmount(e.target.value)}
            placeholder="0.01"
            min="0.01"
            step="0.01"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            disabled={!isConnected || isBuyingShares}
          />
        </div>

        {/* Trade Direction */}
        <div className="flex space-x-2">
          <button
            onClick={() => setIsYes(true)}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              isYes
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            disabled={!isConnected || isBuyingShares}
          >
            Buy Yes
          </button>
          <button
            onClick={() => setIsYes(false)}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              !isYes
                ? 'bg-red-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            disabled={!isConnected || isBuyingShares}
          >
            Buy No
          </button>
        </div>

        {/* Execute Trade */}
        <button
          onClick={handleTrade}
          disabled={!isConnected || !tradeAmount || isBuyingShares}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          {isBuyingShares ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Processing Transaction...</span>
            </>
          ) : (
            <>
              <DollarSign className="h-5 w-5" />
              <span>Execute Trade</span>
            </>
          )}
        </button>
      </div>

      {/* User Position */}
      {isConnected && (userPosition.yesShares > 0 || userPosition.noShares > 0) && (
        <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Your Position</h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Yes Shares</span>
              </div>
              <div className="text-lg font-bold text-green-400">
                {userPosition.yesShares.toFixed(4)} ETH
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <XCircle className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">No Shares</span>
              </div>
              <div className="text-lg font-bold text-red-400">
                {userPosition.noShares.toFixed(4)} ETH
              </div>
            </div>
          </div>
          
          {marketData?.resolved && (
            <button
              onClick={handleRedeem}
              disabled={isRedeemingShares}
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              {isRedeemingShares ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Redeeming...</span>
                </>
              ) : (
                <>
                  <DollarSign className="h-4 w-4" />
                  <span>Redeem Winnings</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Market Status */}
      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300">Market Status</span>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">
              {marketData?.resolved ? 'Resolved' : 'Active'}
            </span>
          </div>
        </div>
        
        {marketData?.resolved && (
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">Outcome:</span>
            <span className={`font-medium ${marketData.outcome ? 'text-green-400' : 'text-red-400'}`}>
              {marketData.outcome ? 'Yes' : 'No'}
            </span>
          </div>
        )}
      </div>

      {/* Success/Error Messages */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-green-900/90 border border-green-700 rounded-lg p-4 z-50"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-400 font-medium">Transaction successful!</span>
          </div>
        </motion.div>
      )}

      {showError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-red-900/90 border border-red-700 rounded-lg p-4 z-50"
        >
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-medium">{errorMessage}</span>
          </div>
        </motion.div>
      )}

      {/* Contract Info */}
      <div className="mt-6 pt-4 border-t border-gray-800">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>Smart Contract</span>
          <a
            href={`https://etherscan.io/address/${marketData?.oracle || '0x1234567890123456789012345678901234567890'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View on Etherscan</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
