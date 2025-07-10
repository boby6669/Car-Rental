// import React from 'react';

// const CarCard = ({ car, onChoose }) => {
//   return (
//     <div className="max-w-sm rounded-2xl shadow-lg p-4 bg-white text-center">
//       <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-lg mb-4" />
//       <h2 className="text-xl font-bold mb-2">{car.name}</h2>
//       <p className="text-gray-600 mb-2">Rent per day: ₹{car.rent}</p>
//       <button 
//         onClick={() => onChoose(car)} 
//         className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
//       >
//         Choose
//       </button>
//     </div>
//   );
// };

// export default CarCard;




// import React, { useState } from 'react';

// const CarCard = ({ car }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [imageIndex, setImageIndex] = useState(0);

//   const handleBuy = () => {
//     alert(`You selected to rent: ${car.name} at ₹${car.rent}/day`);
//   };

//   const prevImage = () => {
//     setImageIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
//   };

//   const nextImage = () => {
//     setImageIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 relative flex flex-col justify-between">
//       {/* Image Carousel */}
//       <div className="relative">
//         <img
//           src={car.images[imageIndex]}
//           alt={`${car.name} angle`}
//           className="w-full h-48 object-cover rounded-lg mb-4"
//         />
//         {/* Left Arrow */}
//         <button
//           onClick={prevImage}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full px-2 text-lg font-bold shadow"
//         >
//           ‹
//         </button>
//         {/* Right Arrow */}
//         <button
//           onClick={nextImage}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full px-2 text-lg font-bold shadow"
//         >
//           ›
//         </button>
//       </div>

//       {/* Title & Rent */}
//       <h2 className="text-xl font-bold text-center">{car.name}</h2>
//       <p className="text-gray-600 text-center">Rent per day: ₹{car.rent}</p>

//       {/* Extra Details (Fuel, Model, Seats) */}
//       {showDetails && (
//         <div className="mt-4 text-left">
//           <p><strong>Fuel:</strong> {car.details.fuel}</p>
//           <p><strong>Model:</strong> {car.details.model}</p>
//           <p><strong>Seats:</strong> {car.details.seats}</p>
//         </div>
//       )}

//       {/* Bottom Row: Buy + See More */}
//       <div className="mt-4 flex items-center justify-between">
//         <button
//           onClick={handleBuy}
//           className="border border-green-500 text-green-600 px-4 py-2 rounded hover:bg-green-50"
//         >
//           Buy for Rent
//         </button>

//         <button
//           onClick={() => setShowDetails(!showDetails)}
//           className="text-blue-500 text-sm underline hover:text-blue-600"
//         >
//           {showDetails ? "See Less" : "See More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarCard;




// import React, { useState } from 'react';

// const CarCard = ({ car }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [imageIndex, setImageIndex] = useState(0);

//   const handleBuy = () => {
//     alert(`You selected to rent: ${car.name} at ₹${car.rent}/day`);
//   };

//   const prevImage = () => {
//     setImageIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
//   };

//   const nextImage = () => {
//     setImageIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 relative flex flex-col justify-between">
//       {/* Image Carousel */}
//       <div className="relative">
//         <img
//           src={car.images[imageIndex]}
//           alt={`${car.name} image ${imageIndex + 1}`}
//           className="w-full h-48 object-cover rounded-lg mb-4"
//         />
//         {/* Left Arrow */}
//         <button
//           onClick={prevImage}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 sm:px-2 text-lg font-bold shadow"
//         >
//           ‹
//         </button>
//         {/* Right Arrow */}
//         <button
//           onClick={nextImage}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 sm:px-2 text-lg font-bold shadow"
//         >
//           ›
//         </button>
//       </div>

//       {/* Title & Rent */}
//       <h2 className="text-xl font-bold text-center">{car.name}</h2>
//       <p className="text-gray-600 text-center">Rent per day: ₹{car.rent}</p>

//       {/* Extra Details (Fuel, Model, Seats) */}
//       {showDetails && (
//         <div className="mt-4 text-left text-sm sm:text-base">
//           <p><strong>Fuel:</strong> {car.details.fuel}</p>
//           <p><strong>Model:</strong> {car.details.model}</p>
//           <p><strong>Seats:</strong> {car.details.seats}</p>
//         </div>
//       )}

