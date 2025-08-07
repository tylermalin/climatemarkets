import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { 
  ArrowLeft, 
  Globe, 
  Calendar, 
  TrendingUp, 
  Users, 
  FileText, 
  ExternalLink,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { PricePoints } from '../components/PricePoints';
import { OrderBook } from '../components/OrderBook';
import { TradePanel } from '../components/TradePanel';
import type { PredictionMarket, MarketPricePoint, OrderBook as OrderBookType } from '../types/climate';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only create Supabase client if we have valid credentials
const supabase = supabaseUrl && supabaseKey && !supabaseUrl.includes('your_supabase') && !supabaseKey.includes('your_supabase')
  ? createClient(supabaseUrl, supabaseKey)
  : null;

if (!supabase) {
  console.warn('Supabase not configured. Please add your Supabase credentials to the .env file.');
}

// Mock order book data
const mockOrderBook: OrderBookType = {
  asks: [
    { price: 0.89, size: 100 },
    { price: 0.88, size: 200 },
    { price: 0.87, size: 300 },
    { price: 0.86, size: 400 },
  ],
  bids: [
    { price: 0.85, size: 500 },
    { price: 0.84, size: 400 },
    { price: 0.83, size: 300 },
    { price: 0.82, size: 200 },
  ],
};

export function MarketPage() {
  const { id } = useParams<{ id: string }>();
  const [market, setMarket] = useState<PredictionMarket | null>(null);
  const [pricePoints, setPricePoints] = useState<MarketPricePoint[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number>();
  const [loading, setLoading] = useState(true);
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!id) return;
    
    async function fetchMarketData() {
      if (!supabase) {
        console.warn('Supabase not configured. Using mock data.');
        // Set mock market data for development
        const mockMarket: PredictionMarket = {
          id: id || '1',
          title: 'Global Temperature 2024',
          description: 'Will the global average temperature exceed 1.5°C above pre-industrial levels?',
          current_price: 0.75,
          volume: 125000,
          end_date: '2024-12-31',
          category: 'temperature',
          created_at: '2024-01-01'
        };
        
        const mockPricePoints: MarketPricePoint[] = [
          { id: '1', market_id: id || '1', price_point: 0.75, timestamp: '2024-01-01' },
          { id: '2', market_id: id || '1', price_point: 0.74, timestamp: '2024-01-01' },
          { id: '3', market_id: id || '1', price_point: 0.76, timestamp: '2024-01-01' }
        ];
        
        setMarket(mockMarket);
        setPricePoints(mockPricePoints);
        setLoading(false);
        return;
      }

      try {
        const [marketResponse, pricePointsResponse] = await Promise.all([
          supabase
            .from('prediction_markets')
            .select('*')
            .eq('id', id)
            .single(),
          supabase
            .from('market_price_points')
            .select('*')
            .eq('market_id', id)
            .order('price_point', { ascending: false })
        ]);

        if (marketResponse.error) throw marketResponse.error;
        if (pricePointsResponse.error) throw pricePointsResponse.error;

        setMarket(marketResponse.data);
        setPricePoints(pricePointsResponse.data || []);
      } catch (error) {
        console.error('Error fetching market data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMarketData();
  }, [id]);

  const handleTrade = (amount: number) => {
    if (!market) return;
    console.log(`${tradeType === 'buy' ? 'Buying' : 'Selling'} $${amount} worth of shares`);
    // Implement actual trading logic here
  };

  const handlePlaceOrder = (type: 'buy' | 'sell', price: number, size: number) => {
    console.log(`Placing ${type} order: ${size} shares at $${price}`);
    // Implement order placement logic here
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading market data...</div>
      </div>
    );
  }

  if (!market) {
    return (
      <div className="min-h-screen bg-black p-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Markets
          </Link>
          <div className="mt-8 text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Market Not Found</h1>
            <p className="text-gray-400">The market you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Markets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-4">{market.title}</h1>
                  <p className="text-lg text-gray-400 mb-6">{market.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <span className="text-lg font-medium">{market.country}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Stat 
                  icon={<Calendar className="w-5 h-5 text-blue-400" />}
                  label="Resolution Date"
                  value={format(new Date(market.target_date), 'MMM d, yyyy')}
                />
                <Stat 
                  icon={<TrendingUp className="w-5 h-5 text-green-400" />}
                  label="Total Volume"
                  value={`$${market.volume.toLocaleString()}`}
                />
                <Stat 
                  icon={<FileText className="w-5 h-5 text-purple-400" />}
                  label="Sources"
                  value={market.verification_sources.length.toString()}
                />
              </div>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-6 flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ChevronDown className={`w-5 h-5 mr-2 transform transition-transform ${
                  showDetails ? 'rotate-180' : ''
                }`} />
                {showDetails ? 'Hide Details' : 'Show Details'}
              </button>

              {showDetails && (
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h2 className="text-xl font-semibold mb-4">Resolution Criteria</h2>
                  <p className="text-gray-400 mb-6">{market.resolution_criteria}</p>
                  <div className="space-y-2">
                    {market.verification_sources.map((source, index) => (
                      <a
                        key={index}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {source.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <OrderBook 
              orderBook={mockOrderBook}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>

          {/* Trading Panel */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTradeType('buy')}
                  className={`py-2 rounded-lg font-medium transition-colors ${
                    tradeType === 'buy'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Buy Yes
                </button>
                <button
                  onClick={() => setTradeType('sell')}
                  className={`py-2 rounded-lg font-medium transition-colors ${
                    tradeType === 'sell'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Buy No
                </button>
              </div>
            </div>

            <TradePanel
              type={tradeType}
              currentPrice={market.current_price}
              onTrade={handleTrade}
            />

            <PricePoints 
              pricePoints={pricePoints}
              onSelect={setSelectedPrice}
              selectedPrice={selectedPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center mb-2">
        {icon}
        <span className="ml-2 text-sm text-gray-400">{label}</span>
      </div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}