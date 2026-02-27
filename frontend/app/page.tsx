"use client";

import ThemeToggle from "./components/ThemeToggle";

export default function HomePage() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-zinc-900 dark:to-black px-4">
      <ThemeToggle />

      <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🌿 Welcome to Plantventory
        </h1>

        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}