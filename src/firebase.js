import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb7nGq-izR5M-OeG7n1vzFyRCleGQNpW4",
  authDomain: "my-ecommerce-site-56623.firebaseapp.com",
  projectId: "my-ecommerce-site-56623",
  storageBucket: "my-ecommerce-site-56623.firebasestorage.app",
  messagingSenderId: "7415565055",
  appId: "1:7415565055:web:852ba1bc27a69143025aca",
  measurementId: "G-MYB6BNDG3K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export { db };
export default app;
