"use client";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white  to-green-400 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        
        <h1 className="text-3xl font-bold text-center text-green-900 mb-2">
          Contact Plant-ventory 🌿
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Have questions about plants or inventory? Send us a message!
        </p>

       
        <form className="space-y-5 text-green-900">
          
    
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

    
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;