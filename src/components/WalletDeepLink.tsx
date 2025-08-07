import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, ExternalLink, Smartphone, Globe, Copy, Check } from 'lucide-react';

interface WalletDeepLinkProps {
  onWalletConnect?: (walletType: string) => void;
}

interface WalletConfig {
  name: string;
  icon: string;
  deepLink: string;
  webLink: string;
  mobileSupported: boolean;
  webSupported: boolean;
}

const WALLET_CONFIGS: WalletConfig[] = [
  {
    name: 'MetaMask',
    icon: '🦊',
    deepLink: 'metamask://',
    webLink: 'https://metamask.io',
    mobileSupported: true,
    webSupported: true
  },
  {
    name: 'WalletConnect',
    icon: '🔗',
    deepLink: 'wc://',
    webLink: 'https://walletconnect.com',
    mobileSupported: true,
    webSupported: true
  },
  {
    name: 'Coinbase Wallet',
    icon: '🪙',
    deepLink: 'coinbase-wallet://',
    webLink: 'https://wallet.coinbase.com',
    mobileSupported: true,
    webSupported: true
  },
  {
    name: 'Trust Wallet',
    icon: '🛡️',
    deepLink: 'trust://',
    webLink: 'https://trustwallet.com',
    mobileSupported: true,
    webSupported: false
  },
  {
    name: 'Rainbow',
    icon: '🌈',
    deepLink: 'rainbow://',
    webLink: 'https://rainbow.me',
    mobileSupported: true,
    webSupported: true
  },
  {
    name: 'Argent',
    icon: '🛡️',
    deepLink: 'argent://',
    webLink: 'https://argent.xyz',
    mobileSupported: true,
    webSupported: false
  }
];

export function WalletDeepLink({ onWalletConnect }: WalletDeepLinkProps) {
  const [selectedWallet, setSelectedWallet] = useState<WalletConfig | null>(null);
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  const handleWalletSelect = (wallet: WalletConfig) => {
    setSelectedWallet(wallet);
    
    if (isMobile && wallet.mobileSupported) {
      // Try to open mobile wallet app
      window.location.href = wallet.deepLink;
    } else if (wallet.webSupported) {
      // Open web wallet
      window.open(wallet.webLink, '_blank');
    }
    
    onWalletConnect?.(wallet.name);
  };

  const copyDeepLink = async () => {
    if (selectedWallet) {
      await navigator.clipboard.writeText(selectedWallet.deepLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const generateDeepLink = (action: string, params?: Record<string, string>) => {
    const baseUrl = window.location.origin;
    const queryParams = new URLSearchParams({
      action,
      ...params
    });
    return `${baseUrl}?${queryParams.toString()}`;
  };

  const handleTradeDeepLink = (marketId: string, amount: string) => {
    const deepLink = generateDeepLink('trade', {
      marketId,
      amount,
      token: 'USDC'
    });
    
    navigator.clipboard.writeText(deepLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Wallet Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {WALLET_CONFIGS.map((wallet) => (
          <motion.button
            key={wallet.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleWalletSelect(wallet)}
            className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{wallet.icon}</div>
              <h3 className="font-medium text-white mb-1">{wallet.name}</h3>
              <div className="flex justify-center space-x-2 text-xs text-gray-400">
                {wallet.mobileSupported && (
                  <span className="flex items-center">
                    <Smartphone className="w-3 h-3 mr-1" />
                    Mobile
                  </span>
                )}
                {wallet.webSupported && (
                  <span className="flex items-center">
                    <Globe className="w-3 h-3 mr-1" />
                    Web
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Deep Link Generator */}
      {selectedWallet && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl bg-gray-900 border border-gray-800"
        >
          <h3 className="text-lg font-medium text-white mb-4">
            {selectedWallet.name} Deep Link
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Wallet Deep Link
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={selectedWallet.deepLink}
                  readOnly
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                />
                <button
                  onClick={copyDeepLink}
                  className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Web Wallet Link
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={selectedWallet.webLink}
                  readOnly
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
                />
                <a
                  href={selectedWallet.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
        <h3 className="text-lg font-medium text-white mb-4">Quick Actions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handleTradeDeepLink('1', '100')}
            className="flex items-center justify-center px-4 py-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Trade Climate Market
          </button>
          
          <button
            onClick={() => handleTradeDeepLink('2', '50')}
            className="flex items-center justify-center px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Market Details
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="p-6 rounded-xl bg-blue-900/20 border border-blue-800">
        <h3 className="text-lg font-medium text-blue-300 mb-4">How to Use Deep Links</h3>
        <div className="space-y-2 text-sm text-blue-200">
          <p>• <strong>Mobile:</strong> Deep links will open your wallet app directly</p>
          <p>• <strong>Desktop:</strong> Web wallet links will open in your browser</p>
          <p>• <strong>Copy Links:</strong> Share wallet links with other users</p>
          <p>• <strong>Quick Actions:</strong> Generate trade-specific deep links</p>
        </div>
      </div>
    </div>
  );
}
