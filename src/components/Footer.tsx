import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-900 to-amber-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Gowtami Organic</h3>
                <p className="text-amber-200 text-sm">Pure & Natural</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted source for premium organic oils, authentic snacks, and traditional delicacies. Quality and purity in every product.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-300">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-300">Our Products</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center group cursor-pointer">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:w-4 transition-all duration-300"></span>
                Organic Oils
              </li>
              <li className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center group cursor-pointer">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:w-4 transition-all duration-300"></span>
                Traditional Snacks
              </li>
              <li className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center group cursor-pointer">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:w-4 transition-all duration-300"></span>
                Spicy Delights
              </li>
              <li className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center group cursor-pointer">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:w-4 transition-all duration-300"></span>
                Sweet Treats
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-300">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  4-5 lawyer hari babu gari ricemill,<br />
                  ammani college road,<br />
                  Jaggayyapeta
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="tel:7416226557" className="text-gray-300 hover:text-amber-300 transition-colors duration-300">
                  7416226557
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:gowtamiorganicoils@gmail.com" className="text-gray-300 hover:text-amber-300 transition-colors duration-300 break-all">
                  gowtamiorganicoils@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Gowtami Organic Oils. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Crafted with <span className="text-red-500">❤</span> for pure and natural products
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
