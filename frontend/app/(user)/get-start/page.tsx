"use client";

import React, { useState } from "react";

const GetStartedPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    alert(`Welcome, ${name}! Your account has been created.`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfdfa] px-6 py-12">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10 md:flex md:gap-10 items-center">
        
     
        <div className="hidden md:block md:w-1/2">
          <img
            src="/login2.jpg"
            alt="Get Started Plantventory"
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

 
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
            Get Started with <span className="text-emerald-600">Plantventory</span>
          </h2>
          <p className="text-slate-600 mb-8">
            Create your account and start organizing, tracking, and nurturing your plants today.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 border text-green-700 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 border text-green-700 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 border border-slate-300 text-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              Create Account
            </button>
          </form>

          <p className="text-slate-500 mt-6 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-emerald-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;