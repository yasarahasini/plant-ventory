"use client";

import Navbar from "./components/navbar";
import { ArrowRight, Leaf, Droplets, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const mainRef = useRef(null);
  const images = ["/home5.jpg", "/home.jpg", "/home1.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  // Image Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // GSAP Scroll Animation Logic
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for background transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth transition tied to scroll
        },
      });

      tl.to(mainRef.current, { backgroundColor: "#f0fdf4" }) // Initial Green (emerald-50)
        .to(mainRef.current, { backgroundColor: "#faf5ff" }) // Transition to Purple (purple-50)
        .to(mainRef.current, { backgroundColor: "#fefce8" }); // Transition to Yellow (yellow-50)
    }, mainRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen transition-colors duration-500">
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 1: HERO (Green Theme) */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-emerald-200 uppercase bg-emerald-900/60 rounded-full backdrop-blur"
            >
              Digital Gardening Made Simple
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Grow smarter with <span className="text-emerald-400">Plantventory</span>
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/get-start" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2">
                  Get Started Free <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURES (Purple Theme) */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-purple-900">Advanced Features</h2>
             <p className="text-purple-700">Everything you need to keep your garden thriving.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="text-purple-600" size={28} />}
              title="Smart Inventory"
              description="A centralized digital catalog for every species in your home."
              delay={0}
            />
            <FeatureCard
              icon={<Droplets className="text-blue-500" size={28} />}
              title="Care Precision"
              description="Automated reminders for watering, fertilizing, and repotting."
              delay={0.1}
            />
            <FeatureCard
              icon={<LineChart className="text-purple-600" size={28} />}
              title="Growth Analytics"
              description="Visualize the journey of your plants through height charts."
              delay={0.2}
            />
          </div>
        </section>

        {/* SECTION 3: ABOUT (Yellow Theme) */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={images[currentImage]}
              alt="Plantventory App"
              className="w-full h-[400px] object-cover transition-all duration-1000"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              About <span className="text-yellow-600">Plantventory</span>
              <div className="h-1 w-20 bg-yellow-500 mt-2"></div>
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              We combine data science with botany. Our mission is to ensure no leaf turns brown. Join thousands of plant parents using our predictive care models.
            </p>
            <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-xl transition-all shadow-lg">
               Learn More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/50 backdrop-blur-sm border border-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all"
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}