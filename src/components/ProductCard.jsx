import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ watch }) => {
  const { id, name, price, imageUrl, description } = watch;
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-xs mx-auto flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56 sm:h-64">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-2 leading-tight h-12">
          {name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 h-10 mb-3">
          {description}
        </p>
        <div className="mt-auto space-y-3">
          <span className="block text-xl font-bold text-gray-900">
            ${price}
          </span>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link
              to={`/product/${id}`}
              className="w-full text-center px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 text-sm transition"
            >
              View Details
            </Link>
            <button
              onClick={() => addItem({ Id: id, name, price, image: imageUrl, description, quantity: 1 })}
              className="w-full px-3 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 text-sm transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;




