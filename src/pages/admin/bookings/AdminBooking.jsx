import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminBooking = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    window.location.href = "/login";
  }

  const [bookings, setBookings] = useState([]);
  const [bookingsLoaded, setBookingsLoaded] = useState(false);

  useEffect(() => {
    if (!bookingsLoaded) {
      axios
        .get("http://localhost:5000/api/booking", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setBookings(res.data.result);
          setBookingsLoaded(true);
        })
        .catch((err) => {
          console.error("Error fetching bookings:", err);
        });
    }
  }, [bookingsLoaded]);

  function handleDelete(bookingId) {
    axios
      .delete("http://localhost:5000/api/booking/" + bookingId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Booking Deleted Successfully");
        setBookingsLoaded(false);
      })
      .catch((err) => {
        console.error("Error deleting booking:", err);
        toast.error("Failed to delete booking");
      });

      const handleStatusChange = (bookingId, newStatus) => {
        axios.put("http://localhost:5000/api/booking/update-status", {
            bookingId: bookingId,
            status: newStatus
        })
        .then(res => {
            toast.success("Booking status updated!");
            setBookings(bookings.map(b => b.bookingId === bookingId ? { ...b, status: newStatus } : b));
        })
        .catch(err => toast.error("Error updating status"));
    };
    
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Bookings</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-3 border">Booking ID</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">End Date</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Reason</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.bookingId} className="text-center">
                  <td className="border p-3">{booking.bookingId}</td>
                  <td className="border p-3">{booking.email}</td>
                  <td className="border p-3">
                    {new Date(booking.start).toDateString()}
                  </td>
                  <td className="border p-3">
                    {new Date(booking.end).toDateString()}
                  </td>
                  <td>
    <select
        value={booking.status}
        onChange={(e) => handleStatusChange(booking.bookingId, e.target.value)}
        className="text-black"
    >
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
    </select>
</td>

                  <td className="border p-3">{booking.reason || "N/A"}</td>
                  <td className="border p-3">
                    <button
                      onClick={() => handleDelete(booking.bookingId)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 p-5">
                  No Bookings Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBooking;
