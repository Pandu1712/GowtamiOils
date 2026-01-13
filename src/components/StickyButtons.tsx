import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const StickyButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <a
        href="https://wa.me/917416226557"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm font-semibold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      <a
        href="tel:7416226557"
        className="group relative w-14 h-14 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
        aria-label="Call"
      >
        <Phone className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm font-semibold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Us Now
        </span>
      </a>
    </div>
  );
};

export default StickyButtons;
