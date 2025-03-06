import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { walletConnectProvider } from '@web3modal/wagmi';
import { Globe2, Search, Bell } from 'lucide-react';
import { MarketRow } from './components/MarketRow';
import { MarketPage } from './pages/MarketPage';
import { CategoryPage } from './pages/CategoryPage';
import { FeaturedMarket } from './components/FeaturedMarket';
import type { PredictionMarket } from './types/climate';

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

// Configure Web3
const projectId = 'YOUR_WEB3_MODAL_PROJECT_ID';
const chains = [mainnet, polygon];

const { chains: configuredChains } = configureChains(
  chains,
  [walletConnectProvider({ projectId })]
);

const config = createConfig({
  autoConnect: true,
  chains: configuredChains,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
});

function App() {
  const [markets, setMarkets] = useState<PredictionMarket[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetchMarkets();
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function fetchMarkets() {
    try {
      const { data, error } = await supabase
        .from('prediction_markets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMarkets(data || []);
    } catch (error) {
      console.error('Error fetching markets:', error);
    }
  }

  const categorizedMarkets = {
    trending: markets.filter(m => m.volume > 50000),
    temperature: markets.filter(m => m.title.toLowerCase().includes('temperature')),
    precipitation: markets.filter(m => 
      m.title.toLowerCase().includes('rain') || 
      m.title.toLowerCase().includes('snow') ||
      m.title.toLowerCase().includes('drought')
    ),
    emissions: markets.filter(m => m.title.toLowerCase().includes('carbon')),
    disasters: markets.filter(m => 
      m.title.toLowerCase().includes('hurricane') ||
      m.title.toLowerCase().includes('earthquake') ||
      m.title.toLowerCase().includes('flood') ||
      m.title.toLowerCase().includes('wildfire')
    ),
    records: markets.filter(m => m.title.toLowerCase().includes('record')),
  };

  const featuredMarket = markets[0];

  return (
    <WagmiConfig config={config}>
      <div className="min-h-screen bg-black text-white">
        {/* Netflix-style Header */}
        <header className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <Globe2 className="h-8 w-8 text-green-500" />
                  <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Climate Markets
                  </h1>
                </div>
                <nav className="hidden md:flex space-x-6">
                  <a href="/category/trending" className="text-sm text-gray-300 hover:text-white">Trending</a>
                  <a href="/category/temperature" className="text-sm text-gray-300 hover:text-white">Temperature</a>
                  <a href="/category/precipitation" className="text-sm text-gray-300 hover:text-white">Precipitation</a>
                  <a href="/category/emissions" className="text-sm text-gray-300 hover:text-white">Emissions</a>
                  <a href="/category/disasters" className="text-sm text-gray-300 hover:text-white">Natural Disasters</a>
                  <a href="/category/records" className="text-sm text-gray-300 hover:text-white">Records</a>
                </nav>
              </div>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Search className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
                <Bell className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <w3m-button />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <main>
              {featuredMarket && <FeaturedMarket market={featuredMarket} />}
              
              <div className="relative z-10 mt-[-100px] pt-16 space-y-8">
                <MarketRow 
                  title="Trending Markets" 
                  markets={categorizedMarkets.trending} 
                  id="trending"
                />
                <MarketRow 
                  title="Temperature Predictions" 
                  markets={categorizedMarkets.temperature}
                  id="temperature"
                />
                <MarketRow 
                  title="Precipitation Markets" 
                  markets={categorizedMarkets.precipitation}
                  id="precipitation"
                />
                <MarketRow 
                  title="Carbon Emissions" 
                  markets={categorizedMarkets.emissions}
                  id="emissions"
                />
                <MarketRow 
                  title="Natural Disasters" 
                  markets={categorizedMarkets.disasters}
                  id="disasters"
                />
                <MarketRow 
                  title="Climate Records" 
                  markets={categorizedMarkets.records}
                  id="records"
                />
              </div>
            </main>
          } />
          <Route path="/market/:id" element={<MarketPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </WagmiConfig>
  );
}

export default App;