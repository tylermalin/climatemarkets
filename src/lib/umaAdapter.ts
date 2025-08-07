import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any = null;

if (supabaseUrl && supabaseKey && !supabaseUrl.includes('your_supabase')) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export interface UMARequest {
  id: string;
  market_id: string;
  ancillary_data: string;
  request_timestamp: string;
  reward_token: string;
  reward_amount: number;
  proposer: string;
  dispute_timestamp?: string;
  dispute_count: number;
  status: 'pending' | 'proposed' | 'disputed' | 'resolved';
  resolution_data?: string;
  resolution_timestamp?: string;
  created_at: string;
  updated_at: string;
}

export interface CTFCondition {
  id: string;
  question_id: string;
  oracle: string;
  outcome_slots: number;
  parent_collection_id: string;
  condition_id: string;
  resolved: boolean;
  payout_numerator: number[];
  payout_denominator: number;
  resolution_timestamp?: string;
  created_at: string;
}

export interface MarketResolution {
  id: string;
  market_id: string;
  outcome: 'yes' | 'no';
  resolution_data: string;
  resolution_source: string;
  confidence: number;
  proposer_address: string;
  dispute_count: number;
  final_resolution: boolean;
  created_at: string;
}

export class UMAAdapter {
  // Initialize a new market with UMA oracle request
  static async initializeMarket(marketData: {
    marketId: string;
    ancillaryData: string;
    rewardToken: string;
    rewardAmount: number;
  }): Promise<UMARequest | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUMARequest(marketData);
    }

    try {
      // Create UMA request
      const { data: umaRequest, error: umaError } = await supabase
        .from('uma_requests')
        .insert({
          market_id: marketData.marketId,
          ancillary_data: marketData.ancillaryData,
          request_timestamp: new Date().toISOString(),
          reward_token: marketData.rewardToken,
          reward_amount: marketData.rewardAmount,
          proposer: '',
          dispute_count: 0,
          status: 'pending'
        })
        .select()
        .single();

      if (umaError) throw umaError;

      // Create CTF condition
      const { error: ctfError } = await supabase
        .from('ctf_conditions')
        .insert({
          question_id: marketData.marketId,
          oracle: 'uma_optimistic_oracle',
          outcome_slots: 2, // Yes/No outcomes
          parent_collection_id: 'climate_markets',
          condition_id: `condition_${marketData.marketId}`,
          resolved: false,
          payout_numerator: [0, 0],
          payout_denominator: 1
        });

      if (ctfError) throw ctfError;

      return umaRequest;
    } catch (error) {
      console.error('Error initializing market:', error);
      return null;
    }
  }

  // Propose resolution data to UMA oracle
  static async proposeResolution(params: {
    marketId: string;
    resolutionData: string;
    proposerAddress: string;
    confidence: number;
  }): Promise<boolean> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return true;
    }

    try {
      const { error } = await supabase
        .from('uma_requests')
        .update({
          proposer: params.proposerAddress,
          resolution_data: params.resolutionData,
          status: 'proposed',
          updated_at: new Date().toISOString()
        })
        .eq('market_id', params.marketId);

      if (error) throw error;

      // Create market resolution record
      const { error: resolutionError } = await supabase
        .from('market_resolutions')
        .insert({
          market_id: params.marketId,
          resolution_data: params.resolutionData,
          confidence: params.confidence,
          proposer_address: params.proposerAddress,
          dispute_count: 0,
          final_resolution: false
        });

      if (resolutionError) throw resolutionError;

      return true;
    } catch (error) {
      console.error('Error proposing resolution:', error);
      return false;
    }
  }

  // Dispute a proposed resolution
  static async disputeResolution(params: {
    marketId: string;
    disputerAddress: string;
    reason: string;
  }): Promise<boolean> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return true;
    }

    try {
      // Update UMA request with dispute
      const { error: umaError } = await supabase
        .from('uma_requests')
        .update({
          dispute_timestamp: new Date().toISOString(),
          dispute_count: supabase.raw('dispute_count + 1'),
          status: 'disputed',
          updated_at: new Date().toISOString()
        })
        .eq('market_id', params.marketId);

      if (umaError) throw umaError;

      // Update market resolution
      const { error: resolutionError } = await supabase
        .from('market_resolutions')
        .update({
          dispute_count: supabase.raw('dispute_count + 1'),
          updated_at: new Date().toISOString()
        })
        .eq('market_id', params.marketId);

      if (resolutionError) throw resolutionError;

      return true;
    } catch (error) {
      console.error('Error disputing resolution:', error);
      return false;
    }
  }

  // Resolve market after liveness period or DVM decision
  static async resolveMarket(params: {
    marketId: string;
    outcome: 'yes' | 'no';
    resolutionData: string;
    finalResolution: boolean;
  }): Promise<boolean> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return true;
    }

    try {
      // Update UMA request
      const { error: umaError } = await supabase
        .from('uma_requests')
        .update({
          status: 'resolved',
          resolution_data: params.resolutionData,
          resolution_timestamp: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('market_id', params.marketId);

      if (umaError) throw umaError;

      // Update CTF condition
      const { error: ctfError } = await supabase
        .from('ctf_conditions')
        .update({
          resolved: true,
          payout_numerator: params.outcome === 'yes' ? [1, 0] : [0, 1],
          payout_denominator: 1,
          resolution_timestamp: new Date().toISOString()
        })
        .eq('question_id', params.marketId);

      if (ctfError) throw ctfError;

      // Update market resolution
      const { error: resolutionError } = await supabase
        .from('market_resolutions')
        .update({
          outcome: params.outcome,
          resolution_data: params.resolutionData,
          final_resolution: params.finalResolution,
          updated_at: new Date().toISOString()
        })
        .eq('market_id', params.marketId);

      if (resolutionError) throw resolutionError;

      // Update prediction market
      const { error: marketError } = await supabase
        .from('prediction_markets')
        .update({
          resolved: true,
          outcome: params.outcome,
          resolved_at: new Date().toISOString()
        })
        .eq('id', params.marketId);

      if (marketError) throw marketError;

      return true;
    } catch (error) {
      console.error('Error resolving market:', error);
      return false;
    }
  }

  // Get UMA request status for a market
  static async getUMARequest(marketId: string): Promise<UMARequest | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUMARequest({ marketId, ancillaryData: '', rewardToken: '', rewardAmount: 0 });
    }

    try {
      const { data, error } = await supabase
        .from('uma_requests')
        .select('*')
        .eq('market_id', marketId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching UMA request:', error);
      return null;
    }
  }

  // Get CTF condition for a market
  static async getCTFCondition(marketId: string): Promise<CTFCondition | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockCTFCondition(marketId);
    }

    try {
      const { data, error } = await supabase
        .from('ctf_conditions')
        .select('*')
        .eq('question_id', marketId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching CTF condition:', error);
      return null;
    }
  }

  // Get market resolution history
  static async getMarketResolutions(marketId: string): Promise<MarketResolution[]> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockMarketResolutions(marketId);
    }

    try {
      const { data, error } = await supabase
        .from('market_resolutions')
        .select('*')
        .eq('market_id', marketId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching market resolutions:', error);
      return [];
    }
  }

  // Check if market can be resolved (liveness period passed)
  static async canResolveMarket(marketId: string): Promise<boolean> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return true;
    }

    try {
      const umaRequest = await this.getUMARequest(marketId);
      if (!umaRequest) return false;

      // Check if liveness period has passed (2 hours for first dispute, 48-72 hours for second)
      const now = new Date();
      const requestTime = new Date(umaRequest.request_timestamp);
      const hoursSinceRequest = (now.getTime() - requestTime.getTime()) / (1000 * 60 * 60);

      if (umaRequest.dispute_count === 0) {
        // First resolution attempt - 2 hour liveness
        return hoursSinceRequest >= 2;
      } else if (umaRequest.dispute_count === 1) {
        // After first dispute - 48 hour liveness
        return hoursSinceRequest >= 48;
      } else {
        // After second dispute - DVM resolution (72 hours)
        return hoursSinceRequest >= 72;
      }
    } catch (error) {
      console.error('Error checking market resolution eligibility:', error);
      return false;
    }
  }

  // Mock data for development
  private static getMockUMARequest(marketData: any): UMARequest {
    return {
      id: `uma_${Date.now()}`,
      market_id: marketData.marketId,
      ancillary_data: marketData.ancillaryData || 'Will the global average temperature exceed 1.5°C in 2024?',
      request_timestamp: new Date().toISOString(),
      reward_token: marketData.rewardToken || 'USDC',
      reward_amount: marketData.rewardAmount || 100,
      proposer: '',
      dispute_count: 0,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  private static getMockCTFCondition(marketId: string): CTFCondition {
    return {
      id: `ctf_${marketId}`,
      question_id: marketId,
      oracle: 'uma_optimistic_oracle',
      outcome_slots: 2,
      parent_collection_id: 'climate_markets',
      condition_id: `condition_${marketId}`,
      resolved: false,
      payout_numerator: [0, 0],
      payout_denominator: 1,
      created_at: new Date().toISOString()
    };
  }

  private static getMockMarketResolutions(marketId: string): MarketResolution[] {
    return [
      {
        id: `resolution_${Date.now()}`,
        market_id: marketId,
        outcome: 'yes',
        resolution_data: 'NOAA data shows global temperature exceeded 1.5°C threshold',
        resolution_source: 'NOAA Climate Data',
        confidence: 0.95,
        proposer_address: '0x1234567890123456789012345678901234567890',
        dispute_count: 0,
        final_resolution: true,
        created_at: new Date().toISOString()
      }
    ];
  }
}
