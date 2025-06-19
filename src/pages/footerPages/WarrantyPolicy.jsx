// src/pages/footerPages/WarrantyPolicy.jsx
import React from 'react';
import { FaCogs, FaExclamationTriangle, FaFileInvoice, FaSyncAlt } from 'react-icons/fa';

const WarrantyPolicy = () => {
  const coverage = [
    { 
      icon: <FaCogs className="text-amber-600" />, 
      title: "Movement Guarantee", 
      description: "Full servicing of mechanical complications for 36 months"
    },
    { 
      icon: <FaExclamationTriangle className="text-amber-600" />, 
      title: "Exclusions", 
      description: "Physical impact damage, water intrusion beyond rating, or unauthorized modifications"
    },
    { 
      icon: <FaFileInvoice className="text-amber-600" />, 
      title: "Validation Requirements", 
      description: "Original certificate of authenticity and purchase documentation"
    },
    { 
      icon: <FaSyncAlt className="text-amber-600" />, 
      title: "Remediation Process", 
      description: "Option of Swiss factory restoration or equivalent model replacement"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Heritage Warranty Program</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Each Chronova timepiece comes with our triple-certified guarantee, honoring the legacy of 
          precision engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {coverage.map((item, index) => (
          <div key={index} className="flex p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="mr-5 text-3xl">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start bg-gray-900 text-white p-8 rounded-xl">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-3">Extended Concierge Care</h3>
          <p className="text-amber-100 max-w-md">
            Platinum clients receive complimentary 5-year warranty extension with annual maintenance.
          </p>
        </div>
        <button className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
          Upgrade Warranty
        </button>
      </div>
    </div>
  );
};

export default WarrantyPolicy;