"use client";

import { motion } from "framer-motion";

const stories = [
  {
    title: "How It All Started",
    text: "Every beautiful story has a beginning, and theirs started with a simple meeting that neither of them expected would change their lives forever. What began as casual conversations slowly turned into hours of laughter, comfort, and connection. Even in the smallest moments, they discovered something extraordinary in each other.",
  },
  {
    title: "Falling in Love",
    text: "As days turned into months, their bond grew stronger with every shared memory. From long phone calls and surprise messages to endless support during difficult times, they became each other’s safe place. Love arrived quietly, naturally, and deeply — creating a connection built on trust, understanding, and genuine friendship.",
  },
  {
    title: "Creating Memories",
    text: "Together they explored life’s little joys — road trips, late-night conversations, celebrations, adventures, and dreams for the future. Every memory became a beautiful chapter in their journey. Through happiness and challenges alike, they learned that love is not just about perfect moments, but about choosing each other every single day.",
  },
  {
    title: "The Proposal",
    text: "One unforgettable evening, surrounded by love and emotion, a heartfelt question was asked — and answered with tears, smiles, and overwhelming happiness. It was a moment filled with excitement, promises, and the beginning of a forever they had both dreamed about.",
  },
  {
    title: "A New Beginning",
    text: "Now, with grateful hearts and endless love, they are ready to begin the next chapter of their lives together. Surrounded by family, friends, and blessings, they invite you to celebrate the start of their forever — a journey of love, partnership, laughter, and lifelong companionship.",
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="min-h-screen bg-neutral-950 text-white px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center mb-20"
      >
        Our Love Story
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-3xl p-8 md:p-12 bg-black"
          >

            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              {story.title}
            </h3>

            <p className="text-gray-400 leading-9 text-lg">
              {story.text}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}