import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white mt-16 bg-cover bg-center min-h-[600px]"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
    
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">

    
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-300">
            Plantventory
          </h3>
          <p className="text-gray-200">
            Plantventory is a modern platform to explore plants, learn plant
            care tips, and manage your personal plant collection easily.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/plants" className="hover:text-green-300 transition">
                Plants
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: info@plantventory.com</p>
          <p>Phone: +94 71 054 9560</p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-green-300 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-green-300 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-green-300 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-green-300 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      
      <div className="relative border-t border-gray-500 text-center py-6">
        <p>© 2026 Plantventory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;