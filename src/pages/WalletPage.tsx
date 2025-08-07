import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Globe, Share2, QrCode, Copy, Check } from 'lucide-react';
import { WalletDeepLink } from '../components/WalletDeepLink';
import { UniversalLinkConfig } from '../components/UniversalLinkConfig';
import { useDeepLink } from '../components/DeepLinkHandler';

export function WalletPage() {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const { generateTradeDeepLink, generateMarketDeepLink, generateWalletDeepLink } = useDeepLink();

  const handleCopyLink = async (link: string) => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sampleTradeLink = generateTradeDeepLink('1', '100', 'USDC');
  const sampleMarketLink = generateMarketDeepLink('1');
  const sampleWalletLink = generateWalletDeepLink('metamask', 'connect');

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Markets
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Mobile Wallet Integration</h1>
          <p className="text-xl text-gray-400">
            Connect your mobile wallet and trade climate markets seamlessly
          </p>
        </div>

        {/* Mobile Wallet Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Wallet Deep Linking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-gray-900 border border-gray-800"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Wallet Deep Linking</h2>
            <WalletDeepLink />
          </motion.div>

          {/* Universal Link Configuration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-gray-900 border border-gray-800"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Universal Link Config</h2>
            <UniversalLinkConfig walletName="MetaMask" walletType="metamask" />
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-gray-900 border border-gray-800"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Trade Climate Market
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={sampleTradeLink}
                    readOnly
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                  />
                  <button
                    onClick={() => handleCopyLink(sampleTradeLink)}
                    className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  View Market Details
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={sampleMarketLink}
                    readOnly
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                  />
                  <button
                    onClick={() => handleCopyLink(sampleMarketLink)}
                    className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Connect Wallet
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={sampleWalletLink}
                    readOnly
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                  />
                  <button
                    onClick={() => handleCopyLink(sampleWalletLink)}
                    className="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="p-6 rounded-xl bg-blue-900/20 border border-blue-800">
            <Smartphone className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Mobile Apps</h3>
            <p className="text-sm text-blue-200">
              Deep links open your wallet app directly on mobile devices
            </p>
          </div>

          <div className="p-6 rounded-xl bg-green-900/20 border border-green-800">
            <Globe className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Web Wallets</h3>
            <p className="text-sm text-green-200">
              Web wallet links open in your browser for desktop users
            </p>
          </div>

          <div className="p-6 rounded-xl bg-purple-900/20 border border-purple-800">
            <Share2 className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Share Links</h3>
            <p className="text-sm text-purple-200">
              Share deep links with other users for seamless connections
            </p>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-xl bg-gray-900 border border-gray-800"
        >
          <h2 className="text-2xl font-bold text-white mb-4">How to Use Mobile Wallet Integration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">For Mobile Users</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>1. <strong>Install your wallet app</strong> (MetaMask, Trust Wallet, etc.)</p>
                <p>2. <strong>Click on wallet deep links</strong> to open your wallet directly</p>
                <p>3. <strong>Approve transactions</strong> in your wallet app</p>
                <p>4. <strong>Return to the app</strong> to see your updated balance</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-3">For Desktop Users</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>1. <strong>Use web wallets</strong> or browser extensions</p>
                <p>2. <strong>Click web wallet links</strong> to open in browser</p>
                <p>3. <strong>Connect your wallet</strong> to the web interface</p>
                <p>4. <strong>Trade seamlessly</strong> across platforms</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
