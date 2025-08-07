import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Shield, Info, AlertCircle, FileText } from 'lucide-react';

export function RiskDisclaimerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <h1 className="text-3xl font-bold text-white">Risk Disclaimer</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Important information about the risks associated with trading climate prediction markets
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* General Risk Warning */}
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-red-400 mb-2">High Risk Warning</h2>
                <p className="text-gray-300 leading-relaxed">
                  Trading climate prediction markets involves substantial risk of loss and is not suitable for all investors. 
                  You can lose some or all of your invested capital. Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </div>

          {/* Risk Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Market Risk</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Climate data can be unpredictable and volatile</li>
                <li>• Market prices may fluctuate significantly</li>
                <li>• No guarantee of profit or protection against loss</li>
                <li>• Markets may be suspended or closed unexpectedly</li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Technology Risk</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Smart contract vulnerabilities and bugs</li>
                <li>• Blockchain network congestion and delays</li>
                <li>• Potential for technical failures or outages</li>
                <li>• Risk of losing access to your wallet</li>
              </ul>
            </div>
          </div>

          {/* Detailed Risk Information */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Understanding Climate Prediction Markets</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Climate prediction markets allow participants to trade on the outcome of climate-related events. 
                  These markets are based on real-world climate data and scientific measurements, but outcomes are 
                  not guaranteed and can be affected by various factors including:
                </p>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li>• Changes in weather patterns and climate conditions</li>
                  <li>• Accuracy and reliability of data sources</li>
                  <li>• Market manipulation or gaming attempts</li>
                  <li>• Regulatory changes affecting market operations</li>
                  <li>• Technical issues with data collection or processing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Financial Risks</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Capital Loss</h4>
                    <p className="text-gray-300">
                      You can lose your entire investment. Never invest more than you can afford to lose.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Liquidity Risk</h4>
                    <p className="text-gray-300">
                      Markets may have limited liquidity, making it difficult to buy or sell positions at desired prices.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Volatility</h4>
                    <p className="text-gray-300">
                      Market prices can be highly volatile and may change rapidly based on new information or events.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Regulatory and Legal Risks</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Regulatory Changes</h4>
                    <p className="text-gray-300">
                      Laws and regulations governing prediction markets may change, potentially affecting market operations 
                      and the legality of trading activities in your jurisdiction.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Tax Implications</h4>
                    <p className="text-gray-300">
                      Trading activities may have tax consequences. Consult with a qualified tax professional to understand 
                      your obligations.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Legal Status</h4>
                    <p className="text-gray-300">
                      The legal status of prediction markets varies by jurisdiction. Ensure compliance with local laws 
                      before participating.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Technical and Operational Risks</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Smart Contract Risk</h4>
                    <p className="text-gray-300">
                      Markets operate on blockchain smart contracts that may contain bugs or vulnerabilities. 
                      While audited, no smart contract is completely risk-free.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Network Risk</h4>
                    <p className="text-gray-300">
                      Blockchain networks may experience congestion, delays, or outages that could affect trading 
                      and settlement.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Wallet Security</h4>
                    <p className="text-gray-300">
                      You are responsible for securing your wallet and private keys. Loss of access to your wallet 
                      means loss of your funds.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data and Information Risks</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Data Accuracy</h4>
                    <p className="text-gray-300">
                      Market outcomes depend on the accuracy and reliability of climate data sources. 
                      Data errors or delays could affect market results.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Information Asymmetry</h4>
                    <p className="text-gray-300">
                      Some participants may have access to information not available to all traders, 
                      potentially creating unfair advantages.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Market Manipulation</h4>
                    <p className="text-gray-300">
                      While we implement measures to prevent manipulation, sophisticated actors may attempt 
                      to influence market outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Recommendations */}
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Risk Management Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">Before Trading:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Understand how prediction markets work</li>
                  <li>• Research the specific market and data sources</li>
                  <li>• Assess your risk tolerance and financial situation</li>
                  <li>• Ensure you have secure wallet access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">While Trading:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Never invest more than you can afford to lose</li>
                  <li>• Diversify your positions across multiple markets</li>
                  <li>• Monitor your positions regularly</li>
                  <li>• Keep your wallet and private keys secure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimer Statement */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <FileText className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Disclaimer Statement</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By using Climate Markets, you acknowledge that you have read, understood, and agree to this 
                  Risk Disclaimer. You understand that trading climate prediction markets involves substantial risk 
                  and that you may lose some or all of your invested capital.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  This platform is provided "as is" without warranties of any kind. We do not guarantee the accuracy, 
                  completeness, or reliability of any information on this platform. Market outcomes are determined 
                  by real-world events and data sources beyond our control.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You are solely responsible for your trading decisions and the consequences thereof. 
                  We recommend consulting with qualified financial, legal, and tax advisors before engaging 
                  in any trading activities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              If you have questions about these risks or need clarification, please contact our support team.
            </p>
            <Link
              to="/how-it-works"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Learn More About Trading
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
