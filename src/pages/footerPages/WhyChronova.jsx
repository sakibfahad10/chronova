// src/pages/footerPages/WhyChronova.jsx
import React from 'react';
import { FaCrown, FaGem, FaCertificate, FaShieldAlt, FaLeaf } from 'react-icons/fa';

const WhyChronova = () => {
  const features = [
    { icon: <FaCrown className="text-amber-500" />, text: "Hand-picked collections tailored for watch connoisseurs" },
    { icon: <FaGem className="text-amber-500" />, text: "Exclusive limited-edition pieces with certified authenticity" },
    { icon: <FaCertificate className="text-amber-500" />, text: "Crafted by master horologists with decades of experience" },
    { icon: <FaShieldAlt className="text-amber-500" />, text: "Bank-grade encrypted checkout with insured delivery" },
    { icon: <FaLeaf className="text-amber-500" />, text: "Sustainable packaging & carbon-neutral shipping" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Why Chronova?</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At Chronova, we transcend timekeeping to create wearable artistry. Each masterpiece embodies Swiss precision, 
          Italian leather craftsmanship, and Japanese movement innovation - curated for those who demand distinction.
        </p>
      </div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all">
            <div className="mt-1 mr-4 text-2xl">{feature.icon}</div>
            <p className="text-gray-800 font-medium">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-700 italic">
          "Chronova isn't just a timepiece - it's a legacy wrapped around your wrist"
        </p>
      </div>
    </div>
  );
};

export default WhyChronova;