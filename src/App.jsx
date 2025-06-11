// src/App.jsx
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/Cart';
import Success from './pages/Success';
import Checkout from './pages/Checkout';
import WatchList from './pages/WatchList';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile.jsx';

import PrivateRoute from './context/PrivateRoute';
import AdminRoute from './context/AdminRoute';           

import ManageProducts from './pages/admin/ManageProducts'; // Admin UI

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:Id" element={<ProductDetails />} />
        <Route path="/watches" element={<WatchList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Cart – public */}
        <Route path="/cart" element={<CartPage />} />

      {/* Checkout – accessible after login */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        {/* Profile – login required */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Admin-only routes: product management */}
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ManageProducts />
            </AdminRoute>
          }
        />
        {/* routes : profile edit */}
        <Route
        path="/profile/edit"
         element={
           <PrivateRoute>
             <EditProfile />
           </PrivateRoute>
         }
       />
      </Routes>
    </>
  );
}

export default App;
