import React, { useState, useEffect, useMemo } from 'react';
import { subscribeToProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';

const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const h = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(h);
  }, [value, delay]);
  return debounced;
};

const WatchList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = subscribeToProducts((items) => {
      setProducts(items);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const filteredSorted = useMemo(() => {
    return products
      .filter((p) => p.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
      .sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        if (sortOrder === 'desc') return b.price - a.price;
        return 0;
      });
  }, [products, debouncedSearch, sortOrder]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Watch Collection</h1>

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search watches..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded flex-grow focus:ring focus:ring-black focus:outline-none"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:ring focus:ring-black focus:outline-none"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-700">Loading watches…</p>
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
  );
};

export default WatchList;
