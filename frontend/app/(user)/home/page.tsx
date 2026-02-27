"use client";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Flower Image */}
      <div className="absolute inset-0">
        <div className="bg-flower animate-zoom w-full h-full"></div>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4 bg-black/30">
        <h1 className="text-5xl font-bold mb-4">Welcome to Plantventory</h1>
        <p className="text-xl max-w-lg">
          Discover and manage your plants with a beautiful interactive interface.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}