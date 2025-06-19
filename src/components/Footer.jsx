// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">

        {/* About Section */}
        <div>
          <h4 className="text-white font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-process" className="hover:text-white">
                Our Process
              </Link>
            </li>
            <li>
              <Link to="/why-chronova" className="hover:text-white">
                Why Chronova?
              </Link>
            </li>
          </ul>
        </div>

        {/* Policy Section */}
        <div>
          <h4 className="text-white font-semibold mb-3">Policy</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-white">
                Refund & Return Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/warranty-policy" className="hover:text-white">
                Limited Warranty Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-white font-semibold mb-3">Help</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/register-to-sell" className="hover:text-white">
                Register to Sell
              </Link>
            </li>
            <li>
              <Link to="/seller-portal" className="hover:text-white">
                Seller Portal
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-white">
                Support Area
              </Link>
            </li>
          </ul>
        </div>

        {/* E‑waste Section */}
        <div>
          <h4 className="text-white font-semibold mb-3">E‑waste</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/ewaste" className="hover:text-white">
                What is E‑waste?
              </Link>
            </li>
            <li>
              <Link to="/ewaste/impact" className="hover:text-white">
                Environmental Impacts
              </Link>
            </li>
            <li>
              <Link to="/ewaste/treatment" className="hover:text-white">
                Responsible Treatment
              </Link>
            </li>
            <li>
              <Link to="/ewaste/help" className="hover:text-white">
                How You Can Help
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <div className="mb-3 md:mb-0 space-y-1">
          <p>
            Mail:&nbsp;
            <a href="mailto:chronova@gmail.com" className="text-gray-300 hover:text-white">
              chronova@gmail.com
            </a>
          </p>
          <p>
            Phone:&nbsp;
            <a href="tel:+8801602353127" className="text-gray-300 hover:text-white">
              +880 1602353127
            </a>
          </p>
        </div>
        <div className="text-center md:text-right">
          <p>
            © 2025&nbsp;
            <span className="text-white font-semibold">Chronova</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
