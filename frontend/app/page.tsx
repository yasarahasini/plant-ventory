"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    router.push("/login"); // redirect to login
  };

  return (
    <nav className="bg-white text-black px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🌿 Plantventory</h1>

      <div className="flex items-center gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-lg text-sm font-medium transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}