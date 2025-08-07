import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  HelpCircle, 
  CheckCircle, 
  CloudRain,
  Wind,
  Thermometer,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold">❓ Frequently Asked Questions (FAQ)</h1>
          </div>
          
          <p className="text-xl text-gray-300">
            Find answers to common questions about climate prediction markets and how to get started.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">What is a prediction market?</h3>
            <p className="text-gray-300">
              A prediction market lets people bet on future outcomes. The price of a share represents the collective belief in the likelihood of that event occurring.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Is this legal?</h3>
            <p className="text-gray-300">
              climate.markets is a decentralized platform operating in accordance with applicable law. Users in restricted jurisdictions (e.g. U.S., U.K.) may only access non-trading features like climate data and forecasts. Always consult local laws.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">How do I fund my account?</h3>
            <p className="text-gray-300">
              You can connect a crypto wallet (e.g. MetaMask) and fund your account using USDC or another supported stablecoin. In some jurisdictions, fiat on-ramps via card or bank transfer may be supported.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">How are outcomes verified?</h3>
            <p className="text-gray-300 mb-4">
              Markets resolve using publicly available, verifiable data from trusted sources like:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>NOAA (National Oceanic and Atmospheric Administration)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>ECMWF (European Centre for Medium-Range Weather Forecasts)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>IPFS-stored climate oracles (e.g. UMA's Optimistic Oracle)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Can I sell my shares before the event resolves?</h3>
            <p className="text-gray-300">
              Yes. You can sell YES/NO shares any time before the market closes. This allows you to take profits or cut losses early.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">What happens if there's a dispute?</h3>
            <p className="text-gray-300">
              Markets include a dispute window. Challenges can be raised based on incorrect data or unclear criteria, and resolved via governance or oracle escalation. Final outcomes are transparently recorded on-chain.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Are there trading limits or fees?</h3>
            <p className="text-gray-300">
              There are no trading limits. Fees are minimal and used to support oracle resolution and platform upkeep. All fees are disclosed before you place a trade.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">What kind of climate data can I trade on?</h3>
            <p className="text-gray-300 mb-4">
              Currently supported categories include:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <CloudRain className="w-4 h-4 text-blue-400" />
                <span>Rainfall, snowfall, and drought</span>
              </li>
              <li className="flex items-center space-x-2">
                <Wind className="w-4 h-4 text-red-400" />
                <span>Natural disasters (hurricanes, wildfires, earthquakes)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Thermometer className="w-4 h-4 text-orange-400" />
                <span>Climate records (temperature highs, rainfall records, wind speeds)</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              More data types (e.g. soil moisture, El Niño cycles, coral bleaching) will be added over time.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Can I create my own market?</h3>
            <p className="text-gray-300">
              Yes — advanced users can propose and fund new markets with custom parameters. We offer tooling for community-created forecasts with staked incentives.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Who is behind climate.markets?</h3>
            <p className="text-gray-300">
              climate.markets is developed by a distributed collective of climate technologists, forecasters, and Web3 developers committed to using markets to improve climate intelligence and transparency.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">What wallets and networks are supported?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Wallets:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• MetaMask</li>
                  <li>• Coinbase Wallet</li>
                  <li>• WalletConnect</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Networks:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Polygon (mainnet)</li>
                  <li>• Others coming soon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-blue-100 mb-6">
            Learn more about how climate prediction markets work and get started trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              How It Works
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/category/trending"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Markets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
