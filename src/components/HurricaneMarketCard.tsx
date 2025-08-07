import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, MapPin, Wind } from 'lucide-react';
import { format } from 'date-fns';
import { PredictionMarket } from '../types/climate';

interface HurricaneMarketCardProps {
  market: PredictionMarket;
}

export function HurricaneMarketCard({ market }: HurricaneMarketCardProps) {
  const isMultiOutcome = market.outcomes && market.outcomes.length > 0;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Wind className="h-5 w-5 text-red-400" />
          <h3 className="text-lg font-semibold text-white line-clamp-2">
            {market.title}
          </h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">
            ${market.volume.toLocaleString()}
          </div>
          <div className="text-sm text-gray-400">Vol.</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {market.description}
      </p>

      {/* Multi-Outcome Display */}
      {isMultiOutcome && market.outcomes && (
        <div className="mb-4">
          <div className="space-y-2">
            {market.outcomes.map((outcome) => (
              <div key={outcome.id} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-medium">{outcome.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-300">
                    Yes {Math.round(outcome.probability * 100)}%
                  </div>
                  <div className="text-xs text-gray-400">
                    No {Math.round((1 - outcome.probability) * 100)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Single Outcome Display */}
      {!isMultiOutcome && (
        <div className="mb-4">
          <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-white font-medium">
                {Math.round(market.current_price * 100)}% chance
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-300">
                Yes {Math.round(market.current_price * 100)}%
              </div>
              <div className="text-xs text-gray-400">
                No {Math.round((1 - market.current_price) * 100)}%
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-2 mb-4">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          Buy Yes
        </button>
        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          Buy No
        </button>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4" />
          <span>{market.country}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>{format(new Date(market.target_date), 'MMM d, yyyy')}</span>
        </div>
      </div>

      {/* Link to Market Detail */}
      <Link
        to={`/market/${market.id}`}
        className="absolute inset-0"
        aria-label={`View details for ${market.title}`}
      />
    </motion.div>
  );
}
