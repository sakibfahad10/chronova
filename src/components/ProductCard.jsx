import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ watch }) => {
  const { id, name, price, imageUrl, description } = watch;
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm flex flex-col">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 leading-snug h-12">{name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 h-10">{description}</p>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-lg text-gray-900">${price}</span>
          </div>
          <div className="flex justify-between gap-2">
            <Link
              to={`/product/${id}`}
              className="flex-1 px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 text-sm transition text-center"
            >
              View Details
            </Link>
            <button
              onClick={() =>
                addItem({ Id: id, name, price, image: imageUrl, description, quantity: 1 })
              }
              className="flex-1 px-3 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 text-sm transition"
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




