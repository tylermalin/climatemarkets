import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Mail, Calendar, AlertTriangle } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="h-8 w-8 text-green-400" />
            <h1 className="text-4xl font-bold">Terms of Use</h1>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: February 6, 2025</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>Contact: hello@climate.markets</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Climate Markets, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
              <p className="mb-4">
                Climate Markets provides a decentralized platform for trading climate prediction markets. Users can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Participate in climate prediction markets</li>
                <li>Trade outcomes related to climate events</li>
                <li>Connect digital wallets for transactions</li>
                <li>Access real-time market data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="mb-4">
                As a user of Climate Markets, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your wallet and account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in market manipulation or fraudulent activities</li>
                <li>Report any suspicious activity or security concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Risk Disclaimer</h2>
              <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">Important Risk Warning</span>
                </div>
                <p className="text-yellow-200 text-sm">
                  Trading climate prediction markets involves substantial risk. You may lose some or all of your invested capital. 
                  Past performance does not guarantee future results. Please ensure you understand the risks before participating.
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Market outcomes are unpredictable and subject to various factors</li>
                <li>Cryptocurrency prices are highly volatile</li>
                <li>Smart contract risks and potential technical failures</li>
                <li>Regulatory changes may affect market operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="mb-4">
                The content, features, and functionality of Climate Markets are owned by Climate Markets and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy and Data</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                Climate Markets shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="mb-4">
                You agree to defend, indemnify, and hold harmless Climate Markets and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="mb-4">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Climate Markets operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-green-400 font-medium">hello@climate.markets</p>
                <p className="text-sm text-gray-400 mt-2">
                  We will respond to your inquiry within 30 days.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
