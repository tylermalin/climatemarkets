/*
  # Add Premium Weather Datasets

  1. New Data
    - Premium weather and climate datasets
    - Detailed pricing and descriptions
    - API documentation links

  2. Changes
    - Insert new premium datasets into premium_datasets table
    - Each dataset includes title, description, price, and data access URL
*/

-- Insert premium weather datasets
INSERT INTO premium_datasets (
  title,
  description,
  price,
  data_url
) VALUES
(
  'EURO1k - European Weather Model',
  'Get the most accurate forecasts for Europe with high-resolution modeling and detailed atmospheric data. Includes temperature, precipitation, wind, and pressure forecasts at 1km resolution.',
  1000,
  'https://api.climate-market.example/datasets/euro1k'
),
(
  'US1k - American Weather Model',
  'Comprehensive weather forecasting for the United States with 1km resolution. Features detailed regional modeling, severe weather predictions, and historical data analysis.',
  1000,
  'https://api.climate-market.example/datasets/us1k'
),
(
  'MetX - Web-based Weather Maps',
  'Interactive, high-resolution weather visualization platform with global coverage. Real-time updates, customizable layers, and export capabilities for professional use.',
  750,
  'https://api.climate-market.example/datasets/metx'
),
(
  'Energy Forecasts Premium',
  'Specialized forecasting for renewable energy production. Includes wind power potential, solar irradiance, and hydropower conditions with 48-hour advance predictions.',
  1500,
  'https://api.climate-market.example/datasets/energy'
),
(
  'Meteodrones Data Access',
  'Access to unique atmospheric data collected by our network of meteorological drones. Includes vertical profiles, boundary layer measurements, and custom deployment options.',
  2000,
  'https://api.climate-market.example/datasets/meteodrones'
),
(
  'Meteobase Enterprise',
  'Complete platform for remote drone operations and data collection. Includes flight planning, real-time monitoring, and data analysis tools.',
  2500,
  'https://api.climate-market.example/datasets/meteobase'
),
(
  'Meteoglider Analytics',
  'Advanced radiosonde recovery and analysis system. Features trajectory prediction, automated recovery guidance, and data reprocessing capabilities.',
  1800,
  'https://api.climate-market.example/datasets/meteoglider'
),
(
  'Weather Alerts Pro',
  'Professional weather warning system with email and SMS integration. Customizable alert thresholds, priority notifications, and detailed event analysis.',
  500,
  'https://api.climate-market.example/datasets/alerts'
);