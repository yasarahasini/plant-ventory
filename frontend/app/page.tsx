"use client";

import Navbar from "./components/navbar";
import { ArrowRight, Leaf, Droplets, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const mainRef = useRef(null);
  const images = ["/home5.jpg", "/home.jpg", "/home1.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

 
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2, 
        },
      });

      tl.to(mainRef.current, { backgroundColor: "#f0fdf4" }) 
        .to(mainRef.current, { backgroundColor: "#faf5ff" })
        .to(mainRef.current, { backgroundColor: "#fefce8" }); 
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen transition-colors duration-700">
      <Navbar />

      <main className="flex-grow">
  
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
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              Grow smarter with <span className="text-emerald-400">Plantventory</span>
            </motion.h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/get-start" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105">
                  Get Started Free <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </section>

   
        <section id="features" className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-purple-900 mb-4">Advanced Features</h2>
             <p className="text-purple-700 max-w-lg mx-auto">Everything you need to keep your urban jungle thriving with data-driven care.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="text-purple-600" size={28} />}
              title="Smart Inventory"
              description="A centralized digital catalog for every species in your home with custom tagging."
              delay={0}
            />
            <FeatureCard
              icon={<Droplets className="text-blue-500" size={28} />}
              title="Care Precision"
              description="Automated reminders for watering and fertilizing based on seasonal needs."
              delay={0.1}
            />
            <FeatureCard
              icon={<LineChart className="text-purple-600" size={28} />}
              title="Growth Analytics"
              description="Visualize the journey of your plants through height charts and health logs."
              delay={0.2}
            />
          </div>
        </section>

     
        <section id="about" className="max-w-6xl mx-auto px-6 py-32 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
        
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-yellow-200/50 rounded-[2rem] blur-2xl group-hover:bg-yellow-300/50 transition-all"></div>
                <img
                  src={images[currentImage]}
                  alt="Plantventory App"
                  className="relative w-full h-[500px] rounded-3xl shadow-2xl object-cover transition-all duration-1000"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="md:w-1/2"
            >
              <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
                About <span className="text-yellow-600">Plantventory</span>
                <div className="h-2 w-24 bg-yellow-500 mt-3 rounded-full"></div>
              </h2>
              
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                We combine data science with botany. Our mission is to ensure no leaf 
                turns brown. Join thousands of plant parents using our predictive 
                care models.
              </p>
              
              <div className="bg-white/40 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8 backdrop-blur-sm">
                <p className="text-lg text-yellow-900 italic font-medium">
                  The best time to plant a tree was 20 years ago. The second best time is today.
                </p>
              </div>

              <button className="px-10 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-yellow-900/10 hover:-translate-y-1">
                 Learn More
              </button>
            </motion.div>

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
      transition={{ duration: 0.6, delay }}
      className="bg-white/60 backdrop-blur-md border border-white/40 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
    </motion.div>
  );
}