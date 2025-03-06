/*
  # Create Climate Prediction Markets Schema

  1. New Tables
    - `market_categories`: Categories for different types of climate markets
    - `prediction_markets`: Enhanced with category, verification sources, and impact metrics
    - `market_trades`: Trading positions with sustainability fee tracking
    - `sustainability_projects`: Track funded environmental initiatives
    - `impact_metrics`: Measure environmental impact of market activities

  2. Security
    - Enable RLS on all tables
    - Add policies for market viewing and trading
*/

-- Drop existing tables if they exist to ensure clean migration
DROP TABLE IF EXISTS impact_metrics CASCADE;
DROP TABLE IF EXISTS sustainability_projects CASCADE;
DROP TABLE IF EXISTS market_trades CASCADE;
DROP TABLE IF EXISTS prediction_markets CASCADE;
DROP TABLE IF EXISTS market_categories CASCADE;

-- Create market categories
CREATE TABLE market_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create prediction markets table with enhanced fields
CREATE TABLE prediction_markets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES market_categories(id),
  title text NOT NULL,
  description text NOT NULL,
  target_date timestamptz NOT NULL,
  current_price numeric NOT NULL DEFAULT 0.5,
  volume numeric NOT NULL DEFAULT 0,
  country text NOT NULL,
  verification_sources jsonb NOT NULL DEFAULT '[]',
  resolution_criteria text NOT NULL,
  sustainability_fee_percentage numeric NOT NULL DEFAULT 0.01,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create market trades table with fee tracking
CREATE TABLE market_trades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  market_id uuid REFERENCES prediction_markets(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  position text NOT NULL CHECK (position IN ('yes', 'no')),
  amount numeric NOT NULL,
  price numeric NOT NULL,
  sustainability_fee numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create sustainability projects table
CREATE TABLE sustainability_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  target_funding numeric NOT NULL,
  current_funding numeric NOT NULL DEFAULT 0,
  status text NOT NULL CHECK (status IN ('active', 'completed', 'pending')),
  verification_documents jsonb NOT NULL DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create impact metrics table
CREATE TABLE impact_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES sustainability_projects(id) ON DELETE CASCADE,
  metric_name text NOT NULL,
  metric_value numeric NOT NULL,
  measurement_date timestamptz NOT NULL,
  verification_source text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE market_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE prediction_markets ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_trades ENABLE ROW LEVEL SECURITY;
ALTER TABLE sustainability_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_metrics ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view market categories" ON market_categories;
DROP POLICY IF EXISTS "Anyone can view prediction markets" ON prediction_markets;
DROP POLICY IF EXISTS "Anyone can view sustainability projects" ON sustainability_projects;
DROP POLICY IF EXISTS "Anyone can view impact metrics" ON impact_metrics;
DROP POLICY IF EXISTS "Users can view their own trades" ON market_trades;
DROP POLICY IF EXISTS "Users can create trades" ON market_trades;

-- Create policies
CREATE POLICY "Anyone can view market categories"
  ON market_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view prediction markets"
  ON prediction_markets
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view sustainability projects"
  ON sustainability_projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view impact metrics"
  ON impact_metrics
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can view their own trades"
  ON market_trades
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create trades"
  ON market_trades
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Insert initial market categories
INSERT INTO market_categories (name, description, icon) VALUES
  ('Weather Events', 'Predictions for precipitation, temperature extremes, and other weather phenomena', 'cloud'),
  ('Climate Metrics', 'Markets for global temperature averages and sea levels', 'thermometer'),
  ('Carbon Emissions', 'Predictions for carbon emissions by country and sector', 'factory'),
  ('Sustainability Goals', 'Markets for renewable adoption and policy implementation', 'leaf'),
  ('Natural Phenomena', 'Predictions for storm frequency and drought conditions', 'wind');