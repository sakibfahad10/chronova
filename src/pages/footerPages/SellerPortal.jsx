// src/pages/helpPages/SellerPortal.jsx
import React from 'react';
import { FaChartPie, FaEdit, FaClipboardList, FaChartBar, FaLifeRing } from 'react-icons/fa';

const SellerPortal = () => {
  const features = [
    { 
      icon: <FaChartPie className="text-amber-600" />, 
      title: "Performance Dashboard", 
      description: "Real-time revenue analytics and client demographics"
    },
    { 
      icon: <FaEdit className="text-amber-600" />, 
      title: "Collection Management", 
      description: "AI-powered photography enhancement and description generator"
    },
    { 
      icon: <FaClipboardList className="text-amber-600" />, 
      title: "Order Fulfillment", 
      description: "Integrated shipping with premium carrier options"
    },
    { 
      icon: <FaChartBar className="text-amber-600" />, 
      title: "Market Insights", 
      description: "Luxury market trend reports and pricing guidance"
    },
    { 
      icon: <FaLifeRing className="text-amber-600" />, 
      title: "Concierge Support", 
      description: "Dedicated account specialist with direct messaging"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Boutique Command Center</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Our proprietary seller portal provides elite partners with enterprise tools previously 
          only available to Swiss manufactures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">Platinum Partner Benefits</h3>
            <ul className="list-disc pl-5 text-amber-100 space-y-1">
              <li>API integration with inventory management systems</li>
              <li>White-glove photography service for high-value pieces</li>
              <li>Early access to collector demand analytics</li>
              <li>Featured placement in seasonal lookbooks</li>
            </ul>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerPortal;