import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { MarketCard } from '../components/MarketCard';
import type { PredictionMarket } from '../types/climate';

// Remove Supabase import and use mock data
const categoryConfigs = {
  trending: {
    title: 'Trending Markets',
    description: 'Most active prediction markets with high trading volume',
    filter: (m: PredictionMarket) => m.volume > 50000
  },
  temperature: {
    title: 'Temperature Predictions',
    description: 'Climate temperature forecasts and predictions',
    filter: (m: PredictionMarket) => 
      m.category_id === 'temperature' ||
      m.title.toLowerCase().includes('temperature') ||
      m.title.toLowerCase().includes('arctic') ||
      m.title.toLowerCase().includes('ice')
  },
  precipitation: {
    title: 'Precipitation Markets',
    description: 'Rain, snow, and drought prediction markets',
    filter: (m: PredictionMarket) => 
      m.category_id === 'precipitation' ||
      m.title.toLowerCase().includes('rain') || 
      m.title.toLowerCase().includes('snow') ||
      m.title.toLowerCase().includes('drought') ||
      m.title.toLowerCase().includes('wettest')
  },
  emissions: {
    title: 'Carbon Emissions',
    description: 'Carbon and emissions trading markets',
    filter: (m: PredictionMarket) => 
      m.category_id === 'emissions' ||
      m.title.toLowerCase().includes('carbon') ||
      m.title.toLowerCase().includes('emission') ||
      m.title.toLowerCase().includes('coal')
  },
  disasters: {
    title: 'Natural Disasters',
    description: 'Hurricane, wildfire, and disaster prediction markets',
    filter: (m: PredictionMarket) => 
      m.category_id === 'disasters' ||
      m.title.toLowerCase().includes('hurricane') ||
      m.title.toLowerCase().includes('wildfire') ||
      m.title.toLowerCase().includes('tsunami') ||
      m.title.toLowerCase().includes('volcanic') ||
      m.title.toLowerCase().includes('earthquake')
  },
  records: {
    title: 'Climate Records',
    description: 'Record-breaking climate event predictions',
    filter: (m: PredictionMarket) => 
      m.category_id === 'records' ||
      m.title.toLowerCase().includes('record') ||
      m.title.toLowerCase().includes('hottest') ||
      m.title.toLowerCase().includes('coldest')
  }
};

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [markets, setMarkets] = useState<PredictionMarket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use the same mock data as App.tsx
    console.log('Loading markets for category:', category);
    
    const allMarkets: PredictionMarket[] = [
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
        verification_sources: [{ name: 'NOAA', url: 'https://www.noaa.gov' }],
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
        verification_sources: [{ name: 'IEA', url: 'https://www.iea.org' }],
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
    ];

    // Filter markets by category
    const categoryConfig = categoryConfigs[category as keyof typeof categoryConfigs];
    if (categoryConfig) {
      const filteredMarkets = allMarkets.filter(categoryConfig.filter);
      setMarkets(filteredMarkets);
    } else {
      setMarkets([]);
    }
    
    setLoading(false);
  }, [category]);

  if (!category || !categoryConfigs[category as keyof typeof categoryConfigs]) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-400 mb-8">The requested category does not exist.</p>
            <Link to="/" className="text-blue-400 hover:text-blue-300">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const config = categoryConfigs[category as keyof typeof categoryConfigs];
  const filteredMarkets = markets.filter(config.filter);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">{config.title}</h1>
          <p className="text-gray-400">{config.description}</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search markets..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Markets Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading markets...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarkets.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        )}

        {!loading && filteredMarkets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No markets found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}