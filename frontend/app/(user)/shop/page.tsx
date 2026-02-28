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
  { id: 1, name: "Snake Plant", quantity: 25, price: 15, image: "/p1.jpg", category: "Indoor" },
  { id: 2, name: "Aloe Vera", quantity: 40, price: 10, image: "/p2.jpg", category: "Medicinal" },
  { id: 3, name: "Peace Lily", quantity: 18, price: 20, image: "/p3.jpg", category: "Flowering" },
];

export default function Home() {
  const heroImages = ["/plant1.jpg", "/plant2.jpg", "/plant3.jpg", "/plant4.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-green-50">

 
      <section className="sticky top-0 z-10 bg-white border-b border-green-900 px-6 py-20 shadow-xl">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-black text-green-900 tracking-tight">
                Featured Plants
              </h2>
              <p className="text-green-600 mt-2">
                Healthy plants available in our inventory 🌱
              </p>
            </div>
            <Link href="/plants" className="text-green-700 font-semibold hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 bg-green-900 text-white px-6 py-24 shadow-2xl">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-bold uppercase">
              PlantVentory
            </span>

            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase italic">
              Grow Your <br /> Green World
            </h2>

            <p className="text-green-200 text-lg leading-relaxed max-w-md">
              Manage, track, and nurture your plants with our smart plant
              inventory system.
            </p>

            <Link
              href="/plants"
              className="inline-block bg-white text-green-900 font-black px-8 py-4 rounded-full hover:bg-lime-400 transition-colors duration-300"
            >
              VIEW PLANTS
            </Link>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-lime-400/20 blur-3xl rounded-full group-hover:bg-lime-400/30 transition" />

            <div className="relative aspect-square w-72 mx-auto rounded-full overflow-hidden">
              <Image
                src="/plant-hero.jpg"
                alt="Plant"
                fill
                priority
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

    
      <section className="sticky top-0 z-30 bg-blue-900 text-white px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Inventory Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition"
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-xl">{plant.name}</h3>
                <p className="text-green-100 mb-2">
                  Category: {plant.category}
                </p>
                <p className="text-green-100 mb-4">
                  Stock: {plant.quantity} plants
                </p>

                <button className="w-full bg-white text-green-700 font-bold py-2 rounded-lg hover:bg-green-50">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6">
        <span className="text-green-700 text-xs font-bold uppercase tracking-widest">
          {plant.category}
        </span>

        <h3 className="text-xl font-bold text-green-900 mt-1">
          {plant.name}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-green-800">
            ${plant.price}
          </span>
          <span className="text-sm text-gray-500">
            Stock: {plant.quantity}
          </span>
        </div>

        <button className="mt-6 w-full bg-green-900 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors">
          Manage Plant
        </button>
      </div>
    </div>
  );
}