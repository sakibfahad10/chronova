import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ watch }) => {
  const { id, name, price, imageUrl, description } = watch;
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col p-2">
      {/* Image with border */}
      <div className="relative w-full pb-[100%] overflow-hidden rounded-md border-2 border-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-2 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2 leading-tight">
          {name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-2">
          {description}
        </p>
        <div className="mt-auto">
          <span className="block text-base sm:text-lg font-bold text-gray-900">
            ${price}
          </span>

          <div className="grid grid-cols-2 gap-1 mt-2">
            <Link
              to={`/product/${id}`}
              className="text-xs sm:text-sm text-center px-2 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              Details
            </Link>
            <button
              onClick={() => addItem({ Id: id, name, price, image: imageUrl, description, quantity: 1 })}
              className="text-xs sm:text-sm px-2 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;




