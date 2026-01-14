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
    <footer className="bg-red-900 text-yellow-200">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold text-red-800">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-300">Gowtami Organic</h3>
                <p className="text-yellow-200 text-sm">Pure & Natural</p>
              </div>
            </div>

            <p className="text-yellow-100 leading-relaxed">
              Your trusted source for premium organic oils, authentic snacks,
              and traditional delicacies. Quality and purity in every product.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-yellow-400 text-red-800 rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-300">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center text-yellow-100 hover:text-yellow-400 transition"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-300">Our Products</h3>
            <ul className="space-y-3">
              {['Organic Oils', 'Traditional Snacks', 'Spicy Delights', 'Sweet Treats'].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center text-yellow-100 hover:text-yellow-400 transition cursor-pointer"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-300">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-yellow-100">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <span>
                  4-5 lawyer hari babu gari ricemill,<br />
                  ammani college road,<br />
                  Jaggayyapeta
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a
                  href="tel:7416226557"
                  className="text-yellow-100 hover:text-yellow-400 transition"
                >
                  7416226557
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a
                  href="mailto:gowtamiorganicoils@gmail.com"
                  className="text-yellow-100 hover:text-yellow-400 transition break-all"
                >
                  gowtamiorganicoils@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-yellow-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-yellow-100 text-sm text-center md:text-left">
              © 2024 Gowtami Organic Oils. All rights reserved.
            </p>
            <p className="text-yellow-100 text-sm text-center md:text-right">
              Crafted with <span className="text-yellow-400">❤</span> for pure and natural products
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
