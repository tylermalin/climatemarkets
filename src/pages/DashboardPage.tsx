import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Activity, 
  Settings, 
  User, 
  BarChart3, 
  Target,
  Clock,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Eye,
  LogOut
} from 'lucide-react';
import { TradesService, type Trade, type Position } from '../lib/trades';

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [userStats, setUserStats] = useState({
    totalTrades: 0,
    totalValue: 0,
    totalProfit: 0,
    activePositions: 0,
    winRate: 0
  });
  const [recentTrades, setRecentTrades] = useState<Trade[]>([]);
  const [activePositions, setActivePositions] = useState<Position[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const userAddress = localStorage.getItem('userAddress');
    
    if (!userData && !userAddress) {
      navigate('/');
      return;
    }

    // Use userAddress from localStorage or from userData
    const address = userAddress || (userData ? JSON.parse(userData).walletAddress : null);
    
    if (!address) {
      navigate('/');
      return;
    }

    const tradesService = TradesService.getInstance();
    
    // Seed mock data if no trades exist
    const existingTrades = tradesService.loadTrades(address);
    if (existingTrades.length === 0) {
      tradesService.seedMockData(address);
    }

    // Load user data
    const stats = tradesService.getUserStats(address);
    const trades = tradesService.getRecentTrades(address, 10);
    const positions = tradesService.getActivePositions(address);

    setUserStats(stats);
    setRecentTrades(trades);
    setActivePositions(positions);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('userAddress');
    localStorage.removeItem('userData');
    navigate('/');
  };

  const quickActions = [
    { icon: Plus, label: "New Trade", href: "/category/trending", color: "green" },
    { icon: BarChart3, label: "Market Analysis", href: "/category/trending", color: "blue" },
    { icon: Settings, label: "Settings", href: "/settings", color: "gray" },
    { icon: User, label: "Profile", href: "/profile", color: "purple" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400">
              Welcome back! Here's your trading overview.
              <br />
              <span className="text-sm text-blue-400">
                Wallet: {(() => {
                  const userData = localStorage.getItem('userData');
                  const userAddress = localStorage.getItem('userAddress');
                  const address = userAddress || (userData ? JSON.parse(userData).walletAddress : null);
                  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected';
                })()}
              </span>
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Portfolio Value</p>
                <p className="text-2xl font-bold">${userStats.totalValue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Profit</p>
                <p className={`text-2xl font-bold ${userStats.totalProfit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ${userStats.totalProfit.toLocaleString()}
                </p>
                <p className={`text-sm ${userStats.profitPercentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {userStats.profitPercentage >= 0 ? '+' : ''}{userStats.profitPercentage}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Positions</p>
                <p className="text-2xl font-bold">{userStats.activePositions}</p>
              </div>
              <Target className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Completed Trades</p>
                <p className="text-2xl font-bold">{userStats.completedTrades}</p>
              </div>
              <Activity className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-900 rounded-lg p-1 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'positions', label: 'Active Positions', icon: Target },
            { id: 'history', label: 'Trade History', icon: Clock }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    to={action.href}
                    className="flex items-center space-x-3 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <action.icon className={`h-5 w-5 text-${action.color}-500`} />
                    <span>{action.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 ml-auto" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Market
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Profit
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {recentTrades.map((trade) => (
                        <tr key={trade.id} className="hover:bg-gray-800">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{trade.marketTitle}</div>
                            <div className="text-sm text-gray-400">
                              {new Date(trade.timestamp).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              trade.type === 'buy' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {trade.type.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            ${trade.amount.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {trade.profit && trade.profit >= 0 ? (
                                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              ) : trade.profit && trade.profit < 0 ? (
                                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                              ) : null}
                              <span className={`text-sm ${
                                trade.profit && trade.profit >= 0 ? 'text-green-500' : 
                                trade.profit && trade.profit < 0 ? 'text-red-500' : 'text-gray-400'
                              }`}>
                                {trade.profit ? `$${Math.abs(trade.profit).toFixed(2)}` : 'Pending'}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {trade.outcome === 'win' ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : trade.outcome === 'loss' ? (
                              <XCircle className="h-5 w-5 text-red-500" />
                            ) : (
                              <Clock className="h-5 w-5 text-yellow-500" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'positions' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePositions.map((position) => (
                <div key={position.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-white mb-1">{position.market}</h3>
                      <p className="text-sm text-gray-400">Position: {position.position}</p>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      position.position === 'Yes' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {position.position}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Amount:</span>
                      <span className="text-white">${position.amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Current Value:</span>
                      <span className="text-white">${position.currentValue}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Profit/Loss:</span>
                      <span className={position.profit >= 0 ? 'text-green-500' : 'text-red-500'}>
                        ${position.profit}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">End Date:</span>
                      <span className="text-white">{position.endDate}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                      Close Position
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Trade History</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Market
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Position
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Outcome
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Profit/Loss
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {recentTrades.map((trade) => (
                      <tr key={trade.id} className="hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {trade.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">{trade.market}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            trade.type === 'buy' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {trade.type.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          ${trade.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {trade.outcome === 'win' ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm ${trade.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            ${trade.profit}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
