import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCar = location.state?.selectedCar || '';

  const [form, setForm] = useState({
    name: '',
    car: selectedCar,
    pickup: '',
    drop: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Redirect to /success with form data
    navigate('/success', { state: form });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white shadow-md p-8 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Book a Car</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full border p-2 rounded" />

          <select name="car" value={form.car} onChange={handleChange} required className="w-full border p-2 rounded">
            <option value="">Select Car</option>
            <option>Maruti Swift</option>
            <option>Hyundai i20</option>
            <option>Toyota Innova</option>
            <option>Tata Nexon</option>
            <option>Honda City</option>
          </select>

          <input type="text" name="pickup" placeholder="Pickup Location" value={form.pickup} onChange={handleChange} required className="w-full border p-2 rounded" />

          <input type="text" name="drop" placeholder="Drop Location" value={form.drop} onChange={handleChange} required className="w-full border p-2 rounded" />

          <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full border p-2 rounded" />

          <button type="submit" className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
