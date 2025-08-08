import { Pool } from 'pg';

// Database configuration
const pool = new Pool({
  host: 'ep-shy-dawn-aeu8n13m-pooler.c-2.us-east-2.aws.neon.tech',
  user: 'neondb_owner',
  password: 'npg_pyiFk29acQhP',
  database: 'neondb',
  ssl: {
    rejectUnauthorized: false
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test database connection
export async function testConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    console.log('Database connected successfully:', result.rows[0]);
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

// User authentication functions
export async function createUser(walletAddress: string, email?: string, username?: string) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO users (wallet_address, email, username) VALUES ($1, $2, $3) RETURNING *',
      [walletAddress, email, username]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}

export async function getUserByWallet(walletAddress: string) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM users WHERE wallet_address = $1',
      [walletAddress]
    );
    client.release();
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
}

export async function createSession(userId: string, walletAddress: string) {
  try {
    const client = await pool.connect();
    const sessionToken = Math.random().toString(36).substr(2, 15);
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    
    const result = await client.query(
      'INSERT INTO user_sessions (user_id, session_token, wallet_address, expires_at) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, sessionToken, walletAddress, expiresAt]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Error creating session:', error);
    return null;
  }
}

export async function validateSession(sessionToken: string) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM user_sessions WHERE session_token = $1 AND expires_at > NOW()',
      [sessionToken]
    );
    client.release();
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error validating session:', error);
    return null;
  }
}

export async function deleteSession(sessionToken: string) {
  try {
    const client = await pool.connect();
    await client.query('DELETE FROM user_sessions WHERE session_token = $1', [sessionToken]);
    client.release();
    return true;
  } catch (error) {
    console.error('Error deleting session:', error);
    return false;
  }
}

// Market functions
export async function getMarkets() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM prediction_markets ORDER BY created_at DESC');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Error getting markets:', error);
    return [];
  }
}

export async function getMarketById(id: string) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM prediction_markets WHERE id = $1', [id]);
    client.release();
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error getting market:', error);
    return null;
  }
}

export async function createMarket(marketData: any) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `INSERT INTO prediction_markets (
        category_id, title, description, target_date, current_price, 
        volume, country, region, verification_sources, resolution_criteria
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        marketData.category_id,
        marketData.title,
        marketData.description,
        marketData.target_date,
        marketData.current_price,
        marketData.volume || 0,
        marketData.country,
        marketData.region,
        JSON.stringify(marketData.verification_sources),
        marketData.resolution_criteria
      ]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Error creating market:', error);
    return null;
  }
}

// Order functions
export async function createOrder(orderData: any) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `INSERT INTO orders (
        market_id, user_address, side, order_type, amount, price
      ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        orderData.market_id,
        orderData.user_address,
        orderData.side,
        orderData.order_type,
        orderData.amount,
        orderData.price
      ]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Error creating order:', error);
    return null;
  }
}

export async function getOrderBook(marketId: string) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM orders WHERE market_id = $1 AND status = $2 ORDER BY price DESC',
      [marketId, 'open']
    );
    client.release();
    
    const orders = result.rows;
    const bids = orders.filter((order: any) => order.side === 'buy');
    const asks = orders.filter((order: any) => order.side === 'sell');
    
    return { bids, asks };
  } catch (error) {
    console.error('Error getting order book:', error);
    return { bids: [], asks: [] };
  }
}

// User settings functions
export async function getUserSettings(userId: string) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM user_settings WHERE user_id = $1', [userId]);
    client.release();
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error getting user settings:', error);
    return null;
  }
}

export async function updateUserSettings(userId: string, settings: any) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `INSERT INTO user_settings (user_id, theme, language, timezone, currency, default_trade_amount, 
        auto_confirm_trades, show_advanced_charts, risk_level, email_notifications, push_notifications, 
        trade_alerts, market_updates, price_alerts, two_factor_auth, session_timeout, login_notifications, 
        profile_visibility, show_trading_history, allow_data_analytics)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
       ON CONFLICT (user_id) DO UPDATE SET
         theme = EXCLUDED.theme,
         language = EXCLUDED.language,
         timezone = EXCLUDED.timezone,
         currency = EXCLUDED.currency,
         default_trade_amount = EXCLUDED.default_trade_amount,
         auto_confirm_trades = EXCLUDED.auto_confirm_trades,
         show_advanced_charts = EXCLUDED.show_advanced_charts,
         risk_level = EXCLUDED.risk_level,
         email_notifications = EXCLUDED.email_notifications,
         push_notifications = EXCLUDED.push_notifications,
         trade_alerts = EXCLUDED.trade_alerts,
         market_updates = EXCLUDED.market_updates,
         price_alerts = EXCLUDED.price_alerts,
         two_factor_auth = EXCLUDED.two_factor_auth,
         session_timeout = EXCLUDED.session_timeout,
         login_notifications = EXCLUDED.login_notifications,
         profile_visibility = EXCLUDED.profile_visibility,
         show_trading_history = EXCLUDED.show_trading_history,
         allow_data_analytics = EXCLUDED.allow_data_analytics,
         updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [
        userId,
        settings.theme || 'dark',
        settings.language || 'en',
        settings.timezone || 'UTC',
        settings.currency || 'USD',
        settings.default_trade_amount || 50,
        settings.auto_confirm_trades || false,
        settings.show_advanced_charts || true,
        settings.risk_level || 'medium',
        settings.email_notifications || true,
        settings.push_notifications || true,
        settings.trade_alerts || true,
        settings.market_updates || false,
        settings.price_alerts || true,
        settings.two_factor_auth || false,
        settings.session_timeout || 30,
        settings.login_notifications || true,
        settings.profile_visibility || 'public',
        settings.show_trading_history || true,
        settings.allow_data_analytics || true
      ]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Error updating user settings:', error);
    return null;
  }
}

export default pool;
