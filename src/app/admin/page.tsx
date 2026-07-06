"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Guest {
  id: string;
  name: string;
  phone: string;
  guestCount: number;
  message: string;
}

export default function AdminPage() {

  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {

    const fetchGuests = async () => {

      const querySnapshot = await getDocs(
        collection(db, "Guests")
      );

      const guestData: Guest[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Guest, "id">),
      }));

      setGuests(guestData);
    };

    fetchGuests();

  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        RSVP Responses
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-800">

          <thead className="bg-neutral-900">

            <tr>
              <th className="p-4 border border-gray-800">Name</th>
              <th className="p-4 border border-gray-800">Phone</th>
              <th className="p-4 border border-gray-800">Guests</th>
              <th className="p-4 border border-gray-800">Message</th>
            </tr>

          </thead>

          <tbody>

            {guests.map((guest) => (

              <tr key={guest.id}>

                <td className="p-4 border border-gray-800">
                  {guest.name}
                </td>

                <td className="p-4 border border-gray-800">
                  {guest.phone}
                </td>

                <td className="p-4 border border-gray-800">
                  {guest.guestCount}
                </td>

                <td className="p-4 border border-gray-800">
                  {guest.message}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}