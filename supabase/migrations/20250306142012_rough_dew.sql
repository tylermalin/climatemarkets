/*
  # Add market predictions table and sample data

  1. New Tables
    - `market_predictions`
      - `id` (uuid, primary key)
      - `market_id` (uuid, foreign key to prediction_markets)
      - `title` (text)
      - `description` (text)
      - `current_price` (numeric)
      - `volume` (numeric)
      - `end_date` (timestamptz)
      - `resolution_details` (text)
      - `yes_description` (text)
      - `no_description` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS
    - Add policy for public read access
*/

-- Create market predictions table
CREATE TABLE IF NOT EXISTS market_predictions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  market_id uuid REFERENCES prediction_markets(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  current_price numeric NOT NULL DEFAULT 0.5,
  volume numeric NOT NULL DEFAULT 0,
  end_date timestamptz NOT NULL,
  resolution_details text NOT NULL,
  yes_description text NOT NULL,
  no_description text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE market_predictions ENABLE ROW LEVEL SECURITY;

-- Add RLS policies
CREATE POLICY "Anyone can view market predictions"
  ON market_predictions
  FOR SELECT
  TO public
  USING (true);

-- Insert sample predictions for European Heat Wave market
INSERT INTO market_predictions (
  market_id,
  title,
  description,
  current_price,
  volume,
  end_date,
  resolution_details,
  yes_description,
  no_description
)
SELECT
  m.id,
  p.title,
  p.description,
  p.current_price,
  p.volume,
  p.end_date,
  p.resolution_details,
  p.yes_description,
  p.no_description
FROM prediction_markets m
CROSS JOIN (
  VALUES
    (
      'Paris Heat Wave June 2025',
      'Will Paris experience temperatures above 40°C for 3+ consecutive days in June 2025?',
      0.65,
      25000,
      '2025-06-30'::timestamptz,
      'Based on official Météo-France temperature readings from Paris-Montsouris station',
      'Temperature records from Paris-Montsouris station show 3 or more consecutive days above 40°C in June 2025',
      'Temperature records do not show 3 or more consecutive days above 40°C in June 2025'
    ),
    (
      'Berlin Heat Wave July 2025',
      'Will Berlin record its highest-ever temperature in July 2025?',
      0.45,
      18000,
      '2025-07-31'::timestamptz,
      'Based on official DWD (German Weather Service) temperature readings',
      'A new all-time high temperature record is set in Berlin during July 2025',
      'No new temperature record is set in Berlin during July 2025'
    ),
    (
      'Mediterranean Drought Impact',
      'Will water restrictions affect over 50% of Mediterranean coastal cities?',
      0.72,
      35000,
      '2025-08-15'::timestamptz,
      'Based on official government declarations and water authority reports',
      'More than 50% of cities with population >100,000 along Mediterranean coast implement water restrictions',
      'Less than 50% of cities implement water restrictions'
    ),
    (
      'Agricultural Impact',
      'Will European wheat production drop by >25% due to heat?',
      0.58,
      42000,
      '2025-08-31'::timestamptz,
      'Based on EU agricultural ministry reports and Eurostat data',
      'Official reports show wheat production decrease exceeds 25% compared to 5-year average',
      'Wheat production decrease is less than 25% compared to 5-year average'
    ),
    (
      'Infrastructure Stress',
      'Will heat cause major rail disruptions in 3+ EU countries?',
      0.62,
      28000,
      '2025-08-31'::timestamptz,
      'Based on official railway operator reports and service disruption data',
      'Three or more EU countries report major rail service disruptions due to heat damage',
      'Fewer than three EU countries report major heat-related rail disruptions'
    )
) as p(
  title,
  description,
  current_price,
  volume,
  end_date,
  resolution_details,
  yes_description,
  no_description
)
WHERE m.title = 'European Heat Wave 2025';

-- Insert predictions for Global Temperature Rise market
INSERT INTO market_predictions (
  market_id,
  title,
  description,
  current_price,
  volume,
  end_date,
  resolution_details,
  yes_description,
  no_description
)
SELECT
  m.id,
  p.title,
  p.description,
  p.current_price,
  p.volume,
  p.end_date,
  p.resolution_details,
  p.yes_description,
  p.no_description
FROM prediction_markets m
CROSS JOIN (
  VALUES
    (
      'Q1 2025 Temperature Anomaly',
      'Will Q1 2025 global temperature anomaly exceed +1.5°C?',
      0.68,
      45000,
      '2025-03-31'::timestamptz,
      'Based on NASA GISTEMP and NOAA global temperature analysis',
      'Q1 2025 temperature anomaly exceeds +1.5°C above pre-industrial baseline',
      'Q1 2025 temperature anomaly remains below +1.5°C'
    ),
    (
      'Arctic Sea Ice Minimum',
      'Will Arctic sea ice extent hit a new record low in 2025?',
      0.75,
      52000,
      '2025-09-30'::timestamptz,
      'Based on NSIDC (National Snow and Ice Data Center) satellite data',
      'Arctic sea ice minimum extent in 2025 sets a new record low',
      'Arctic sea ice minimum extent does not set a new record'
    ),
    (
      'Ocean Heat Content',
      'Will ocean heat content increase >10% above 2024 levels?',
      0.64,
      38000,
      '2025-12-31'::timestamptz,
      'Based on NOAA Ocean Heat Content data',
      'Ocean heat content shows >10% increase compared to 2024 average',
      'Ocean heat content increase is ≤10% compared to 2024'
    ),
    (
      'Extreme Weather Events',
      'Will 2025 set a record for billion-dollar weather disasters?',
      0.71,
      48000,
      '2025-12-31'::timestamptz,
      'Based on NOAA National Centers for Environmental Information data',
      '2025 sets new record for number of billion-dollar weather/climate disasters',
      '2025 does not set new record for billion-dollar disasters'
    ),
    (
      'Global Precipitation Pattern',
      'Will 25+ countries declare drought emergencies in 2025?',
      0.59,
      32000,
      '2025-12-31'::timestamptz,
      'Based on official government declarations and UN disaster reports',
      '25 or more countries officially declare drought emergencies',
      'Fewer than 25 countries declare drought emergencies'
    )
) as p(
  title,
  description,
  current_price,
  volume,
  end_date,
  resolution_details,
  yes_description,
  no_description
)
WHERE m.title = 'Global Temperature Rise 2025';