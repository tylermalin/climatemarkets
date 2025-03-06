import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PredictionMarket } from '../types/climate';
import { MarketTile } from './MarketTile';

interface MarketRowProps {
  title: string;
  markets: PredictionMarket[];
  id: string;
}

export function MarketRow({ title, markets, id }: MarketRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!markets.length) return null;

  return (
    <div className="relative mb-16 pt-8" id={id}>
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold mb-6 text-white">{title}</h2>
      </div>
      
      <div className="group relative">
        <div 
          ref={rowRef}
          className="flex overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-4 pb-4">
            {markets.map((market) => (
              <MarketTile key={market.id} market={market} />
            ))}
          </div>
        </div>
        
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 backdrop-blur-sm z-20"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </motion.button>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 backdrop-blur-sm z-20"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </motion.button>
      </div>
    </div>
  );
}