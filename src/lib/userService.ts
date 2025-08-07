import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any = null;

if (supabaseUrl && supabaseKey && !supabaseUrl.includes('your_supabase')) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export interface UserProfile {
  id: string;
  wallet_address: string;
  username: string;
  email?: string;
  full_name?: string;
  bio?: string;
  location?: string;
  avatar_url?: string;
  trading_level: string;
  total_trades: number;
  win_rate: number;
  total_profit: number;
  join_date: string;
  created_at: string;
  updated_at: string;
}

export interface UserSettings {
  id: string;
  user_id: string;
  theme: 'dark' | 'light' | 'auto';
  language: string;
  timezone: string;
  currency: string;
  default_trade_amount: number;
  auto_confirm_trades: boolean;
  show_advanced_charts: boolean;
  risk_level: 'low' | 'medium' | 'high';
  email_notifications: boolean;
  push_notifications: boolean;
  trade_alerts: boolean;
  market_updates: boolean;
  price_alerts: boolean;
  two_factor_auth: boolean;
  session_timeout: number;
  login_notifications: boolean;
  profile_visibility: 'public' | 'private' | 'friends';
  show_trading_history: boolean;
  allow_data_analytics: boolean;
  created_at: string;
  updated_at: string;
}

export class UserService {
  // Get user profile by wallet address
  static async getUserProfile(walletAddress: string): Promise<UserProfile | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUserProfile(walletAddress);
    }

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('wallet_address', walletAddress)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return this.getMockUserProfile(walletAddress);
    }
  }

  // Create or update user profile
  static async upsertUserProfile(profile: Partial<UserProfile>): Promise<UserProfile | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUserProfile(profile.wallet_address || '');
    }

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .upsert(profile, { onConflict: 'wallet_address' })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error upserting user profile:', error);
      return null;
    }
  }

  // Get user settings
  static async getUserSettings(userId: string): Promise<UserSettings | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUserSettings(userId);
    }

    try {
      const { data, error } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching user settings:', error);
      return this.getMockUserSettings(userId);
    }
  }

  // Update user settings
  static async updateUserSettings(settings: Partial<UserSettings>): Promise<UserSettings | null> {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return this.getMockUserSettings(settings.user_id || '');
    }

    try {
      const { data, error } = await supabase
        .from('user_settings')
        .upsert(settings, { onConflict: 'user_id' })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating user settings:', error);
      return null;
    }
  }

  // Get user trading statistics
  static async getUserTradingStats(walletAddress: string) {
    if (!supabase) {
      console.warn('Supabase not configured. Using mock data.');
      return {
        totalTrades: 156,
        winRate: 68.5,
        totalProfit: 2347.50,
        activePositions: 8,
        completedTrades: 24
      };
    }

    try {
      // This would query actual trading data from the database
      const { data, error } = await supabase
        .from('user_trades')
        .select('*')
        .eq('wallet_address', walletAddress);

      if (error) throw error;

      // Calculate statistics from trade data
      const totalTrades = data?.length || 0;
      const winningTrades = data?.filter((trade: any) => trade.outcome === 'win').length || 0;
      const winRate = totalTrades > 0 ? (winningTrades / totalTrades) * 100 : 0;
      const totalProfit = data?.reduce((sum: number, trade: any) => sum + (trade.profit || 0), 0) || 0;

      return {
        totalTrades,
        winRate,
        totalProfit,
        activePositions: data?.filter((trade: any) => trade.status === 'active').length || 0,
        completedTrades: data?.filter((trade: any) => trade.status === 'completed').length || 0
      };
    } catch (error) {
      console.error('Error fetching trading stats:', error);
      return {
        totalTrades: 0,
        winRate: 0,
        totalProfit: 0,
        activePositions: 0,
        completedTrades: 0
      };
    }
  }

  // Mock data for development
  private static getMockUserProfile(walletAddress: string): UserProfile {
    return {
      id: '1',
      wallet_address: walletAddress,
      username: 'climate_trader',
      email: 'alex.johnson@example.com',
      full_name: 'Alex Johnson',
      bio: 'Passionate about climate prediction markets and sustainable investing. Trading since 2023.',
      location: 'San Francisco, CA',
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      trading_level: 'Advanced',
      total_trades: 156,
      win_rate: 68.5,
      total_profit: 2347.50,
      join_date: '2023-03-15',
      created_at: '2023-03-15T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    };
  }

  private static getMockUserSettings(userId: string): UserSettings {
    return {
      id: '1',
      user_id: userId,
      theme: 'dark',
      language: 'en',
      timezone: 'UTC',
      currency: 'USD',
      default_trade_amount: 50,
      auto_confirm_trades: false,
      show_advanced_charts: true,
      risk_level: 'medium',
      email_notifications: true,
      push_notifications: true,
      trade_alerts: true,
      market_updates: false,
      price_alerts: true,
      two_factor_auth: true,
      session_timeout: 30,
      login_notifications: true,
      profile_visibility: 'public',
      show_trading_history: true,
      allow_data_analytics: true,
      created_at: '2023-03-15T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    };
  }
}
