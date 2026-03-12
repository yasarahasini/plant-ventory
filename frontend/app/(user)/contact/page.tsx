"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">

      <div className="container mx-auto px-6">

     

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900">
            Contact Us
          </h1>
          <p className="text-slate-500 mt-3">
            Have questions about our plant inventory system? Reach out to us.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-16">

        

          <div className="space-y-10">

            <div className="flex items-start gap-4">
              <div className="p-4 bg-emerald-100 rounded-xl text-emerald-700">
                <FiMapPin size={22}/>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-slate-500">
                  68 Handapanagala, Weherayaya Road <br/>
                  Monaragala, Sri Lanka
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="p-4 bg-emerald-100 rounded-xl text-emerald-700">
                <FiPhone size={22}/>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-slate-500">
                  +94 72 030 4660
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="p-4 bg-emerald-100 rounded-xl text-emerald-700">
                <FiMail size={22}/>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-slate-500">
                  yasarahasini61@gmail.com
                </p>
              </div>
            </div>

          </div>


        

          <div className="bg-white p-10 rounded-2xl border border-slate-200 text-green-900 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500"
              />

              <button
                type="submit"
                className="w-full bg-emerald-900 text-white py-3 rounded-xl font-semibold hover:bg-emerald-800 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>


      

        <div className="mt-20 rounded-2xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=Sri+Lanka&output=embed"
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>
  );
}