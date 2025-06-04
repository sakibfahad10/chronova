import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../context/CartContext';
import { db } from '../firebase';

const ProductDetails = () => {
  const { Id } = useParams(); // Firestore document ID
  const [watch, setWatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchWatch = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'products', Id);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setWatch({ id: snap.id, ...snap.data() });
        } else {
          setWatch(null);
        }
      } catch (err) {
        console.error('Error fetching watch details:', err);
        setWatch(null);
      }
      setLoading(false);
    };
    fetchWatch();
  }, [Id]);

  if (loading) {
    return <p className="text-center mt-20">Loading…</p>;
  }

  if (!watch) {
    return <div className="text-center mt-20 text-red-600">Watch not found.</div>;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={watch.imageUrl}
          alt={watch.name}
          className="w-full rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">{watch.name}</h2>
          <p className="text-gray-700 mb-6 text-lg">{watch.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-4">${watch.price}</p>
          <button
            onClick={() =>
              addItem({
                Id: watch.id,
                name: watch.name,
                price: watch.price,
                image: watch.imageUrl,
                description: watch.description,
                quantity: 1,
              })
            }
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

