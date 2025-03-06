import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { PredictionMarket } from '../types/climate';

interface MarketTileProps {
  market: PredictionMarket;
}

export function MarketTile({ market }: MarketTileProps) {
  const probability = market.current_price * 100;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex-none w-[300px]"
    >
      <Link to={`/market/${market.id}`}>
        <div className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-medium text-white line-clamp-2 flex-1 pr-4">
                {market.title}
              </h3>
              <span className="shrink-0 px-2 py-1 bg-green-500/90 rounded text-sm font-medium text-white">
                {probability.toFixed(1)}%
              </span>
            </div>
            
            <p className="text-sm text-gray-400 mb-6 line-clamp-2">
              {market.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-green-400">
                <TrendingUp className="h-4 w-4 mr-2 shrink-0" />
                <span className="text-sm font-medium">
                  ${market.volume.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center text-blue-400">
                <Calendar className="h-4 w-4 mr-2 shrink-0" />
                <span className="text-sm">
                  {format(new Date(market.target_date), 'MMM d')}
                </span>
              </div>
            </div>
          </div>
          
          <div className="h-1 w-full bg-gray-800">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-blue-500"
              style={{ width: `${probability}%` }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}