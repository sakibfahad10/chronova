// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-[70vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Timeless <span className="text-yellow-400">Elegance</span> <br />
            on Your Wrist
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg">
            Discover premium watches that combine classic style with modern technology. Elevate your look with Chronova.
          </p>
          <div>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
        //   /public/hero-watch.png নামে watch এর একটা banner image যোগ করবে।
            src="/HeroSection.png" 
            alt="Watch"
            className="w-full max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
