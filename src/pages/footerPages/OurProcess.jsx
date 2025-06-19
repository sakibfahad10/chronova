// src/pages/footerPages/OurProcess.jsx
import React from 'react';
import { FaSketch, FaSearch, FaTools, FaHands, FaCheckDouble } from 'react-icons/fa';

const OurProcess = () => {
  const steps = [
    { icon: <FaSketch />, title: "Visionary Design", description: "180-hour conceptualization by our award-winning design team" },
    { icon: <FaSearch />, title: "Ethical Sourcing", description: "Conflict-free materials from certified sustainable partners" },
    { icon: <FaTools />, title: "Precision Engineering", description: "400-point stress testing in Swiss laboratories" },
    { icon: <FaHands />, title: "Artisan Assembly", description: "Handcrafted by certified master watchmakers" },
    { icon: <FaCheckDouble />, title: "Quality Assurance", description: "14-day chronometer certification process" }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">The Chronova Craftsmanship</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Each Chronova timepiece undergoes a 92-step creation journey, blending cutting-edge technology with 
          centuries-old watchmaking traditions for uncompromising excellence.
        </p>
      </div>

      <div className="relative">
        {/* Timeline */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-100 transform translate-x-4"></div>
        
        <div className="space-y-12 pl-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-16 top-0 w-12 h-12 rounded-full bg-amber-50 border-4 border-white shadow-md flex items-center justify-center text-amber-600 text-xl">
                {step.icon}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500">
          * Average creation time: 18 months per collection
        </p>
      </div>
    </div>
  );
};

export default OurProcess;