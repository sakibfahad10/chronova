import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { subscribeToProducts } from '../services/productService';

const WatchList = () => {
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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Watch Collection</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search watches..."
          className="border border-gray-300 p-3 rounded w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-gray-300 p-3 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-black"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center">Loading watches…</p>
      ) : filteredSorted.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSorted.map((watch) => (
            <ProductCard key={watch.id} watch={watch} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No watches found.</p>
      )}
    </div>
  );
};

export default WatchList;
