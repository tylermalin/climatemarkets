import { createUser, getUserByWallet, createSession, validateSession, deleteSession } from './database';

export interface AuthUser {
  id: string;
  wallet_address: string;
  email?: string;
  username?: string;
  full_name?: string;
  trading_level: string;
  total_trades: number;
  win_rate: number;
  total_profit: number;
}

export interface AuthSession {
  id: string;
  user_id: string;
  session_token: string;
  wallet_address: string;
  expires_at: string;
}

class AuthService {
  private currentUser: AuthUser | null = null;
  private currentSession: AuthSession | null = null;

  // Initialize auth from localStorage
  async initialize() {
    const sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken) {
      const session = await validateSession(sessionToken);
      if (session) {
        this.currentSession = session;
        const user = await getUserByWallet(session.wallet_address);
        if (user) {
          this.currentUser = user;
          return true;
        }
      }
      // Invalid session, clear it
      localStorage.removeItem('sessionToken');
    }
    return false;
  }

  // Connect wallet and create user session
  async connectWallet(walletAddress: string, email?: string, username?: string): Promise<boolean> {
    try {
      // Check if user exists
      let user = await getUserByWallet(walletAddress);
      
      // Create user if doesn't exist
      if (!user) {
        user = await createUser(walletAddress, email, username);
        if (!user) {
          throw new Error('Failed to create user');
        }
      }

      // Create session
      const session = await createSession(user.id, walletAddress);
      if (!session) {
        throw new Error('Failed to create session');
      }

      // Store session token
      localStorage.setItem('sessionToken', session.session_token);
      
      // Update current state
      this.currentUser = user;
      this.currentSession = session;
      
      return true;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return false;
    }
  }

  // Disconnect wallet
  async disconnectWallet(): Promise<boolean> {
    try {
      if (this.currentSession) {
        await deleteSession(this.currentSession.session_token);
      }
      
      // Clear state
      this.currentUser = null;
      this.currentSession = null;
      localStorage.removeItem('sessionToken');
      
      return true;
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
      return false;
    }
  }

  // Get current user
  getCurrentUser(): AuthUser | null {
    return this.currentUser;
  }

  // Get current session
  getCurrentSession(): AuthSession | null {
    return this.currentSession;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.currentUser !== null && this.currentSession !== null;
  }

  // Get wallet address
  getWalletAddress(): string | null {
    return this.currentUser?.wallet_address || null;
  }

  // Update user profile
  async updateProfile(updates: Partial<AuthUser>): Promise<boolean> {
    try {
      if (!this.currentUser) {
        throw new Error('No user logged in');
      }

      // Update user in database
      // This would require adding an updateUser function to database.ts
      // For now, just update local state
      this.currentUser = { ...this.currentUser, ...updates };
      
      return true;
    } catch (error) {
      console.error('Error updating profile:', error);
      return false;
    }
  }

  // Validate session on app start
  async validateSession(): Promise<boolean> {
    const sessionToken = localStorage.getItem('sessionToken');
    if (!sessionToken) {
      return false;
    }

    const session = await validateSession(sessionToken);
    if (!session) {
      localStorage.removeItem('sessionToken');
      return false;
    }

    const user = await getUserByWallet(session.wallet_address);
    if (!user) {
      localStorage.removeItem('sessionToken');
      return false;
    }

    this.currentUser = user;
    this.currentSession = session;
    return true;
  }
}

// Create singleton instance
const authService = new AuthService();
export default authService;
