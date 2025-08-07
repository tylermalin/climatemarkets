import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { walletConnectProvider } from '@web3modal/wagmi';
import { Globe2, Search, Bell } from 'lucide-react';
import { MarketRow } from './components/MarketRow';
import { MarketPage } from './pages/MarketPage';
import { CategoryPage } from './pages/CategoryPage';
import { WalletPage } from './pages/WalletPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FeaturedMarket } from './components/FeaturedMarket';
import { DeepLinkHandler } from './components/DeepLinkHandler';
import { AuthNav } from './components/AuthNav';
import { Footer } from './components/Footer';
import type { PredictionMarket } from './types/climate';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only create Supabase client if we have valid credentials
const supabase = supabaseUrl && supabaseKey && !supabaseUrl.includes('your_supabase') && !supabaseKey.includes('your_supabase')
  ? createClient(supabaseUrl, supabaseKey)
  : null;

if (!supabase) {
  console.warn('Supabase not configured. Please add your Supabase credentials to the .env file.');
}

// Configure Web3
const projectId = import.meta.env.VITE_WEB3_MODAL_PROJECT_ID;
const chains = [mainnet, polygon];

let config: any;
let isWeb3Configured = false;

// Only configure Web3 if we have a valid project ID
if (projectId && projectId !== 'YOUR_WEB3_MODAL_PROJECT_ID' && !projectId.includes('your_web3')) {
  const { chains: configuredChains } = configureChains(
    chains,
    [walletConnectProvider({ projectId })]
  );

  config = createConfig({
    autoConnect: true,
    chains: configuredChains,
  });

  createWeb3Modal({
    wagmiConfig: config,
    projectId,
    chains,
  });
  
  isWeb3Configured = true;
} else {
  console.warn('Web3Modal not configured. Please add your project ID to the .env file.');
  
  // Create a simple config for when Web3Modal is not configured
  config = createConfig({
    autoConnect: true,
    chains: chains,
  });
}

function App() {
  const [markets, setMarkets] = useState<PredictionMarket[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [userAddress, setUserAddress] = useState<string>('');

  useEffect(() => {
    fetchMarkets();
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function fetchMarkets() {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      // Set some mock data for development
              setMarkets([
          {
            id: '1',
            category_id: 'temperature',
            title: 'Global Temperature 2024',
            description: 'Will the global average temperature exceed 1.5°C above pre-industrial levels?',
            target_date: '2024-12-31T23:59:59Z',
            current_price: 0.75,
            volume: 125000,
            country: 'Global',
            verification_sources: [
              { name: 'NOAA', url: 'https://www.noaa.gov' }
            ],
            resolution_criteria: 'Based on global average temperature data from major meteorological organizations',
            sustainability_fee_percentage: 2.5,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          },
          {
            id: '2',
            category_id: 'emissions',
            title: 'Carbon Emissions Target',
            description: 'Will global carbon emissions decrease by 5% in 2024?',
            target_date: '2024-12-31T23:59:59Z',
            current_price: 0.45,
            volume: 89000,
            country: 'Global',
            verification_sources: [
              { name: 'IEA', url: 'https://www.iea.org' }
            ],
            resolution_criteria: 'Based on official carbon emission reports from major economies',
            sustainability_fee_percentage: 2.0,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        ]);
      return;
    }

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

  const handleConnectWallet = () => {
    // This would integrate with Web3Modal
    console.log('Connecting wallet...');
    setIsWalletConnected(true);
    setUserAddress('0x1234...5678'); // Mock address
  };

  const handleDisconnectWallet = () => {
    setIsWalletConnected(false);
    setUserAddress('');
  };

  return (
    <WagmiConfig config={config}>
      <div className="min-h-screen bg-black text-white">
        <DeepLinkHandler />
        <AuthNav 
          isConnected={isWalletConnected}
          userAddress={userAddress}
          onConnect={handleConnectWallet}
          onDisconnect={handleDisconnectWallet}
        />
        {/* Netflix-style Header */}
        <header className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
        }`} style={{ top: '48px' }}>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link to="/" className="flex items-center">
                  <Globe2 className="h-8 w-8 text-green-500" />
                  <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Climate Markets
                  </h1>
                </Link>
                <nav className="hidden md:flex space-x-6">
                  <Link to="/category/trending" className="text-sm text-gray-300 hover:text-white">Trending</Link>
                  <Link to="/category/temperature" className="text-sm text-gray-300 hover:text-white">Temperature</Link>
                  <Link to="/category/precipitation" className="text-sm text-gray-300 hover:text-white">Precipitation</Link>
                  <Link to="/category/emissions" className="text-sm text-gray-300 hover:text-white">Emissions</Link>
                  <Link to="/category/disasters" className="text-sm text-gray-300 hover:text-white">Natural Disasters</Link>
                  <Link to="/category/records" className="text-sm text-gray-300 hover:text-white">Records</Link>
                  <Link to="/wallet" className="text-sm text-blue-400 hover:text-blue-300">Wallet</Link>
                </nav>
              </div>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Search className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
                <Bell className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                {isWeb3Configured && <w3m-button />}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <main>
              {featuredMarket && <FeaturedMarket market={featuredMarket} />}
              
              <div className="relative z-10 mt-[-100px] pt-24 space-y-8">
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
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
      </div>
    </WagmiConfig>
  );
}

export default App;