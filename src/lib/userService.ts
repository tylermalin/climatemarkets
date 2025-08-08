// Remove Supabase import and use mock data

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar: string | null;
  walletAddress?: string;
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
      avatar: null,
      walletAddress: '0x1234567890123456789012345678901234567890',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async updateUserProfile(userId: string, data: Partial<UserProfile>): Promise<{ success: boolean }> {
    console.warn('Using mock data for development');
    return { success: true };
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
