"use client";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ArrowRight, Leaf, Droplets, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfdfa] text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
          
          {/* 🌿 Background Image with Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-emerald-200 uppercase bg-emerald-900/40 rounded-full backdrop-blur"
            >
              Digital Gardening Made Simple
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              Grow smarter with{" "}
              <span className="text-emerald-400">Plantventory</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              The modern sanctuary for your botanical collection. Organize,
              track, and nurture your plants with precision and ease.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2">
                Get Started Free <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 bg-white/20 backdrop-blur border border-white/30 hover:bg-white/30 text-white font-semibold rounded-xl transition-all">
                Explore Features
              </button>
            </motion.div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="text-emerald-600" size={28} />}
              title="Smart Inventory"
              description="A centralized digital catalog for every species in your home, complete with custom notes and photos."
              delay={0}
            />
            <FeatureCard
              icon={<Droplets className="text-blue-500" size={28} />}
              title="Care Precision"
              description="Automated reminders for watering, fertilizing, and repotting based on seasonal needs."
              delay={0.15}
            />
            <FeatureCard
              icon={<LineChart className="text-emerald-600" size={28} />}
              title="Growth Analytics"
              description="Visualize the journey of your plants through height charts, health logs, and time-lapse logs."
              delay={0.3}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}