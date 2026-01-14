import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { products } from '../data/products';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { addToCart } = useCart();

  const categories = [
    'All',
    'Cold Pressed Oil',
    'Wood Pressed Oil',
    'Ghee',
    'Flour',
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // UPDATED: sizeLabel support
  const handleAddToCart = (product: Product, sizeLabel: string) => {
    addToCart(product, sizeLabel);
  };

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Premium Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our wide range of traditional and organic products
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 rounded-full focus:outline-none focus:border-red-500 transition shadow-lg"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default Products;
