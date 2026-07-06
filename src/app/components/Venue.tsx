"use client";

import { motion } from "framer-motion";

export default function Venue() {
  return (
    <section
      id="venue"
      className="bg-black text-white px-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Venue
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Grand Palace Convention Center
        </p>

        <div className="rounded-3xl overflow-hidden border border-gray-800">
   <div className="rounded-3xl overflow-hidden border border-gray-800">
  <img
    src="/aud.jpg"
    alt="Venue"
    className="w-full object-cover"
  />
</div>
          <iframe
            src="https://www.google.com/maps"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">

  <a
    href="https://maps.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
  >
    Get Directions
  </a>

  <a
    href="tel:+919876543210"
    className="border border-gray-600 px-8 py-4 rounded-full hover:border-white transition"
  >
    Contact Venue
  </a>

</div>
      </motion.div>
    </section>
  );
}
