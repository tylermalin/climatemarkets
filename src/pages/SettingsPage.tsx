import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Moon, 
  Sun,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Save,
  X,
  CheckCircle,
  AlertTriangle,
  User,
  Key,
  Smartphone,
  Mail,
  Lock,
  Palette,
  DollarSign,
  Wallet,
  Copy,
  ExternalLink
} from 'lucide-react';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Mock settings data
  const [settings, setSettings] = useState({
    // General Settings
    theme: 'dark',
    language: 'en',
    timezone: 'UTC',
    currency: 'USD',
    
    // Trading Preferences
    defaultTradeAmount: 50,
    autoConfirmTrades: false,
    showAdvancedCharts: true,
    riskLevel: 'medium',
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    tradeAlerts: true,
    marketUpdates: false,
    priceAlerts: true,
    
    // Security
    twoFactorAuth: true,
    sessionTimeout: 30,
    loginNotifications: true,
    
    // Privacy
    profileVisibility: 'public',
    showTradingHistory: true,
    allowDataAnalytics: true
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/dashboard" className="text-blue-400 hover:text-blue-300 flex items-center mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-gray-400">Manage your account preferences and security</p>
            </div>
            {isEditing && (
              <div className="flex space-x-3">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <nav className="space-y-2">
                {[
                  { id: 'general', label: 'General', icon: Settings },
                  { id: 'wallet', label: 'Wallet', icon: Wallet },
                  { id: 'trading', label: 'Trading', icon: DollarSign },
                  { id: 'notifications', label: 'Notifications', icon: Bell },
                  { id: 'security', label: 'Security', icon: Shield },
                  { id: 'privacy', label: 'Privacy', icon: User }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">General Settings</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Theme
                      </label>
                      <select
                        value={settings.theme}
                        onChange={(e) => handleSettingChange('theme', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                      >
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                        <option value="auto">Auto</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Language
                      </label>
                      <select
                        value={settings.language}
                        onChange={(e) => handleSettingChange('language', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Timezone
                      </label>
                      <select
                        value={settings.timezone}
                        onChange={(e) => handleSettingChange('timezone', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                      >
                        <option value="UTC">UTC</option>
                        <option value="EST">Eastern Time</option>
                        <option value="PST">Pacific Time</option>
                        <option value="GMT">GMT</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Currency
                      </label>
                      <select
                        value={settings.currency}
                        onChange={(e) => handleSettingChange('currency', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                      >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="JPY">JPY (¥)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Wallet Settings */}
            {activeTab === 'wallet' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Wallet & Profile Settings</h2>
                
                <div className="space-y-6">
                  {/* Current Wallet Info */}
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-medium text-white mb-3">Connected Wallet</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Wallet className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-white font-mono text-sm">
                            {localStorage.getItem('userAddress') || 'No wallet connected'}
                          </p>
                          <p className="text-gray-400 text-xs">BASE Network</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          const address = localStorage.getItem('userAddress');
                          if (address) {
                            navigator.clipboard.writeText(address);
                          }
                        }}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        title="Copy wallet address"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Profile Information */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-white">Profile Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Display Name
                        </label>
                        <input
                          type="text"
                          defaultValue={localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '{}').username || '' : ''}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                          placeholder="Enter your display name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue={localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '{}').email || '' : ''}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={3}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </div>

                  {/* Wallet Actions */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-white">Wallet Actions</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button className="flex items-center justify-center space-x-2 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span>View on Explorer</span>
                      </button>
                      
                      <button className="flex items-center justify-center space-x-2 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                        <Wallet className="w-4 h-4" />
                        <span>Connect New Wallet</span>
                      </button>
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className="p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-yellow-400">Security Reminder</h3>
                        <p className="text-sm text-yellow-200 mt-1">
                          Never share your private keys or seed phrase. Keep them secure and offline.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Trading Settings */}
            {activeTab === 'trading' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Trading Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Default Trade Amount ($)
                    </label>
                    <input
                      type="number"
                      value={settings.defaultTradeAmount}
                      onChange={(e) => handleSettingChange('defaultTradeAmount', parseInt(e.target.value))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                      min="1"
                      max="10000"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Auto-confirm trades</h3>
                        <p className="text-sm text-gray-400">Automatically confirm trades without manual review</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('autoConfirmTrades', !settings.autoConfirmTrades)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.autoConfirmTrades ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.autoConfirmTrades ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Show advanced charts</h3>
                        <p className="text-sm text-gray-400">Display technical indicators and advanced charting tools</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('showAdvancedCharts', !settings.showAdvancedCharts)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.showAdvancedCharts ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.showAdvancedCharts ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Risk Level
                    </label>
                    <select
                      value={settings.riskLevel}
                      onChange={(e) => handleSettingChange('riskLevel', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    >
                      <option value="low">Low Risk</option>
                      <option value="medium">Medium Risk</option>
                      <option value="high">High Risk</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Email Notifications</h3>
                        <p className="text-sm text-gray-400">Receive notifications via email</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('emailNotifications', !settings.emailNotifications)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Push Notifications</h3>
                        <p className="text-sm text-gray-400">Receive notifications on your device</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('pushNotifications', !settings.pushNotifications)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.pushNotifications ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Trade Alerts</h3>
                        <p className="text-sm text-gray-400">Get notified when your trades are executed</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('tradeAlerts', !settings.tradeAlerts)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.tradeAlerts ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.tradeAlerts ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Market Updates</h3>
                        <p className="text-sm text-gray-400">Receive daily market summaries</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('marketUpdates', !settings.marketUpdates)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.marketUpdates ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.marketUpdates ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Price Alerts</h3>
                        <p className="text-sm text-gray-400">Get notified when markets reach target prices</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('priceAlerts', !settings.priceAlerts)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.priceAlerts ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.priceAlerts ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div>
                      <h3 className="font-medium text-white">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-green-500">Enabled</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div>
                      <h3 className="font-medium text-white">Login Notifications</h3>
                      <p className="text-sm text-gray-400">Get notified of new login attempts</p>
                    </div>
                    <button
                      onClick={() => handleSettingChange('loginNotifications', !settings.loginNotifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.loginNotifications ? 'bg-blue-600' : 'bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.loginNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Session Timeout (minutes)
                    </label>
                    <select
                      value={settings.sessionTimeout}
                      onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    >
                      <option value={15}>15 minutes</option>
                      <option value={30}>30 minutes</option>
                      <option value={60}>1 hour</option>
                      <option value={120}>2 hours</option>
                    </select>
                  </div>

                  <div className="p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-yellow-400">Security Tip</h3>
                        <p className="text-sm text-yellow-200 mt-1">
                          Consider enabling two-factor authentication and using a strong, unique password for enhanced security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Profile Visibility
                    </label>
                    <select
                      value={settings.profileVisibility}
                      onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="friends">Friends Only</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Show Trading History</h3>
                        <p className="text-sm text-gray-400">Allow others to see your trading activity</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('showTradingHistory', !settings.showTradingHistory)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.showTradingHistory ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.showTradingHistory ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">Allow Data Analytics</h3>
                        <p className="text-sm text-gray-400">Help improve our service with anonymous usage data</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('allowDataAnalytics', !settings.allowDataAnalytics)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.allowDataAnalytics ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.allowDataAnalytics ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
