import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Wallet,
  Chrome,
  Twitter,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userData: any) => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate email signup
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const userData = {
        id: `user_${Date.now()}`,
        email,
        username,
        authMethod: 'email',
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      setSuccess('Account created successfully!');
      
      setTimeout(() => {
        onSuccess(userData);
        onClose();
      }, 1500);
    } catch (error) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    setError('');
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const userData = {
        id: `user_${Date.now()}`,
        email: 'user@gmail.com',
        username: 'Google User',
        authMethod: 'google',
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      onSuccess(userData);
      onClose();
    } catch (error) {
      setError('Google sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTwitterSignup = async () => {
    setIsLoading(true);
    setError('');
    try {
      // Simulate Twitter OAuth
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const userData = {
        id: `user_${Date.now()}`,
        email: 'user@twitter.com',
        username: 'Twitter User',
        authMethod: 'twitter',
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      onSuccess(userData);
      onClose();
    } catch (error) {
      setError('Twitter sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWalletSignup = async () => {
    setIsLoading(true);
    setError('');
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const walletAddress = '0x1234567890123456789012345678901234567890';
      const userData = {
        id: `user_${Date.now()}`,
        email: `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}@wallet.com`,
        username: `Wallet_${walletAddress.slice(2, 8)}`,
        authMethod: 'wallet',
        walletAddress,
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('walletConnected', 'true');
      localStorage.setItem('userAddress', walletAddress);
      onSuccess(userData);
      onClose();
    } catch (error) {
      setError('Wallet connection failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Simulate login
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userData = {
        id: `user_${Date.now()}`,
        email,
        username: email.split('@')[0],
        authMethod: 'email',
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      onSuccess(userData);
      onClose();
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {mode === 'signup' ? 'Create Account' : 'Sign In'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success/Error Messages */}
            {success && (
              <div className="mb-4 p-3 bg-green-900/50 border border-green-500 rounded-lg flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400 text-sm">{success}</span>
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-lg flex items-center">
                <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-red-400 text-sm">{error}</span>
              </div>
            )}

            {/* Email Form */}
            <form onSubmit={mode === 'signup' ? handleEmailSignup : handleLogin} className="mb-6">
              {mode === 'signup' && (
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Choose a username"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {mode === 'signup' && (
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Processing...' : mode === 'signup' ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleGoogleSignup}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-3 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                <Chrome className="w-5 h-5" />
                <span>Continue with Google</span>
              </button>

              <button
                onClick={handleTwitterSignup}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-3 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                <Twitter className="w-5 h-5" />
                <span>Continue with Twitter</span>
              </button>

              <button
                onClick={handleWalletSignup}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-3 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </button>
            </div>

            {/* Toggle Mode */}
            <div className="mt-6 text-center">
              <span className="text-gray-400">
                {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
              </span>
              <button
                onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
                className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                {mode === 'signup' ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
