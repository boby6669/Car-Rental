import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const BookingSuccess = () => {
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return <div className="text-center text-red-500 mt-10">⚠️ No booking data found</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50 p-6">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-4">✅ Booking Confirmed!</h2>

        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Car:</strong> {booking.car}</p>
        <p><strong>Pickup:</strong> {booking.pickup}</p>
        <p><strong>Drop:</strong> {booking.drop}</p>
        <p><strong>Date:</strong> {booking.date}</p>

        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-600 underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
