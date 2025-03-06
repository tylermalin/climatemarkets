import React from 'react';
import { motion } from 'framer-motion';
import { Database, Lock, ExternalLink, Cloud } from 'lucide-react';
import { PremiumDataset } from '../types/climate';

interface DatasetCardProps {
  dataset: PremiumDataset;
  isSubscribed: boolean;
  onAccess: (dataset: PremiumDataset) => void;
}

export function DatasetCard({ 
  dataset,
  isSubscribed,
  onAccess
}: DatasetCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-gray-100">{dataset.title}</h3>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
          ${dataset.price.toLocaleString()}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[3rem]">
        {dataset.description}
      </p>

      <div className="space-y-3">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-white transition-colors ${
            isSubscribed 
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
              : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
          }`}
          onClick={() => onAccess(dataset)}
        >
          {!isSubscribed && <Lock className="w-4 h-4 mr-2" />}
          {isSubscribed ? (
            <>
              <Database className="w-4 h-4 mr-2" />
              Access Dataset
            </>
          ) : (
            'Subscribe to Access'
          )}
        </motion.button>

        {isSubscribed && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <motion.a 
              whileHover={{ x: 5 }}
              href="#api-docs" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              View API Documentation
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  );
}