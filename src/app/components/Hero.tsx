"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    
    <section
      id="hero"
      className="min-h-screen text-white flex flex-col items-center text-center px-6 justify-center relative overflow-hidden"
    >
      <img
        src="/w1.jpg"
        alt="Wedding background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative bg-black/50 p-8 rounded-xl text-center">
        <motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
>
  A & S
</motion.h1>
        <p className="text-lg md:text-2xl tracking-[0.3em] uppercase">Wedding Invitation</p>
        <p className="mt-6 text-lg text-gray-300">December 18, 2026</p>
        <button className="mt-10 border border-white px-8 py-3 hover:bg-white hover:text-black transition">
          Enter
        </button>
      </div>
    </section>
  );
}
