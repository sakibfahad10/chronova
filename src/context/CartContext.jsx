// src/context/CartContext.jsx

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useRef,
} from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { db } from '../firebase';

export const CartContext = createContext();

const CART_STORAGE_KEY = 'chronova_cart';

// ——————————————
// Helper Functions
// ——————————————

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

// Merge local + remote WITHOUT duplicating quantities
const mergeCarts = (localCart, remoteCart) => {
  const remoteMap = new Map();
  remoteCart.forEach((item) => {
    remoteMap.set(item.Id, { ...item });
  });

  const merged = [...remoteCart];
  localCart.forEach((item) => {
    if (!remoteMap.has(item.Id)) {
      merged.push({ ...item });
    }
  });
  return merged;
};

// ——————————————
// Reducer
// ——————————————

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

export const CartProvider = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const [cartLoading, setCartLoading] = useState(true);

  // এই রেফ ফ্ল্যাগ ইঙ্গিত দেবে initial load সম্পন্ন হয়েছে কিনা
  const initialLoadDone = useRef(false);

  // ——————————————
  // 1) Auth state পরিবর্তন হলে বা লোডিং শেষ হলে কার্ট লোডিং
  // ——————————————
  useEffect(() => {
    // প্রত্যেকবার authState পরিবর্তনের শুরুতেই রিসেট
    initialLoadDone.current = false;

    if (authLoading) return;

    let unsubscribe = null;

    const loadLocal = () => {
      const local = getLocalCart();
      dispatch({ type: 'INITIALIZE', payload: local });
      setCartLoading(false);
      initialLoadDone.current = true; // initial load শেষ
    };

    const loadRemote = async (uid) => {
      try {
        const cartRef = doc(db, 'carts', uid);
        const docSnap = await getDoc(cartRef);
        const remoteItems = docSnap.exists() ? docSnap.data().items || [] : [];
        const localItems = getLocalCart();

        let finalItems;
        if (localItems.length > 0) {
          // লোকাল কার্টে কিছু থাকলে মার্জ করে ওভাররাইট
          finalItems = mergeCarts(localItems, remoteItems);
          await setDoc(cartRef, { items: finalItems }); // overwrite
        } else {
          // লোকাল খালি থাকলে শুধুমাত্র রিমোট কার্ট দেখাবে
          finalItems = remoteItems;
        }

        dispatch({ type: 'SET_ITEMS', payload: finalItems });
        localStorage.removeItem(CART_STORAGE_KEY);

        // সাবস্ক্রাইব, যাতে পরবর্তী যেকোনো পরিবর্তন রিয়েলটাইমে আসে
        unsubscribe = onSnapshot(cartRef, (snap) => {
          if (snap.exists()) {
            const updated = snap.data().items || [];
            dispatch({ type: 'SET_ITEMS', payload: updated });
          }
        });
      } catch (err) {
        console.error('Error syncing cart on login:', err);
        // কোনো সমস্যা হলে লোকাল কার্ট দেখান
        loadLocal();
      } finally {
        setCartLoading(false);
        initialLoadDone.current = true; // initial load শেষ
      }
    };

    if (user) {
      loadRemote(user.uid);
    } else {
      loadLocal();
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user, authLoading]);

  // ——————————————
  // 2) cartItems পরিবর্তন হলে Firestore বা LocalStorage-এ রাইট
  //    (শুধুমাত্র initial load সম্পন্ন হলে)
  // ——————————————
  useEffect(() => {
    // যতক্ষণ পর্যন্ত auth লোড হচ্ছে বা initial load শেষ হয়নি, অপেক্ষা করুন
    if (authLoading || !initialLoadDone.current) return;

    if (user) {
      // ইউজার লগইন করে থাকলে Firestore-এ overwrite
      const cartRef = doc(db, 'carts', user.uid);
      setDoc(cartRef, { items: cartItems }).catch((err) =>
        console.error('Error updating Firestore cart:', err)
      );
    } else {
      // গেস্ট ইউজার → LocalStorage
      saveLocalCart(cartItems);
    }
  }, [cartItems, user, authLoading]);

  // ——————————————
  // Action Creators
  // ——————————————
  const addItem = (item) =>
    dispatch({ type: 'ADD_ITEM', payload: item });

  const removeItem = (Id) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { Id } });

  const updateQuantity = (Id, newQty) =>
    dispatch({ type: 'UPDATE_ITEM', payload: { Id, quantity: newQty } });

  const clearCart = () =>
    dispatch({ type: 'SET_ITEMS', payload: [] });

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


