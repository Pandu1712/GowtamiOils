import React, { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import type { Product, ProductSize } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, sizeLabel: string) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
}) => {
  if (!product.sizes || product.sizes.length === 0) return null;

  // ✅ selected size state
  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    product.sizes[0]
  );

  const discount =
    selectedSize.mrp > selectedSize.price
      ? Math.round(
          ((selectedSize.mrp - selectedSize.price) / selectedSize.mrp) * 100
        )
      : 0;

  return (
    <div className="card">
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        {/* CATEGORY */}
        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
          {product.category}
        </span>

        {/* NAME */}
        <h3 className="font-bold mt-2 line-clamp-2">{product.name}</h3>

        {/* SIZE SELECTOR */}
        <div className="mt-3">
          <p className="text-xs text-gray-500 mb-1">Select Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.label}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-xs rounded-full border transition ${
                  selectedSize.label === size.label
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-gray-700 hover:border-red-400'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div className="mt-3">
          <span className="text-xl font-bold text-red-600">
            ₹{selectedSize.price}
          </span>

          {selectedSize.mrp > selectedSize.price && (
            <>
              <span className="ml-2 text-sm line-through text-gray-400">
                ₹{selectedSize.mrp}
              </span>
              <span className="ml-2 text-sm text-green-600 font-semibold">
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded flex items-center justify-center gap-1"
          >
            <Eye size={16} />
            View
          </button>

          <button
            onClick={() => onAddToCart(product, selectedSize.label)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded flex items-center justify-center gap-1"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
