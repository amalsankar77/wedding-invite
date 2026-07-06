"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Mehendi",
    date: "12 Dec 2026",
    time: "5:00 PM",
    venue: "Royal Garden Hall",
  },
  {
    title: "Haldi",
    date: "13 Dec 2026",
    time: "10:00 AM",
    venue: "Bride's Home",
  },
  {
    title: "Wedding",
    date: "14 Dec 2026",
    time: "11:30 AM",
    venue: "Grand Palace Convention Center",
  },
  {
    title: "Reception",
    date: "15 Dec 2026",
    time: "7:00 PM",
    venue: "Skyline Ballroom",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="min-h-screen bg-neutral-950 text-white px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center mb-20"
      >
        Event Schedule
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-black border border-gray-800 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-4">
              {event.title}
            </h3>

            <p className="text-gray-400 mb-2">
              📅 {event.date}
            </p>

            <p className="text-gray-400 mb-2">
              ⏰ {event.time}
            </p>

            <p className="text-gray-400">
              📍 {event.venue}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}