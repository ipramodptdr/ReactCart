import React, { useState } from 'react';
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <nav className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-cyan-500">ReactCart</Link>

            {/* Center - Search Bar */}
            <div className="flex-1 max-w-2xl px-4">
              <form className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search for products..."
                  className={`w-full px-4 py-2 pr-10 rounded-full border-2 ${
                    isSearchFocused ? 'border-cyan-500 bg-white shadow-sm' : 'border-gray-200 bg-gray-50'
                  } focus:outline-none transition-all duration-300`}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-500"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right side - Navigation Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/wishlist" className="text-gray-700 hover:text-cyan-500"><FiHeart className="w-6 h-6" /></Link>
              <Link to="/cart" className="text-gray-700 hover:text-cyan-500 relative">
                <FiShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-cyan-500"><FiUser className="w-6 h-6" /></Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-cyan-500 focus:outline-none"
              >
                {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;