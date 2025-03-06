/*
  # Add Climate Records Markets

  1. New Markets
    Adds prediction markets for climate records including:
    - Temperature records
    - Precipitation records
    - Drought records
    - Storm records
    - Ocean temperature records

  2. Categories
    - Updates existing categories with records focus
    - Adds specific record-breaking event markets
*/

-- Insert new prediction markets for climate records
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
  -- Temperature Records
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Temperature'),
    'Record Global Temperature 2024',
    'Will 2024 set a new record for global average temperature?',
    '2024-12-31',
    0.75,
    920000,
    'Global',
    '[{"name": "NASA GISS", "url": "https://data.giss.nasa.gov/gistemp"}, {"name": "NOAA Global Temperature", "url": "https://www.ncdc.noaa.gov/monitoring-references/faq/temperature-monitoring.php"}]',
    'Market resolves YES if 2024 global average temperature exceeds the previous record of 14.96°C (58.93°F) set in 2023.',
    0.01
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Temperature'),
    'Europe Heat Record 2024',
    'Will any European country break its all-time high temperature record in 2024?',
    '2024-12-31',
    0.60,
    780000,
    'Europe',
    '[{"name": "European Climate Assessment & Dataset", "url": "https://www.ecad.eu"}]',
    'Market resolves YES if any European country officially reports a new all-time high temperature record during 2024.',
    0.01
  ),
  -- Precipitation Records
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Precipitation'),
    'Record Daily Rainfall 2024',
    'Will a new world record for 24-hour rainfall be set in 2024?',
    '2024-12-31',
    0.35,
    650000,
    'Global',
    '[{"name": "WMO Weather Records", "url": "https://wmo.int/weather-records"}]',
    'Market resolves YES if the current world record of 1.825 meters in 24 hours is exceeded and verified by WMO.',
    0.01
  ),
  -- Drought Records
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Precipitation'),
    'Mediterranean Drought Record 2024',
    'Will the Mediterranean region experience its longest recorded drought in 2024?',
    '2024-12-31',
    0.55,
    720000,
    'Mediterranean',
    '[{"name": "European Drought Observatory", "url": "https://edo.jrc.ec.europa.eu"}]',
    'Market resolves YES if the Mediterranean region records its longest continuous drought period since records began.',
    0.01
  ),
  -- Storm Records
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Extreme Weather'),
    'Atlantic Hurricane Wind Speed Record 2024',
    'Will an Atlantic hurricane break the wind speed record in 2024?',
    '2024-12-31',
    0.30,
    850000,
    'Atlantic Ocean',
    '[{"name": "NOAA Hurricane Center", "url": "https://www.nhc.noaa.gov"}]',
    'Market resolves YES if any Atlantic hurricane exceeds the current record sustained wind speed of 185 mph.',
    0.01
  ),
  -- Ocean Temperature Records
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Ocean Changes'),
    'Ocean Heat Content Record 2024',
    'Will global ocean heat content set a new record in 2024?',
    '2024-12-31',
    0.80,
    890000,
    'Global',
    '[{"name": "NOAA Ocean Heat Content", "url": "https://www.ncei.noaa.gov/access/global-ocean-heat-content"}]',
    'Market resolves YES if the global ocean heat content exceeds the previous record set in 2023.',
    0.01
  ),
  -- Arctic Records
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Temperature'),
    'Arctic Temperature Record 2024',
    'Will the Arctic Circle record its highest temperature in 2024?',
    '2024-12-31',
    0.45,
    680000,
    'Arctic',
    '[{"name": "Arctic Weather Records", "url": "https://arctic.noaa.gov/Report-Card/Report-Card-2023/ArtMID/8054/ArticleID/985/Surface-Air-Temperature"}]',
    'Market resolves YES if a new verified temperature record above 38°C (100.4°F) is set within the Arctic Circle.',
    0.01
  ),
  -- Glacier Records
  (
    gen_random_uuid(),
    (SELECT id FROM market_categories WHERE name = 'Ice & Snow'),
    'Glacier Melt Rate Record 2024',
    'Will Alpine glaciers experience record melt rates in 2024?',
    '2024-12-31',
    0.70,
    750000,
    'Alps',
    '[{"name": "World Glacier Monitoring Service", "url": "https://wgms.ch"}]',
    'Market resolves YES if the average melt rate of monitored Alpine glaciers exceeds the previous record set in 2023.',
    0.01
  );

-- Add price points for new markets
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
FROM prediction_markets
WHERE created_at > NOW() - INTERVAL '1 minute';