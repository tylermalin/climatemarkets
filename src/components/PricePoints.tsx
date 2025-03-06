import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface PricePoint {
  price_point: number;
  probability: number;
  volume: number;
}

interface PricePointsProps {
  pricePoints: PricePoint[];
  onSelect: (price: number) => void;
  selectedPrice?: number;
}

export function PricePoints({ pricePoints, onSelect, selectedPrice }: PricePointsProps) {
  const sortedPoints = [...pricePoints].sort((a, b) => b.price_point - a.price_point);
  
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Price Points</h3>
        <div className="flex items-center text-green-400">
          <TrendingUp className="h-5 w-5 mr-2" />
          <span className="font-medium">
            ${pricePoints.reduce((sum, point) => sum + point.volume, 0).toLocaleString()}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        {sortedPoints.map((point) => (
          <motion.button
            key={point.price_point}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              selectedPrice === point.price_point
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-100'
            }`}
            onClick={() => onSelect(point.price_point)}
          >
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium">
                ${point.price_point.toLocaleString()}
              </span>
              <span className="text-sm text-gray-400">
                {(point.probability * 100).toFixed(0)}%
              </span>
            </div>
            <span className="text-sm text-gray-400">
              ${point.volume.toLocaleString()}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}