// src/pages/Cart.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeItem, updateQuantity, cartLoading } = useCart();
  const [showSummary, setShowSummary] = useState(false);

  if (cartLoading) {
    return <p className="text-center mt-20 text-gray-600">Loading cart…</p>;
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-50 min-h-screen pb-24 pt-8">
      <div className="max-w-6xl mx-auto px-4 lg:pr-[21rem] lg:pl-4"> {/* Left shift for desktop */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl mb-4">Your cart is empty.</p>
            <Link
              to="/shop"
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Mobile Summary Toggle */}
            <button
              className="md:hidden w-full flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4"
              onClick={() => setShowSummary(!showSummary)}
            >
              <span className="font-medium text-gray-800 flex items-center gap-2">
                Order Summary
                {showSummary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
              <span className="text-gray-600 font-semibold">${total.toFixed(2)}</span>
            </button>

            {/* Mobile Summary Panel */}
            {showSummary && (
              <div className="md:hidden bg-white rounded-lg shadow mb-6 p-4">
                <p className="text-sm text-gray-500 mb-2">Includes subtotal, shipping & tax</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (5%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Link
                    to="/checkout"
                    className="block mt-4 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.Id}
                  className="flex items-center bg-white rounded-lg shadow p-4 sm:p-6 hover:shadow-lg transition"
                >
                  {/* Image */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Mobile Design */}
                  <div className="ml-4 flex-1 w-full sm:hidden">
                    <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">{item.name}</h2>
                    <p className="text-gray-600 text-sm mb-2">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.Id, Math.max(item.quantity - 1, 1))}
                          className="p-1 bg-gray-100 rounded hover:bg-gray-200 transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-gray-800 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.Id, item.quantity + 1)}
                          className="p-1 bg-gray-100 rounded hover:bg-gray-200 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.Id)}
                        className="text-red-500 hover:text-red-600 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Desktop Design */}
                  <div className="hidden sm:flex flex-1 sm:ml-6 flex-col justify-between w-full">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h2>
                      <p className="text-gray-600 mb-2">
                        Price: <span className="font-medium text-gray-800">${item.price.toFixed(2)}</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.Id, Math.max(item.quantity - 1, 1))}
                          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-gray-800 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.Id, item.quantity + 1)}
                          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-gray-800 font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.Id)}
                          className="text-red-500 hover:text-red-600 transition"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Summary */}
            <div className="hidden lg:block lg:fixed lg:top-24 lg:right-4 lg:w-80">
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
                <div className="text-gray-700 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (5%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
