import React from "react";

interface Plant {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const plants: Plant[] = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
    category: "Indoor",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80",
    category: "Indoor",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
    category: "Succulent",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1616627982227-3d1e0a6f3e23?auto=format&fit=crop&w=800&q=80",
    category: "Flowering",
  },
];

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 px-6 py-12">
     
      <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
        Plant-ventory Shop 🌿
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Discover beautiful plants for your home and garden
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {plant.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Category: {plant.category}
              </p>
              <p className="text-green-600 font-bold mb-4">
                LKR {plant.price}
              </p>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;