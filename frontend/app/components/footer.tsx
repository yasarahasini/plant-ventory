import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Plantventory. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-200">Facebook</a>
          <a href="#" className="hover:text-gray-200">Instagram</a>
          <a href="#" className="hover:text-gray-200">Twitter</a>
        </div>
      </div>
    </footer>
  );
} 

export default Footer