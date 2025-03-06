import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { PredictionMarket } from '../types/climate';
import { Thermometer, Globe, Clock, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MarketCardProps {
  market: PredictionMarket;
}

export function MarketCard({ market }: MarketCardProps) {
  const probability = market.current_price * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Link 
              to={`/market/${market.id}`}
              className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {market.title}
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {market.description}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Globe className="h-4 w-4 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">{market.country}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600"
              style={{ width: `${probability}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">No</span>
            <span className="font-medium text-blue-600 dark:text-blue-400">{probability.toFixed(1)}%</span>
            <span className="text-gray-600 dark:text-gray-400">Yes</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm font-medium">${market.volume.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-blue-500 mr-2" />
            <span className="text-sm">
              {format(new Date(market.target_date), 'MMM d, yyyy')}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-500 dark:text-gray-400">Fee</span>
            <p className="text-sm font-medium">{(market.sustainability_fee_percentage * 100).toFixed(1)}%</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {market.verification_sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                {source.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}