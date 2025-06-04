// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ watches }) => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {watches.map((watch) => (
          <ProductCard key={watch.Id} watch={watch} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
