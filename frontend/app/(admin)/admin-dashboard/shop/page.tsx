"use client";

import { useState } from "react";
import Image from "next/image";
import { FiEdit, FiTrash2, FiPlus, FiSearch } from "react-icons/fi";

interface Plant {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
}

export default function AdminShopPage() {

  const [plants, setPlants] = useState<Plant[]>([
    { id: 1, name: "Snake Plant", quantity: 25, price: 15, image: "/Snake.jpg", category: "Indoor" },
    { id: 2, name: "Aloe Vera", quantity: 40, price: 10, image: "/alo.jpg", category: "Medicinal" },
    { id: 3, name: "Peace Lily", quantity: 18, price: 20, image: "/lily.jpg", category: "Flowering" },
  ]);

  const deletePlant = (id:number)=>{
    setPlants(plants.filter(p => p.id !== id))
  }

  return (

    <div className="p-10 bg-slate-50 min-h-screen">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Shop Inventory
          </h1>
          <p className="text-slate-500">
            Manage all plants in your store
          </p>
        </div>

        <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700 transition">
          <FiPlus/> Add Plant
        </button>
      </div>

      {/* Search */}

      <div className="bg-white p-4 rounded-xl border mb-8 flex items-center gap-3">
        <FiSearch className="text-slate-400"/>
        <input
          type="text"
          placeholder="Search plants..."
          className="w-full outline-none text-sm"
        />
      </div>


      {/* Table */}

      <div className="bg-white rounded-2xl border overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-slate-100 text-slate-500 text-xs uppercase">
            <tr>
              <th className="p-4">Plant</th>
              <th className="p-4">Category</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Price</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>

            {plants.map((plant)=>(
              <tr key={plant.id} className="border-t hover:bg-slate-50">

                <td className="p-4 flex items-center gap-4">

                  <Image
                    src={plant.image}
                    alt={plant.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />

                  <div>
                    <p className="font-semibold">{plant.name}</p>
                    <p className="text-xs text-slate-400">
                      ID : {plant.id}
                    </p>
                  </div>

                </td>

                <td className="p-4 text-sm text-slate-600">
                  {plant.category}
                </td>

                <td className="p-4">

                  <span className={`font-bold ${
                    plant.quantity < 20
                    ? "text-orange-500"
                    : "text-emerald-600"
                  }`}>
                    {plant.quantity} units
                  </span>

                </td>

                <td className="p-4 font-semibold">
                  ${plant.price}
                </td>

                <td className="p-4 text-right">

                  <div className="flex justify-end gap-3">

                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                      <FiEdit/>
                    </button>

                    <button
                      onClick={()=>deletePlant(plant.id)}
                      className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                    >
                      <FiTrash2/>
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}