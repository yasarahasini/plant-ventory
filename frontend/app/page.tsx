"use client";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ArrowRight, Leaf, Droplets, LineChart } from "lucide-react"; // Using Lucide icons for a cleaner look

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfdfa] text-slate-900">
      <Navbar />

      <main className="flex-grow">
      
        <section className="relative overflow-hidden py-20 lg:py-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-emerald-700 uppercase bg-emerald-50 rounded-full">
              Digital Gardening Made Simple
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
              Grow smarter with <span className="text-emerald-600">Plantventory</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              The modern sanctuary for your botanical collection. Organize, track, and nurture your plants with precision and ease.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                Get Started Free <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50 text-slate-700 font-semibold rounded-xl transition-all">
                Explore Features
              </button>
            </div>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Leaf className="text-emerald-600" size={28} />}
              title="Smart Inventory"
              description="A centralized digital catalog for every species in your home, complete with custom notes and photos."
            />
            <FeatureCard 
              icon={<Droplets className="text-blue-500" size={28} />}
              title="Care Precision"
              description="Automated reminders for watering, fertilizing, and repotting based on seasonal needs."
            />
            <FeatureCard 
              icon={<LineChart className="text-emerald-600" size={28} />}
              title="Growth Analytics"
              description="Visualize the journey of your plants through height charts, health logs, and time-lapse logs."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Reusable Sub-component for a cleaner Main component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}