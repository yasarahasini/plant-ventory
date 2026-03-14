"use client";

import { useEffect, useState } from "react";

interface Plant {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
}

export default function PlantInventory() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
    category: "",
  });

  const fetchPlants = async () => {
    const res = await fetch("http://localhost:3001/inventory");
    const data = await res.json();
    setPlants(data);
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const addPlant = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3001/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        quantity: Number(form.quantity),
        price: Number(form.price),
      }),
    });

    setForm({
      name: "",
      quantity: "",
      price: "",
      image: "",
      category: "",
    });

    fetchPlants();
  };

  const deletePlant = async (id: number) => {
    await fetch(`http://localhost:3001/inventory/${id}`, {
      method: "DELETE",
    });

    fetchPlants();
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "white" }}>
      <h1 style={{ marginBottom: "20px" }}>Plant Inventory</h1>

    
    <form onSubmit={addPlant} style={{ marginBottom: "30px", color: "black" }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <button type="submit" style={{ marginLeft: "10px" }}>
          Add Plant
        </button>
      </form>

    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          color: "black",
        }}
      >
        {plants.map((plant) => (
          <div
            key={plant.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={plant.image}
              alt={plant.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />

            <h3>{plant.name}</h3>
            <p>{plant.category}</p>
            <p>Stock: {plant.quantity}</p>
            <p>Price: ${plant.price}</p>

            <button onClick={() => deletePlant(plant.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}