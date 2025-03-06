/*
  # Add Satellite Data Products

  1. New Data
    - Satellite data products and specifications
    - Product categories (Radar, Microwave Sounders)
    - Detailed technical descriptions
    - Sample visualization references

  2. Changes
    - Insert new premium datasets for satellite data products
    - Each product includes technical specifications and documentation links
*/

-- Insert satellite data products
INSERT INTO premium_datasets (
  title,
  description,
  price,
  data_url
) VALUES
(
  'GeoProfile Level 1C',
  'Calibrated radar reflectivity profiles providing unmatched detail into precipitation systems. Derived from fundamental reflectivity measurements as a function of radar range that capture backscatter from precipitation. Post-processing generates geolocated and calibrated data products optimized for advanced atmospheric analysis.',
  5000,
  'https://api.climate-market.example/datasets/geoprofile-l1c'
),
(
  'Precipitation Level 2A',
  'Comprehensive dataset providing estimates of hydrometeor water content, size, phase, and surface precipitation rate at native sensor resolution. Includes probabilistic classifications for surface precipitation, frozen precipitation, convective precipitation, and hail.',
  6000,
  'https://api.climate-market.example/datasets/precipitation-l2a'
),
(
  'Brightness Temperature Level 1B',
  'Geolocated antenna and brightness temperature measurements from Tomorrow.io Microwave Sounder (TMS). Collected across 12 microwave spectral channels, offering critical insights into surface temperature, clouds, precipitation, water vapor, and atmospheric conditions.',
  7500,
  'https://api.climate-market.example/datasets/brightness-temp-l1b'
),
(
  'Regridded Brightness Temperature Level 1C-TCR',
  'Regridded Level 1C data optimized for imagery and applications requiring uniformly spaced grid. Enhanced visualization capabilities and standardized data format.',
  4500,
  'https://api.climate-market.example/datasets/brightness-temp-l1c-tcr'
),
(
  'Intercalibrated Brightness Temperature Level 1C-TC',
  'Converted brightness temperatures from each TMS instrument to reference TMS instrument (Tomorrow-S1). Ideal for applications requiring homogeneous data records from multiple satellites.',
  5500,
  'https://api.climate-market.example/datasets/brightness-temp-l1c-tc'
),
(
  'Resampled Brightness Temperature Level 1B-TBR',
  'Lightweight alternative to L1B-TB with brightness temperatures resampled to channel 11 geolocation. Optimized file size approximately 20% of corresponding L1B-TB file.',
  4000,
  'https://api.climate-market.example/datasets/brightness-temp-l1b-tbr'
),
(
  'Atmospheric Thermodynamic Vertical Profile Level 2A-ATVP',
  'Advanced atmospheric temperature and humidity profiles derived from Level 1C data. Includes uncertainty estimates based on scene complexity and precipitation-related quantities.',
  8000,
  'https://api.climate-market.example/datasets/atvp-l2a'
);