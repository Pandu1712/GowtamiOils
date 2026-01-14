import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message =
      `*New Contact Request*\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917416226557?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get in Touch
          </h2>
          <p className="text-red-600 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-red-700 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">

                {/* Address */}
                <div className="flex items-start space-x-4 p-4 bg-yellow-100 rounded-xl">
                  <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-1">Address</h4>
                    <p className="text-red-600">
                      4-5 lawyer hari babu gari ricemill,<br />
                      ammani college road,<br />
                      Jaggayyapeta
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-yellow-100 rounded-xl">
                  <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-yellow-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-1">Phone</h4>
                    <a
                      href="tel:7416226557"
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      7416226557
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-yellow-100 rounded-xl">
                  <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-yellow-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-1">Email</h4>
                    <a
                      href="mailto:gowtamiorganicoils@gmail.com"
                      className="text-red-600 hover:text-red-800 transition break-all"
                    >
                      gowtamiorganicoils@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-red-700 rounded-2xl text-yellow-200 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">10:00 AM - 5:00 PM</span>
                </p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-yellow-100 p-8 rounded-2xl shadow-lg space-y-6"
            >
              <h3 className="text-2xl font-bold text-red-700 mb-4">
                Send us a Message
              </h3>

              <div>
                <label className="block text-red-700 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-red-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-red-700 font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-red-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-600 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-red-700 hover:bg-red-800 text-yellow-200 font-bold py-3 rounded-full transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send via WhatsApp'}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
