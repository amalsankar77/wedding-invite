"use client";

import { motion } from "framer-motion";

export default function InitialReveal() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/lgb.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center"
      >

        <motion.h1
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.2em", opacity: 1 }}
          transition={{ duration: 2 }}
          className="romantic-font text-6xl md:text-8xl lg:text-9xl text-white"
        >
          A ❤️ S
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-pink-200 mt-6 uppercase tracking-[0.4em]"
        >
          Together Forever
        </motion.p>

      </motion.div>

    </section>
  );
}