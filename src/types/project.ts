import { User } from '@supabase/supabase-js';

export interface ProjectDeveloper {
  id: string;
  user_id: string;
  organization_name: string;
  organization_type: 'company' | 'ngo' | 'government' | 'individual' | 'research';
  verification_status: 'pending' | 'verified' | 'rejected';
  contact_email: string;
  website?: string;
  description?: string;
  credentials: Array<{
    type: string;
    issuer: string;
    issued_date: string;
    expiry_date?: string;
    document_url: string;
  }>;
  created_at: string;
  updated_at: string;
}

export interface ClimateProject {
  id: string;
  developer_id: string;
  title: string;
  description: string;
  category: string;
  location: {
    country: string;
    region: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  target_funding: number;
  current_funding: number;
  start_date?: string;
  end_date?: string;
  status: 'draft' | 'active' | 'funded' | 'in_progress' | 'completed' | 'cancelled';
  verification_status: 'pending' | 'in_review' | 'verified' | 'rejected';
  impact_metrics: {
    [key: string]: {
      target: number;
      current: number;
      unit: string;
    };
  };
  documentation_urls: Array<{
    title: string;
    url: string;
    type: string;
  }>;
  created_at: string;
  updated_at: string;
}

export interface ProjectMilestone {
  id: string;
  project_id: string;
  title: string;
  description: string;
  target_date: string;
  completion_date?: string;
  funding_allocation: number;
  status: 'pending' | 'in_progress' | 'completed' | 'delayed' | 'cancelled';
  verification_required: boolean;
  verification_status: 'pending' | 'verified' | 'rejected';
  evidence_urls: Array<{
    title: string;
    url: string;
    type: string;
  }>;
  created_at: string;
  updated_at: string;
}

export interface ProjectVerification {
  id: string;
  project_id: string;
  verifier_id: string;
  verification_type: 'initial' | 'milestone' | 'impact' | 'completion';
  status: 'pending' | 'in_progress' | 'verified' | 'rejected';
  findings: {
    summary: string;
    details: Array<{
      category: string;
      status: string;
      comments: string;
    }>;
    recommendations?: string[];
  };
  certificate_url?: string;
  valid_until?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectFinancial {
  id: string;
  project_id: string;
  transaction_type: 'market_fee' | 'direct_investment' | 'milestone_payment';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  source_type: 'market' | 'investor' | 'grant';
  source_id: string;
  milestone_id?: string;
  created_at: string;
}

export interface ProjectImpactMetric {
  id: string;
  project_id: string;
  metric_name: string;
  metric_value: number;
  unit: string;
  measurement_date: string;
  verification_status: 'pending' | 'verified' | 'rejected';
  verification_id?: string;
  created_at: string;
}