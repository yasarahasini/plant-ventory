"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

interface PlantInfo {
  id: number;
  nameEn: string;
  nameSi: string;
  category: string;
  descriptionEn: string;
  descriptionSi: string;
  image: string;
}

const plantData: PlantInfo[] = [
  {
    id: 1,
    nameEn: "Snake Plant",
    nameSi: "නාග දළ පැළෑටි",
    category: "Indoor",
    descriptionEn:
      "Snake plant is a hardy indoor plant that requires very little water and care.",
    descriptionSi:
      "නාග දළ පැළෑටි යනු ඉතා අඩු ජලය සහ සැලකිල්ලක් අවශ්‍ය වන ශක්තිමත් ගෘහස්ථ පැළෑටියකි.",
    image: "/Snake.jpg",
  },
  {
    id: 2,
    nameEn: "Aloe Vera",
    nameSi: "කොමාරිකා",
    category: "Medicinal",
    descriptionEn:
      "Aloe Vera is a medicinal plant widely used for skin care and healing.",
    descriptionSi:
      "කොමාරිකා යනු සම සුරැකුම සහ සුව කිරීම සඳහා භාවිතා වන ඖෂධීය පැළෑටියකි.",
    image: "/Aloe Vera.jpg",
  },
  {
    id: 3,
    nameEn: "Peace Lily",
    nameSi: "පීස් ලිලි",
    category: "Flowering",
    descriptionEn:
      "Peace Lily is a beautiful flowering plant that helps purify indoor air.",
    descriptionSi:
      "පීස් ලිලි යනු ගෘහස්ථ වාතය පිරිසිදු කිරීමට උපකාරී වන සුන්දර මල් පැළෑටියකි.",
    image: "/Peace Lily.jpg",
  },
];

export default function LearnPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPlants = plantData.filter((plant) => {
    const matchSearch =
      plant.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      plant.nameSi.includes(search);

    const matchCategory = category === "All" || plant.category === category;

    return matchSearch && matchCategory;
  });

  const categories = ["All", "Indoor", "Medicinal", "Flowering"];

  return (
    <div className="min-h-screen bg-green-50">
      <section className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black">
          🌱 Plant Encyclopedia
        </h1>
        <p className="mt-4 text-green-200 max-w-2xl mx-auto">
          Learn about plants in English and Sinhala — පැළෑටි ගැන ඉංග්‍රීසි සහ
          සිංහලෙන් ඉගෙන ගන්න
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-4 text-black justify-between">
          <input
            type="text"
            placeholder="🔍 Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlants.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No plants found 🌱
          </p>
        )}

        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </section>
    </div>
  );
}

function PlantCard({ plant }: { plant: PlantInfo }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={plant.image}
          alt={plant.nameEn}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6 space-y-3">
        <span className="text-xs font-bold text-green-600 uppercase">
          {plant.category}
        </span>

        <h2 className="text-2xl font-bold text-green-900">{plant.nameEn}</h2>

        <h3 className="text-lg font-semibold text-green-700">{plant.nameSi}</h3>

        <p className="text-gray-700 text-sm">🇬🇧 {plant.descriptionEn}</p>

        <p className="text-gray-700 text-sm">🇱🇰 {plant.descriptionSi}</p>
        <Link
          href={`/learnn/${plant.id}`}
          className="block w-full mt-4 text-center bg-green-900 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
