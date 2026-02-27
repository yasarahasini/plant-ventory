"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="w-full bg-white text-black dark:text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://i.ibb.co/xyz123/plantvenor.png"
            alt="Plantventory Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Plantventory</span>
        </Link>

        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-500">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-500">
            Contact
          </Link>

          <ThemeToggle />

         
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition"
          >
            Logout
          </button>
        </div>

       
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3 bg-white dark:bg-gray-900">
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-500">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-500">
            Contact
          </Link>

          <ThemeToggle />

      
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}