//       {/* Bottom Row: Rent + See More */}
//       <div className="mt-4 flex items-center justify-between">
//         <button
//           onClick={handleBuy}
//           className="border border-green-500 text-green-600 px-4 py-2 rounded hover:bg-green-50"
//         >
//           Rent Now
//         </button>

//         <button
//           onClick={() => setShowDetails(!showDetails)}
//           className="text-blue-500 text-sm underline hover:text-blue-600"
//         >
//           {showDetails ? "See Less" : "See More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarCard;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // ✅

// const CarCard = ({ car }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [imageIndex, setImageIndex] = useState(0);
//   const navigate = useNavigate(); // ✅

//   const handleBuy = () => {
//     // Navigate to booking page with selected car
//     navigate('/booking', { state: { selectedCar: car.name } });
//   };

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4">
//       <img src={car.images[imageIndex]} alt={car.name} className="w-full h-48 object-cover rounded mb-4" />

//       <h2 className="text-xl font-bold text-center">{car.name}</h2>
//       <p className="text-gray-600 text-center">Rent per day: ₹{car.rent}</p>

//       {showDetails && (
//         <div className="mt-4 text-left">
//           <p><strong>Fuel:</strong> {car.details.fuel}</p>
//           <p><strong>Model:</strong> {car.details.model}</p>
//           <p><strong>Seats:</strong> {car.details.seats}</p>
//         </div>
//       )}

//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={handleBuy}
//           className="border border-green-500 text-green-600 px-4 py-2 rounded hover:bg-green-50"
//         >
//           Buy for Rent
//         </button>

//         <button
//           onClick={() => setShowDetails(!showDetails)}
//           className="text-blue-500 text-sm underline"
//         >
//           {showDetails ? "See Less" : "See More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarCard;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CarCard = ({ car }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [imageIndex, setImageIndex] = useState(0);
//   const navigate = useNavigate();

//   const handleBuy = () => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//     if (!isLoggedIn) {
//       alert('⚠️ Please login first to book a car');
//       navigate('/auth'); // redirect to login
//     } else {
//       // user is logged in, go to booking page
//       navigate('/booking', { state: { selectedCar: car.name } });
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4">
//       <img src={car.images[imageIndex]} alt={car.name} className="w-full h-48 object-cover rounded mb-4" />
//       <h2 className="text-xl font-bold text-center">{car.name}</h2>
//       <p className="text-gray-600 text-center">Rent per day: ₹{car.rent}</p>

//       {showDetails && (
//         <div className="mt-4 text-left">
//           <p><strong>Fuel:</strong> {car.details.fuel}</p>
//           <p><strong>Model:</strong> {car.details.model}</p>
//           <p><strong>Seats:</strong> {car.details.seats}</p>
//         </div>
//       )}

//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={handleBuy}
//           className="border border-green-500 text-green-600 px-4 py-2 rounded hover:bg-green-50"
//         >
//           Buy for Rent
//         </button>

//         <button
//           onClick={() => setShowDetails(!showDetails)}
//           className="text-blue-500 text-sm underline"
//         >
//           {showDetails ? "See Less" : "See More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarCard;


// ✅ CarCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleBuy = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert('Please login first');
      navigate('/auth');
    } else {
      navigate('/booking', { state: { selectedCar: car.name } });
    }
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 relative flex flex-col justify-between">
      {/* Image Carousel */}
      <div className="relative">
        <img
          src={car.images[imageIndex]}
          alt={`${car.name} angle`}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full px-2 text-lg font-bold shadow"
        >
          ‹
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full px-2 text-lg font-bold shadow"
        >
          ›
        </button>
      </div>

      {/* Title & Rent */}
      <h2 className="text-xl font-bold text-center">{car.name}</h2>
      <p className="text-gray-600 text-center">Rent per day: ₹{car.rent}</p>

      {/* Extra Details (Fuel, Model, Seats) */}
      {showDetails && (
        <div className="mt-4 text-left">
          <p><strong>Fuel:</strong> {car.details.fuel}</p>
          <p><strong>Model:</strong> {car.details.model}</p>
          <p><strong>Seats:</strong> {car.details.seats}</p>
        </div>
      )}

      {/* Bottom Row: Buy + See More */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleBuy}
          className="border border-green-500 text-green-600 px-4 py-2 rounded hover:bg-green-50"
        >
          Buy for Rent
        </button>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-500 text-sm underline hover:text-blue-600"
        >
          {showDetails ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
