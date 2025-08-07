import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ExternalLink, Smartphone, Globe } from 'lucide-react';

interface UniversalLinkConfigProps {
  walletName: string;
  walletType: 'metamask' | 'trust' | 'coinbase' | 'rainbow' | 'argent';
}

const UNIVERSAL_LINK_CONFIGS = {
  metamask: {
    name: 'MetaMask',
    universalLink: 'https://metamask.app.link',
    deepLink: 'metamask://',
    webLink: 'https://metamask.io',
    icon: '🦊'
  },
  trust: {
    name: 'Trust Wallet',
    universalLink: 'https://link.trustwallet.com',
    deepLink: 'trust://',
    webLink: 'https://trustwallet.com',
    icon: '🛡️'
  },
  coinbase: {
    name: 'Coinbase Wallet',
    universalLink: 'https://wallet.coinbase.com',
    deepLink: 'coinbase-wallet://',
    webLink: 'https://wallet.coinbase.com',
    icon: '🪙'
  },
  rainbow: {
    name: 'Rainbow',
    universalLink: 'https://rainbow.me',
    deepLink: 'rainbow://',
    webLink: 'https://rainbow.me',
    icon: '🌈'
  },
  argent: {
    name: 'Argent',
    universalLink: 'https://argent.xyz',
    deepLink: 'argent://',
    webLink: 'https://argent.xyz',
    icon: '🛡️'
  }
};

export function UniversalLinkConfig({ walletName, walletType }: UniversalLinkConfigProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const config = UNIVERSAL_LINK_CONFIGS[walletType];

  const handleCopy = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const generateUniversalLink = (action: string, params?: Record<string, string>) => {
    const baseUrl = config.universalLink;
    const queryParams = new URLSearchParams({
      action,
      ...params
    });
    return `${baseUrl}?${queryParams.toString()}`;
  };

  const sampleTradeLink = generateUniversalLink('trade', {
    marketId: '1',
    amount: '100',
    token: 'USDC'
  });

  const sampleConnectLink = generateUniversalLink('connect', {
    app: 'climatemarkets',
    redirect: window.location.origin
  });

  return (
    <div className="space-y-6">
      {/* Wallet Info */}
      <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{config.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{config.name}</h3>
            <p className="text-gray-400 text-sm">Universal Link Configuration</p>
          </div>
        </div>
      </div>

      {/* Universal Link */}
      <div className="p-6 rounded-xl bg-blue-900/20 border border-blue-800">
        <h3 className="text-lg font-medium text-blue-300 mb-4 flex items-center">
          <Globe className="w-5 h-5 mr-2" />
          Universal Link
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Base Universal Link
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={config.universalLink}
                readOnly
                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
              />
              <button
                onClick={() => handleCopy(config.universalLink, 'universal')}
                className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {copied === 'universal' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Sample Trade Link
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={sampleTradeLink}
                readOnly
                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
              />
              <button
                onClick={() => handleCopy(sampleTradeLink, 'trade')}
                className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
              >
                {copied === 'trade' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Sample Connect Link
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={sampleConnectLink}
                readOnly
                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
              />
              <button
                onClick={() => handleCopy(sampleConnectLink, 'connect')}
                className="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                {copied === 'connect' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Link (Optional) */}
      <div className="p-6 rounded-xl bg-green-900/20 border border-green-800">
        <h3 className="text-lg font-medium text-green-300 mb-4 flex items-center">
          <Smartphone className="w-5 h-5 mr-2" />
          Deep Link (Optional)
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-200 mb-2">
              Deep Link Scheme
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={config.deepLink}
                readOnly
                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
              />
              <button
                onClick={() => handleCopy(config.deepLink, 'deep')}
                className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
              >
                {copied === 'deep' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-green-200 mb-2">
              Web Wallet Link
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={config.webLink}
                readOnly
                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
              />
              <a
                href={config.webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Instructions */}
      <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
        <h3 className="text-lg font-medium text-white mb-4">Configuration Instructions</h3>
        
        <div className="space-y-4 text-sm text-gray-300">
          <div>
            <h4 className="font-medium text-white mb-2">For Your Wallet App:</h4>
            <div className="space-y-2">
              <p>1. <strong>Universal Link:</strong> Use the base universal link for iOS/Android deep linking</p>
              <p>2. <strong>Deep Link:</strong> Use the custom scheme for direct app-to-app communication</p>
              <p>3. <strong>Web Link:</strong> Use for desktop browser wallet connections</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-2">For Your Climate Markets App:</h4>
            <div className="space-y-2">
              <p>1. <strong>Trade Actions:</strong> Generate links with market ID, amount, and token</p>
              <p>2. <strong>Connect Actions:</strong> Generate links for wallet connection with redirect</p>
              <p>3. <strong>Share Links:</strong> Users can share these links to open specific actions</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-2">Example Usage:</h4>
            <div className="bg-gray-800 p-3 rounded-lg text-xs">
              <p className="text-blue-400">Universal Link:</p>
              <p className="text-gray-400">{config.universalLink}?action=trade&marketId=1&amount=100&token=USDC</p>
              <br />
              <p className="text-green-400">Deep Link:</p>
              <p className="text-gray-400">{config.deepLink}?action=connect&app=climatemarkets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
