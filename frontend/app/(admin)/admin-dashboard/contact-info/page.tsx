"use client";

import { useEffect, useState } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ContactListPage() {

  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/contact")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div className="p-20" text-black>

      <h1 className="text-3xl font-bold mb-8">
        Contact Messages
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-200 text-black">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="p-3 border">{contact.name}</td>
                <td className="p-3 border">{contact.email}</td>
                <td className="p-3 border">{contact.message}</td>
                <td className="p-3 border">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}