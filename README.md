# Climate Prediction Markets

A decentralized platform for trading climate prediction markets, built with React, Supabase, and Web3 technologies.

![Climate Markets Preview](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200)

## Features

- **Real-time Market Trading**: Trade climate predictions with real-time order book and price updates
- **Multiple Market Categories**:
  - Temperature Predictions
  - Precipitation Markets
  - Carbon Emissions
  - Natural Disasters
  - Climate Records
- **Web3 Integration**: Connect your wallet and trade using cryptocurrency
- **Advanced Market Data**: View detailed market statistics, price history, and trading volume
- **Sustainability Impact**: Track the impact of market fees on climate projects

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Database**: Supabase
- **Web3**: WalletConnect, wagmi
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Supabase account
- Web3 wallet (MetaMask recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/climate-prediction-markets.git
cd climate-prediction-markets
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── types/            # TypeScript type definitions
├── lib/              # Utility functions and helpers
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

### Key Components

- `MarketCard`: Displays individual market information
- `OrderBook`: Shows current buy and sell orders
- `TradePanel`: Interface for placing trades
- `PricePoints`: Displays key price levels
- `SustainabilityMetrics`: Shows impact of trading fees

## Database Schema

The project uses Supabase with the following main tables:

- `prediction_markets`: Market information and metadata
- `market_trades`: Record of all trades
- `market_orders`: Open and historical orders
- `user_wallets`: Connected wallet information
- `sustainability_projects`: Projects funded by trading fees

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## Deployment

The project is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables in Netlify dashboard
4. Deploy!

## License

MIT License - see LICENSE file for details

## Acknowledgments

- [Supabase](https://supabase.com/) for the backend infrastructure
- [WalletConnect](https://walletconnect.com/) for Web3 integration
- [Unsplash](https://unsplash.com/) for images
- [Lucide](https://lucide.dev/) for icons
