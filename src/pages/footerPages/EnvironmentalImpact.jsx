// src/pages/footerPages/EnvironmentalResponsibility.jsx
import React from 'react';
import { FaLeaf, FaRecycle, FaHandHoldingHeart, FaIndustry, FaShippingFast, FaTree } from 'react-icons/fa';

const EnvironmentalResponsibility = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 mb-6">
          <FaLeaf className="text-amber-600 text-2xl" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Horological Stewardship</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At Chronova, we measure time not just in seconds, but in sustainable legacies. Our environmental commitment 
          flows through every component, from ethically sourced metals to carbon-negative shipping.
        </p>
      </div>

      {/* Environmental Impacts Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <FaTree className="text-amber-600 text-3xl mr-4" />
          <h2 className="text-3xl font-serif font-semibold text-gray-900">Environmental Impacts</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing Footprint</h3>
            <p className="text-gray-700 mb-4">
              Traditional watchmaking consumes 18,000 liters of water and emits 1.2 tons of CO₂ per 100 timepieces. 
              Through technological innovation, we've reduced this by 92%.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Our Achievement:</span> 2025 Carbon Neutral Certification 
                across all manufacturing facilities
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Sourcing</h3>
            <p className="text-gray-700 mb-4">
              The luxury watch industry accounts for 8% of global rare earth metal extraction. Our ethical sourcing 
              initiative prioritizes recycled precious metals and lab-grown gemstones.
            </p>
            <div className="flex items-center mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-amber-600 h-2.5 rounded-full" 
                  style={{ width: '87%' }}
                ></div>
              </div>
              <span className="ml-4 text-sm font-medium text-gray-700">87% Recycled Materials</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-xl border border-amber-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="bg-gray-900 text-white rounded-lg px-4 py-2 text-center">
                <div className="text-2xl font-bold">18,000+</div>
                <div className="text-amber-300 text-sm">Ocean Plastic Units Diverted</div>
              </div>
            </div>
            <p className="text-gray-700 flex-1">
              Through our partnership with Ocean Cleanup Initiative, we've transformed marine plastic 
              into exclusive watch presentation cases since 2022.
            </p>
          </div>
        </div>
      </section>

      {/* Responsible Treatment Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <FaIndustry className="text-amber-600 text-3xl mr-4" />
          <h2 className="text-3xl font-serif font-semibold text-gray-900">Responsible Treatment</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-amber-600 text-3xl mb-4">
              <FaRecycle />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Closed-Loop Manufacturing</h3>
            <p className="text-gray-700">
              97% material reclamation rate through our Swiss facility's proprietary metal purification system.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-amber-600 text-3xl mb-4">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Carbon-Negative Logistics</h3>
            <p className="text-gray-700">
              For every shipment, we offset 120% of emissions through verified reforestation projects.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-amber-600 text-3xl mb-4">
              <FaHandHoldingHeart />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ethical Partnerships</h3>
            <p className="text-gray-700">
              Fair wages and environmental premiums paid to all mining partners through our Geneva Accord.
            </p>
          </div>
        </div>
        
        <div className="p-6 bg-gray-900 text-white rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Transparency Initiative</h3>
              <p className="text-amber-100 max-w-lg">
                Each Chronova timepiece includes a digital passport detailing its environmental journey 
                from mine to wrist.
              </p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
              View Sustainability Report
            </button>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section>
        <div className="flex items-center mb-8">
          <FaHandHoldingHeart className="text-amber-600 text-3xl mr-4" />
          <h2 className="text-3xl font-serif font-semibold text-gray-900">How You Can Help</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legacy Recycling Program</h3>
              <p className="text-gray-700 mb-4">
                Return any pre-owned timepiece (regardless of brand) for responsible component recycling and receive:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>15% credit toward new Chronova timepiece</li>
                <li>Complimentary carbon-neutral pickup service</li>
                <li>Certificate of environmental contribution</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-xl border border-amber-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conscious Ownership</h3>
              <p className="text-gray-700">
                Extend your timepiece's life through our complimentary maintenance program - 
                94% lower environmental impact than replacement.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Packaging Options</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                    <span className="text-white text-sm">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Eco-Luxury Box</h4>
                  <p className="text-gray-700">
                    Ocean plastic composite with organic silk lining (+$0)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                    <span className="text-white text-sm">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reforestation Partnership</h4>
                  <p className="text-gray-700">
                    Plant 5 trees with your order (+$25)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                    <span className="text-white text-sm">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Carbon Neutral Delivery</h4>
                  <p className="text-gray-700">
                    Includes verified offset certificate (+$15)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <div className="mr-4 text-amber-600 text-2xl">
                  <FaHandHoldingHeart />
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Your Impact:</span> 87% of Chronova collectors participate 
                  in our environmental programs
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center py-8 border-t border-gray-200">
          <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors text-lg">
            Join Our Sustainability Initiative
          </button>
          <p className="mt-4 text-gray-600 text-sm">
            Chronova partners with The Horological Green Pact and Basel Sustainability Council
          </p>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalResponsibility;