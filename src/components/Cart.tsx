import React, { useState } from 'react';
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import AddressModal from './AddressModal';

const Cart: React.FC = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCart();

  const [showAddressModal, setShowAddressModal] = useState(false);

  const handleCheckout = () => {
    if (cart.length > 0) setShowAddressModal(true);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center py-16">
          <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven’t added any products yet
          </p>
          <Link to="/products" className="btn-primary inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-amber-50 via-white to-red-50">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold gradient-text mb-8 text-center">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.productId}-${item.sizeLabel}`}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {item.name}
                        </h3>

                        {/* SIZE BADGE */}
                        <span className="inline-block mt-1 text-xs font-semibold bg-red-100 text-red-700 px-3 py-1 rounded-full">
                          Size: {item.sizeLabel}
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.productId, item.sizeLabel)
                        }
                        className="p-2 hover:bg-red-50 rounded-full text-red-600"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* QUANTITY + PRICE */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.sizeLabel,
                              item.quantity - 1
                            )
                          }
                          className="w-8 h-8 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-full flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>

                        <span className="text-lg font-bold w-10 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.sizeLabel,
                              item.quantity + 1
                            )
                          }
                          className="w-8 h-8 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-full flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">
                          ₹{item.price * item.quantity}
                        </div>
                        <div className="text-sm text-gray-500">
                          ₹{item.price} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{getTotalPrice()}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>

                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-red-600">₹{getTotalPrice()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full btn-primary flex items-center justify-center gap-2 mb-3"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </button>

              <Link
                to="/products"
                className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-full"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ADDRESS MODAL */}
      {showAddressModal && (
        <AddressModal
          cart={cart}
          totalPrice={getTotalPrice()}
          onClose={() => setShowAddressModal(false)}
          onSuccess={() => {
            clearCart();
            setShowAddressModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Cart;
