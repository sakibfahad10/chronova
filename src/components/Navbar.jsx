// src/components/Navbar.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, User, Search, ShoppingCart, Bell, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const CartIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M3 3h2l.4 2M7 13h10l4-8H5.4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <circle 
      cx="7" 
      cy="21" 
      r="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <circle 
      cx="17" 
      cy="21" 
      r="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout, isAdmin, notifications } = useAuth();
  const { cartItems, cartLoading } = useCart();
  const navigate = useNavigate();
  const userMenuRef = useRef();

  const totalItems = cartLoading
    ? 0
    : cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAlerts = notifications?.length || 0;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUserMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    ...(isAdmin ? [{ name: 'Admin', path: '/admin/products' }] : []),
  ];

  // Determine display name for navbar
  const displayName = user
    ? user.displayName
      ? user.displayName
      : user.email.split('@')[0]
    : '';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-sm border-b border-gray-100" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center group" aria-label="Chronova Home">
          <div className="p-2 rounded-full group-hover:bg-gray-50 transition-all duration-300">
            <img src="/chronova-logo.svg" alt="Chronova Logo" className="h-9 w-9" />
          </div>
          <span className="ml-2 text-xl font-medium tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            Chronova
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1" role="navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 font-medium text-sm tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                      layoutId="navIndicator"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Actions & Mobile */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2 focus-within:ring-1 focus-within:ring-gray-300 transition-all duration-300" role="search">
            <Search size={16} className="text-gray-400" />
            <input
              type="search"
              placeholder="Search timeless pieces..."
              aria-label="Search products"
              className="ml-2 bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-500 w-48"
            />
          </div>

          {/* Notifications */}
          {user && (
            <button
              aria-label="View notifications"
              className="relative p-2 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <Bell size={20} className="text-gray-600" />
              {totalAlerts > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 bg-rose-500 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center"
                >
                  {totalAlerts}
                </motion.span>
              )}
            </button>
          )}

          {/* Cart */}
          <Link 
            to="/cart" 
            className="relative p-2 rounded-lg hover:bg-gray-50 transition duration-300 group"
            aria-label="View cart"
          >
            <CartIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            {totalItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 bg-gray-900 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          {/* User Menu */}
          {user ? (
            <div className="relative flex items-center" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition duration-300"
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300">
                  <span className="text-xs font-medium text-gray-700 uppercase">
                    {displayName.charAt(0)}
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 z-50"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{displayName}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition duration-200"
                    >
                      <User size={16} className="mr-3 text-gray-500" /> 
                      Profile & Account
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition duration-200"
                    >
                      <ShoppingCart size={16} className="mr-3 text-gray-500" /> 
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-50 transition duration-200 border-t border-gray-100"
                    >
                      <LogOut size={16} className="mr-3 text-gray-500" /> 
                      Sign out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="hidden md:flex space-x-3">
              <Link 
                to="/login" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Sign in
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                to="/register" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Create account
              </Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition duration-300"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white px-4 pt-2 pb-6 space-y-1 border-t border-gray-100 shadow-inner"
            role="navigation"
          >
            {/* Mobile Search */}
            <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 mb-2 mt-1">
              <Search size={16} className="text-gray-400" />
              <input
                type="search"
                placeholder="Search collection..."
                aria-label="Search products"
                className="ml-2 bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-500 w-full"
              />
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-3 font-medium rounded-lg transition-colors duration-200 ${
                    isActive 
                      ? 'text-gray-900 bg-gray-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {!user && (
              <div className="pt-3 border-t border-gray-100 mt-2">
                <Link 
                  to="/login" 
                  onClick={() => setMobileOpen(false)} 
                  className="block py-3 px-3 font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Sign in
                </Link>
                <Link 
                  to="/register" 
                  onClick={() => setMobileOpen(false)} 
                  className="block py-3 px-3 font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Create account
                </Link>
              </div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;