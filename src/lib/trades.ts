export interface Trade {
  id: string;
  marketId: string;
  marketTitle: string;
  type: 'buy' | 'sell';
  amount: number;
  shares: number;
  price: number;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
  profit?: number;
  outcome?: 'win' | 'loss' | 'pending';
}

export interface Position {
  id: string;
  marketId: string;
  marketTitle: string;
  side: 'yes' | 'no';
  amount: number;
  shares: number;
  entryPrice: number;
  currentPrice: number;
  currentValue: number;
  profit: number;
  profitPercentage: number;
  endDate: string;
  status: 'active' | 'resolved';
}

export class TradesService {
  private static instance: TradesService;
  private trades: Trade[] = [];
  private positions: Position[] = [];

  static getInstance(): TradesService {
    if (!TradesService.instance) {
      TradesService.instance = new TradesService();
    }
    return TradesService.instance;
  }

  // Load trades from localStorage
  loadTrades(userAddress: string): Trade[] {
    const stored = localStorage.getItem(`trades_${userAddress}`);
    if (stored) {
      this.trades = JSON.parse(stored);
    }
    return this.trades;
  }

  // Load positions from localStorage
  loadPositions(userAddress: string): Position[] {
    const stored = localStorage.getItem(`positions_${userAddress}`);
    if (stored) {
      this.positions = JSON.parse(stored);
    }
    return this.positions;
  }

  // Save trades to localStorage
  private saveTrades(userAddress: string): void {
    localStorage.setItem(`trades_${userAddress}`, JSON.stringify(this.trades));
  }

  // Save positions to localStorage
  private savePositions(userAddress: string): void {
    localStorage.setItem(`positions_${userAddress}`, JSON.stringify(this.positions));
  }

  // Execute a trade
  executeTrade(
    userAddress: string,
    marketId: string,
    marketTitle: string,
    type: 'buy' | 'sell',
    amount: number,
    price: number
  ): Trade {
    const shares = amount / price;
    const trade: Trade = {
      id: `trade_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      marketId,
      marketTitle,
      type,
      amount,
      shares,
      price,
      timestamp: new Date().toISOString(),
      status: 'completed',
      outcome: 'pending'
    };

    this.trades.push(trade);
    this.saveTrades(userAddress);

    // Update or create position
    this.updatePosition(userAddress, marketId, marketTitle, type === 'buy' ? 'yes' : 'no', amount, price, shares);

    return trade;
  }

  // Update position after trade
  private updatePosition(
    userAddress: string,
    marketId: string,
    marketTitle: string,
    side: 'yes' | 'no',
    amount: number,
    price: number,
    shares: number
  ): void {
    const existingPosition = this.positions.find(
      p => p.marketId === marketId && p.side === side
    );

    if (existingPosition) {
      // Update existing position
      const totalShares = existingPosition.shares + shares;
      const totalValue = existingPosition.amount + amount;
      existingPosition.amount = totalValue;
      existingPosition.shares = totalShares;
      existingPosition.entryPrice = totalValue / totalShares;
      existingPosition.currentPrice = price;
      existingPosition.currentValue = totalShares * price;
      existingPosition.profit = existingPosition.currentValue - totalValue;
      existingPosition.profitPercentage = (existingPosition.profit / totalValue) * 100;
    } else {
      // Create new position
      const position: Position = {
        id: `position_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        marketId,
        marketTitle,
        side,
        amount,
        shares,
        entryPrice: price,
        currentPrice: price,
        currentValue: shares * price,
        profit: 0,
        profitPercentage: 0,
        endDate: '2025-12-31', // Mock end date
        status: 'active'
      };
      this.positions.push(position);
    }

    this.savePositions(userAddress);
  }

  // Get user statistics
  getUserStats(userAddress: string): {
    totalTrades: number;
    totalValue: number;
    totalProfit: number;
    activePositions: number;
    winRate: number;
  } {
    const trades = this.loadTrades(userAddress);
    const positions = this.loadPositions(userAddress);

    const totalTrades = trades.length;
    const totalValue = trades.reduce((sum, trade) => sum + trade.amount, 0);
    const totalProfit = positions.reduce((sum, pos) => sum + pos.profit, 0);
    const activePositions = positions.filter(p => p.status === 'active').length;
    
    const completedTrades = trades.filter(t => t.outcome !== 'pending');
    const wins = completedTrades.filter(t => t.outcome === 'win').length;
    const winRate = completedTrades.length > 0 ? (wins / completedTrades.length) * 100 : 0;

    return {
      totalTrades,
      totalValue,
      totalProfit,
      activePositions,
      winRate
    };
  }

  // Get recent trades
  getRecentTrades(userAddress: string, limit: number = 10): Trade[] {
    const trades = this.loadTrades(userAddress);
    return trades
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }

  // Get active positions
  getActivePositions(userAddress: string): Position[] {
    const positions = this.loadPositions(userAddress);
    return positions.filter(p => p.status === 'active');
  }

  // Mock some initial data for testing
  seedMockData(userAddress: string): void {
    const mockTrades: Trade[] = [
      {
        id: 'trade_1',
        marketId: '1',
        marketTitle: 'Global Temperature 2025',
        type: 'buy',
        amount: 50.00,
        shares: 66.67,
        price: 0.75,
        timestamp: '2024-01-15T10:30:00Z',
        status: 'completed',
        outcome: 'win',
        profit: 12.50
      },
      {
        id: 'trade_2',
        marketId: '2',
        marketTitle: 'Carbon Emissions Target 2025',
        type: 'sell',
        amount: 75.00,
        shares: 166.67,
        price: 0.45,
        timestamp: '2024-01-14T14:20:00Z',
        status: 'completed',
        outcome: 'loss',
        profit: -8.25
      },
      {
        id: 'trade_3',
        marketId: '3',
        marketTitle: '🌪️ Florida — Category 3+ Hurricane Landfall Before Nov 2025',
        type: 'buy',
        amount: 30.00,
        shares: 107.14,
        price: 0.28,
        timestamp: '2024-01-13T09:15:00Z',
        status: 'completed',
        outcome: 'win',
        profit: 15.75
      }
    ];

    const mockPositions: Position[] = [
      {
        id: 'position_1',
        marketId: '3',
        marketTitle: '🌪️ Florida — Category 3+ Hurricane Landfall Before Nov 2025',
        side: 'yes',
        amount: 100.00,
        shares: 357.14,
        entryPrice: 0.28,
        currentPrice: 0.32,
        currentValue: 114.29,
        profit: 14.29,
        profitPercentage: 14.29,
        endDate: '2025-10-31',
        status: 'active'
      },
      {
        id: 'position_2',
        marketId: '4',
        marketTitle: '🔥 California — Wildfire > 10,000 acres by September',
        side: 'no',
        amount: 75.00,
        shares: 138.89,
        entryPrice: 0.54,
        currentPrice: 0.48,
        currentValue: 66.67,
        profit: -8.33,
        profitPercentage: -11.11,
        endDate: '2024-09-01',
        status: 'active'
      }
    ];

    this.trades = mockTrades;
    this.positions = mockPositions;
    this.saveTrades(userAddress);
    this.savePositions(userAddress);
  }
}
