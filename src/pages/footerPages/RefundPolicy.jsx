// src/pages/footerPages/RefundPolicy.jsx
import React from 'react';
import { FaExchangeAlt, FaBoxOpen, FaShieldAlt, FaShippingFast } from 'react-icons/fa';

const RefundPolicy = () => {
  const policies = [
    { 
      icon: <FaExchangeAlt className="text-amber-600" />, 
      title: "14-Day Concierge Returns",
      description: "Initiate returns within 14 days of delivery for full refund"
    },
    { 
      icon: <FaBoxOpen className="text-amber-600" />, 
      title: "Pristine Condition Requirement",
      description: "Items must be unworn with original protective films intact"
    },
    { 
      icon: <FaShieldAlt className="text-amber-600" />, 
      title: "Bank-Grade Security",
      description: "Refunds processed within 48 hours of quality inspection"
    },
    { 
      icon: <FaShippingFast className="text-amber-600" />, 
      title: "White-Glove Service",
      description: "Free return shipping for orders over $1,000"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Bespoke Return Experience</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Your satisfaction is our horological covenant. Should your Chronova not meet expectations, 
          our concierge team ensures a seamless resolution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {policies.map((policy, index) => (
          <div key={index} className="flex p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="mr-5 text-3xl">{policy.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{policy.title}</h3>
              <p className="text-gray-700">{policy.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Exchange Service</h3>
        <p className="text-gray-700">
          For our platinum clients: Request a personal shopper consultation and priority exchange 
          service with complimentary overnight shipping.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;