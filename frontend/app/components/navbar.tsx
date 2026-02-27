"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Plantventory
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/shop" className="hover:text-gray-200">Shop</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}