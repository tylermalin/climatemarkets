/*
  # Add Climate Prediction Markets

  1. New Markets
    Adds prediction markets for:
    - Global temperature scenarios
    - Regional temperature changes
    - Precipitation changes
    - Ice melt predictions
    - Sea level rise
    - Ocean acidification
    - Extreme weather events
    - Ecosystem impacts

  2. Market Categories
    - Temperature
    - Precipitation
    - Ice & Snow
    - Sea Level
    - Ocean Changes
    - Extreme Weather
    - Ecosystems
*/

-- Insert market categories if they don't exist
INSERT INTO market_categories (id, name, description, icon)
VALUES 
  (gen_random_uuid(), 'Temperature', 'Global and regional temperature predictions', 'thermometer'),
  (gen_random_uuid(), 'Precipitation', 'Rainfall and snowfall pattern changes', 'cloud-rain'),
  (gen_random_uuid(), 'Ice & Snow', 'Glacier and ice sheet predictions', 'snowflake'),
  (gen_random_uuid(), 'Sea Level', 'Sea level rise projections', 'wave'),
  (gen_random_uuid(), 'Ocean Changes', 'Ocean acidification and circulation', 'droplet'),
  (gen_random_uuid(), 'Extreme Weather', 'Severe weather event predictions', 'wind'),
  (gen_random_uuid(), 'Ecosystems', 'Impacts on marine and land ecosystems', 'leaf')
ON CONFLICT DO NOTHING;

-- Insert prediction markets
INSERT INTO prediction_markets (
  id, 
  category_id,
  title,
  description,
  target_date,
  current_price,
  volume,
  country,
  verification_sources,
  resolution_criteria,
  sustainability_fee_percentage
)
VALUES
  -- Global Temperature Markets
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Temperature'),
    'Global Temperature Rise 2050: Below 1.5°C Target',
    'Will global average temperature rise remain below 1.5°C above pre-industrial levels by 2050?',
    '2050-12-31',
    0.45,
    980000,
    'Global',
    '[{"name": "IPCC Reports", "url": "https://www.ipcc.ch/reports"}, {"name": "NASA Temperature Data", "url": "https://climate.nasa.gov/vital-signs/global-temperature"}]',
    'Based on official IPCC and NASA global temperature data. Market resolves YES if the 5-year average global temperature in 2050 is less than 1.5°C above pre-industrial levels.',
    0.01
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Temperature'),
    'Arctic Temperature Anomaly 2030',
    'Will Arctic temperature anomaly exceed 4°C above the 1981-2010 average by 2030?',
    '2030-12-31',
    0.65,
    750000,
    'Arctic',
    '[{"name": "NOAA Arctic Report Card", "url": "https://arctic.noaa.gov/Report-Card"}]',
    'Based on NOAA Arctic temperature data. Market resolves YES if annual average temperature anomaly exceeds 4°C.',
    0.01
  ),
  -- Precipitation Markets
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Precipitation'),
    'Mediterranean Region Rainfall Decrease 2040',
    'Will the Mediterranean region experience a 20% decrease in annual rainfall by 2040?',
    '2040-12-31',
    0.55,
    620000,
    'Mediterranean',
    '[{"name": "European Climate Assessment & Dataset", "url": "https://www.ecad.eu"}]',
    'Based on ECA&D precipitation data. Market resolves YES if average annual rainfall decreases by 20% or more compared to 2000-2020 baseline.',
    0.01
  ),
  -- Ice Melt Markets
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Ice & Snow'),
    'Arctic Sea Ice-Free Summer Before 2050',
    'Will the Arctic Ocean experience its first ice-free summer before 2050?',
    '2050-09-30',
    0.70,
    890000,
    'Arctic',
    '[{"name": "National Snow and Ice Data Center", "url": "https://nsidc.org"}]',
    'Market resolves YES if Arctic sea ice extent falls below 1 million square kilometers during any September before 2050.',
    0.01
  ),
  -- Sea Level Markets
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Sea Level'),
    'Global Sea Level Rise 2100: Exceeding 1 Meter',
    'Will global mean sea level rise exceed 1 meter above 2000 levels by 2100?',
    '2100-12-31',
    0.60,
    950000,
    'Global',
    '[{"name": "NASA Sea Level Change Portal", "url": "https://sealevel.nasa.gov"}]',
    'Based on satellite altimetry data. Market resolves YES if global mean sea level exceeds 1 meter above year 2000 baseline.',
    0.01
  ),
  -- Ocean Acidification Markets
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Ocean Changes'),
    'Ocean pH Decrease 2040',
    'Will average ocean surface pH decrease by more than 0.2 units from 2020 levels by 2040?',
    '2040-12-31',
    0.45,
    680000,
    'Global',
    '[{"name": "Global Ocean Acidification Observing Network", "url": "https://www.goa-on.org"}]',
    'Based on GOA-ON pH measurements. Market resolves YES if average surface ocean pH decreases by more than 0.2 units.',
    0.01
  ),
  -- Extreme Weather Markets
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Extreme Weather'),
    'Category 5 Hurricane Frequency 2030-2040',
    'Will the frequency of Category 5 hurricanes double in 2030-2040 compared to 2010-2020?',
    '2040-12-31',
    0.40,
    720000,
    'Global',
    '[{"name": "NOAA Hurricane Database", "url": "https://www.nhc.noaa.gov"}]',
    'Based on NOAA hurricane classification data. Market resolves YES if the number of Category 5 hurricanes in 2030-2040 is at least double the 2010-2020 count.',
    0.01
  ),
  -- Ecosystem Impact Markets
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Ecosystems'),
    'Coral Reef Decline 2035',
    'Will more than 50% of remaining coral reefs experience severe bleaching by 2035?',
    '2035-12-31',
    0.65,
    850000,
    'Global',
    '[{"name": "Global Coral Reef Monitoring Network", "url": "https://gcrmn.net"}]',
    'Based on GCRMN coral reef monitoring data. Market resolves YES if over 50% of monitored reefs show severe bleaching.',
    0.01
  );

-- Add price points for each market
INSERT INTO market_price_points (
  market_id,
  price_point,
  probability,
  volume
)
SELECT 
  id as market_id,
  unnest(ARRAY[0.2, 0.4, 0.6, 0.8]) as price_point,
  random() as probability,
  floor(random() * 100000) as volume
FROM prediction_markets;