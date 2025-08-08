import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Globe2, Search, Bell } from 'lucide-react';
import { Providers } from './providers';
import { MarketRow } from './components/MarketRow';
import { MarketTile } from './components/MarketTile';
import { MarketPage } from './pages/MarketPage';
import { CategoryPage } from './pages/CategoryPage';
import { WalletPage } from './pages/WalletPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { RiskDisclaimerPage } from './pages/RiskDisclaimerPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { FeaturedMarket } from './components/FeaturedMarket';
import { DeepLinkHandler } from './components/DeepLinkHandler';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import type { PredictionMarket } from './types/climate';

// Simple wallet connection state
let isWeb3Configured = true;

function AppContent() {
  const [markets, setMarkets] = useState<PredictionMarket[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Legacy state for backward compatibility
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [userAddress, setUserAddress] = useState<string>('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    fetchMarkets();
    
    // Check for existing user data
    const savedUserData = localStorage.getItem('userData');
    const isConnected = localStorage.getItem('walletConnected') === 'true';
    const savedAddress = localStorage.getItem('userAddress');
    
    if (savedUserData) {
      const user = JSON.parse(savedUserData);
      setUserData(user);
      setIsWalletConnected(true);
      setUserAddress(user.walletAddress || savedAddress || '');
      console.log('Restored user session:', user);
    } else if (isConnected && savedAddress) {
      setIsWalletConnected(true);
      setUserAddress(savedAddress);
      console.log('Restored wallet connection:', savedAddress);
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function fetchMarkets() {
    // Use mock data for now since database is server-side only
    console.log('Using mock data for development');
    setMarkets([
      {
        id: '1',
        category_id: 'temperature',
        title: 'Global Temperature 2025',
        description: 'Will the global average temperature exceed 1.5°C above pre-industrial levels?',
        target_date: '2025-12-31T23:59:59Z',
        current_price: 0.75,
        volume: 125000,
        country: 'Global',
        region: 'Global',
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
        title: 'Carbon Emissions Target 2025',
        description: 'Will global carbon emissions decrease by 5% in 2025?',
        target_date: '2025-12-31T23:59:59Z',
        current_price: 0.45,
        volume: 89000,
        country: 'Global',
        region: 'Global',
        verification_sources: [
          { name: 'IEA', url: 'https://www.iea.org' }
        ],
        resolution_criteria: 'Based on official carbon emission reports from major economies',
        sustainability_fee_percentage: 2.0,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '3',
        category_id: 'disasters',
        title: '🌪️ Florida — Category 3+ Hurricane Landfall Before Nov 2025',
        description: 'Will a Category 3 or stronger hurricane make landfall in Florida before November 2025?',
        target_date: '2025-10-31T23:59:59Z',
        current_price: 0.28,
        volume: 156000,
        country: 'USA',
        region: 'Southeast',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NHC', url: 'https://www.nhc.noaa.gov' }
        ],
        resolution_criteria: 'Official hurricane data from National Hurricane Center',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '4',
        category_id: 'disasters',
        title: '🔥 California — Wildfire > 10,000 acres by September',
        description: 'Will a wildfire in California exceed 10,000 acres in size by September 2024?',
        target_date: '2024-09-01T23:59:59Z',
        current_price: 0.54,
        volume: 98000,
        country: 'USA',
        region: 'West Coast',
        verification_sources: [
          { name: 'Cal Fire', url: 'https://www.fire.ca.gov' }
        ],
        resolution_criteria: 'Official wildfire data from California Department of Forestry and Fire Protection',
        sustainability_fee_percentage: 2.0,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '5',
        category_id: 'records',
        title: '️ Phoenix, AZ — All-Time High Temperature Broken in 2025',
        description: 'Will Phoenix, Arizona break its all-time high temperature record in 2025?',
        target_date: '2025-12-31T23:59:59Z',
        current_price: 0.41,
        volume: 67000,
        country: 'USA',
        region: 'Southwest',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NWS Phoenix', url: 'https://www.weather.gov/psr' }
        ],
        resolution_criteria: 'Official temperature data from National Weather Service Phoenix',
        sustainability_fee_percentage: 2.0,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '6',
        category_id: 'records',
        title: '🌪️ Atlantic — Fastest Sustained Hurricane Winds in a Decade',
        description: 'Will the Atlantic basin see a hurricane with sustained winds exceeding 180 mph in 2024?',
        target_date: '2024-11-30T23:59:59Z',
        current_price: 0.66,
        volume: 112000,
        country: 'Atlantic',
        region: 'Atlantic',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NHC', url: 'https://www.nhc.noaa.gov' }
        ],
        resolution_criteria: 'Official hurricane wind speed data from National Hurricane Center',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '7',
        category_id: 'precipitation',
        title: '❄️ Minneapolis, MN — Snowfall on Thanksgiving Day',
        description: 'Will there be measurable snowfall (≥0.1 inches) in Minneapolis, MN on Thanksgiving Day 2024?',
        target_date: '2024-11-27T23:59:59Z',
        current_price: 0.35,
        volume: 89000,
        country: 'USA',
        region: 'Midwest',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NWS Minneapolis', url: 'https://www.weather.gov/mpx' }
        ],
        resolution_criteria: 'Official snowfall data from National Weather Service Minneapolis',
        sustainability_fee_percentage: 2.0,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '8',
        category_id: 'precipitation',
        title: '🌵 Phoenix, AZ — No measurable rain in October',
        description: 'Will Phoenix, Arizona receive no measurable rainfall (≥0.01 inches) during October 2024?',
        target_date: '2024-10-31T23:59:59Z',
        current_price: 0.72,
        volume: 76000,
        country: 'USA',
        region: 'Southwest',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NWS Phoenix', url: 'https://www.weather.gov/psr' }
        ],
        resolution_criteria: 'Official precipitation data from National Weather Service Phoenix',
        sustainability_fee_percentage: 2.0,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '9',
        category_id: 'temperature',
        title: '🌡️ Arctic Sea Ice Minimum 2025',
        description: 'Will Arctic sea ice extent fall below 4 million square kilometers in 2025?',
        target_date: '2025-09-30T23:59:59Z',
        current_price: 0.38,
        volume: 92000,
        country: 'Arctic',
        region: 'Arctic',
        verification_sources: [
          { name: 'NSIDC', url: 'https://nsidc.org' }
        ],
        resolution_criteria: 'Official sea ice data from National Snow and Ice Data Center',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '10',
        category_id: 'precipitation',
        title: '🌧️ Seattle, WA — Wettest December on Record',
        description: 'Will Seattle, Washington experience its wettest December on record in 2024?',
        target_date: '2024-12-31T23:59:59Z',
        current_price: 0.29,
        volume: 54000,
        country: 'USA',
        region: 'West Coast',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NWS Seattle', url: 'https://www.weather.gov/sew' }
        ],
        resolution_criteria: 'Official precipitation data from National Weather Service Seattle',
        sustainability_fee_percentage: 2.0,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '11',
        category_id: 'emissions',
        title: '🏭 China Coal Consumption 2025',
        description: 'Will China reduce its coal consumption by 3% in 2025 compared to 2024?',
        target_date: '2025-12-31T23:59:59Z',
        current_price: 0.62,
        volume: 78000,
        country: 'China',
        region: 'Asia',
        verification_sources: [
          { name: 'IEA', url: 'https://www.iea.org' },
          { name: 'NBS China', url: 'http://www.stats.gov.cn' }
        ],
        resolution_criteria: 'Official energy consumption data from Chinese National Bureau of Statistics',
        sustainability_fee_percentage: 2.0,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '12',
        category_id: 'disasters',
        title: ' Pacific — Major Tsunami Warning in 2025',
        description: 'Will a tsunami with wave heights exceeding 3 meters strike any Pacific coast in 2025?',
        target_date: '2025-12-31T23:59:59Z',
        current_price: 0.18,
        volume: 45000,
        country: 'Pacific',
        region: 'Pacific',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'USGS', url: 'https://www.usgs.gov' }
        ],
        resolution_criteria: 'Official tsunami data from NOAA Tsunami Warning Centers',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '13',
        category_id: 'disasters',
        title: ' Iceland — Volcanic Eruption in 2025',
        description: 'Will a volcanic eruption occur in Iceland with VEI 3 or higher in 2025?',
        target_date: '2025-12-31T23:59:59Z',
        current_price: 0.33,
        volume: 67000,
        country: 'Iceland',
        region: 'Europe',
        verification_sources: [
          { name: 'IMO', url: 'https://en.vedur.is' }
        ],
        resolution_criteria: 'Official volcanic activity data from Icelandic Met Office',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '14',
        category_id: 'records',
        title: '🌡️ Death Valley — Hottest Temperature on Earth in 2025',
        description: 'Will Death Valley, California record a temperature of 130°F or higher in 2025?',
        target_date: '2025-12-31T23:59:59Z',
        current_price: 0.25,
        volume: 89000,
        country: 'USA',
        region: 'West Coast',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NWS Las Vegas', url: 'https://www.weather.gov/vef' }
        ],
        resolution_criteria: 'Official temperature data from National Weather Service Las Vegas',
        sustainability_fee_percentage: 2.0,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '15',
        category_id: 'records',
        title: '❄️ Antarctica — Coldest Temperature on Earth in 2025',
        description: 'Will Antarctica record a temperature of -90°C or lower in 2025?',
        target_date: '2025-12-31T23:59:59Z',
        current_price: 0.41,
        volume: 56000,
        country: 'Antarctica',
        region: 'Antarctica',
        verification_sources: [
          { name: 'NSIDC', url: 'https://nsidc.org' }
        ],
        resolution_criteria: 'Official temperature data from Antarctic research stations',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '16',
        category_id: 'disasters',
        title: '🌪️ Cat 3+ Hurricane Hits Miami in 2025',
        description: 'Will a Category 3 or stronger hurricane make landfall in Miami, Florida in 2025?',
        target_date: '2025-11-30T23:59:59Z',
        current_price: 0.19,
        volume: 15000,
        country: 'USA',
        region: 'Southeast',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NHC', url: 'https://www.nhc.noaa.gov' }
        ],
        resolution_criteria: 'Official hurricane landfall data from National Hurricane Center',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '17',
        category_id: 'disasters',
        title: '🌪️ Atlantic Hurricane Season Named Storms 2025',
        description: 'How many named storms will occur during the 2025 Atlantic Hurricane Season?',
        target_date: '2025-11-30T23:59:59Z',
        current_price: 0.39,
        volume: 205000,
        country: 'Atlantic',
        region: 'Atlantic',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NHC', url: 'https://www.nhc.noaa.gov' }
        ],
        resolution_criteria: 'Official named storm count from National Hurricane Center',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      },
      {
        id: '18',
        category_id: 'disasters',
        title: '🌪️ Cat 5 Hurricane US Landfall 2025',
        description: 'Will a Category 5 hurricane make landfall in the United States during the 2025 Hurricane Season?',
        target_date: '2025-11-30T23:59:59Z',
        current_price: 0.11,
        volume: 22000,
        country: 'USA',
        region: 'Southeast',
        verification_sources: [
          { name: 'NOAA', url: 'https://www.noaa.gov' },
          { name: 'NHC', url: 'https://www.nhc.noaa.gov' }
        ],
        resolution_criteria: 'Official hurricane landfall data from National Hurricane Center',
        sustainability_fee_percentage: 2.5,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
      }
    ]);
  }

  const handleConnectWallet = async () => {
    setShowAuthModal(true);
  };

  const handleAuthSuccess = (userData: any) => {
    setUserData(userData);
    setIsWalletConnected(true);
    setUserAddress(userData.walletAddress || '');
    console.log('User authenticated:', userData);
    
    // Redirect to dashboard after successful authentication
    window.location.href = '/dashboard';
  };

  const handleDisconnectWallet = () => {
    setIsWalletConnected(false);
    setUserAddress('');
    setUserData(null);
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('userAddress');
    localStorage.removeItem('userData');
    console.log('User logged out');
  };

  const handleTrade = (amount: number) => {
    console.log(`Buying $${amount} worth of shares`);
    // Simulate trade processing
    setTimeout(() => {
      console.log('Trade completed successfully');
    }, 1000);
  };

  const handlePlaceOrder = (type: 'buy' | 'sell', price: number, size: number) => {
    console.log(`${type} order placed: ${size} shares at $${price}`);
    // Simulate order placement
    setTimeout(() => {
      console.log('Order placed successfully');
    }, 1000);
  };

  const filteredMarkets = markets.filter(market =>
    market.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Updated categorization logic
  const categorizedMarkets = {
    trending: markets.filter(m => m.volume > 50000),
    temperature: markets.filter(m => 
      m.category_id === 'temperature' ||
      m.title.toLowerCase().includes('temperature') ||
      m.title.toLowerCase().includes('arctic') ||
      m.title.toLowerCase().includes('ice')
    ),
    precipitation: markets.filter(m => 
      m.category_id === 'precipitation' ||
      m.title.toLowerCase().includes('rain') || 
      m.title.toLowerCase().includes('snow') ||
      m.title.toLowerCase().includes('drought') ||
      m.title.toLowerCase().includes('wettest')
    ),
    emissions: markets.filter(m => 
      m.category_id === 'emissions' ||
      m.title.toLowerCase().includes('carbon') ||
      m.title.toLowerCase().includes('emission') ||
      m.title.toLowerCase().includes('coal')
    ),
    disasters: markets.filter(m => 
      m.category_id === 'disasters' ||
      m.title.toLowerCase().includes('hurricane') ||
      m.title.toLowerCase().includes('wildfire') ||
      m.title.toLowerCase().includes('tsunami') ||
      m.title.toLowerCase().includes('volcanic') ||
      m.title.toLowerCase().includes('earthquake')
    ),
    records: markets.filter(m => 
      m.category_id === 'records' ||
      m.title.toLowerCase().includes('record') ||
      m.title.toLowerCase().includes('hottest') ||
      m.title.toLowerCase().includes('coldest')
    )
  };

  // Regional categorization
  const regionalMarkets = {
    global: markets.filter(m => m.region === 'Global'),
    usa: markets.filter(m => m.country === 'USA'),
    atlantic: markets.filter(m => m.region === 'Atlantic'),
    pacific: markets.filter(m => m.region === 'Pacific'),
    europe: markets.filter(m => m.region === 'Europe'),
    asia: markets.filter(m => m.region === 'Asia'),
    arctic: markets.filter(m => m.region === 'Arctic'),
    antarctica: markets.filter(m => m.region === 'Antarctica')
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <DeepLinkHandler />
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Globe2 className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">Climate Markets</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/category/trending" className="text-gray-300 hover:text-white transition-colors">
                Trending
              </Link>
              <Link to="/category/temperature" className="text-gray-300 hover:text-white transition-colors">
                Temperature
              </Link>
              <Link to="/category/precipitation" className="text-gray-300 hover:text-white transition-colors">
                Precipitation
              </Link>
              <Link to="/category/emissions" className="text-gray-300 hover:text-white transition-colors">
                Emissions
              </Link>
              <Link to="/category/disasters" className="text-gray-300 hover:text-white transition-colors">
                Natural Disasters
              </Link>
              <Link to="/category/records" className="text-gray-300 hover:text-white transition-colors">
                Records
              </Link>
              {userData && (
                <Link to="/dashboard" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  Dashboard
                </Link>
              )}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
              </button>
              
              {/* Wallet Connection */}
              {!userData && (
                <button
                  onClick={handleConnectWallet}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Account
                </button>
              )}
              
              {userData && (
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-sm text-white font-medium">
                      {userData.username || userData.email?.split('@')[0] || 'User'}
                    </div>
                    <div className="text-xs text-gray-400">
                      {userData.walletAddress ? 
                        `${userData.walletAddress.slice(0, 6)}...${userData.walletAddress.slice(-4)}` :
                        userData.email
                      }
                    </div>
                  </div>
                  <Link
                    to="/settings"
                    className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleDisconnectWallet}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={
            <div>
              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Climate Prediction Markets
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Trade on the future of our planet. Predict climate outcomes and earn rewards while contributing to climate research.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/market/1"
                      className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Start Trading
                    </Link>
                    <Link
                      to="/how-it-works"
                      className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </section>

              {/* Featured Market */}
              {markets.length > 0 && (
                <section className="py-16">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FeaturedMarket market={markets[0]} />
                  </div>
                </section>
              )}

              {/* Market Categories */}
              <section className="py-16 bg-gray-900/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-center mb-12">Market Categories</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(categorizedMarkets).map(([category, categoryMarkets]) => (
                      <div key={category} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
                        <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                        <p className="text-gray-400 mb-4">
                          {categoryMarkets.length} active markets
                        </p>
                        <Link
                          to={`/category/${category}`}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          View all →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Recent Markets */}
              <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-center mb-12">Recent Markets</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {markets.slice(0, 6).map((market) => (
                      <MarketTile key={market.id} market={market} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          } />
          
          <Route path="/market/:id" element={<MarketPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/risk-disclaimer" element={<RiskDisclaimerPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Providers>
      <AppContent />
    </Providers>
  );
}

export default App;