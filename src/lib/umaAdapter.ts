// Remove Supabase import and use mock data
export async function createOptimisticOracle(marketId: string) {
  console.warn('Using mock data for development');
  return { oracleId: Math.random().toString(36).substr(2, 9) };
}

export async function submitDispute(marketId: string, evidence: string) {
  console.warn('Using mock data for development');
  return { disputeId: Math.random().toString(36).substr(2, 9) };
}

export async function resolveDispute(disputeId: string, outcome: string) {
  console.warn('Using mock data for development');
  return { success: true };
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
    // Mock data for development
    return this.getMockUMARequest(marketData);
  }

  // Propose resolution data to UMA oracle
  static async proposeResolution(params: {
    marketId: string;
    resolutionData: string;
    proposerAddress: string;
    confidence: number;
  }): Promise<boolean> {
    // Mock data for development
    return true;
  }

  // Dispute a proposed resolution
  static async disputeResolution(params: {
    marketId: string;
    disputerAddress: string;
    reason: string;
  }): Promise<boolean> {
    // Mock data for development
    return true;
  }

  // Resolve market after liveness period or DVM decision
  static async resolveMarket(params: {
    marketId: string;
    outcome: 'yes' | 'no';
    resolutionData: string;
    finalResolution: boolean;
  }): Promise<boolean> {
    // Mock data for development
    return true;
  }

  // Get UMA request status for a market
  static async getUMARequest(marketId: string): Promise<UMARequest | null> {
    // Mock data for development
    return this.getMockUMARequest({ marketId, ancillaryData: '', rewardToken: '', rewardAmount: 0 });
  }

  // Get CTF condition for a market
  static async getCTFCondition(marketId: string): Promise<CTFCondition | null> {
    // Mock data for development
    return this.getMockCTFCondition(marketId);
  }

  // Get market resolution history
  static async getMarketResolutions(marketId: string): Promise<MarketResolution[]> {
    // Mock data for development
    return this.getMockMarketResolutions(marketId);
  }

  // Check if market can be resolved (liveness period passed)
  static async canResolveMarket(marketId: string): Promise<boolean> {
    // Mock data for development
    return true;
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
