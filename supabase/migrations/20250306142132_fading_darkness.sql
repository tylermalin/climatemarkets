/*
  # Create initial climate prediction markets

  1. New Markets
    - Global Temperature Rise 2025
    - European Heat Wave 2025
    - North Atlantic Hurricane Season 2025
    - US Carbon Emissions 2025
    - Renewable Energy Adoption 2025

  2. Market Details
    - Each market includes:
      - Title
      - Description
      - Target date
      - Current price
      - Volume
      - Resolution criteria
      - Verification sources
*/

-- Insert initial climate prediction markets
INSERT INTO prediction_markets (
  title,
  description,
  target_date,
  current_price,
  volume,
  country,
  verification_sources,
  resolution_criteria,
  sustainability_fee_percentage
) VALUES
(
  'Global Temperature Rise 2025',
  'Will global average temperature exceed 1.5°C above pre-industrial levels in 2025?',
  '2025-12-31',
  0.72,
  1250000,
  'Global',
  '[{"name": "NASA GISS Surface Temperature Analysis", "url": "https://data.giss.nasa.gov/gistemp/"}, {"name": "NOAA Global Temperature Analysis", "url": "https://www.ncdc.noaa.gov/monitoring-references/faq/"}]',
  'Market resolves to YES if NASA GISS or NOAA analysis shows global mean temperature exceeded 1.5°C above pre-industrial baseline (1850-1900) for 2025 annual average.',
  0.01
),
(
  'European Heat Wave 2025',
  'Will three or more European capital cities experience record-breaking temperatures in Summer 2025?',
  '2025-09-30',
  0.65,
  850000,
  'Europe',
  '[{"name": "European Climate Assessment & Dataset", "url": "https://www.ecad.eu/"}, {"name": "Copernicus Climate Change Service", "url": "https://climate.copernicus.eu/"}]',
  'Market resolves to YES if official meteorological agencies confirm new all-time high temperature records in 3+ EU capital cities between June 1 and August 31, 2025.',
  0.01
),
(
  'North Atlantic Hurricane Season 2025',
  'Will the 2025 North Atlantic hurricane season exceed 25 named storms?',
  '2025-11-30',
  0.58,
  920000,
  'North Atlantic',
  '[{"name": "NOAA National Hurricane Center", "url": "https://www.nhc.noaa.gov/"}, {"name": "Colorado State University Tropical Meteorology Project", "url": "https://tropical.colostate.edu/"}]',
  'Market resolves to YES if NOAA National Hurricane Center officially names more than 25 tropical storms/hurricanes during the 2025 Atlantic hurricane season.',
  0.01
),
(
  'US Carbon Emissions 2025',
  'Will US carbon emissions decrease by at least 5% in 2025 compared to 2024?',
  '2026-03-15',
  0.45,
  1100000,
  'United States',
  '[{"name": "EPA Greenhouse Gas Inventory", "url": "https://www.epa.gov/ghgemissions"}, {"name": "Energy Information Administration", "url": "https://www.eia.gov/"}]',
  'Market resolves to YES if EPA official reporting shows US carbon emissions in 2025 were at least 5% lower than 2024 levels.',
  0.01
),
(
  'Renewable Energy Adoption 2025',
  'Will renewable energy sources provide over 30% of global electricity generation in 2025?',
  '2026-02-28',
  0.68,
  980000,
  'Global',
  '[{"name": "International Energy Agency", "url": "https://www.iea.org/"}, {"name": "International Renewable Energy Agency", "url": "https://www.irena.org/"}]',
  'Market resolves to YES if IEA or IRENA data confirms renewable energy sources (solar, wind, hydro, etc.) contributed more than 30% to global electricity generation in 2025.',
  0.01
);