// src/pages/Shop.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { subscribeToProducts } from '../services/productService';

const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToProducts((items) => {
      setProducts(items);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const filteredSorted = useMemo(() => {
    return products
      .filter((p) =>
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        if (sortOrder === 'desc') return b.price - a.price;
        return 0;
      });
  }, [products, debouncedSearch, sortOrder]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-white min-h-screen px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
          Discover Chronova Timepieces
        </h2>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 p-2 pl-8 rounded focus:ring focus:ring-indigo-200 focus:outline-none"
              aria-label="Search watches"
            />
            <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
          </div>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-200 focus:outline-none"
            aria-label="Sort by price"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center text-gray-700">Loading products…</p>
        ) : filteredSorted.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {filteredSorted.map((watch) => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No watches found.</p>
        )}
      </div>
    </section>
  );
};

export default Shop;

