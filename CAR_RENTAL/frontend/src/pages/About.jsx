// import React from 'react';


// const About = () => {
//   return (
//     <div className="bg-gray-100 text-gray-800 min-h-screen p-6">
//       <div className="container mx-auto max-w-4xl">
//         <h1 className="text-4xl font-bold mb-6 text-center text-primary">About Us</h1>

//         <p className="mb-6 text-lg">
//           Welcome to <strong>Car Rental</strong> – your trusted destination for affordable and reliable car rental services.
//           Whether you're planning a family trip, a weekend getaway, or a business journey, we’ve got the perfect car for every need.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">Our Mission</h2>
//         <p className="mb-6">
//           Our mission is simple: to provide seamless, budget-friendly, and convenient car rental experiences for everyone.
//           We aim to make travel easier with a wide range of cars, hassle-free bookings, and exceptional customer support.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">What We Offer</h2>
//         <ul className="list-disc list-inside space-y-2 mb-6">
//           <li>🚗 A wide variety of cars: from hatchbacks to sedans to SUVs</li>
//           <li>💰 Competitive daily rental pricing starting at just ₹1200</li>
//           <li>📆 Flexible rental durations – hourly, daily, or weekly</li>
//           <li>🛡️ Well-maintained, insured, and sanitized vehicles</li>
//           <li>📍 Easy pickup/drop locations across major cities</li>
//           <li>☎️ 24/7 Customer support for all your queries</li>
//         </ul>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">Our Fleet</h2>
//         <p className="mb-6">
//           Our fleet includes popular and trusted models like Maruti Swift, Hyundai i20, Toyota Innova, Tata Nexon, and Honda City. 
//           Each vehicle is thoroughly inspected and cleaned before every ride to ensure a safe and smooth journey for you.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose Us?</h2>
//         <ul className="list-disc list-inside space-y-2 mb-6">
//           <li>✅ Transparent pricing with no hidden charges</li>
//           <li>✅ Easy online booking and instant confirmation</li>
//           <li>✅ Friendly staff and quick customer support</li>
//           <li>✅ 100% satisfaction guarantee</li>
//         </ul>

//         <div className="mt-10 text-center">
//           <p className="text-lg">Ready to hit the road? 🚘</p>
//           <button className="mt-4 px-6 py-2 bg-primary text-black rounded hover:bg-primary/80 duration-300">
//             Book Your Ride Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl w-full space-y-6">

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center text-primary">About Us</h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 text-center">
          Welcome to <strong>Car Rental</strong> – your trusted destination for affordable and reliable car rental services.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Mission */}
          <div className="bg-gray-300 rounded-xl shadow p-5">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              To provide seamless, budget-friendly, and convenient car rental experiences for everyone. We aim to make travel easier
              with a wide range of cars, hassle-free bookings, and exceptional customer support.
            </p>
          </div>

          {/* Card 2: What We Offer */}
          <div className="bg-gray-300 rounded-xl shadow p-5">
            <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🚗 Variety of cars: hatchbacks to SUVs</li>
              <li>💰 Prices starting at ₹1200/day</li>
              <li>📆 Hourly, daily, or weekly rental</li>
              <li>🛡️ Insured & sanitized vehicles</li>
              <li>📍 Pickup/drop in major cities</li>
              <li>☎️ 24/7 customer support</li>
            </ul>
          </div>

          {/* Card 3: Our Fleet */}
          <div className="bg-gray-300 rounded-xl shadow p-5">
            <h2 className="text-2xl font-semibold mb-2">Our Fleet</h2>
            <p>
              Models like Maruti Swift, Hyundai i20, Toyota Innova, Tata Nexon, and Honda City — all inspected & cleaned before each ride.
            </p>
          </div>

          {/* Card 4: Why Choose Us */}
          <div className="bg-gray-300 rounded-xl shadow p-5">
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ No hidden charges</li>
              <li>✅ Instant online booking</li>
              <li>✅ Friendly support staff</li>
              <li>✅ 100% satisfaction guaranteed</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg">Ready to hit the road? 🚘</p>
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary/80 duration-300">
            Book Your Ride Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
