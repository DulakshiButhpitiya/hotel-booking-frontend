import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const AdminFeedback = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      console.log("Fetched contacts:", res.data);
      if (res.data && res.data.messages) {
        setContacts(res.data.messages);
      }
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      toast.error("Failed to load messages");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      toast.success("Message deleted");
      fetchContacts(); // Refresh after delete
    } catch (error) {
      console.error("Failed to delete message:", error);
      toast.error("Delete failed");
    }
  };

  const approveFeedback = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/contact/approve/${id}`);
      toast.success("Feedback approved");
      fetchMessages(); // re-fetch messages
    } catch (error) {
      toast.error("Failed to approve feedback");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Contact Feedback</h1>

      {contacts.length === 0 ? (
        <p className="text-gray-600">No contact messages available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead className="bg-purple-100">
              <tr>
                <th className="p-3 border text-gray-800">#</th>
                <th className="p-3 border text-gray-800">Name</th>
                <th className="p-3 border text-gray-800">Email</th>
                <th className="p-3 border text-gray-800">Phone</th>
                <th className="p-3 border text-gray-800">Message</th>
                <th className="p-3 border text-gray-800">Date</th>
                <th className="p-3 border text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="p-3 border text-center text-gray-600">{index + 1}</td>
                  <td className="p-3 border text-gray-600">{contact.name}</td>
                  <td className="p-3 border text-gray-600">{contact.email}</td>
                  <td className="p-3 border text-gray-600">{contact.phone}</td>
                  <td className="p-3 border text-gray-600">{contact.message}</td>
                  <td className="p-3 border text-gray-600">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                  <button
  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-800"
  onClick={() => approveFeedback(message._id)}
>
  Approve
</button>

                  <td className="p-3 border text-center">
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminFeedback;
