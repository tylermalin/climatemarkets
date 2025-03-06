/*
  # Climate Project Developer Marketplace Schema

  1. New Tables
    - `project_developers` - Stores developer/organization profiles
    - `climate_projects` - Stores project details and status
    - `project_milestones` - Tracks project progress and achievements
    - `project_verifications` - Stores verification and certification data
    - `project_financials` - Tracks financial transactions and allocations
    - `project_impact_metrics` - Records standardized impact measurements

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for project developers

  3. Changes
    - Add foreign key relationships between tables
    - Add verification status tracking
    - Add financial allocation system
*/

-- Project Developers Table
CREATE TABLE IF NOT EXISTS project_developers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  organization_name text NOT NULL,
  organization_type text NOT NULL,
  verification_status text NOT NULL DEFAULT 'pending',
  contact_email text NOT NULL,
  website text,
  description text,
  credentials jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_organization_type CHECK (organization_type = ANY(ARRAY['company', 'ngo', 'government', 'individual', 'research']))
);

ALTER TABLE project_developers ENABLE ROW LEVEL SECURITY;

-- Climate Projects Table
CREATE TABLE IF NOT EXISTS climate_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  developer_id uuid REFERENCES project_developers(id),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location jsonb NOT NULL,
  target_funding numeric NOT NULL,
  current_funding numeric DEFAULT 0,
  start_date timestamptz,
  end_date timestamptz,
  status text DEFAULT 'draft',
  verification_status text DEFAULT 'pending',
  impact_metrics jsonb DEFAULT '{}',
  documentation_urls jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_project_status CHECK (status = ANY(ARRAY['draft', 'active', 'funded', 'in_progress', 'completed', 'cancelled'])),
  CONSTRAINT valid_verification_status CHECK (verification_status = ANY(ARRAY['pending', 'in_review', 'verified', 'rejected']))
);

ALTER TABLE climate_projects ENABLE ROW LEVEL SECURITY;

-- Project Milestones Table
CREATE TABLE IF NOT EXISTS project_milestones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES climate_projects(id),
  title text NOT NULL,
  description text NOT NULL,
  target_date timestamptz NOT NULL,
  completion_date timestamptz,
  funding_allocation numeric NOT NULL,
  status text DEFAULT 'pending',
  verification_required boolean DEFAULT false,
  verification_status text DEFAULT 'pending',
  evidence_urls jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_milestone_status CHECK (status = ANY(ARRAY['pending', 'in_progress', 'completed', 'delayed', 'cancelled']))
);

ALTER TABLE project_milestones ENABLE ROW LEVEL SECURITY;

-- Project Verifications Table
CREATE TABLE IF NOT EXISTS project_verifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES climate_projects(id),
  verifier_id uuid REFERENCES auth.users(id),
  verification_type text NOT NULL,
  status text DEFAULT 'pending',
  findings jsonb DEFAULT '{}',
  certificate_url text,
  valid_until timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_verification_type CHECK (verification_type = ANY(ARRAY['initial', 'milestone', 'impact', 'completion']))
);

ALTER TABLE project_verifications ENABLE ROW LEVEL SECURITY;

-- Project Financials Table
CREATE TABLE IF NOT EXISTS project_financials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES climate_projects(id),
  transaction_type text NOT NULL,
  amount numeric NOT NULL,
  status text DEFAULT 'pending',
  source_type text NOT NULL,
  source_id uuid NOT NULL,
  milestone_id uuid REFERENCES project_milestones(id),
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_transaction_type CHECK (transaction_type = ANY(ARRAY['market_fee', 'direct_investment', 'milestone_payment'])),
  CONSTRAINT valid_source_type CHECK (source_type = ANY(ARRAY['market', 'investor', 'grant']))
);

ALTER TABLE project_financials ENABLE ROW LEVEL SECURITY;

-- Project Impact Metrics Table
CREATE TABLE IF NOT EXISTS project_impact_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES climate_projects(id),
  metric_name text NOT NULL,
  metric_value numeric NOT NULL,
  unit text NOT NULL,
  measurement_date timestamptz NOT NULL,
  verification_status text DEFAULT 'pending',
  verification_id uuid REFERENCES project_verifications(id),
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_verification_status CHECK (verification_status = ANY(ARRAY['pending', 'verified', 'rejected']))
);

ALTER TABLE project_impact_metrics ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Project Developers Policies
CREATE POLICY "Users can view all verified project developers"
  ON project_developers
  FOR SELECT
  TO authenticated
  USING (verification_status = 'verified');

CREATE POLICY "Developers can manage their own profile"
  ON project_developers
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Climate Projects Policies
CREATE POLICY "Anyone can view active projects"
  ON climate_projects
  FOR SELECT
  TO authenticated
  USING (status = 'active' OR status = 'funded' OR status = 'in_progress' OR status = 'completed');

CREATE POLICY "Developers can manage their own projects"
  ON climate_projects
  FOR ALL
  TO authenticated
  USING (developer_id IN (
    SELECT id FROM project_developers WHERE user_id = auth.uid()
  ))
  WITH CHECK (developer_id IN (
    SELECT id FROM project_developers WHERE user_id = auth.uid()
  ));

-- Project Milestones Policies
CREATE POLICY "Anyone can view project milestones"
  ON project_milestones
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Developers can manage their project milestones"
  ON project_milestones
  FOR ALL
  TO authenticated
  USING (project_id IN (
    SELECT id FROM climate_projects WHERE developer_id IN (
      SELECT id FROM project_developers WHERE user_id = auth.uid()
    )
  ))
  WITH CHECK (project_id IN (
    SELECT id FROM climate_projects WHERE developer_id IN (
      SELECT id FROM project_developers WHERE user_id = auth.uid()
    )
  ));

-- Project Verifications Policies
CREATE POLICY "Anyone can view project verifications"
  ON project_verifications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Verifiers can manage verifications"
  ON project_verifications
  FOR ALL
  TO authenticated
  USING (verifier_id = auth.uid())
  WITH CHECK (verifier_id = auth.uid());

-- Project Financials Policies
CREATE POLICY "Project developers can view their project financials"
  ON project_financials
  FOR SELECT
  TO authenticated
  USING (project_id IN (
    SELECT id FROM climate_projects WHERE developer_id IN (
      SELECT id FROM project_developers WHERE user_id = auth.uid()
    )
  ));

-- Project Impact Metrics Policies
CREATE POLICY "Anyone can view verified impact metrics"
  ON project_impact_metrics
  FOR SELECT
  TO authenticated
  USING (verification_status = 'verified');

CREATE POLICY "Developers can manage their project metrics"
  ON project_impact_metrics
  FOR ALL
  TO authenticated
  USING (project_id IN (
    SELECT id FROM climate_projects WHERE developer_id IN (
      SELECT id FROM project_developers WHERE user_id = auth.uid()
    )
  ))
  WITH CHECK (project_id IN (
    SELECT id FROM climate_projects WHERE developer_id IN (
      SELECT id FROM project_developers WHERE user_id = auth.uid()
    )
  ));