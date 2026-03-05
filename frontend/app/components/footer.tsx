import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white mt-16 bg-cover bg-center min-h-[600px]"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
    
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg">© 2026 Plantventory. All rights reserved.</p>

        <div className="flex space-x-6 mt-6 md:mt-0 text-lg">
          <a href="#" className="hover:text-green-300 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-green-300 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-green-300 transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;