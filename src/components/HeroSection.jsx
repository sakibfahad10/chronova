import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-[70vh] flex items-center py-12 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Timeless <span className="text-yellow-400">Elegance</span> <br />
            on Your Wrist
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Discover premium watches that combine classic style with modern technology. Elevate your look with Chronova.
          </p>
          <div>
            <Link
              to="/shop"
              className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition ease-in-out duration-200"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/HeroSection.png"
            alt="Premium watch banner"
            className="w-3/4 max-w-xs md:max-w-md rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
