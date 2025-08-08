import React, { useState, useEffect } from 'react';
import authService from '../lib/auth';
import { testConnection } from '../lib/database';

export const AuthTest: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Test database connection
    testConnection().then((connected) => {
      console.log('Database connection test:', connected);
    });

    // Check if user is already authenticated
    const checkAuth = async () => {
      const isAuth = authService.isAuthenticated();
      setIsConnected(isAuth);
      if (isAuth) {
        setUser(authService.getCurrentUser());
      }
    };

    checkAuth();
  }, []);

  const handleConnect = async () => {
    setLoading(true);
    const mockAddress = '0x1234567890123456789012345678901234567890';
    const success = await authService.connectWallet(mockAddress, 'test@example.com', 'testuser');
    
    if (success) {
      setIsConnected(true);
      setUser(authService.getCurrentUser());
      console.log('Wallet connected successfully');
    } else {
      console.error('Failed to connect wallet');
    }
    setLoading(false);
  };

  const handleDisconnect = async () => {
    setLoading(true);
    const success = await authService.disconnectWallet();
    
    if (success) {
      setIsConnected(false);
      setUser(null);
      console.log('Wallet disconnected successfully');
    } else {
      console.error('Failed to disconnect wallet');
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Auth Test</h3>
      
      <div className="space-y-4">
        <div>
          <p>Connection Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
          {user && (
            <div className="mt-2 p-2 bg-gray-700 rounded">
              <p>User: {user.wallet_address}</p>
              <p>Email: {user.email || 'Not set'}</p>
              <p>Username: {user.username || 'Not set'}</p>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleConnect}
            disabled={loading || isConnected}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {loading ? 'Connecting...' : 'Connect Wallet'}
          </button>
          
          <button
            onClick={handleDisconnect}
            disabled={loading || !isConnected}
            className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
          >
            {loading ? 'Disconnecting...' : 'Disconnect Wallet'}
          </button>
        </div>
      </div>
    </div>
  );
};
