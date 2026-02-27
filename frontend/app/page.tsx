"use client";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Indoor Plants</h3>
          <p>Brighten your home with low-maintenance indoor plants.</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Outdoor Plants</h3>
          <p>Create a lush garden with our variety of outdoor plants.</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Plant Care Tips</h3>
          <p>Learn how to keep your plants healthy and thriving.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}