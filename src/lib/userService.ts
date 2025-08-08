// Remove Supabase import and use mock data

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  full_name?: string;
  username?: string;
  avatar: string | null;
  walletAddress?: string;
  location?: string;
  bio?: string;
  total_trades?: number;
  win_rate?: number;
  total_profit?: number;
  trading_level?: string;
  created_at?: Date;
  updated_at?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class UserService {
  constructor() {
    console.warn('Using mock UserService for development');
  }

  async getUserProfile(userId: string): Promise<UserProfile> {
    console.warn('Using mock data for development');
    return {
      id: userId,
      email: 'user@example.com',
      name: 'Test User',
      full_name: 'Test User',
      username: 'testuser',
      avatar: null,
      walletAddress: '0x1234567890123456789012345678901234567890',
      location: 'San Francisco, CA',
      bio: 'Climate trader and sustainability enthusiast',
      total_trades: 25,
      win_rate: 68,
      total_profit: 1250.50,
      trading_level: 'Intermediate',
      created_at: new Date(),
      updated_at: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async updateUserProfile(userId: string, data: Partial<UserProfile>): Promise<{ success: boolean }> {
    console.warn('Using mock data for development');
    return { success: true };
  }

  async upsertUserProfile(data: {
    wallet_address: string;
    full_name?: string;
    email?: string;
    username?: string;
    location?: string;
    bio?: string;
  }): Promise<UserProfile> {
    console.warn('Using mock data for development');
    return {
      id: data.wallet_address,
      email: data.email || 'user@example.com',
      name: data.full_name || 'Test User',
      full_name: data.full_name || 'Test User',
      username: data.username || 'testuser',
      avatar: null,
      walletAddress: data.wallet_address,
      location: data.location || 'San Francisco, CA',
      bio: data.bio || 'Climate trader and sustainability enthusiast',
      total_trades: 25,
      win_rate: 68,
      total_profit: 1250.50,
      trading_level: 'Intermediate',
      created_at: new Date(),
      updated_at: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async getUserSettings(userId: string) {
    console.warn('Using mock data for development');
    return {
      notifications: true,
      theme: 'dark',
      language: 'en'
    };
  }

  async updateUserSettings(userId: string, settings: any) {
    console.warn('Using mock data for development');
    return { success: true };
  }
}

// Legacy function exports for backward compatibility
export async function getUserProfile(userId: string) {
  console.warn('Using mock data for development');
  return {
    id: userId,
    email: 'user@example.com',
    name: 'Test User',
    avatar: null
  };
}

export async function updateUserProfile(userId: string, data: any) {
  console.warn('Using mock data for development');
  return { success: true };
}

export async function getUserSettings(userId: string) {
  console.warn('Using mock data for development');
  return {
    notifications: true,
    theme: 'dark',
    language: 'en'
  };
}

export async function updateUserSettings(userId: string, settings: any) {
  console.warn('Using mock data for development');
  return { success: true };
}
