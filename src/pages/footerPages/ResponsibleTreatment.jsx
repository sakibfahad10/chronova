// src/pages/footerPages/ResponsibleTreatment.jsx
import React from 'react';
import { FaRecycle, FaIndustry, FaShippingFast, FaHandshake, FaFileAlt, FaLeaf } from 'react-icons/fa';

const ResponsibleTreatment = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 mb-6">
          <FaRecycle className="text-amber-600 text-2xl" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Responsible Treatment</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At Chronova, responsibility is not an afterthought - it's woven into every gear and spring. 
          Discover our comprehensive approach to sustainable luxury that extends from workshop to wrist.
        </p>
      </div>

      {/* Manufacturing Excellence */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <FaIndustry className="text-amber-600 text-3xl mr-4" />
          <h2 className="text-3xl font-serif font-semibold text-gray-900">Manufacturing Integrity</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Closed-Loop Production</h3>
            <p className="text-gray-700 mb-4">
              Our Swiss facility recaptures 97% of materials through proprietary purification systems. 
              Precious metal shavings are refined and reintroduced into new components.
            </p>
            <div className="flex items-center mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-amber-600 h-2.5 rounded-full" 
                  style={{ width: '97%' }}
                ></div>
              </div>
              <span className="ml-4 text-sm font-medium text-gray-700">97% Material Recovery</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Water Reclamation</h3>
            <p className="text-gray-700 mb-4">
              Traditional watchmaking consumes 200L of water per timepiece. Our zero-discharge system 
              purifies and recycles 100% of industrial water.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Certification:</span> ISO 14046 Water Footprint Standard
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-xl border border-amber-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="bg-gray-900 text-white rounded-lg px-4 py-2 text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-amber-300 text-sm">Industrial Runoff Since 2022</div>
              </div>
            </div>
            <p className="text-gray-700 flex-1">
              Chronova became the first Swiss watchmaker to achieve complete water neutrality through 
              our partnership with the Geneva Water Initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Supply Chain */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <FaHandshake className="text-amber-600 text-3xl mr-4" />
          <h2 className="text-3xl font-serif font-semibold text-gray-900">Ethical Supply Chain</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-amber-600 text-3xl mb-4">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Conflict-Free Materials</h3>
            <p className="text-gray-700">
              All gold and gemstones are ethically sourced through the Kimberley Process with blockchain 
              verification from mine to manufacturer.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-amber-600 text-3xl mb-4">
              <FaIndustry />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fair Labor Premium</h3>
            <p className="text-gray-700">
              15% above-market wages with environmental bonuses for all mining partners through our 
              Geneva Accord.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-amber-600 text-3xl mb-4">
              <FaRecycle />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Recycled Precious Metals</h3>
            <p className="text-gray-700">
              92% of our gold and platinum comes from certified recycled sources, reducing mining 
              impact by 98%.
            </p>
          </div>
        </div>
        
        <div className="p-6 bg-gray-900 text-white rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Transparency Initiative</h3>
              <p className="text-amber-100 max-w-lg">
                Scan your Chronova's serial number to access its complete environmental journey - 
                from raw materials to final assembly.
              </p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
              View Supply Chain
            </button>
          </div>
        </div>
      </section>

      {/* Sustainable Logistics */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <FaShippingFast className="text-amber-600 text-3xl mr-4" />
          <h2 className="text-3xl font-serif font-semibold text-gray-900">Carbon-Negative Logistics</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Conscious Shipping</h3>
            <p className="text-gray-700 mb-4">
              For every shipment, we offset 120% of emissions through verified reforestation projects 
              in partnership with the Horological Green Pact.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-700 mb-1">Carbon Offset</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: '120%' }}
                  ></div>
                </div>
              </div>
              <span className="text-sm font-medium text-green-600">+20%</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Packaging</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-amber-600">
                  <FaLeaf />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ocean Plastic Cases</h4>
                  <p className="text-gray-700">
                    Presentation boxes made from 8kg reclaimed marine plastic
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-amber-600">
                  <FaRecycle />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Plant-Based Cushioning</h4>
                  <p className="text-gray-700">
                    Mushroom root packaging that decomposes in 45 days
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-amber-600">
                  <FaFileAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Digital Documentation</h4>
                  <p className="text-gray-700">
                    Reduced paper usage by 98% through NFC-enabled manuals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-of-Life Management */}
      <section>
        <div className="flex items-center mb-8">
          <FaRecycle className="text-amber-600 text-3xl mr-4" />
          <h2 className="text-3xl font-serif font-semibold text-gray-900">End-of-Life Stewardship</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Legacy Recycling Program</h3>
            <p className="text-gray-700 mb-4">
              Return any timepiece (including non-Chronova) for responsible component recycling:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li>Precious metal recovery with blockchain certification</li>
              <li>Movement refurbishment for charitable programs</li>
              <li>15% credit toward new Chronova timepiece</li>
            </ul>
            <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors">
              Schedule Pickup
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-green-50 p-6 rounded-xl border border-amber-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Waste Innovation</h3>
            <p className="text-gray-700 mb-4">
              Our R&D facility transforms non-recyclable components into construction materials:
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1.2M+</div>
                <div className="text-sm text-gray-700">Watch Batteries Recycled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">92%</div>
                <div className="text-sm text-gray-700">Material Recovery Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-sm text-gray-700">Landfill Contribution</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center py-8 border-t border-gray-200">
          <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors text-lg">
            Download Sustainability Report
          </button>
          <p className="mt-4 text-gray-600 text-sm">
            Chronova partners with The Horological Green Pact and Basel Sustainability Council
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResponsibleTreatment;