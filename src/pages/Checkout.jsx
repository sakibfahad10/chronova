// src/pages/Checkout.jsx

import React, { useState, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  doc,
  setDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

const Checkout = () => {
  const { user } = useAuth();
  const { cartItems, clearCart, cartLoading } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Order summary
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = parseFloat((subtotal * 0.05).toFixed(2));
  const total = parseFloat((subtotal + shipping + tax).toFixed(2));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cartItems.length) {
      setError('Your cart is empty.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      // 1) Save order in Firestore
      const ordersCol = collection(db, 'orders');
      const orderRef = doc(ordersCol);
      const orderData = {
        customer: formData,
        items: cartItems,
        summary: { subtotal, shipping, tax, total },
        customerId: user.uid,
        createdAt: serverTimestamp(),
      };
      await setDoc(orderRef, orderData);

      // 2) Initiate payment via SSLCOMMERZ backend
      const response = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: orderRef.id,
          ...orderData
        }),
      });
      const data = await response.json();

      if (response.ok && data.paymentUrl) {
        // Clear cart locally
        clearCart();
        // Redirect to payment gateway
        window.location.href = data.paymentUrl;
      } else {
        throw new Error(data.error || 'Payment initiation failed');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  if (cartLoading) {
    return <p className="text-center mt-20">Loading cart…</p>;
  }

  if (!cartItems.length) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <p className="text-lg text-gray-600 mb-6">Your cart is empty.</p>
        <button
          onClick={() => navigate('/shop')}
          className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded">{error}</div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Billing & Shipping Form */}
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Billing & Shipping Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Shipping Address
              </label>
              <textarea
                name="address"
                rows="4"
                value={formData.address}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-semibold rounded ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } transition`}
            >
              {loading ? 'Processing…' : 'Proceed to Payment'}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.Id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">× {item.quantity}</p>
                  </div>
                </div>
                <p className="text-gray-800 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            <div className="pt-4">
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-800 font-semibold text-lg mt-4 border-t pt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => clearCart()}
              className="w-full mt-6 py-2 text-center text-sm text-red-600 hover:text-red-800 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
