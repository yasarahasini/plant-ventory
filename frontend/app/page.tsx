"use client";

import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

export default function HomePage() {
  const user = {
    name: "Demo User",
    email: "demo@example.com",
  };

  const handleLogout = () => {
   
    alert("Logged out!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-zinc-900 dark:to-black flex flex-col items-center justify-center px-4 relative">
      <ThemeToggle />

      <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-8 max-w-lg w-full text-center border border-green-100 dark:border-zinc-700">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🌿 Welcome to Plantventory
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Hello, <span className="font-semibold">{user.name}</span>
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Email: {user.email}
        </p>

        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
        >
          <Link href="/home">Home</Link>
        </button>
      </div>
    </div>
  );
}