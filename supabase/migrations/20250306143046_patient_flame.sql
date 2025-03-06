/*
  # Create market predictions table with price points

  1. New Tables
    - `market_price_points`
      - `id` (uuid, primary key)
      - `market_id` (uuid, references prediction_markets)
      - `price_point` (numeric)
      - `probability` (numeric)
      - `volume` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `market_price_points` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS market_price_points (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  market_id uuid REFERENCES prediction_markets(id) ON DELETE CASCADE,
  price_point numeric NOT NULL,
  probability numeric NOT NULL DEFAULT 0,
  volume numeric NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE market_price_points ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view market price points"
  ON market_price_points
  FOR SELECT
  TO public
  USING (true);

-- Add sample price points for existing markets
INSERT INTO market_price_points (market_id, price_point, probability, volume)
SELECT 
  m.id,
  price_point,
  probability,
  volume
FROM prediction_markets m
CROSS JOIN (
  VALUES
    (200000, 0.01, 250000),
    (150000, 0.02, 300000),
    (130000, 0.04, 400000),
    (120000, 0.06, 500000),
    (110000, 0.16, 750000),
    (105000, 0.27, 1000000),
    (100000, 0.46, 1500000),
    (95000, 0.69, 2000000),
    (80000, 0.45, 1800000),
    (75000, 0.27, 1200000),
    (70000, 0.18, 900000),
    (60000, 0.06, 400000),
    (50000, 0.03, 200000),
    (40000, 0.01, 100000)
) as points(price_point, probability, volume)
WHERE m.title LIKE '%Bitcoin%';