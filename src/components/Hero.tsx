import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/4202390/pexels-photo-4202390.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Pure Organic Oils',
      subtitle: 'Cold Pressed & Natural',
      description: 'Experience the authentic taste of traditional cold pressed oils',
    },
    {
      image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Authentic Traditional Snacks',
      subtitle: 'Made with Love & Care',
      description: 'Crispy, delicious snacks that bring back childhood memories',
    },
    {
      image: 'https://images.pexels.com/photos/4198935/pexels-photo-4198935.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Fresh Spices & Pickles',
      subtitle: 'Rich in Flavor',
      description: 'Handcrafted spices and pickles with traditional recipes',
    },
    {
      image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Natural Sweet Delights',
      subtitle: 'Healthy & Tasty',
      description: 'Pure jaggery-based sweets for a guilt-free indulgence',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden mt-16">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-amber-900/70 to-red-900/80 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                <div className="flex items-center space-x-2 mb-4 animate-slide-in">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                  <span className="text-amber-300 text-lg font-semibold tracking-wide">
                    {slide.subtitle}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-in animation-delay-200">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-in animation-delay-400">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-in animation-delay-600">
                  <Link
                    to="/products"
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Shop Now</span>
                  </Link>
                  <Link
                    to="/about"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-full border-2 border-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-amber-500 w-12'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
