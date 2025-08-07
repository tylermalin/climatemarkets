import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Shield, Eye, Settings, Database, Globe, Clock } from 'lucide-react';

export function CookiePolicyPage() {
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
            <Cookie className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
          </div>
          <p className="text-gray-400 text-lg">
            How we use cookies and similar technologies on Climate Markets
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and enabling certain features to work properly.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This policy explains how we use cookies and similar technologies on Climate Markets, 
              what types of cookies we use, and how you can manage your cookie preferences.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Authentication and security</li>
                    <li>• Session management</li>
                    <li>• CSRF protection</li>
                    <li>• Load balancing</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Page views and navigation</li>
                    <li>• User behavior analysis</li>
                    <li>• Performance monitoring</li>
                    <li>• Error tracking</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Settings className="h-6 w-6 text-purple-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Preference Cookies</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies remember your choices and preferences to personalize your experience.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Language preferences</li>
                    <li>• Theme settings</li>
                    <li>• Display preferences</li>
                    <li>• Trading preferences</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-yellow-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Wallet connections</li>
                    <li>• Trading history</li>
                    <li>• Market favorites</li>
                    <li>• Social features</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use third-party services that place cookies on your device. These services help us 
                  provide better functionality and analyze our website performance.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Web3Modal</h4>
                    <p className="text-gray-300 text-sm">
                      Used for wallet connection functionality. Stores wallet connection preferences and session data.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Supabase</h4>
                    <p className="text-gray-300 text-sm">
                      Our backend service provider. May use cookies for authentication and session management.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Analytics Services</h4>
                    <p className="text-gray-300 text-sm">
                      We may use analytics services to understand user behavior and improve our platform.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Cookie Duration</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-red-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Session Cookies</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies are deleted when you close your browser. They are used for temporary 
                    session management and security.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-yellow-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Persistent Cookies</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies remain on your device for a set period (usually 30 days to 1 year) 
                    and are used to remember your preferences.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Long-term Cookies</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    These cookies may remain for up to 2 years and are used for analytics and 
                    improving user experience over time.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Browser Settings</h4>
                    <p className="text-gray-300 mb-4">
                      You can control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="space-y-2 text-gray-300 ml-6">
                      <li>• Block all cookies</li>
                      <li>• Block third-party cookies</li>
                      <li>• Delete existing cookies</li>
                      <li>• Set cookie preferences for specific sites</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Cookie Consent</h4>
                    <p className="text-gray-300 mb-4">
                      When you first visit our website, you'll see a cookie consent banner. You can:
                    </p>
                    <ul className="space-y-2 text-gray-300 ml-6">
                      <li>• Accept all cookies</li>
                      <li>• Accept only essential cookies</li>
                      <li>• Customize your preferences</li>
                      <li>• Change your preferences later</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Impact of Disabling Cookies</h4>
                    <p className="text-gray-300">
                      Disabling certain cookies may affect the functionality of our website. Essential cookies 
                      cannot be disabled as they are required for basic functionality.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Data Protection and Privacy</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Data Collection</h4>
                    <p className="text-gray-300">
                      Cookies may collect information such as your IP address, browser type, device information, 
                      and usage patterns. This information is used to improve our services and provide 
                      a better user experience.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Data Sharing</h4>
                    <p className="text-gray-300">
                      We do not sell your personal information. Cookie data may be shared with trusted 
                      third-party service providers who help us operate our platform, but only for the 
                      purposes described in this policy.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Security</h4>
                    <p className="text-gray-300">
                      We implement appropriate security measures to protect cookie data. All cookies 
                      are transmitted over secure connections, and sensitive information is encrypted.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any 
                  material changes by posting the updated policy on our website.
                </p>
                <p className="text-gray-300">
                  The "Last Updated" date at the bottom of this policy indicates when it was last revised. 
                  We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>• Email: privacy@climatemarkets.com</p>
                  <p>• Support: support@climatemarkets.com</p>
                  <p>• Address: [Your Company Address]</p>
                </div>
              </div>
            </section>
          </div>

          {/* Related Links */}
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Related Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/privacy"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Shield className="h-4 w-4" />
                <span>Privacy Policy</span>
              </Link>
              <Link
                to="/terms"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>Terms of Service</span>
              </Link>
              <Link
                to="/risk-disclaimer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Shield className="h-4 w-4" />
                <span>Risk Disclaimer</span>
              </Link>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-gray-400 text-sm">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
