import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            We'd love to hear from you. Reach out through the form below or use
            our contact details.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg w-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Send us a message
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg w-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              Feel free to get in touch directly.
            </p>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Address</h3>
              <p className="text-gray-600">123 Blog Street, Blog City, BC 12345</p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Phone</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">contact@myblog.com</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2">Follow Us</h3>
              <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600">
                <a href="#" className="hover:text-indigo-600">Facebook</a>
                <a href="#" className="hover:text-indigo-600">Twitter</a>
                <a href="#" className="hover:text-indigo-600">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
