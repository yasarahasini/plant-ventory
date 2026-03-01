import React from "react";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Plant {
  id: number;
  name: string;
  image: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Indoor Plants",
    image:
      "/Fiddle Leaf Fig.jpg",
  },
  {
    id: 2,
    name: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509420316987-d27c7d6e5d9c?auto=format&fit=crop&w=800&q=80",
  },
];

const featuredPlants: Plant[] = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    image:
      "https://images.unsplash.com/photo-1616628182506-1a6e99b0401d?auto=format&fit=crop&w=800&q=80",
    description: "A trendy indoor plant with large green leaves.",
  },
  {
    id: 2,
    name: "ZZ Plant",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32b3c39?auto=format&fit=crop&w=800&q=80",
    description: "Low maintenance and perfect for beginners.",
  },
];

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 px-6 py-10">
      
   
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 mb-3">
          Explore Plant-ventory 🌿
        </h1>
        <p className="bg-gradient-to-r from-red-500 via-blue-900 to-green-500 text-transparent bg-clip-text">
          Discover plants by category and explore our featured collection.
        </p>

     
        <div className="mt-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search plants..."
            className="w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

   
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Categories
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

    
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Featured Plants
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {featuredPlants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {plant.name}
              </h3>
              <p className="text-gray-600 mt-2">
                {plant.description}
              </p>
              <button className="mt-4 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;