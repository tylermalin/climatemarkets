import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, TrendingUp, Calendar, Info } from 'lucide-react';
import { format } from 'date-fns';
import { PredictionMarket } from '../types/climate';

interface FeaturedMarketProps {
  market: PredictionMarket;
}

export function FeaturedMarket({ market }: FeaturedMarketProps) {
  return (
    <div className="relative h-[85vh] w-full">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
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
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              <Play className="h-5 w-5 mr-2" />
              Trade Now
            </Link>
            
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-600/80 text-white font-medium hover:bg-gray-500/80 transition-colors">
              <Info className="h-5 w-5 mr-2" />
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}