// components/ContactUs.tsx
import React from 'react';

export default function ContactUs() {
  return (
    <section className="bg-black text-white py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Contact Information */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-gray-400">
            We&apos;d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">Email</h3>
              <p className="text-lg text-gray-400">contact@yourcompany.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p className="text-lg text-gray-400">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}