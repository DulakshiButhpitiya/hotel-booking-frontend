import React from 'react'
const sampleBookings = [
  {
      bookingId: 1,
      roomId: 101,
      email: "john.doe@example.com",
      status: "confirmed",
      reason: "Business trip",
      start: new Date("2024-02-10T14:00:00Z"),
      end: new Date("2024-02-15T11:00:00Z"),
      notes: "Late check-in requested.",
      timmestamp: new Date(),
  },
  {
      bookingId: 2,
      roomId: 102,
      email: "jane.smith@example.com",
      status: "pending",
      reason: "Vacation",
      start: new Date("2024-03-05T12:00:00Z"),
      end: new Date("2024-03-10T10:00:00Z"),
      notes: "Requires an extra bed.",
      timmestamp: new Date(),
  },
  {
      bookingId: 3,
      roomId: 103,
      email: "alice.johnson@example.com",
      status: "cancelled",
      reason: "Change of plans",
      start: new Date("2024-04-01T15:00:00Z"),
      end: new Date("2024-04-05T10:00:00Z"),
      notes: "Requested refund.",
      timmestamp: new Date(),
  },
  {
      bookingId: 4,
      roomId: 104,
      email: "michael.brown@example.com",
      status: "confirmed",
      reason: "Honeymoon",
      start: new Date("2024-05-20T13:00:00Z"),
      end: new Date("2024-05-25T11:00:00Z"),
      notes: "Decorate room for anniversary.",
      timmestamp: new Date(),
  },
  {
      bookingId: 5,
      roomId: 101,
      email: "sophia.miller@example.com",
      status: "pending",
      reason: "Family visit",
      start: new Date("2024-06-10T16:00:00Z"),
      end: new Date("2024-06-15T10:00:00Z"),
      notes: "Requires early check-in.",
      timmestamp: new Date(),
  }]

const AdminBooking = () => {
  return (
    <div className='w-full'>
      <table className='table-auto border-collapse w-full text-white'>
        <thead>
          <tr className='bg-blue-400 text-white'>
          <th className='px-4 py-2'>Booking Id</th>
          <th className='px-4 py-2'>Email</th>
          <th className='px-4 py-2'>Start Date</th>
          <th className='px-4 py-2'>End date</th>
          <th className='px-4 py-2'>Status</th>
          <th className='px-4 py-2'>Reason</th>
        
          </tr>
          </thead>
          <tbody>
            {sampleBookings.map(
             (booking) =>
              (<tr>
                <td>
                  {booking.bookingId}
                </td>
                <td>
                  {booking.email}
                </td>
            <td>{booking.start.toDateString()}</td><td>{booking.end.toDateString()}</td><td>{booking.status}</td><td>{booking.reason}</td>
              </tr>
             
              )
               
              )            }
            </tbody></table > 
    </div>
  )
}


export default AdminBooking