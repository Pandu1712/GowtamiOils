import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Product } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, sizeLabel: string) => void;
  removeFromCart: (productId: string, sizeLabel: string) => void;
  updateQuantity: (productId: string, sizeLabel: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('gowtami-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('gowtami-cart', JSON.stringify(cart));
  }, [cart]);

  // ✅ ADD TO CART WITH SIZE
  const addToCart = (product: Product, sizeLabel: string) => {
    const selectedSize = product.sizes.find(s => s.label === sizeLabel);
    if (!selectedSize) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.productId === product.id && item.sizeLabel === sizeLabel
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.productId === product.id && item.sizeLabel === sizeLabel
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevCart,
        {
          productId: product.id,
          name: product.name,
          image: product.image,
          category: product.category,
          sizeLabel,
          price: selectedSize.price,
          mrp: selectedSize.mrp,
          quantity: 1,
        },
      ];
    });
  };

  // ✅ REMOVE ITEM (SIZE-SPECIFIC)
  const removeFromCart = (productId: string, sizeLabel: string) => {
    setCart(prevCart =>
      prevCart.filter(
        item => !(item.productId === productId && item.sizeLabel === sizeLabel)
      )
    );
  };

  // ✅ UPDATE QUANTITY
  const updateQuantity = (
    productId: string,
    sizeLabel: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, sizeLabel);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId && item.sizeLabel === sizeLabel
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
