import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, TrendingUp, Calendar, Info, X, Globe, Thermometer, CloudRain, Wind } from 'lucide-react';
import { format } from 'date-fns';
import { PredictionMarket } from '../types/climate';

interface FeaturedMarketProps {
  market: PredictionMarket;
}

export function FeaturedMarket({ market }: FeaturedMarketProps) {
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Animated Background with Earth Texture */}
      <div className="absolute inset-0">
        {/* Earth Sphere with Moving Texture */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative w-96 h-96"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {/* Earth Base */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 shadow-2xl">
              {/* Continents Texture */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 via-green-600/30 to-green-800/40 opacity-60" />
              
              {/* Atmospheric Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/20 via-blue-500/30 to-blue-700/40 animate-pulse" />
              
              {/* Moving Cloud Texture */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent"
                animate={{ 
                  x: [0, 20, 0],
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Orbital Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
            
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i * 10)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Background Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {market.title}
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            {market.description}
          </p>
          
          <div className="flex items-center space-x-8 mb-8">
            <div className="flex items-center text-green-400">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">${market.volume.toLocaleString()}</span>
            </div>
            <div className="flex items-center text-blue-400">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="text-lg">
                {format(new Date(market.target_date), 'MMMM d, yyyy')}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to={`/market/${market.id}`}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Play className="h-5 w-5 mr-2" />
              Trade Now
            </Link>
            
            <button 
              onClick={() => setShowInfoModal(true)}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-600/80 text-white font-medium hover:bg-gray-500/80 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Info className="h-5 w-5 mr-2" />
              More Info
            </button>
          </div>
        </motion.div>
      </div>

      {/* Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Market Information</h2>
              <button
                onClick={() => setShowInfoModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{market.title}</h3>
                <p className="text-gray-300 leading-relaxed">{market.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-white font-medium">Trading Volume</span>
                  </div>
                  <p className="text-2xl font-bold text-green-400">${market.volume.toLocaleString()}</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-white font-medium">Resolution Date</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-400">
                    {format(new Date(market.target_date), 'MMM d, yyyy')}
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Globe className="h-5 w-5 text-purple-400 mr-2" />
                    <span className="text-white font-medium">Category</span>
                  </div>
                  <p className="text-lg text-purple-400 capitalize">{market.category}</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Thermometer className="h-5 w-5 text-red-400 mr-2" />
                    <span className="text-white font-medium">Current Price</span>
                  </div>
                  <p className="text-2xl font-bold text-red-400">${market.current_price.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">How to Trade</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                    <p>Connect your wallet to start trading</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                    <p>Choose "Yes" or "No" based on your prediction</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                    <p>Set your bet amount and confirm the transaction</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</div>
                    <p>Wait for the market to resolve and claim your winnings</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Link
                  to={`/market/${market.id}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors"
                >
                  Start Trading
                </Link>
                <button
                  onClick={() => setShowInfoModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}