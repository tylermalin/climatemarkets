import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { MarketCard } from '../components/MarketCard';
import type { PredictionMarket } from '../types/climate';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
}

const supabase = createClient(
  supabaseUrl || '',
  supabaseKey || ''
);

const categoryConfigs = {
  trending: {
    title: 'Trending Markets',
    description: 'Most active prediction markets with high trading volume',
    filter: (m: PredictionMarket) => m.volume > 50000
  },
  temperature: {
    title: 'Temperature Predictions',
    description: 'Climate temperature forecasts and predictions',
    filter: (m: PredictionMarket) => m.title.toLowerCase().includes('temperature')
  },
  precipitation: {
    title: 'Precipitation Markets',
    description: 'Rainfall, snowfall, and drought predictions',
    filter: (m: PredictionMarket) => (
      m.title.toLowerCase().includes('rain') || 
      m.title.toLowerCase().includes('snow') ||
      m.title.toLowerCase().includes('drought')
    )
  },
  emissions: {
    title: 'Carbon Emissions',
    description: 'Carbon emission targets and climate policy outcomes',
    filter: (m: PredictionMarket) => m.title.toLowerCase().includes('carbon')
  },
  disasters: {
    title: 'Natural Disasters',
    description: 'Predictions about natural disasters and extreme weather events',
    filter: (m: PredictionMarket) => (
      m.title.toLowerCase().includes('hurricane') ||
      m.title.toLowerCase().includes('earthquake') ||
      m.title.toLowerCase().includes('flood') ||
      m.title.toLowerCase().includes('wildfire')
    )
  },
  records: {
    title: 'Climate Records',
    description: 'Predictions about breaking climate and weather records',
    filter: (m: PredictionMarket) => m.title.toLowerCase().includes('record')
  }
};

export function CategoryPage() {
  const { category } = useParams<{ category: keyof typeof categoryConfigs }>();
  const [markets, setMarkets] = useState<PredictionMarket[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const config = category ? categoryConfigs[category] : null;

  useEffect(() => {
    if (!config) return;
    
    async function fetchMarkets() {
      try {
        const { data, error } = await supabase
          .from('prediction_markets')
          .select('*')
          .order('volume', { ascending: false });

        if (error) throw error;
        
        const filteredMarkets = (data || [])
          .filter(config.filter)
          .filter(market => 
            searchQuery === '' ||
            market.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            market.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
        
        setMarkets(filteredMarkets);
      } catch (error) {
        console.error('Error fetching markets:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMarkets();
  }, [category, searchQuery]);

  if (!config) {
    return (
      <div className="min-h-screen bg-black p-8 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Category Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Markets
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{config.title}</h1>
          <p className="text-xl text-gray-400">{config.description}</p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search markets..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-800 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-pulse text-gray-400">Loading markets...</div>
          </div>
        ) : markets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No markets found</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {markets.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}