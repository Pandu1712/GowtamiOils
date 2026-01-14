import React, { useState } from 'react';
import { X, MapPin, User, Phone, Home, MessageCircle } from 'lucide-react';
import type { CartItem } from '../types';

interface AddressModalProps {
  cart: CartItem[];
  totalPrice: number;
  onClose: () => void;
  onSuccess: () => void;
}

const AddressModal: React.FC<AddressModalProps> = ({ cart, totalPrice, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `*New Order from Gowtami Organic*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Address: ${formData.address}\n`;
    message += `City: ${formData.city}\n`;
    message += `Pincode: ${formData.pincode}\n`;
    if (formData.notes) {
      message += `Notes: ${formData.notes}\n`;
    }
    message += `\n*Order Details:*\n`;

cart.forEach((item, index) => {
  message += `\n${index + 1}. ${item.name}\n`;
  message += `   Size: ${item.sizeLabel}\n`;
  message += `   Quantity: ${item.quantity}\n`;
  message += `   Price: ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
});


    message += `\n*Total Amount: ₹${totalPrice}*\n`;
    message += `\nThank you for your order!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917416226557?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-in">
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-amber-500 text-white z-10 flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold">Delivery Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <User className="w-5 h-5 mr-2 text-red-600" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <Phone className="w-5 h-5 mr-2 text-red-600" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="input-field"
              placeholder="10 digit phone number"
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <Home className="w-5 h-5 mr-2 text-red-600" />
              Complete Address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="input-field resize-none"
              placeholder="House/Flat No, Street, Landmark"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <MapPin className="w-5 h-5 mr-2 text-red-600" />
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="City"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <MapPin className="w-5 h-5 mr-2 text-red-600" />
                Pincode *
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                pattern="[0-9]{6}"
                className="input-field"
                placeholder="6 digit pincode"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <MessageCircle className="w-5 h-5 mr-2 text-red-600" />
              Special Instructions (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={2}
              className="input-field resize-none"
              placeholder="Any special delivery instructions..."
            />
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-red-50 p-4 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold text-gray-800 mb-2">Order Summary</h3>
            <div className="space-y-1 text-sm text-gray-600">
              {cart.map((item) => (
                <div key={item.productId} className="flex justify-between">

                  <span>
                    {item.name} ({item.quantity}x)
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t pt-2 flex justify-between font-bold text-lg text-red-600">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Order via WhatsApp</span>
          </button>

          <p className="text-xs text-center text-gray-500">
            You will be redirected to WhatsApp to confirm your order
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
