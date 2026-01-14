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
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-red-600 py-4'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold text-red-700">G</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold ${
                  isScrolled ? 'text-red-600' : 'text-yellow-300'
                }`}
              >
                Gowtami Organic
              </span>
              <span
                className={`text-xs ${
                  isScrolled ? 'text-yellow-600' : 'text-yellow-200'
                }`}
              >
                Pure & Natural
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path, link.section)}
                className={`font-semibold transition ${
                  isScrolled
                    ? 'text-red-600 hover:text-yellow-500'
                    : 'text-yellow-200 hover:text-yellow-400'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Call */}
            <a
              href="tel:7416226557"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition ${
                isScrolled
                  ? 'bg-red-600 text-yellow-200'
                  : 'bg-yellow-400 text-red-700'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>

            {/* Cart */}
            <Link
              to="/cart"
              className={`relative flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition ${
                isScrolled
                  ? 'bg-yellow-400 text-red-700'
                  : 'bg-yellow-300 text-red-700'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-red-600' : 'text-yellow-200'
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path, link.section)}
                  className={`font-semibold py-2 px-4 rounded ${
                    isScrolled
                      ? 'text-red-600 hover:bg-yellow-100'
                      : 'text-yellow-200 hover:bg-red-500/20'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="tel:7416226557"
                className="flex items-center justify-center space-x-2 bg-yellow-400 text-red-700 py-2 rounded font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>

              <Link
                to="/cart"
                className="flex items-center justify-center space-x-2 bg-yellow-300 text-red-700 py-2 rounded font-semibold"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Cart ({totalItems})</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
