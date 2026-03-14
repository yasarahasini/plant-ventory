"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PlantInfo {
  id: number;
  nameEn: string;
  nameSi: string;
  category: string;
  descriptionEn: string;
  descriptionSi: string;
  image: string;
}

const categories = ["Indoor", "Medicinal", "Flowering"];

export default function AdminEncyclopedia() {
  const [plants, setPlants] = useState<PlantInfo[]>([]);
  const [form, setForm] = useState<Omit<PlantInfo, "id">>({
    nameEn: "",
    nameSi: "",
    category: "Indoor",
    descriptionEn: "",
    descriptionSi: "",
    image: "",
  });


  const fetchPlants = async () => {
    try {
      const res = await fetch("http://localhost:3001/encyclopedia");
      const data = await res.json();
      setPlants(Array.isArray(data) ? data : data.plants || []);
    } catch (err) {
      console.error("Failed to fetch plants:", err);
      setPlants([]);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

 
  const handleAddPlant = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3001/encyclopedia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({
        nameEn: "",
        nameSi: "",
        category: "Indoor",
        descriptionEn: "",
        descriptionSi: "",
        image: "",
      });
      fetchPlants();
    } catch (err) {
      console.error("Failed to add plant:", err);
    }
  };


  const handleDeletePlant = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/encyclopedia/${id}`, { method: "DELETE" });
      fetchPlants();
    } catch (err) {
      console.error("Failed to delete plant:", err);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-20">
      <h1 className="text-4xl font-bold mb-8 text-green-900">
        🌱 Admin Plant Encyclopedia
      </h1>

    
      <form
        onSubmit={handleAddPlant}
        className="grid grid-cols-1 md:grid-cols-2 text-green-900 gap-4 mb-10 bg-white p-6 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          placeholder="English Name"
          value={form.nameEn}
          onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Sinhala Name"
          value={form.nameSi}
          onChange={(e) => setForm({ ...form, nameSi: e.target.value })}
          className="border p-2 rounded-md"
          required
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded-md"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border p-2 rounded-md"
          required
        />
        <textarea
          placeholder="Description (English)"
          value={form.descriptionEn}
          onChange={(e) => setForm({ ...form, descriptionEn: e.target.value })}
          className="border p-2 rounded-md col-span-full"
          required
        />
        <textarea
          placeholder="Description (Sinhala)"
          value={form.descriptionSi}
          onChange={(e) => setForm({ ...form, descriptionSi: e.target.value })}
          className="border p-2 rounded-md col-span-full"
          required
        />
        <button
          type="submit"
          className="col-span-full bg-green-900 text-white py-3 rounded-xl hover:bg-green-800 transition"
        >
          Add Plant
        </button>
      </form>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
          >
            <div className="relative h-56 w-full">
              <Image
                src={plant.image}
                alt={plant.nameEn}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-bold text-green-600 uppercase">
                {plant.category}
              </span>
              <h2 className="text-xl font-bold text-green-900">{plant.nameEn}</h2>
              <h3 className="text-lg text-green-700">{plant.nameSi}</h3>
              <p className="text-gray-700 text-sm">{plant.descriptionEn}</p>
              <p className="text-gray-700 text-sm">{plant.descriptionSi}</p>
              <button
                onClick={() => handleDeletePlant(plant.id)}
                className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}