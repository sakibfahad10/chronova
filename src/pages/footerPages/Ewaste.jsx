// src/pages/footerPages/Ewaste.jsx
import React from 'react';
import { FaRecycle, FaLeaf, FaIndustry, FaHandHoldingHeart } from 'react-icons/fa';

const Ewaste = () => {
  const initiatives = [
    { 
      icon: <FaRecycle className="text-amber-600" />, 
      title: "Closed-Loop Recycling", 
      description: "92% material recovery rate from returned timepieces"
    },
    { 
      icon: <FaLeaf className="text-amber-600" />, 
      title: "Sustainable Materials", 
      description: "Ocean-plastic watch boxes with organic cotton lining"
    },
    { 
      icon: <FaIndustry className="text-amber-600" />, 
      title: "Manufacturing Ethics", 
      description: "Zero industrial runoff from our Swiss facility"
    },
    { 
      icon: <FaHandHoldingHeart className="text-amber-600" />, 
      title: "Consumer Advocacy", 
      description: "Educational partnerships with Basel Sustainability Council"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Horological Stewardship</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Chronova leads the luxury sector in sustainable practices, transforming e-waste into 
          opportunities for innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {initiatives.map((item, index) => (
          <div key={index} className="flex p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mr-5 text-3xl">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-green-50 p-8 rounded-xl border border-amber-100">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Legacy Recycling Program</h3>
            <p className="text-gray-700 max-w-lg">
              Return any pre-2010 timepiece for complimentary responsible recycling and receive 
              15% towards a new Chronova.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors">
            Schedule Pickup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ewaste;