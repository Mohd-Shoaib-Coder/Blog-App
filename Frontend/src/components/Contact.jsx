import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Contact Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            We'd love to hear from you. Reach out to us through the form below
            or find our contact details!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a message
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
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
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Write your message here"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Feel free to reach out to us directly!
            </p>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Address</h3>
              <p className="text-gray-600">
                123 Blog Street, Blog City, BC 12345
              </p>
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
              <h3 className="font-medium text-gray-800">Follow Us</h3>
              <div className="flex gap-4 text-xl text-gray-600">
                <a href="#" className="hover:text-indigo-600">
                  Facebook
                </a>
                <a href="#" className="hover:text-indigo-600">
                  Twitter
                </a>
                <a href="#" className="hover:text-indigo-600">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
