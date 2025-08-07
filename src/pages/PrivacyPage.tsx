import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, Calendar } from 'lucide-react';

export function PrivacyPage() {
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
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: January 11, 2022</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>Contact: legal@climate.markets</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="mb-4">
                Climate Markets collects information you provide directly to us, such as when you create an account, 
                make a transaction, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wallet addresses and transaction data</li>
                <li>Email addresses and contact information</li>
                <li>Trading activity and market participation</li>
                <li>Communication preferences and settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our climate prediction markets platform</li>
                <li>Process transactions and manage your account</li>
                <li>Send you important updates about market events and platform changes</li>
                <li>Improve our services and develop new features</li>
                <li>Ensure compliance with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or regulatory requirements</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability for your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our platform. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="mb-4">
                Our platform may integrate with third-party services such as wallet providers, blockchain networks, and analytics tools. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="mb-4">
                Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our platform and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-blue-400 font-medium">legal@climate.markets</p>
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
