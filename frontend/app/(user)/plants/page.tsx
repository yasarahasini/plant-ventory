"use client";

import { useState } from "react";
import Link from "next/link";
import { PlantCard } from "@/app/components/plantcard"; 

interface Plant {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
}

const ALL_PLANTS: Plant[] = [
  { id: 1, name: "Snake Plant", quantity: 25, price: 15, image: "/Snake.jpg", category: "Indoor" },
  { id: 2, name: "Aloe Vera", quantity: 40, price: 10, image: "/alo.jpg", category: "Medicinal" },
  { id: 3, name: "Peace Lily", quantity: 18, price: 20, image: "/lily.jpg", category: "Flowering" },
  { id: 4, name: "Monstera Deliciosa", quantity: 12, price: 45, image: "/Monstera Deliciosa.jpg", category: "Indoor" },
  { id: 5, name: "Lavender", quantity: 55, price: 12, image: "/Lavender.jpg", category: "Outdoor" },
  { id: 6, name: "Fiddle Leaf Fig", quantity: 5, price: 85, image: "/Fiddle Leaf Fig12.jpg", category: "Indoor" },
];

const CATEGORIES = ["All", "Indoor", "Outdoor", "Medicinal", "Flowering"];

export default function PlantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlants = ALL_PLANTS.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || plant.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalStock = ALL_PLANTS.reduce((acc, p) => acc + p.quantity, 0);
  const lowStockCount = ALL_PLANTS.filter(p => p.quantity < 10).length;

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Plant Database</h1>
              <p className="text-slate-500 mt-2">Manage your botanical collection and stock levels.</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm min-w-[140px]">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Units</p>
                <p className="text-2xl font-semibold text-emerald-900">{totalStock}</p>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm min-w-[140px]">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Low Stock</p>
                <p className="text-2xl font-semibold text-orange-600">{lowStockCount}</p>
              </div>
            </div>
          </div>
        </header>


        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat 
                  ? "bg-emerald-900 text-white shadow-lg shadow-emerald-900/20" 
                  : "bg-stone-100 text-slate-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search by species..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
            <svg className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

      
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-400 text-lg">No plants found matching your criteria.</p>
            <button 
              onClick={() => {setSearchTerm(""); setActiveCategory("All")}}
              className="mt-4 text-emerald-700 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}