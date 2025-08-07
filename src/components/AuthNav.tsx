import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wallet, User, LogIn, UserPlus, LogOut, Settings, Bell } from 'lucide-react';
import { LoginModal } from './LoginModal';

interface AuthNavProps {
  isConnected: boolean;
  userAddress?: string;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function AuthNav({ isConnected, userAddress, onConnect, onDisconnect }: AuthNavProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleLogin = (email: string, password: string) => {
    console.log('Login with email:', email);
    setUserEmail(email);
    setShowAuthModal(false);
  };

  const handleSignup = (email: string, password: string, name: string) => {
    console.log('Signup with email:', email, 'name:', name);
    setUserEmail(email);
    setUserName(name);
    setShowAuthModal(false);
  };

  const handleWalletConnect = () => {
    console.log('Connecting wallet...');
    onConnect();
    setShowAuthModal(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left side - App info */}
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-400">Climate Markets</span>
              <div className="h-4 w-px bg-gray-700"></div>
              <span className="text-xs text-green-400">Live Trading</span>
            </div>

            {/* Right side - Auth & Notifications */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <Bell className="h-4 w-4 text-gray-400" />
              </button>

              {/* Auth Section */}
              {isConnected ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Wallet className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-white font-medium">
                      {userAddress ? formatAddress(userAddress) : 'Connected'}
                    </span>
                    <User className="h-4 w-4 text-gray-400" />
                  </button>

                  {/* User Menu Dropdown */}
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg"
                    >
                      <div className="p-2 space-y-1">
                        <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors">
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors">
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </button>
                        <div className="h-px bg-gray-800 my-1"></div>
                        <button
                          onClick={onDisconnect}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-gray-800 rounded transition-colors"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Disconnect</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={onConnect}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <Wallet className="h-4 w-4 text-white" />
                    <span className="text-xs text-white font-medium">Connect Wallet</span>
                  </button>
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <LogIn className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-300">Log In</span>
                  </button>
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
                  >
                    <UserPlus className="h-4 w-4 text-white" />
                    <span className="text-xs text-white font-medium">Sign Up</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <LoginModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onWalletConnect={handleWalletConnect}
      />
    </>
  );
}
