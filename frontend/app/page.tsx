"use client";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />

      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          🌿 Welcome to Plantventory
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Manage your plant collection, track growth, and learn plant care
          tips — all in one beautiful place.
        </p>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-green-600">
            🌱 My Plants
          </h3>
          <p className="text-gray-600">
            Add, edit and manage your plant inventory easily.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-green-600">
            💧 Care Tracker
          </h3>
          <p className="text-gray-600">
            Track watering schedules and plant health.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-green-600">
            📊 Growth Stats
          </h3>
          <p className="text-gray-600">
            Monitor growth progress and plant insights.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}