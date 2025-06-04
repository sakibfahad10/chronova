import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { subscribeToProducts } from '../services/productService';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToProducts((items) => {
      setProducts(items.slice(0, 3)); // প্রথম ৩টা দেখাবে
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Featured Watches</h2>

      {loading ? (
        <p>Loading featured watches…</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((watch) => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              View All Watches
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductSection;


