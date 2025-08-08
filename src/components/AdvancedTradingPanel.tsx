import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  X,
  Plus,
  Minus,
  Eye,
  EyeOff,
  Zap,
  Shield,
  Target,
  Activity
} from 'lucide-react';
import { TradingEngine, Order, Trade, MarketPosition } from '../lib/tradingEngine';
import { UMAAdapter, UMARequest, MarketResolution } from '../lib/umaAdapter';

interface AdvancedTradingPanelProps {
  marketId: string;
  currentPrice: number;
  userAddress: string;
  isWalletConnected: boolean;
}

export function AdvancedTradingPanel({ 
  marketId, 
  currentPrice, 
  userAddress, 
  isWalletConnected 
}: AdvancedTradingPanelProps) {
  const [orderType, setOrderType] = useState<'market' | 'limit'>('limit');
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState<number>(100);
  const [price, setPrice] = useState<number>(currentPrice);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [orderBook, setOrderBook] = useState<{ bids: Order[]; asks: Order[] }>({ bids: [], asks: [] });
  const [userOrders, setUserOrders] = useState<Order[]>([]);
  const [userPositions, setUserPositions] = useState<MarketPosition[]>([]);
  const [umaRequest, setUmaRequest] = useState<UMARequest | null>(null);
  const [marketResolutions, setMarketResolutions] = useState<MarketResolution[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isWalletConnected && userAddress) {
      loadTradingData();
    }
  }, [marketId, userAddress, isWalletConnected]);

  const loadTradingData = async () => {
    setLoading(true);
    try {
      const tradingEngine = new TradingEngine();
      const [orderBookData, ordersData, positionsData] = await Promise.all([
        tradingEngine.getOrderBook(marketId),
        tradingEngine.getUserOrders(userAddress),
        tradingEngine.getUserPositions(userAddress)
      ]);

      setOrderBook(orderBookData);
      setUserOrders(ordersData);
      setUserPositions(positionsData);
      
      // Mock UMA data for now
      setUmaRequest({
        id: 'uma-1',
        marketId,
        requester: userAddress,
        requestType: 'resolution',
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      
      setMarketResolutions([
        {
          id: 'res-1',
          marketId,
          outcome: 'yes',
          confidence: 0.85,
          timestamp: new Date().toISOString(),
          oracle: '0x1234567890123456789012345678901234567890'
        }
      ]);
    } catch (error) {
      console.error('Error loading trading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlaceOrder = async () => {
    if (!isWalletConnected) {
      alert('Please connect your wallet to trade');
      return;
    }

    setLoading(true);
    try {
      const tradingEngine = new TradingEngine();
      const order = await tradingEngine.placeOrder({
        marketId,
        userId: userAddress,
        type: side,
        price: orderType === 'market' ? currentPrice : price,
        size: amount
      });

      if (order) {
        alert('Order placed successfully!');
        loadTradingData();
        // Reset form
        setAmount(100);
        setPrice(currentPrice);
      } else {
        alert('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId: string) => {
    setLoading(true);
    try {
      const success = await TradingEngine.cancelOrder(orderId, userAddress);
      if (success) {
        alert('Order cancelled successfully!');
        loadTradingData();
      } else {
        alert('Failed to cancel order');
      }
    } catch (error) {
      console.error('Error cancelling order:', error);
      alert('Error cancelling order');
    } finally {
      setLoading(false);
    }
  };

  const handleProposeResolution = async () => {
    if (!isWalletConnected) {
      alert('Please connect your wallet to propose resolution');
      return;
    }

    const resolutionData = prompt('Enter resolution data:');
    const confidence = parseFloat(prompt('Enter confidence (0-1):') || '0.95');

    if (resolutionData && confidence >= 0 && confidence <= 1) {
      setLoading(true);
      try {
        const success = await UMAAdapter.proposeResolution({
          marketId,
          resolutionData,
          proposerAddress: userAddress,
          confidence
        });

        if (success) {
          alert('Resolution proposed successfully!');
          loadTradingData();
        } else {
          alert('Failed to propose resolution');
        }
      } catch (error) {
        console.error('Error proposing resolution:', error);
        alert('Error proposing resolution');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDisputeResolution = async () => {
    if (!isWalletConnected) {
      alert('Please connect your wallet to dispute resolution');
      return;
    }

    const reason = prompt('Enter dispute reason:');
    if (reason) {
      setLoading(true);
      try {
        const success = await UMAAdapter.disputeResolution({
          marketId,
          disputerAddress: userAddress,
          reason
        });

        if (success) {
          alert('Resolution disputed successfully!');
          loadTradingData();
        } else {
          alert('Failed to dispute resolution');
        }
      } catch (error) {
        console.error('Error disputing resolution:', error);
        alert('Error disputing resolution');
      } finally {
        setLoading(false);
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-green-500';
      case 'filled': return 'text-blue-500';
      case 'cancelled': return 'text-red-500';
      case 'expired': return 'text-gray-500';
      default: return 'text-gray-400';
    }
  };

  const getUMAStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-500';
      case 'proposed': return 'text-blue-500';
      case 'disputed': return 'text-red-500';
      case 'resolved': return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Advanced Trading</h3>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center space-x-2 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          {showAdvanced ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{showAdvanced ? 'Hide' : 'Show'} Advanced</span>
        </button>
      </div>

      {/* Basic Trading Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Form */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-white">Place Order</h4>
          
          {/* Order Type Toggle */}
          <div className="flex space-x-2">
            <button
              onClick={() => setOrderType('limit')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                orderType === 'limit' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Limit
            </button>
            <button
              onClick={() => setOrderType('market')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                orderType === 'market' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Market
            </button>
          </div>

          {/* Side Toggle */}
          <div className="flex space-x-2">
            <button
              onClick={() => setSide('buy')}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                side === 'buy' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Buy</span>
            </button>
            <button
              onClick={() => setSide('sell')}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                side === 'sell' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <TrendingDown className="w-4 h-4" />
              <span>Sell</span>
            </button>
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Amount (USDC)</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setAmount(Math.max(0, amount - 10))}
                className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="100"
              />
              <button
                onClick={() => setAmount(amount + 10)}
                className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Price Input (for limit orders) */}
          {orderType === 'limit' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                step="0.01"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="0.75"
              />
            </div>
          )}

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            disabled={loading || !isWalletConnected}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              isWalletConnected && !loading
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {loading ? 'Processing...' : `Place ${side.toUpperCase()} Order`}
          </button>
        </div>

        {/* Order Book */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-white">Order Book</h4>
          
          <div className="grid grid-cols-3 gap-2 text-sm text-gray-400 mb-2">
            <span>Price</span>
            <span>Size</span>
            <span>Total</span>
          </div>

          {/* Asks (Sell Orders) */}
          <div className="space-y-1">
            {orderBook.asks.slice(0, 5).map((ask, index) => (
              <div key={ask.id} className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-red-400">{ask.price.toFixed(2)}</span>
                <span className="text-gray-300">{ask.amount}</span>
                <span className="text-gray-400">{(ask.price * ask.amount).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Current Price */}
          <div className="text-center py-2 bg-gray-800 rounded-lg">
            <span className="text-lg font-semibold text-white">${currentPrice.toFixed(2)}</span>
          </div>

          {/* Bids (Buy Orders) */}
          <div className="space-y-1">
            {orderBook.bids.slice(0, 5).map((bid, index) => (
              <div key={bid.id} className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-green-400">{bid.price.toFixed(2)}</span>
                <span className="text-gray-300">{bid.amount}</span>
                <span className="text-gray-400">{(bid.price * bid.amount).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      {showAdvanced && (
        <div className="mt-8 space-y-6">
          {/* User Orders */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Your Orders</h4>
            <div className="space-y-2">
              {userOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      order.side === 'buy' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}>
                      {order.side.toUpperCase()}
                    </span>
                    <span className="text-white">{order.amount} @ ${order.price.toFixed(2)}</span>
                    <span className={`text-xs ${getStatusColor(order.status)}`}>
                      {order.status.toUpperCase()}
                    </span>
                  </div>
                  {order.status === 'open' && (
                    <button
                      onClick={() => handleCancelOrder(order.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              ))}
              {userOrders.length === 0 && (
                <p className="text-gray-400 text-center py-4">No open orders</p>
              )}
            </div>
          </div>

          {/* User Positions */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Your Positions</h4>
            <div className="space-y-2">
              {userPositions.map((position) => (
                <div key={position.id} className="p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        position.outcome === 'yes' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                      }`}>
                        {position.outcome.toUpperCase()}
                      </span>
                      <span className="text-white ml-2">{position.amount} shares</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Avg Price: ${position.average_price.toFixed(2)}</div>
                      <div className={`text-sm ${position.unrealized_pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        P&L: ${position.unrealized_pnl.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {userPositions.length === 0 && (
                <p className="text-gray-400 text-center py-4">No positions</p>
              )}
            </div>
          </div>

          {/* UMA Oracle Status */}
          {umaRequest && (
            <div>
              <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                UMA Oracle Status
              </h4>
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Status:</span>
                    <span className={`ml-2 ${getUMAStatusColor(umaRequest.status)}`}>
                      {umaRequest.status.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Disputes:</span>
                    <span className="ml-2 text-white">{umaRequest.dispute_count}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Reward:</span>
                    <span className="ml-2 text-white">{umaRequest.reward_amount} {umaRequest.reward_token}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Proposer:</span>
                    <span className="ml-2 text-white">
                      {umaRequest.proposer || 'None'}
                    </span>
                  </div>
                </div>

                {/* Oracle Actions */}
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={handleProposeResolution}
                    disabled={loading}
                    className="px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50"
                  >
                    Propose Resolution
                  </button>
                  <button
                    onClick={handleDisputeResolution}
                    disabled={loading}
                    className="px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:opacity-50"
                  >
                    Dispute Resolution
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Market Resolutions */}
          {marketResolutions.length > 0 && (
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Resolution History</h4>
              <div className="space-y-2">
                {marketResolutions.map((resolution) => (
                  <div key={resolution.id} className="p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        resolution.outcome === 'yes' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                      }`}>
                        {resolution.outcome.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-400">
                        Confidence: {(resolution.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="text-sm text-gray-300">{resolution.resolution_data}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      Source: {resolution.resolution_source} | 
                      Proposer: {resolution.proposer_address.slice(0, 8)}...
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
