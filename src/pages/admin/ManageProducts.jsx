// src/pages/admin/ManageProducts.jsx
import React, { useEffect, useState } from 'react';
import {
  subscribeToProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../../services/productService';

const blankForm = {
  name: '',
  price: '',
  description: '',
  imageUrl: '',
};

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(blankForm);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  // রিয়েলটাইম সাবস্ক্রাইব
  useEffect(() => {
    const unsubscribe = subscribeToProducts((items) => {
      setProducts(items);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ফর্ম ইনপুট হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // নতুন পণ্য যোগ
  const handleCreate = async () => {
    setSaving(true);
    const newProduct = {
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      imageUrl: formData.imageUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      await createProduct(newProduct);
      setFormData(blankForm);
    } catch (err) {
      console.error('Error creating product:', err);
    }
    setSaving(false);
  };

  // সম্পাদনা শুরু
  const startEdit = (prod) => {
    setEditingId(prod.id);
    setFormData({
      name: prod.name,
      price: prod.price,
      description: prod.description,
      imageUrl: prod.imageUrl,
    });
  };

  // পণ্য আপডেট
  const handleUpdate = async () => {
    setSaving(true);
    const updatedFields = {
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      imageUrl: formData.imageUrl,
      // updatedAt: auto আপডেট হবে
    };
    try {
      await updateProduct(editingId, updatedFields);
      setEditingId(null);
      setFormData(blankForm);
    } catch (err) {
      console.error('Error updating product:', err);
    }
    setSaving(false);
  };

  // পণ্য মুছুন
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this product?')) {
      try {
        await deleteProduct(id);
      } catch (err) {
        console.error('Error deleting product:', err);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      {/* Form: Create or Update */}
      <div className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Product' : 'Add New Product'}
        </h2>
        <div className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {editingId ? (
            <button
              onClick={handleUpdate}
              disabled={saving}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {saving ? 'Saving…' : 'Update Product'}
            </button>
          ) : (
            <button
              onClick={handleCreate}
              disabled={saving}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {saving ? 'Saving…' : 'Add Product'}
            </button>
          )}
        </div>
      </div>

      {/* Product List */}
      {loading ? (
        <p>Loading products…</p>
      ) : (
        <div className="space-y-4">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={prod.imageUrl}
                  alt={prod.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{prod.name}</h3>
                  <p className="text-gray-600">${prod.price}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(prod)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(prod.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
