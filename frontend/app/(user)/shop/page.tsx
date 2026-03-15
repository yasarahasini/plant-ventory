"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Plant {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
}

const plants: Plant[] = [
  { id: 1, name: "Snake Plant", quantity: 25, price: 15, image: "/Snake.jpg", category: "Indoor" },
  { id: 2, name: "Aloe Vera", quantity: 40, price: 10, image: "/alo.jpg", category: "Medicinal" },
  { id: 3, name: "Peace Lily", quantity: 18, price: 20, image: "/lily.jpg", category: "Flowering" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900">
  
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-20"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-2xl font-bold tracking-tighter text-emerald-900">
            PLANT<span className="text-emerald-500">VENTORY</span>
          </span>
          <div className="space-x-8 text-sm font-medium">
            <Link href="/plants" className="hover:text-emerald-600 transition">Inventory</Link>
            <Link href="#" className="hover:text-emerald-600 transition">Analytics</Link>
            <Link href="#" className="bg-emerald-900 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition">Log In</Link>
          </div>
        </div>
      </nav>

   
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>System Online</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight text-slate-900">
                Precision <span className="font-serif italic text-emerald-800">Botany</span> Management.
              </h1>
              <p className="text-slate-500 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                The professional-grade dashboard for nurseries and collectors. Track health, stock, and environmental data in one interface.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/plants" className="bg-emerald-900 text-white px-10 py-4 rounded-xl font-semibold shadow-xl shadow-emerald-900/20 hover:bg-emerald-800 transition-all active:scale-95">
                  Enter Dashboard
                </Link>
                <Link href="/learn" className="border border-slate-200 bg-white text-slate-700 px-10 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                  Documentation
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-stone-100 rounded-[2rem] -rotate-3" />
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/000.jpg"
                  alt="Premium Plant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

 
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Live Inventory</h2>
              <p className="text-slate-500">Current stock levels across all categories</p>
            </div>
            <Link href="/plants" className="text-emerald-700 font-bold text-sm hover:text-emerald-500 transition border-b-2 border-emerald-100 pb-1">
              VIEW FULL DATABASE →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

   
  
    </div>
  );
}

function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500">
      <div className="relative h-72 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur text-emerald-900 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter">
            {plant.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 leading-tight">
              {plant.name}
            </h3>
            <p className="text-slate-400 text-xs mt-1 italic tracking-wide">ID: #00{plant.id}LN</p>
          </div>
          <span className="text-2xl font-light text-emerald-900">${plant.price}</span>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Available Stock</span>
            <span className={`font-mono font-bold ${plant.quantity < 20 ? 'text-orange-500' : 'text-emerald-600'}`}>
              {plant.quantity} units
            </span>
          </div>
        
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full" 
              style={{ width: `${Math.min((plant.quantity / 50) * 100, 100)}%` }}
            />
          </div>
        </div>

        <button className="mt-8 w-full bg-emerald-50 text-emerald-700 py-3 rounded-xl font-bold hover:bg-emerald-900 hover:text-white transition-all duration-300">
       
        </button>
      </div>
    </div>
  );
}