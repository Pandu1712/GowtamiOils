import React from 'react';
import { X, ShoppingCart, Package, Info } from 'lucide-react';
import type { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-in">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold gradient-text">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              {discountPercentage > 0 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-amber-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                  {discountPercentage}% OFF
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-amber-100 to-red-100 text-red-700 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-3xl font-bold text-gray-800 mt-3 mb-2">{product.name}</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl font-bold text-red-600">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xl text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Package className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">Weight: {product.weight}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-amber-600" />
                    Description
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-red-600" />
                    How to Use
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{product.howToUse}</p>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full btn-primary flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
