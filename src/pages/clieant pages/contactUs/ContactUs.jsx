import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="relative z-10 bg-black bg-opacity-50 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
        
        {/* Left: Form */}
        <div>
          <h1 className="text-4xl font-serif font-semibold text-white mb-4">MESSAGE</h1>
          <p className="text-white mb-6">
            Do you have anything in your mind to tell us? <br />
            Please don't hesitate to get in touch with us via our contact form.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your name*"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your email*"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Your phone*"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your message*"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded h-32"
              required
            ></textarea>

            <div className="pt-2">
              <div className="border rounded px-4 py-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" required />
                  <span>I'm not a robot</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-900 text-white py-2 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="text-white">
          <h2 className="text-xl font-semibold mb-4">GET IN TOUCH</h2>
          <p>Marino Beach</p>
          <p>No 590, Marine Drive, Colombo 03.</p>
          <div className="mt-4 space-y-1">
            <p><strong>Telephone:</strong> +94112375375</p>
            <p><strong>Duty Officer:</strong> +94764663493</p>
            <p><strong>Email:</strong> info@marinobeach.com</p>
          </div>
          <div className="mt-6 space-y-1">
            <h3 className="font-semibold">Reservations</h3>
            <p><strong>Telephone:</strong> +94112375375</p>
            <p><strong>WhatsApp:</strong> +94743671106</p>
            <p><strong>Email:</strong> reservations@marinobeach.com</p>
          </div>
          <div className="mt-6 space-y-1">
            <h3 className="font-semibold">Marino Beach Office - India</h3>
            <p><strong>Telephone:</strong> 18003091631 (Toll Free)</p>
          </div>

          <div className="mt-6 flex space-x-4 text-2xl">
            <a href="#" className="hover:text-purple-500">📘</a>
            <a href="#" className="hover:text-purple-500">📷</a>
            <a href="#" className="hover:text-purple-500">✖</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
