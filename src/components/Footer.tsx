import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Twitter, Github, Mail, Shield, FileText, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold text-white">Climate Markets</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Decentralized climate prediction markets. Trade the future of our planet.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/climatemarkets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/climatemarkets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@climate.markets"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/trending" className="text-gray-400 hover:text-white transition-colors">
                  Trending Markets
                </Link>
              </li>
              <li>
                <Link to="/category/temperature" className="text-gray-400 hover:text-white transition-colors">
                  Temperature Predictions
                </Link>
              </li>
              <li>
                <Link to="/category/emissions" className="text-gray-400 hover:text-white transition-colors">
                  Carbon Emissions
                </Link>
              </li>
              <li>
                <Link to="/wallet" className="text-gray-400 hover:text-white transition-colors">
                  Wallet Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://docs.climate.markets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Documentation</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/climatemarkets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Discord Community</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@climate.markets"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                  <FileText className="h-3 w-3" />
                  <span>Terms of Use</span>
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                  Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Climate Markets. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for the planet</span>
              <span>•</span>
              <span>Built on Ethereum</span>
              <span>•</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
