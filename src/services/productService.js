// src/services/productService.js
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../firebase';

const productsCol = collection(db, 'products');

//  Fetch all products (realtime listener)
export const subscribeToProducts = (callback) => {
  // orderBy(createdAt) দিলে ক্রিয়েটের সময় ক্রমে পাওয়া যাবে
  const q = query(productsCol, orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
    callback(items);
  });
};

export const fetchProductsOnce = async () => {
  const snapshot = await getDocs(productsCol);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
};

export const createProduct = async (newProduct) => {
  // newProduct should include name, price, description, imageUrl, createdAt
  const docRef = await addDoc(productsCol, newProduct);
  return { id: docRef.id, ...newProduct };
};

export const updateProduct = async (id, updatedFields) => {
  const prodDoc = doc(db, 'products', id);
  await updateDoc(prodDoc, { 
    ...updatedFields, 
    updatedAt: new Date() 
  });
};

export const deleteProduct = async (id) => {
  const prodDoc = doc(db, 'products', id);
  await deleteDoc(prodDoc);
};

