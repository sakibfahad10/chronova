import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
        Thank You!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your order has been placed successfully. We’ll send you updates soon.
      </p>
      <Link
        to="/shop"
        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;
