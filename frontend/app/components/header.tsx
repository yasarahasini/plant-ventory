import React from 'react'

const Header = () => {

  return (
    <header className="bg-plant bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white">
      <div className="bg-black bg-opacity-40 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Plantventory</h1>
        <p className="text-xl mb-6">
          Discover, buy, and track your favorite plants easily.
        </p>
        <a
          href="/shop"
          className="bg-green-500 hover:bg-green-700 transition px-6 py-3 rounded text-white font-semibold"
        >
          Shop Now
        </a>
      </div>
    </header>
  );
}

export default Header