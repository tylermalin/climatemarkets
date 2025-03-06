/*
  # Seed Climate Market Data

  1. Initial Data
    - Sample prediction markets across different categories
    - Bot trading activity
    - Initial sustainability projects
    - Impact metrics for projects

  2. Data Structure
    - Markets with realistic climate predictions
    - Trading history with bot activities
    - Sustainability projects with funding progress
*/

-- Insert prediction markets
INSERT INTO prediction_markets (
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
SELECT
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
FROM (
  SELECT
    (SELECT id FROM market_categories WHERE name = 'Weather Events') as category_id,
    'European Heat Wave 2025' as title,
    'Will Europe experience a heat wave with temperatures exceeding 40°C for 5+ consecutive days between June-August 2025?' as description,
    '2025-08-31'::timestamptz as target_date,
    0.65 as current_price,
    125000 as volume,
    'European Union' as country,
    '[{"name": "European Climate Assessment & Dataset", "url": "https://www.ecad.eu/"}, {"name": "Copernicus Climate Change Service", "url": "https://climate.copernicus.eu/"}]'::jsonb as verification_sources,
    'Temperature data from official weather stations in major European cities must show 5+ consecutive days above 40°C' as resolution_criteria,
    0.01 as sustainability_fee_percentage
  UNION ALL
  SELECT
    (SELECT id FROM market_categories WHERE name = 'Climate Metrics'),
    'Global Temperature Rise 2025' as title,
    'Will the global average temperature increase exceed 1.5°C above pre-industrial levels in 2025?' as description,
    '2025-12-31'::timestamptz,
    0.72,
    250000,
    'Global',
    '[{"name": "NASA GISS Surface Temperature Analysis", "url": "https://data.giss.nasa.gov/gistemp/"}, {"name": "NOAA Global Temperature Analysis", "url": "https://www.ncdc.noaa.gov/monitoring-references/faq/temperature-monitoring.php"}]'::jsonb,
    'Based on NASA GISTEMP and NOAA global temperature analysis reports for 2025',
    0.01
  UNION ALL
  SELECT
    (SELECT id FROM market_categories WHERE name = 'Carbon Emissions'),
    'China Carbon Peak 2025' as title,
    'Will China''s carbon emissions peak before the end of 2025?' as description,
    '2025-12-31'::timestamptz,
    0.45,
    180000,
    'China',
    '[{"name": "Carbon Monitor", "url": "https://carbonmonitor.org/"}, {"name": "Global Carbon Project", "url": "https://www.globalcarbonproject.org/"}]'::jsonb,
    'Verified emissions data showing a clear peak and subsequent decline for at least 3 consecutive months',
    0.01
) as markets;

-- Insert sustainability projects
INSERT INTO sustainability_projects (
  title,
  description,
  target_funding,
  current_funding,
  status,
  verification_documents
) VALUES
(
  'Mangrove Restoration Project',
  'Large-scale mangrove restoration in Southeast Asia to enhance carbon sequestration and protect coastal communities',
  500000,
  125000,
  'active',
  '[{"title": "Project Plan", "url": "https://example.com/mangrove-plan"}, {"title": "Impact Assessment", "url": "https://example.com/mangrove-impact"}]'
),
(
  'Urban Solar Initiative',
  'Installing solar panels on public buildings across major cities to reduce urban carbon footprint',
  750000,
  300000,
  'active',
  '[{"title": "Technical Specifications", "url": "https://example.com/solar-specs"}, {"title": "Energy Savings Report", "url": "https://example.com/solar-savings"}]'
),
(
  'Regenerative Agriculture Program',
  'Supporting farmers in transitioning to regenerative agriculture practices',
  400000,
  150000,
  'active',
  '[{"title": "Methodology", "url": "https://example.com/regen-ag-method"}, {"title": "Farmer Network", "url": "https://example.com/farmer-network"}]'
);

-- Insert impact metrics
INSERT INTO impact_metrics (
  project_id,
  metric_name,
  metric_value,
  measurement_date,
  verification_source
)
SELECT
  project_id,
  metric_name,
  metric_value,
  measurement_date,
  verification_source
FROM (
  SELECT
    (SELECT id FROM sustainability_projects WHERE title = 'Mangrove Restoration Project') as project_id,
    'Carbon Sequestered (tons)' as metric_name,
    1250 as metric_value,
    '2025-03-01'::timestamptz as measurement_date,
    'Independent Environmental Audit Report' as verification_source
  UNION ALL
  SELECT
    (SELECT id FROM sustainability_projects WHERE title = 'Urban Solar Initiative'),
    'CO2 Emissions Reduced (tons)',
    2800,
    '2025-03-01'::timestamptz,
    'City Energy Consumption Data'
  UNION ALL
  SELECT
    (SELECT id FROM sustainability_projects WHERE title = 'Regenerative Agriculture Program'),
    'Soil Carbon Increase (%)',
    15,
    '2025-03-01'::timestamptz,
    'Soil Analysis Laboratory Results'
) as metrics;

-- Insert bot trading activity
INSERT INTO market_trades (
  market_id,
  user_id,
  position,
  amount,
  price,
  sustainability_fee
)
SELECT
  m.id as market_id,
  '00000000-0000-0000-0000-000000000000'::uuid as user_id,
  position,
  amount,
  price,
  amount * 0.01 as sustainability_fee
FROM prediction_markets m
CROSS JOIN (
  VALUES
    ('yes', 1000, 0.65),
    ('no', 800, 0.35),
    ('yes', 1200, 0.68),
    ('no', 950, 0.32),
    ('yes', 1500, 0.70)
) as trades(position, amount, price)
WHERE m.title = 'European Heat Wave 2025'
UNION ALL
SELECT
  m.id as market_id,
  '00000000-0000-0000-0000-000000000000'::uuid as user_id,
  position,
  amount,
  price,
  amount * 0.01 as sustainability_fee
FROM prediction_markets m
CROSS JOIN (
  VALUES
    ('yes', 2000, 0.72),
    ('no', 1500, 0.28),
    ('yes', 2500, 0.75),
    ('no', 1800, 0.25),
    ('yes', 3000, 0.78)
) as trades(position, amount, price)
WHERE m.title = 'Global Temperature Rise 2025';