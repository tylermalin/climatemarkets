import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Coins, TrendingUp, Play, CheckCircle } from 'lucide-react';

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center justify-center mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trade the future of our planet in three simple steps. Predict climate outcomes and profit from your insights.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/50 rounded-2xl p-8 h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-bold mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pick a Climate Market</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Buy 'Yes' or 'No' shares depending on your prediction. Buying shares is like betting on the outcome. 
                Odds shift in real time as other traders bet.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Browse trending markets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Analyze climate data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Make your prediction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/50 rounded-2xl p-8 h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 mx-auto">
                <Coins className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Place a Bet</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Fund your account with crypto, credit/debit card, or bank transfer—then you're ready to bet. 
                No bet limits and no fees.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Connect your wallet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Add funds instantly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Place your trade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/50 rounded-2xl p-8 h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full text-sm font-bold mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Profit</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Sell your 'Yes' or 'No' shares at any time, or wait until the market ends to redeem winning shares for $1 each. 
                Create an account and place your first trade in minutes.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Trade anytime</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Cash out winners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Build your portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of traders predicting climate outcomes and building wealth through environmental insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/category/trending"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Trading Now
            </Link>
            
            <Link
              to="/wallet"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              Connect Wallet
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Why Climate Markets?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Trade on real climate data and scientific predictions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>No minimum bet amounts or hidden fees</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Instant deposits and withdrawals</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Transparent market resolution</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Getting Started</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Create an account in under 2 minutes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Connect your preferred payment method</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Browse trending climate markets</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Place your first trade and start earning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
