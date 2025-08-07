import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

interface DeepLinkAction {
  action: string;
  params: Record<string, string>;
}

export function DeepLinkHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  const [processedAction, setProcessedAction] = useState<DeepLinkAction | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const handleDeepLink = () => {
      const urlParams = new URLSearchParams(location.search);
      const action = urlParams.get('action');
      
      if (action) {
        setIsProcessing(true);
        
        // Extract all parameters
        const params: Record<string, string> = {};
        urlParams.forEach((value, key) => {
          if (key !== 'action') {
            params[key] = value;
          }
        });

        const deepLinkAction: DeepLinkAction = { action, params };
        setProcessedAction(deepLinkAction);

        // Process the action
        switch (action) {
          case 'trade':
            handleTradeAction(params);
            break;
          case 'market':
            handleMarketAction(params);
            break;
          case 'wallet':
            handleWalletAction(params);
            break;
          case 'connect':
            handleConnectAction(params);
            break;
          default:
            console.log('Unknown deep link action:', action);
        }

        // Clear the URL parameters after processing
        setTimeout(() => {
          navigate(location.pathname, { replace: true });
          setIsProcessing(false);
        }, 3000);
      }
    };

    handleDeepLink();
  }, [location, navigate]);

  const handleTradeAction = (params: Record<string, string>) => {
    const { marketId, amount, token } = params;
    console.log('Processing trade action:', { marketId, amount, token });
    
    // Navigate to the specific market
    if (marketId) {
      navigate(`/market/${marketId}`);
    }
  };

  const handleMarketAction = (params: Record<string, string>) => {
    const { marketId } = params;
    console.log('Processing market action:', { marketId });
    
    if (marketId) {
      navigate(`/market/${marketId}`);
    }
  };

  const handleWalletAction = (params: Record<string, string>) => {
    const { walletType, action } = params;
    console.log('Processing wallet action:', { walletType, action });
    
    // Handle wallet-specific actions
    if (action === 'connect') {
      // Trigger wallet connection
      console.log('Connecting to wallet:', walletType);
    }
  };

  const handleConnectAction = (params: Record<string, string>) => {
    const { walletType, redirect } = params;
    console.log('Processing connect action:', { walletType, redirect });
    
    // Handle wallet connection with redirect
    if (redirect) {
      setTimeout(() => {
        window.location.href = redirect;
      }, 2000);
    }
  };

  if (!processedAction) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    >
      <div className="max-w-md w-full mx-4 p-6 rounded-xl bg-gray-900 border border-gray-800">
        <div className="text-center">
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-white mb-2">Processing Deep Link</h3>
              <p className="text-gray-400 text-sm">
                Action: {processedAction.action}
              </p>
            </>
          ) : (
            <>
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Deep Link Processed</h3>
              <p className="text-gray-400 text-sm mb-4">
                Successfully handled {processedAction.action} action
              </p>
              
              <div className="text-left text-xs text-gray-500 bg-gray-800 p-3 rounded-lg">
                <div className="font-medium mb-2">Parameters:</div>
                {Object.entries(processedAction.params).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span>{key}:</span>
                    <span className="text-blue-400">{value}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Hook to generate deep links
export function useDeepLink() {
  const generateDeepLink = (action: string, params?: Record<string, string>) => {
    const baseUrl = window.location.origin;
    const queryParams = new URLSearchParams({ action, ...params });
    return `${baseUrl}?${queryParams.toString()}`;
  };

  const generateWalletDeepLink = (walletType: string, action: string, params?: Record<string, string>) => {
    return generateDeepLink('wallet', {
      walletType,
      action,
      ...params
    });
  };

  const generateTradeDeepLink = (marketId: string, amount: string, token: string = 'USDC') => {
    return generateDeepLink('trade', {
      marketId,
      amount,
      token
    });
  };

  const generateMarketDeepLink = (marketId: string) => {
    return generateDeepLink('market', { marketId });
  };

  return {
    generateDeepLink,
    generateWalletDeepLink,
    generateTradeDeepLink,
    generateMarketDeepLink
  };
}
