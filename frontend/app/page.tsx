"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./components/ThemeToggle";

interface UserData {
  name: string;
  email: string;
}

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          router.push("/login");
        }
      } catch (err) {
        router.push("/login");
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-zinc-900 dark:to-black flex flex-col items-center justify-center px-4 relative">
      <ThemeToggle />

      <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-8 max-w-lg w-full text-center border border-green-100 dark:border-zinc-700">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🌿 Welcome to Plantventory
        </h1>

        {user ? (
          <>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Hello, <span className="font-semibold">{user.name}</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Email: {user.email}
            </p>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Loading your profile...
          </p>
        )}

        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}