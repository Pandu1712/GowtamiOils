import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/products';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear what our happy customers have to say about our products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-10 h-10 text-amber-500 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'fill-amber-500 text-amber-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                "{review.comment}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-red-600 to-amber-500 rounded-2xl shadow-xl animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-3">
            Join Our Happy Customers
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Experience the quality and authenticity that has made us a trusted name in organic products
          </p>
          <a href="#products" className="bg-white text-red-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
