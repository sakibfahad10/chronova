// src/App.jsx
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
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

// Footer Pages (moved under pages/footerPages)
import WhyChronova from './pages/footerPages/WhyChronova.jsx';
import OurProcess from './pages/footerPages/OurProcess.jsx';
import RefundPolicy from './pages/footerPages/RefundPolicy.jsx';
import TermsAndConditions from './pages/footerPages/TermsAndConditions.jsx';
import WarrantyPolicy from './pages/footerPages/WarrantyPolicy.jsx';
import Ewaste from './pages/footerPages/Ewaste.jsx';

// Help & E-waste Detail Pages now also under footerPages
import RegisterToSell from './pages/footerPages/RegisterToSell.jsx';
import SellerPortal from './pages/footerPages/SellerPortal.jsx';
import SupportArea from './pages/footerPages/SupportArea.jsx';
import EnvironmentalImpact from './pages/footerPages/EnvironmentalImpact.jsx';
import ResponsibleTreatment from './pages/footerPages/ResponsibleTreatment.jsx';
import HowYouCanHelp from './pages/footerPages/HowYouCanHelp.jsx';

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

        {/* Footer Pages */}
        <Route path="/why-chronova" element={<WhyChronova />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/warranty-policy" element={<WarrantyPolicy />} />
        <Route path="/ewaste" element={<Ewaste />} />

        {/* Help Pages */}
        <Route path="/register-to-sell" element={<RegisterToSell />} />
        <Route path="/seller-portal" element={<SellerPortal />} />
        <Route path="/support" element={<SupportArea />} />

        {/* E-waste Detail Pages */}
        <Route path="/ewaste/impact" element={<EnvironmentalImpact />} />
        <Route path="/ewaste/treatment" element={<ResponsibleTreatment />} />
        <Route path="/ewaste/help" element={<HowYouCanHelp />} />

        {/* Cart */}
        <Route path="/cart" element={<CartPage />} />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ManageProducts />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
