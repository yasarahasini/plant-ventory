"use client";

import Image from "next/image";

interface Plant {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
}

export function PlantCard({ plant }: { plant: Plant }) {
 
  const isLowStock = plant.quantity < 10;
  const stockPercentage = Math.min((plant.quantity / 50) * 100, 100);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500">
   
      <div className="relative h-64 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />
        
     
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-emerald-900 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm">
            {plant.category}
          </span>
        </div>

      
        <div className="absolute top-4 right-4">
          {isLowStock ? (
            <span className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-lg text-[10px] font-bold border border-orange-100">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              LOW STOCK
            </span>
          ) : (
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-[10px] font-bold border border-emerald-100">
              IN STOCK
            </span>
          )}
        </div>
      </div>

    
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-emerald-800 transition-colors">
            {plant.name}
          </h3>
          <p className="text-xl font-light text-slate-900">${plant.price}</p>
        </div>
        
        <p className="text-slate-400 text-xs mb-6 font-mono tracking-tight">
          SKU: {plant.name.substring(0, 3).toUpperCase()}-{plant.id}00X
        </p>

    
        <div className="space-y-2 mb-8">
          <div className="flex justify-between text-[11px] uppercase tracking-wider font-bold">
            <span className="text-slate-400">Current Availability</span>
            <span className={isLowStock ? "text-orange-600" : "text-emerald-700"}>
              {plant.quantity} Units
            </span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                isLowStock ? "bg-orange-500" : "bg-emerald-500"
              }`}
              style={{ width: `${stockPercentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-emerald-900 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-800 active:scale-95 transition-all">
            Edit Stock
          </button>
          <button className="bg-white text-slate-600 border border-slate-200 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}