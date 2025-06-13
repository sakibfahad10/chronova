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
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7" cy="21" r="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="17" cy="21" r="2" strokeLinecap="round" strokeLinejoin="round" />
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
    { name: 'About', path: '/about' },
    ...(isAdmin ? [{ name: 'Admin Panel', path: '/admin/products' }] : []),
  ];

  // Determine display name for navbar
  const displayName = user
    ? user.displayName
      ? user.displayName
      : user.email.split('@')[0]
    : '';

  return (
    <header className="sticky top-0 z-50 bg-white shadow" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Chronova Home">
          <img src="/chronova-logo.svg" alt="Chronova Logo" className="h-8 w-8" />
          <span className="ml-2 text-xl font-semibold text-gray-900">Chronova</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6" role="navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-1 py-2 font-medium transition-colors duration-200 ${
                  isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions & Mobile */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-blue-500" role="search">
            <Search size={16} className="text-gray-500" />
            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
              className="ml-2 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Notifications */}
          {user && (
            <button
              aria-label="View notifications"
              className="relative p-2 rounded-full hover:bg-gray-200 transition"
            >
              <Bell size={20} className="text-gray-700" />
              {totalAlerts > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {totalAlerts}
                </span>
              )}
            </button>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-200 transition" aria-label="View cart">
            <ShoppingCart size={20} className="text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User Menu */}
          {user ? (
            <div className="relative flex items-center space-x-1" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-200 transition"
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
              >
                <User size={18} className="text-gray-700" />
                <span className="text-gray-700 font-medium">
                  {displayName}
                </span>
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden border border-gray-200"
                  >
                    <Link
                      to="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 flex items-center text-red-600 hover:bg-red-50 transition"
                    >
                      <LogOut size={16} className="mr-1" /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="hidden md:flex space-x-3">
              <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline">Login</Link>
              <Link to="/register" className="text-sm font-medium text-gray-700 hover:underline">Register</Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            transition={{ type: 'tween', duration: 0.2 }}
            className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 border-t border-gray-200"
            role="navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-2 font-medium rounded transition-colors duration-200 ${
                    isActive ? 'text-blue-600 bg-gray-100' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {!user && (
              <div className="pt-2 border-t border-gray-200">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-blue-900 hover:underline">Login</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 hover:underline">Register</Link>
              </div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
