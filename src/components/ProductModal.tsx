import React, { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import type { Product, ProductSize } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, sizeLabel: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [size, setSize] = useState<ProductSize>(product.sizes[0]);

  const discount =
    Math.round(((size.mrp - size.price) / size.mrp) * 100);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-3xl">
        <button onClick={onClose} className="float-right">
          <X />
        </button>

        <img src={product.image} className="h-80 w-full object-cover rounded" />

        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>

        <div className="mt-2">
          <span className="text-3xl font-bold text-red-600">
            ₹{size.price}
          </span>
          <span className="ml-2 line-through text-gray-400">
            ₹{size.mrp}
          </span>
          <span className="ml-2 text-green-600">
            {discount}% OFF
          </span>
        </div>

        <div className="flex gap-2 mt-4">
          {product.sizes.map(s => (
            <button
              key={s.label}
              onClick={() => setSize(s)}
              className={`px-3 py-2 border rounded ${
                s.label === size.label
                  ? 'bg-red-600 text-white'
                  : ''
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onAddToCart(product, size.label)}
          className="mt-6 w-full bg-red-600 text-white py-3 rounded flex justify-center gap-2"
        >
          <ShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
