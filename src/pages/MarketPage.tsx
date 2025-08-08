import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { 
  ArrowLeft, 
  Globe, 
  Calendar, 
  TrendingUp, 
  FileText, 
  ExternalLink,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PricePoints } from '../components/PricePoints';
import { OrderBook } from '../components/OrderBook';
import { TradePanel } from '../components/TradePanel';
import { AdvancedTradingPanel } from '../components/AdvancedTradingPanel';
import { SmartContractTradePanel } from '../components/SmartContractTradePanel';
import type { PredictionMarket, MarketPricePoint, OrderBook as OrderBookType } from '../types/climate';

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
  const [showAdvancedTrading, setShowAdvancedTrading] = useState(false);
  const [showSmartContract, setShowSmartContract] = useState(false);

  useEffect(() => {
    if (!id) return;
    
    async function fetchMarketData() {
      console.log('Using mock data for development');
      console.log('Looking for market with ID:', id);
      
      // Use the same mock data as App.tsx
      const allMarkets = [
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
          updated_at: '2024-01-01T00:00:00Z',
          outcomes: [
            { id: '17a', label: '<12', probability: 0.06, volume: 12300 },
            { id: '17b', label: '12-15', probability: 0.22, volume: 45100 },
            { id: '17c', label: '16-19', probability: 0.39, volume: 79950 },
            { id: '17d', label: '20-23', probability: 0.17, volume: 34850 },
            { id: '17e', label: '>23', probability: 0.12, volume: 32800 }
          ]
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
        }
      ];

      const foundMarket = allMarkets.find(m => m.id === id);
      if (foundMarket) {
        setMarket(foundMarket);
        setPricePoints([
          { id: '1', market_id: foundMarket.id, price_point: 0.75, probability: 75, volume: 1000, created_at: '2024-01-01T00:00:00Z' },
          { id: '2', market_id: foundMarket.id, price_point: 0.74, probability: 74, volume: 800, created_at: '2024-01-01T00:00:00Z' },
          { id: '3', market_id: foundMarket.id, price_point: 0.76, probability: 76, volume: 1200, created_at: '2024-01-01T00:00:00Z' }
        ]);
      } else {
        setMarket(null);
        setPricePoints([]);
      }
      setLoading(false);
    }

    fetchMarketData();
  }, [id]);

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
            {/* Trading Toggle */}
            <div className="flex justify-center">
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => {
                    setShowAdvancedTrading(false);
                    setShowSmartContract(false);
                  }}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    !showAdvancedTrading && !showSmartContract
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Simple Trading
                </button>
                <button
                  onClick={() => {
                    setShowAdvancedTrading(true);
                    setShowSmartContract(false);
                  }}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    showAdvancedTrading 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Advanced Trading
                </button>
                <button
                  onClick={() => {
                    setShowAdvancedTrading(false);
                    setShowSmartContract(true);
                  }}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    showSmartContract 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Smart Contract
                </button>
              </div>
            </div>

            {showSmartContract ? (
              <SmartContractTradePanel market={market} />
            ) : showAdvancedTrading ? (
              <AdvancedTradingPanel
                marketId={market.id}
                currentPrice={market.current_price}
                userAddress="0x1234567890123456789012345678901234567890" // Mock address
                isWalletConnected={true} // Mock connected state
              />
            ) : (
              <>
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
                  isWalletConnected={true} // Mock connected state
                  userAddress="0x1234567890123456789012345678901234567890" // Mock address
                  marketId={market.id}
                  marketTitle={market.title}
                />

                <PricePoints 
                  pricePoints={pricePoints}
                  onSelect={setSelectedPrice}
                  selectedPrice={selectedPrice}
                />
              </>
            )}
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