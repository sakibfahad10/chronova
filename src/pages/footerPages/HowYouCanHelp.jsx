// src/pages/footerPages/HowYouCanHelp.jsx
import React from 'react';
import { FaRecycle, FaHandHoldingHeart, FaLeaf, FaShippingFast, FaTree, FaCertificate } from 'react-icons/fa';

const HowYouCanHelp = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 mb-6">
          <FaHandHoldingHeart className="text-amber-600 text-2xl" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Become a Horological Steward</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          True luxury is sustainable. Join our community of conscious collectors making a tangible difference 
          through purposeful choices and responsible ownership.
        </p>
      </div>

      {/* Impact Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-4xl font-bold text-amber-600 mb-2">87%</div>
          <p className="text-gray-700">Of Chronova collectors participate in sustainability programs</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-4xl font-bold text-amber-600 mb-2">18K+</div>
          <p className="text-gray-700">Ocean plastic units diverted since 2022</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-4xl font-bold text-amber-600 mb-2">1:5</div>
          <p className="text-gray-700">Watch purchased = 5 trees planted</p>
        </div>
      </div>

      {/* Action Sections */}
      <div className="space-y-16">
        {/* Conscious Ownership */}
        <section>
          <div className="flex items-center mb-8">
            <FaCertificate className="text-amber-600 text-3xl mr-4" />
            <h2 className="text-3xl font-serif font-semibold text-gray-900">Conscious Ownership</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">1</span>
                Extend Your Timepiece's Life
              </h3>
              <ul className="list-disc pl-10 text-gray-700 space-y-3">
                <li>Schedule complimentary maintenance every 24 months</li>
                <li>94% lower environmental impact than replacement</li>
                <li>Preserve heritage value through expert servicing</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors">
                Schedule Service
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">2</span>
                Legacy Recycling Program
              </h3>
              <p className="text-gray-700 mb-4">
                Return any pre-owned timepiece for responsible component recycling:
              </p>
              <div className="bg-amber-50 p-5 rounded-lg mb-4">
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>15% credit toward new Chronova timepiece</li>
                  <li>Carbon-neutral pickup service included</li>
                  <li>Certificate of environmental contribution</li>
                </ul>
              </div>
              <button className="w-full px-6 py-3 border border-amber-600 text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors">
                Initiate Recycling
              </button>
            </div>
          </div>
        </section>

        {/* Sustainable Choices */}
        <section>
          <div className="flex items-center mb-8">
            <FaLeaf className="text-amber-600 text-3xl mr-4" />
            <h2 className="text-3xl font-serif font-semibold text-gray-900">Sustainable Choices</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-amber-600 text-3xl mb-4">
                <FaTree />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reforestation Partnership</h3>
              <p className="text-gray-700 mb-4">
                Add 5 trees planted to your order. Includes GPS coordinates of your forest plot.
              </p>
              <div className="flex items-center text-gray-700">
                <span className="text-lg font-semibold mr-2">+$25</span>
                <span className="text-sm">per order</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-amber-600 text-3xl mb-4">
                <FaShippingFast />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Carbon Neutral Delivery</h3>
              <p className="text-gray-700 mb-4">
                120% emissions offset through verified projects. Includes framed certificate.
              </p>
              <div className="flex items-center text-gray-700">
                <span className="text-lg font-semibold mr-2">+$15</span>
                <span className="text-sm">per shipment</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-amber-600 text-3xl mb-4">
                <FaRecycle />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Luxury Packaging</h3>
              <p className="text-gray-700 mb-4">
                Ocean plastic composite case with organic silk lining. Fully recyclable.
              </p>
              <div className="text-gray-700 font-semibold">
                Complimentary with every order
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-xl border border-amber-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <div className="bg-gray-900 text-white rounded-lg px-4 py-2 text-center">
                  <div className="text-2xl font-bold">1,200+</div>
                  <div className="text-amber-300 text-sm">Acres Reforested</div>
                </div>
              </div>
              <p className="text-gray-700 flex-1">
                Through Chronova collector participation since 2023 - equivalent to removing 850 cars from roads annually.
              </p>
            </div>
          </div>
        </section>

        {/* Advocacy & Education */}
        <section>
          <div className="flex items-center mb-8">
            <FaHandHoldingHeart className="text-amber-600 text-3xl mr-4" />
            <h2 className="text-3xl font-serif font-semibold text-gray-900">Advocacy & Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Horological Green Pact</h3>
              <p className="text-gray-700 mb-4">
                Join our industry initiative pushing for sustainable luxury standards. Membership includes:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Quarterly sustainability reports</li>
                <li>Invitations to closed-door policy discussions</li>
                <li>Early access to sustainable innovations</li>
                <li>Networking with ethical material suppliers</li>
              </ul>
              <button className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
                Apply for Membership
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Resources</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                      <FaRecycle className="text-white text-xs" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Watch Recycling Guide</h4>
                    <p className="text-gray-700">
                      Proper disposal methods for batteries and electronic components
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                      <FaTree className="text-white text-xs" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Material Traceability</h4>
                    <p className="text-gray-700">
                      Blockchain technology for ethical sourcing verification
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                      <FaShippingFast className="text-white text-xs" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Carbon Footprint Calculator</h4>
                    <p className="text-gray-700">
                      Measure and offset your collection's environmental impact
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Access Resource Library
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Join the Movement</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          "We do not inherit the earth from our ancestors; we borrow it from our children." - 
          <span className="italic"> Native American Proverb</span>
        </p>
        <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors text-lg shadow-lg">
          Commit to Sustainable Luxury
        </button>
        <p className="mt-4 text-gray-600 text-sm">
          Chronova partners with The Horological Green Pact and Basel Sustainability Council
        </p>
      </div>
    </div>
  );
};

export default HowYouCanHelp;