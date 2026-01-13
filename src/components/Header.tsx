import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', section: 'hero' },
    { name: 'About', path: '/about', section: 'about' },
    { name: 'Products', path: '/products', section: 'products' },
    { name: 'Gallery', path: '/gallery', section: 'gallery' },
    { name: 'Reviews', path: '/reviews', section: 'reviews' },
    { name: 'Contact', path: '/contact', section: 'contact' },
  ];

  const handleNavClick = (path: string, section: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/' && path === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const totalItems = getTotalItems();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-xl py-3'
          : 'bg-gradient-to-r from-red-600 via-amber-500 to-red-600 py-4'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">G</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-red-600' : 'text-white'
                }`}
              >
                Gowtami Organic
              </span>
              <span
                className={`text-xs ${
                  isScrolled ? 'text-amber-600' : 'text-amber-100'
                }`}
              >
                Pure & Natural
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path, link.section)}
                className={`font-semibold transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-red-600'
                    : 'text-white hover:text-amber-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:7416226557"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white'
                  : 'bg-white text-red-600'
              } shadow-lg`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Call Us</span>
            </a>
            <Link
              to="/cart"
              className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white'
                  : 'bg-white text-amber-600'
              } shadow-lg`}
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-red-600' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path, link.section)}
                  className={`font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-red-50'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:7416226557"
                className="flex items-center justify-center space-x-2 bg-white text-red-600 py-2 px-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <Link
                to="/cart"
                className="flex items-center justify-center space-x-2 bg-white text-amber-600 py-2 px-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 relative"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
