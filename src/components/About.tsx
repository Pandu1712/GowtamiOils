import React from 'react';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Organic',
      description: 'All our products are made from pure, organic ingredients without any chemicals or preservatives.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We maintain the highest quality standards in every product we deliver to your doorstep.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Each product is crafted with care and dedication using traditional methods.',
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Our customers trust us for authentic taste and quality. Your satisfaction is our priority.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Gowtami Organic
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Your trusted partner for pure, organic, and traditional products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Gowtami Organic Oils is a family-owned business dedicated to bringing you the finest quality organic products. Founded with a passion for preserving traditional methods and authentic flavors, we have been serving families with pure, chemical-free products.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our cold pressed oils are extracted using traditional methods that preserve all the natural nutrients and flavors. From our premium coconut oil to our authentic groundnut oil, every product reflects our commitment to quality and purity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in sustainable farming practices and support local farmers to ensure that you get the best organic products while contributing to a healthier planet.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in animation-delay-200">
            <img
              src="https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Coconut-Oil_veklkw.png"
              alt="Organic Production"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Badam_Oil_fuk0zu.webp"
              alt="Quality Products"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 mt-8"
            />
            <img
              src="https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469688/Peanut_Chikki_uo8i1i.jpg"
              alt="Traditional Snacks"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Ragi_maycov.webp"
              alt="Spices"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 mt-8"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
