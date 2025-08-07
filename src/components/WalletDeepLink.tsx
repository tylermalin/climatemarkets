import React, { useState } from 'react';
import { Copy, ExternalLink, Smartphone, Monitor, Share2, CheckCircle } from 'lucide-react';

export interface WalletConfig {
  id: string;
  name: string;
  icon: string;
  universalLink: string;
  deepLinkScheme: string;
  webLink: string;
  mobile: boolean;
  web: boolean;
}

export const WALLET_CONFIGS: WalletConfig[] = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: '🦊',
    universalLink: 'https://metamask.app.link',
    deepLinkScheme: 'metamask://',
    webLink: 'https://metamask.io',
    mobile: true,
    web: true
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: '🔗',
    universalLink: 'https://walletconnect.com',
    deepLinkScheme: 'wc://',
    webLink: 'https://walletconnect.com',
    mobile: true,
    web: true
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: '🪙',
    universalLink: 'https://wallet.coinbase.com',
    deepLinkScheme: 'coinbase-wallet://',
    webLink: 'https://wallet.coinbase.com',
    mobile: true,
    web: true
  },
  {
    id: 'trust',
    name: 'Trust Wallet',
    icon: '🛡️',
    universalLink: 'https://trustwallet.com',
    deepLinkScheme: 'trust://',
    webLink: 'https://trustwallet.com',
    mobile: true,
    web: false
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    icon: '🌈',
    universalLink: 'https://rainbow.me',
    deepLinkScheme: 'rainbow://',
    webLink: 'https://rainbow.me',
    mobile: true,
    web: true
  },
  {
    id: 'argent',
    name: 'Argent',
    icon: '🛡️',
    universalLink: 'https://argent.xyz',
    deepLinkScheme: 'argent://',
    webLink: 'https://argent.xyz',
    mobile: true,
    web: false
  }
];

interface WalletDeepLinkProps {
  onWalletSelect?: (walletId: string) => void;
}

export function WalletDeepLink({ onWalletSelect }: WalletDeepLinkProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const generateDeepLink = (walletId: string, action: string, params: Record<string, any> = {}) => {
    const wallet = WALLET_CONFIGS.find(w => w.id === walletId);
    if (!wallet) return '';

    const queryParams = new URLSearchParams({
      action,
      ...params
    });

    return `${wallet.universalLink}?${queryParams.toString()}`;
  };

  const generateTradeLink = (walletId: string, marketId: string, amount: number, token: string = 'USDC') => {
    return generateDeepLink(walletId, 'trade', {
      marketId,
      amount: amount.toString(),
      token,
      app: 'climatemarkets',
      redirect: 'https://climatemarkets.space'
    });
  };

  const generateConnectLink = (walletId: string) => {
    return generateDeepLink(walletId, 'connect', {
      app: 'climatemarkets',
      redirect: 'https://climatemarkets.space'
    });
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLink(type);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const openWallet = (walletId: string, linkType: 'universal' | 'deep' | 'web') => {
    const wallet = WALLET_CONFIGS.find(w => w.id === walletId);
    if (!wallet) return;

    let link = '';
    switch (linkType) {
      case 'universal':
        link = generateConnectLink(walletId);
        break;
      case 'deep':
        link = wallet.deepLinkScheme + '?action=connect&app=climatemarkets';
        break;
      case 'web':
        link = wallet.webLink;
        break;
    }

    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="space-y-8">
      {/* Wallet Selection */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Wallet Deep Linking</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WALLET_CONFIGS.map((wallet) => (
            <div
              key={wallet.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedWallet === wallet.id
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => {
                setSelectedWallet(wallet.id);
                onWalletSelect?.(wallet.id);
              }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{wallet.icon}</span>
                <div>
                  <h4 className="font-semibold text-white">{wallet.name}</h4>
                  <div className="flex space-x-2 text-xs text-gray-400">
                    {wallet.mobile && <span>Mobile</span>}
                    {wallet.web && <span>Web</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Wallet Actions */}
      {selectedWallet && (
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">
            {WALLET_CONFIGS.find(w => w.id === selectedWallet)?.name} Deep Links
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Universal Link */}
            <div>
              <h5 className="font-medium text-gray-300 mb-2">Universal Link</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openWallet(selectedWallet, 'universal')}
                    className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Open Mobile</span>
                  </button>
                  <button
                    onClick={() => copyToClipboard(generateConnectLink(selectedWallet), 'universal')}
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors"
                  >
                    {copiedLink === 'universal' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>Copy</span>
                  </button>
                </div>
                <p className="text-xs text-gray-400 break-all">
                  {generateConnectLink(selectedWallet)}
                </p>
              </div>
            </div>

            {/* Deep Link */}
            <div>
              <h5 className="font-medium text-gray-300 mb-2">Deep Link</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openWallet(selectedWallet, 'deep')}
                    className="flex items-center space-x-2 px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Open App</span>
                  </button>
                  <button
                    onClick={() => copyToClipboard(WALLET_CONFIGS.find(w => w.id === selectedWallet)?.deepLinkScheme + '?action=connect&app=climatemarkets', 'deep')}
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors"
                  >
                    {copiedLink === 'deep' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>Copy</span>
                  </button>
                </div>
                <p className="text-xs text-gray-400 break-all">
                  {WALLET_CONFIGS.find(w => w.id === selectedWallet)?.deepLinkScheme}?action=connect&app=climatemarkets
                </p>
              </div>
            </div>

            {/* Web Wallet Link */}
            <div>
              <h5 className="font-medium text-gray-300 mb-2">Web Wallet Link</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openWallet(selectedWallet, 'web')}
                    className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                  >
                    <Monitor className="w-4 h-4" />
                    <span>Open Web</span>
                  </button>
                  <button
                    onClick={() => copyToClipboard(WALLET_CONFIGS.find(w => w.id === selectedWallet)?.webLink || '', 'web')}
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors"
                  >
                    {copiedLink === 'web' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>Copy</span>
                  </button>
                </div>
                <p className="text-xs text-gray-400 break-all">
                  {WALLET_CONFIGS.find(w => w.id === selectedWallet)?.webLink}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h5 className="font-medium text-gray-300">Trade Climate Market</h5>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => copyToClipboard('https://climatemarkets.space?action=trade&marketId=1&amount=100&token=USDC', 'trade')}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                {copiedLink === 'trade' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>Copy Trade Link</span>
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
                onClick={() => copyToClipboard('https://climatemarkets.space?action=market&marketId=1', 'market')}
                className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
              >
                {copiedLink === 'market' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>Copy Market Link</span>
              </button>
            </div>
            <p className="text-xs text-gray-400">
              https://climatemarkets.space?action=market&marketId=1
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-4">How to Use Deep Links</h4>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex items-start space-x-2">
            <span className="text-blue-400">•</span>
            <span>Mobile: Deep links will open your wallet app directly</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-blue-400">•</span>
            <span>Desktop: Web wallet links will open in your browser</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-blue-400">•</span>
            <span>Copy Links: Share wallet links with other users</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-blue-400">•</span>
            <span>Quick Actions: Generate trade-specific deep links</span>
          </div>
        </div>
      </div>
    </div>
  );
}
