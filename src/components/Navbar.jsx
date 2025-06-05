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

  // যতক্ষণ cartLoading=true, ততক্ষণ ব্যাজ দেখাবেনা; loaded হলে যোগফল দেখাবে
  const totalItems = cartLoading ? 0 : cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    {
      name: (
        <div className="relative flex items-center group cursor-pointer select-none">
          <CartIcon className="w-5 h-5 mr-1 transition-colors duration-300 group-hover:text-black text-gray-600" />
          <span className="transition-colors duration-300 group-hover:text-black text-gray-600 font-medium">
            Cart
          </span>
          {/** cartLoading থাকলে কোনো ব্যাজ দেখাবেনা **/}
          {!cartLoading && totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-600 text-white rounded-full text-sm w-6 h-6 flex items-center justify-center font-semibold shadow-lg">
              {totalItems}
            </span>
          )}
        </div>
      ),
      path: '/cart',
    },
    // যদি isAdmin=true, তাহলে “Admin Panel” লিঙ্ক দেখানো হবে
    ...(isAdmin ? [{ name: 'Admin Panel', path: '/admin/products' }] : []),
  ];

  // বাইরের ক্লিক হলে user menu বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setUserMenuOpen(false);
      // লগআউটের পর Navbar কে আপডেট রাখতে চাইলে ইচ্ছামতো navigate দিতে পারেন
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-white via-gray-100 to-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <Link to="/" className="flex items-center gap-2">
          <img src="/chronova-logo.svg" alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-gray-800 tracking-wider">
            Chronova
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive
                    ? 'text-black underline underline-offset-4'
                    : 'text-gray-600 hover:text-black transition-colors duration-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition"
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
              >
                <User size={16} className="mr-1 text-gray-500" />
                {user.email.split('@')[0]}
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm text-gray-600 font-medium hover:underline"
              >
                Register
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 pt-2 space-y-2">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-base font-medium ${
                  isActive
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black transition-colors duration-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <div className="pt-2 space-y-1">
              <button
                onClick={() => {
                  navigate('/profile');
                  setIsOpen(false);
                }}
                className="flex items-center text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full w-full hover:bg-gray-200 transition"
              >
                <User size={16} className="mr-1 text-gray-500" />
                {user.email.split('@')[0]}
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block text-red-500 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="pt-2 space-y-1">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block text-blue-600 text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 text-sm font-medium"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
