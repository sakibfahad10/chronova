// src/pages/helpPages/SupportArea.jsx
import React from 'react';
import { FaQuestionCircle, FaEnvelope, FaComments, FaBookOpen } from 'react-icons/fa';

const SupportArea = () => {
  const supportOptions = [
    { 
      icon: <FaQuestionCircle className="text-amber-600" />, 
      title: "Knowledge Base", 
      description: "250+ articles on authentication, care, and investment",
      action: "Browse Archives"
    },
    { 
      icon: <FaEnvelope className="text-amber-600" />, 
      title: "Priority Email", 
      description: "Guaranteed 2-hour response for platinum clients",
      action: "Contact Concierge"
    },
    { 
      icon: <FaComments className="text-amber-600" />, 
      title: "Live Consultation", 
      description: "Video chat with master watchmakers (by appointment)",
      action: "Schedule Session"
    },
    { 
      icon: <FaBookOpen className="text-amber-600" />, 
      title: "Horological Library", 
      description: "Digital access to rare watchmaking manuscripts",
      action: "Explore Collection"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Concierge Assistance</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Our master watchmakers and client specialists provide unparalleled support for both 
          technical inquiries and collecting guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {supportOptions.map((option, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="text-3xl mr-4">{option.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-700">{option.description}</p>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 text-sm bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors border border-gray-200">
              {option.action}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Service Centers</h3>
        <p className="text-gray-700 mb-4">
          Visit our ateliers in Geneva, Tokyo, or New York for personal technical evaluations. 
          By-appointment only with complimentary champagne service.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium shadow-sm">Switzerland: +41 22 345 6789</span>
          <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium shadow-sm">Japan: +81 3 4567 8910</span>
          <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium shadow-sm">USA: +1 212 987 6543</span>
        </div>
      </div>
    </div>
  );
};

export default SupportArea;