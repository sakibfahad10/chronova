// src/context/CartContext.jsx

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { db } from '../firebase';

export const CartContext = createContext();

const CART_STORAGE_KEY = 'chronova_cart';

// —————— Helpers for LocalStorage ——————

const getLocalCart = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read local cart:', e);
    return [];
  }
};

const saveLocalCart = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error('Failed to write local cart:', e);
  }
};

// —————— Merge two carts (remote + local) by Id and sum quantities ——————

const mergeCarts = (localCart, remoteCart) => {
  const map = new Map();
  ;[...remoteCart, ...localCart].forEach((item) => {
    const existing = map.get(item.Id);
    if (existing) {
      map.set(item.Id, {
        ...item,
        quantity: existing.quantity + item.quantity,
      });
    } else {
      map.set(item.Id, { ...item });
    }
  });
  return Array.from(map.values());
};

// —————— Reducer to manage cart state locally ——————

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return action.payload;

    case 'ADD_ITEM': {
      const item = action.payload;
      const found = state.find((i) => i.Id === item.Id);
      if (found) {
        return state.map((i) =>
          i.Id === item.Id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...state, item];
    }

    case 'REMOVE_ITEM':
      return state.filter((i) => i.Id !== action.payload.Id);

    case 'UPDATE_ITEM':
      return state.map((i) =>
        i.Id === action.payload.Id
          ? { ...i, quantity: Math.max(1, action.payload.quantity) }
          : i
      );

    case 'SET_ITEMS':
      return action.payload;

    default:
      return state;
  }
};

// —————— CartProvider & Context ——————

export const CartProvider = ({ children }) => {
  const { user, loading } = useAuth(); // Now also pulling loading
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    // Don’t run until Auth is initialized
    if (loading) return;

    let unsubscribe = null;

    const loadLocal = () => {
      const local = getLocalCart();
      dispatch({ type: 'INITIALIZE', payload: local });
    };

    const loadRemote = async (uid) => {
      const cartRef = doc(db, 'carts', uid);
      const docSnap = await getDoc(cartRef);
      const remoteItems = docSnap.exists() ? docSnap.data().items || [] : [];
      const localItems = getLocalCart();

      // Merge and write back to Firestore
      const merged = mergeCarts(localItems, remoteItems);
      await setDoc(cartRef, { items: merged }, { merge: true });
      dispatch({ type: 'SET_ITEMS', payload: merged });
      localStorage.removeItem(CART_STORAGE_KEY);

      // Subscribe to Firestore changes
      unsubscribe = onSnapshot(cartRef, (snap) => {
        if (snap.exists()) {
          const updated = snap.data().items || [];
          dispatch({ type: 'SET_ITEMS', payload: updated });
        }
      });
    };

    if (user) {
      loadRemote(user.uid).catch((err) =>
        console.error('Error syncing cart on login:', err)
      );
    } else {
      loadLocal();
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user, loading]);

  useEffect(() => {
    if (loading) return;

    if (user) {
      const cartRef = doc(db, 'carts', user.uid);
      setDoc(cartRef, { items: cartItems }, { merge: true }).catch((err) =>
        console.error('Error updating Firestore cart:', err)
      );
    } else {
      saveLocalCart(cartItems);
    }
  }, [cartItems, user, loading]);

  // ——— Action creators ———

  const addItem = (item) =>
    dispatch({ type: 'ADD_ITEM', payload: item });

  const removeItem = (Id) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { Id } });

  const updateQuantity = (Id, newQty) =>
    dispatch({ type: 'UPDATE_ITEM', payload: { Id, quantity: newQty } });

  const clearCart = () => dispatch({ type: 'SET_ITEMS', payload: [] });

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// —————— Convenience hook: useCart ——————

export const useCart = () => useContext(CartContext);


