// src/pages/footerPages/TermsAndConditions.jsx
import React from 'react';
import { FaGavel, FaBan, FaChartLine, FaUserLock } from 'react-icons/fa';

const TermsAndConditions = () => {
  const clauses = [
    { 
      icon: <FaGavel className="text-amber-600" />, 
      title: "Intellectual Property", 
      description: "All horological designs, technical specifications, and brand assets remain exclusive Chronova property"
    },
    { 
      icon: <FaBan className="text-amber-600" />, 
      title: "Order Cancellation", 
      description: "We reserve right to cancel orders exhibiting pricing errors or suspicious activity"
    },
    { 
      icon: <FaChartLine className="text-amber-600" />, 
      title: "Market Fluctuations", 
      description: "Limited edition values may appreciate/depreciate based on market conditions"
    },
    { 
      icon: <FaUserLock className="text-amber-600" />, 
      title: "Account Integrity", 
      description: "Accounts engaging in bulk scraping or reselling will be terminated"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Horological Agreement</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Our terms protect both collectors and craftsmen, ensuring a trustworthy environment for 
          exceptional timepiece transactions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {clauses.map((clause, index) => (
          <div key={index} className="flex p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mr-5 text-3xl">{clause.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{clause.title}</h3>
              <p className="text-gray-700">{clause.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Jurisdiction & Disputes</h3>
        <p className="text-gray-700 mb-4">
          All transactions fall under Swiss watchmaking arbitration standards. Disputes will be settled through 
          the Horological Institute of Geneva's mediation services.
        </p>
        <p className="text-sm text-gray-500">
          Last updated: June 19, 2025 | Version 3.1
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;