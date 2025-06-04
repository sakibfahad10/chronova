import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
  const {
    cartItems,
    removeItem,
    updateQuantity,
  } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">Your cart is empty.</p>
          <Link
            to="/shop"
            className="mt-6 inline-block px-8 py-3 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.Id}
                className="flex items-center justify-between bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-lg border"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.Id, item.quantity - 1)
                        }
                        className="p-1 border rounded text-gray-600 hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.Id, item.quantity + 1)
                        }
                        className="p-1 border rounded text-gray-600 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="mt-2 text-gray-700 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.Id)}
                  className="text-red-500 hover:text-red-600"
                  title="Remove item"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-4 font-bold text-base">
                <span>Grand Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block text-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
