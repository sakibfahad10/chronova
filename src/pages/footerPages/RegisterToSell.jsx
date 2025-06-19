// src/pages/helpPages/RegisterToSell.jsx
import React from 'react';
import { FaUserTie, FaFileSignature, FaCreditCard, FaCamera, FaChartLine } from 'react-icons/fa';

const RegisterToSell = () => {
  const steps = [
    { icon: <FaUserTie />, title: "Account Creation", description: "Establish your boutique profile with business credentials" },
    { icon: <FaFileSignature />, title: "Identity Verification", description: "Submit notarized documents for luxury marketplace access" },
    { icon: <FaCreditCard />, title: "Payment Integration", description: "Connect enterprise-grade payment processing" },
    { icon: <FaCamera />, title: "Product Curation", description: "Showcase pieces with professional studio photography" },
    { icon: <FaChartLine />, title: "Inventory Management", description: "Utilize AI-powered sales analytics dashboard" }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Boutique Partnership Program</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Join our curated network of elite watch specialists. Chronova provides the platform, 
          clientele, and prestige - you bring exceptional timepieces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 text-2xl">
              {step.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Platinum Tier Benefits</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>0% commission for first $50,000 in sales</li>
              <li>Dedicated account manager</li>
              <li>Featured in Chronova print catalog</li>
              <li>VIP client introductions</li>
            </ul>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors">
            Apply for Partnership
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterToSell;