import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { subscribeToProducts } from '../services/productService';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToProducts((items) => {
      setProducts(items);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const filteredSorted = products
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 tracking-tight">
          Discover Chronova Timepieces
        </h2>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 items-stretch">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search watches by name..."
              className="w-full border border-gray-300 p-3 pl-10 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>

          <select
            className="border border-gray-300 p-3 rounded-lg shadow-sm w-full sm:w-52 focus:ring focus:ring-indigo-200 focus:outline-none"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {loading ? (
          <p className="text-center text-lg text-gray-700">Loading products…</p>
        ) : filteredSorted.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredSorted.map((watch) => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No watches found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default Shop;

