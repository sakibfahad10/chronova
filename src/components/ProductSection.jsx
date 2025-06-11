import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { subscribeToProducts } from '../services/productService';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const skeletonArray = [1, 2, 3];

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToProducts((items) => {
      setProducts(items.slice(0, 3)); // first 3
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Watches
        </motion.h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Handpicked premium timepieces curated just for you.
        </p>
      </header>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skeletonArray.map((i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 rounded-lg h-80"
            />
          ))}
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {products.map((watch) => (
            <motion.div
              key={watch.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <ProductCard watch={watch} />
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block px-8 py-3 bg-black text-white font-medium rounded-lg shadow-lg hover:bg-gray-800 transition ease-in-out duration-200"
        >
          View All Watches
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;


