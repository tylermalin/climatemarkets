import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Database, ExternalLink, Lock } from 'lucide-react';
import { PremiumDataset } from '../types/climate';

interface SatelliteDataCardProps {
  dataset: PremiumDataset;
  isSubscribed: boolean;
  onAccess: (dataset: PremiumDataset) => void;
  onRequestSample: (dataset: PremiumDataset) => void;
}

const getDatasetImage = (title: string): string => {
  const images = {
    'GeoProfile Level 1C': 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800',
    'Precipitation Level 2A': 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&q=80&w=800',
    'Brightness Temperature Level 1B': 'https://images.unsplash.com/photo-1527482937786-6608f6e14c15?auto=format&fit=crop&q=80&w=800',
    'Regridded Brightness Temperature Level 1C-TCR': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    'Intercalibrated Brightness Temperature Level 1C-TC': 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    'Resampled Brightness Temperature Level 1B-TBR': 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=800',
    'Atmospheric Thermodynamic Vertical Profile Level 2A-ATVP': 'https://images.unsplash.com/photo-1534996858221-380b92700493?auto=format&fit=crop&q=80&w=800',
  };
  return images[title as keyof typeof images] || images['GeoProfile Level 1C'];
};

export function SatelliteDataCard({ 
  dataset, 
  isSubscribed, 
  onAccess,
  onRequestSample 
}: SatelliteDataCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={getDatasetImage(dataset.title)}
          alt={dataset.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{dataset.title}</h3>
          <div className="mt-2 flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 backdrop-blur-sm">
              <Satellite className="w-4 h-4 mr-1" />
              Pathfinder
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-100 backdrop-blur-sm">
              ${dataset.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
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
                Access Full Dataset
              </>
            ) : (
              'Subscribe for Access'
            )}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center px-4 py-3 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            onClick={() => onRequestSample(dataset)}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Request Sample Dataset
          </motion.button>
        </div>
        
        {isSubscribed && (
          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center text-sm text-green-600 dark:text-green-400">
              <Database className="w-4 h-4 mr-2" />
              Active Enterprise Access
            </div>
            <motion.a 
              whileHover={{ x: 5 }}
              href="#documentation" 
              className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              View Technical Documentation
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  );
}