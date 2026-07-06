"use client";

import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RSVP() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      await addDoc(collection(db, "Guests"), {
        name,
        phone,
        guestCount,
        message,
        attending: true,
        timestamp: new Date(),
      });

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      setName("");
      setPhone("");
      setGuestCount(1);
      setMessage("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="rsvp"
      className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6 py-20"
    >

      <div className="w-full max-w-xl">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-10">
          RSVP
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black border border-gray-700 px-6 py-4 rounded-xl outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-black border border-gray-700 px-6 py-4 rounded-xl outline-none"
          />

          <input
            type="number"
            placeholder="Guest Count"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            className="bg-black border border-gray-700 px-6 py-4 rounded-xl outline-none"
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-black border border-gray-700 px-6 py-4 rounded-xl outline-none min-h-[120px]"
          />

          <button
            type="submit"
            className="border border-white py-4 rounded-xl hover:bg-white hover:text-black transition"
          >
            Confirm Attendance
          </button>

          {submitted && (
            <div className="bg-green-600 text-white text-center py-3 rounded-xl">
              RSVP Submitted Successfully 🎉
            </div>
          )}

        </form>

      </div>

    </section>
  );
}