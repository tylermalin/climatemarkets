import React, { useState } from 'react';
import { Copy, ExternalLink, Smartphone, Monitor, CheckCircle, Settings, Info } from 'lucide-react';
import { WALLET_CONFIGS, WalletConfig } from './WalletDeepLink';

interface UniversalLinkConfig {
  wallet: WalletConfig;
  baseUniversalLink: string;
  sampleTradeLink: string;
  sampleConnectLink: string;
  deepLinkScheme: string;
  webWalletLink: string;
}

const UNIVERSAL_LINK_CONFIGS: UniversalLinkConfig[] = WALLET_CONFIGS.map(wallet => ({
  wallet,
  baseUniversalLink: wallet.universalLink,
  sampleTradeLink: `${wallet.universalLink}?action=trade&marketId=1&amount=100&token=USDC`,
  sampleConnectLink: `${wallet.universalLink}?action=connect&app=climatemarkets&redirect=${encodeURIComponent('https://climatemarkets.space')}`,
  deepLinkScheme: wallet.deepLinkScheme,
  webWalletLink: wallet.webLink
}));

export function UniversalLinkConfig() {
  const [selectedWallet, setSelectedWallet] = useState<string>('metamask');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLink(type);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const selectedConfig = UNIVERSAL_LINK_CONFIGS.find(config => config.wallet.id === selectedWallet);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Universal Link Configuration</h3>
        
        {/* Wallet Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {WALLET_CONFIGS.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => setSelectedWallet(wallet.id)}
              className={`p-3 border rounded-lg transition-colors ${
                selectedWallet === wallet.id
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">{wallet.icon}</div>
                <div className="text-xs text-gray-400">{wallet.name}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Configuration Details */}
        {selectedConfig && (
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl">{selectedConfig.wallet.icon}</span>
              <h4 className="text-lg font-semibold">{selectedConfig.wallet.name} Universal Link Configuration</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Universal Link */}
              <div className="space-y-4">
                <h5 className="font-medium text-gray-300">Universal Link</h5>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Base Universal Link</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={selectedConfig.baseUniversalLink}
                        readOnly
                        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
                      />
                      <button
                        onClick={() => copyToClipboard(selectedConfig.baseUniversalLink, 'base')}
                        className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        {copiedLink === 'base' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Sample Trade Link</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={selectedConfig.sampleTradeLink}
                        readOnly
                        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
                      />
                      <button
                        onClick={() => copyToClipboard(selectedConfig.sampleTradeLink, 'trade')}
                        className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        {copiedLink === 'trade' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Sample Connect Link</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={selectedConfig.sampleConnectLink}
                        readOnly
                        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
                      />
                      <button
                        onClick={() => copyToClipboard(selectedConfig.sampleConnectLink, 'connect')}
                        className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        {copiedLink === 'connect' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deep Link & Web Link */}
              <div className="space-y-4">
                <h5 className="font-medium text-gray-300">Additional Links</h5>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Deep Link (Optional)</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={selectedConfig.deepLinkScheme}
                        readOnly
                        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
                      />
                      <button
                        onClick={() => copyToClipboard(selectedConfig.deepLinkScheme, 'deep')}
                        className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        {copiedLink === 'deep' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Web Wallet Link</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={selectedConfig.webWalletLink}
                        readOnly
                        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
                      />
                      <a
                        href={selectedConfig.webWalletLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Configuration Instructions */}
            <div className="mt-8 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
              <h5 className="font-medium text-blue-300 mb-3">Configuration Instructions</h5>
              <div className="space-y-2 text-sm text-blue-200">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-400">For Your Wallet App:</span>
                </div>
                <div className="ml-4 space-y-1">
                  <p>1. <strong>Universal Link:</strong> Use the base universal link for iOS/Android deep linking</p>
                  <p>2. <strong>Deep Link:</strong> Use the custom scheme for direct app-to-app communication</p>
                  <p>3. <strong>Web Link:</strong> Use for desktop browser wallet connections</p>
                </div>
                
                <div className="flex items-start space-x-2 mt-3">
                  <span className="text-blue-400">For Your Climate Markets App:</span>
                </div>
                <div className="ml-4 space-y-1">
                  <p>1. <strong>Trade Actions:</strong> Generate links with market ID, amount, and token</p>
                  <p>2. <strong>Connect Actions:</strong> Generate links for wallet connection with redirect</p>
                  <p>3. <strong>Share Links:</strong> Users can share these links to open specific actions</p>
                </div>
              </div>
            </div>

            {/* Example Usage */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-medium text-gray-300 mb-3">Example Usage</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400">Universal Link:</span>
                  <p className="text-green-400 font-mono text-xs break-all mt-1">
                    {selectedConfig.sampleTradeLink}
                  </p>
                </div>
                <div>
                  <span className="text-gray-400">Deep Link:</span>
                  <p className="text-purple-400 font-mono text-xs break-all mt-1">
                    {selectedConfig.deepLinkScheme}?action=connect&app=climatemarkets
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h5 className="font-medium text-gray-300">Trade Climate Market</h5>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => copyToClipboard('https://climatemarkets.space?action=trade&marketId=1&amount=100&token=USDC', 'quick-trade')}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                {copiedLink === 'quick-trade' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>Copy Link</span>
              </button>
            </div>
            <p className="text-xs text-gray-400">
              https://climatemarkets.space?action=trade&marketId=1&amount=100&token=USDC
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-medium text-gray-300">View Market Details</h5>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => copyToClipboard('https://climatemarkets.space?action=market&marketId=1', 'quick-market')}
                className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
              >
                {copiedLink === 'quick-market' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>Copy Link</span>
              </button>
            </div>
            <p className="text-xs text-gray-400">
              https://climatemarkets.space?action=market&marketId=1
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-medium text-gray-300">Connect Wallet</h5>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => copyToClipboard('https://climatemarkets.space?action=connect&walletType=metamask', 'quick-connect')}
                className="flex items-center space-x-2 px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors"
              >
                {copiedLink === 'quick-connect' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>Copy Link</span>
              </button>
            </div>
            <p className="text-xs text-gray-400">
              https://climatemarkets.space?action=connect&walletType=metamask
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
