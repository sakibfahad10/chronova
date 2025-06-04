import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { clearCart, cartItems } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const orderData = {
        customer: formData,
        items: cartItems,
      };

      const response = await fetch("http://localhost:4000/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok && data.paymentUrl) {
        clearCart(); // Local cart clear
        window.location.href = data.paymentUrl; // Redirect to payment gateway
      } else {
        setError(data.error || "Payment initiation failed");
        setLoading(false);
      }
    } catch (err) {
      setError("Payment initiation error: " + err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-200 text-red-800 rounded">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          className="w-full border p-3 rounded"
          value={formData.address}
          onChange={handleChange}
          required
          disabled={loading}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded text-white ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Redirecting to Payment..." : "Proceed to Payment"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;






