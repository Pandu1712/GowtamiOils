import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Groundnut_Oil_lcsrh4.webp',
      title: 'Pure Organic Oils',
      subtitle: 'Cold Pressed & Natural',
      description: 'Experience the authentic taste of traditional cold pressed oils',
    },
    {
      image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Badam_Oil_fuk0zu.webp',
      title: 'Authentic Traditional Snacks',
      subtitle: 'Made with Love & Care',
      description: 'Crispy, delicious snacks that bring back childhood memories',
    },
    {
      image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Wheat_Flour_kcobor.webp',
      title: 'Fresh Spices & Pickles',
      subtitle: 'Rich in Flavor',
      description: 'Handcrafted spices and pickles with traditional recipes',
    },
    {
      image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Hot_Mixture_jjmi9p.webp',
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
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Solid overlay – NO gradient */}
            <div className="absolute inset-0 bg-red-900/75 z-10"></div>

            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-300 text-lg font-semibold">
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-yellow-200 mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Shop Now */}
                  <Link
                    to="/products"
                    className="flex items-center justify-center space-x-2 bg-yellow-400 text-red-800 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Shop Now</span>
                  </Link>

                  {/* Learn More */}
                  <Link
                    to="/about"
                    className="bg-red-700 hover:bg-red-600 text-yellow-200 font-semibold py-3 px-8 rounded-full border-2 border-yellow-300 shadow-lg hover:scale-105 transition text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-yellow-400 text-red-800 p-3 rounded-full hover:scale-110 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-yellow-400 text-red-800 p-3 rounded-full hover:scale-110 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-yellow-400 w-10'
                : 'bg-yellow-200 w-3 hover:bg-yellow-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
