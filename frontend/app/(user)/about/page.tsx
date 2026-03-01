"use client";
import React, { useEffect, useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  const images = ["/home5.jpg", "/home.jpg", "/home1.jpg"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-white'>
         <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={images[currentImage]}
              alt="Plantventory App"
              className="w-full rounded-3xl shadow-lg object-cover transition-all duration-700 ease-in-out"
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
                Plantventory
              </span>
              <div className="bg-gradient-to-tr from-green-900 via-white to-green-500 w-100 h-1"></div>
            </h2>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Plantventory is your digital gardening assistant. Organize your
              plants, track their growth, and receive care reminders to help
              every plant thrive. Perfect for beginners and plant enthusiasts
              alike.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              With Plantventory, you can create a personalized plant catalog,
              log watering schedules, and analyze plant growth over time. Turn
              your home into a lush, healthy garden effortlessly.
            </p>
            <button className="w-max px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg">
              <Link href="/learn" className="flex items-center gap-2">
                {" "}
                Learn More
              </Link>
            </button>
          </div>
        </section>
    </div>
  )
}

