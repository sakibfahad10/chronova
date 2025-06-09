// src/components/Navbar.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout, isAdmin } = useAuth();
  const { cartItems, cartLoading } = useCart();
  const navigate = useNavigate();
  const userMenuRef = useRef();

  useEffect(() => {
    const handleOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUserMenuOpen(false);
    setIsOpen(false);
    navigate('/');
  };

  const totalItems = cartLoading ? 0 : cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const username = user?.email.split('@')[0];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    ...(isAdmin ? [{ name: 'Admin Panel', path: '/admin/products' }] : []),
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/chronova-logo.svg" alt="Logo" className="w-9 h-9" />
          <span className="text-xl font-semibold text-gray-800">Chronova</span>
        </Link>

        {/* Right Side (Mobile Icons) */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <CartIcon className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User */}
          {user && (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1 text-gray-700"
              >
                <User size={20} />
                <span className="text-sm font-medium">{username}</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-md border rounded-md">
                  <button
                    onClick={() => { navigate('/profile'); setUserMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-800 font-semibold underline underline-offset-4'
                  : 'text-gray-600 hover:text-gray-800'
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Cart & User */}
          <Link to="/cart" className="relative">
            <CartIcon className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1 text-gray-700"
              >
                <User size={20} />
                <span className="text-sm font-medium">{username}</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-md border rounded-md">
                  <button
                    onClick={() => { navigate('/profile'); setUserMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:underline">
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Slide Down Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 animate-slide-down">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-gray-700 hover:bg-gray-100"
            >
              {link.name}
            </NavLink>
          ))}
          {!user && (
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-gray-700 hover:bg-gray-100"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
