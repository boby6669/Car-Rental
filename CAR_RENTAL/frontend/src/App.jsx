// // import React, {useState, useEffect} from 'react'
// // import Navbar from './components/Navbar/Navbar'
// // import Hero from './components/Hero/Hero'
// // import CarCard from './components/card/CarCard'

// // const App = () => {
// //   // const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");


// // const cars = [
// //     { id: 1, name: "Maruti Swift", rent: 1200, image: "https://via.placeholder.com/300x200?text=Swift" },
// //     { id: 2, name: "Hyundai i20", rent: 1400, image: "https://via.placeholder.com/300x200?text=i20" },
// //     { id: 3, name: "Toyota Innova", rent: 2500, image: "https://via.placeholder.com/300x200?text=Innova" },
// //   ];

// //   const handleChoose = (car) => {
// //     alert(`You selected: ${car.name} (₹${car.rent}/day)`);
// //   };



// //   return (

    




// //     <div> 
// //       <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-bold mb-6 text-center">Available Cars</h1>
// //       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
// //         {cars.map(car => (
// //           <CarCard key={car.id} car={car} onChoose={handleChoose} />
// //         ))}
// //       </div>
// //     </div>





// //     {/* <Navbar theme={theme} setTheme={setTheme} / > */}

// //     <Navbar/>
// //     <Hero/>
// //     <CarCard/>
      
// //     </div>
// //   )
// // }

// // export default App




// // import React, { useState, useEffect } from 'react'
// // import Navbar from './components/Navbar/Navbar'
// // import Hero from './components/Hero/Hero'
// // import CarCard from './components/card/CarCard'


// // const App = () => {
// //   const cars = [
// //     { id: 1, name: "Maruti Swift", rent: 1200, image: "/cars/swift.png" },
// //     { id: 2, name: "Hyundai i20", rent: 1400, image: "https://via.placeholder.com/300x200?text=i20" },
// //     { id: 3, name: "mahindra Scorpio N(Manual)", rent: 6500, image: "/cars/scorpio-N.png" },
// //     { id: 4, name: "Mahindra Thar", rent: 5000, image: "https://via.placeholder.com/300x200?text=Swift" },
// //     { id: 5, name: "Maruti Suzuki Baleno", rent: 2200, image: "/cars/Bolero." },
// //     { id: 6, name: "Mahindra Bolero", rent: 1800, image: "/cars/Bolero.png" },
// //     { id: 7, name: "Tata Harriar", rent: 7000, image: "https://via.placeholder.com/300x200?text=Swift" },
// //     { id: 8, name: "Toyota Fortuner", rent: 12000, image: "/cars/fortuner.png" },
// //     { id: 9, name: "Hyudai Verna ", rent: 6000, image: "https://via.placeholder.com/300x200?text=Swift" },
// //     { id: 10, name: "Tata Curravv Ev", rent: 5500, image: "https://via.placeholder.com/300x200?text=Swift" },
// //     { id: 11, name: "Kia Seltos", rent: 1600, image: "https://via.placeholder.com/300x200?text=Swift" },
// //     { id: 12, name: "Toyota Innova", rent: 4500, image: "/cars/innova.png" },
// //   ];

// //   const handleChoose = (car) => {
// //     alert(`You selected: ${car.name} (₹${car.rent}/day)`);
// //   };

// //   return (
// //     <div>
// //       <Navbar />
// //       <Hero />

// //       <div className="p-6 bg-gray-100 min-h-screen">
// //         <h1 className="text-3xl font-bold mb-6 text-center">Available Cars</h1>
// //         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
// //           {cars.map(car => (
// //             <CarCard key={car.id} car={car} onChoose={handleChoose} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;




// // import React, { useState } from 'react';
// // import Navbar from './components/Navbar/Navbar';
// // import Hero from './components/Hero/Hero';
// // import CarCard from './components/card/CarCard';

// // const App = () => {
// //   const [showAll, setShowAll] = useState(false);

// //   const cars = [
// //     {
// //       id: 1,
// //       name: "Maruti Swift",
// //       rent: 1200,
// //       images: ["/cars/swift.png", "/cars/Bolero.png", "/cars/scorpio.png"],
// //       details: { fuel: "Petrol", model: "2022", seats: 5 },
// //     },
// //     {
// //       id: 2,
// //       name: "Hyundai i20",
// //       rent: 1400,
// //       images: ["/cars/i201.png", "/cars/i202.png", "/cars/i203.png"],
// //       details: { fuel: "Diesel", model: "2023", seats: 5 },
// //     },
// //     {
// //       id: 3,
// //       name: "Toyota Innova",
// //       rent: 2500,
// //       images: ["/cars/innova1.png", "/cars/innova2.png", "/cars/innova3.png"],
// //       details: { fuel: "Petrol", model: "2021", seats: 7 },
// //     },
// //     {
// //       id: 4,
// //       name: "Tata Nexon",
// //       rent: 1600,
// //       images: ["/cars/nexon1.png", "/cars/nexon2.png", "/cars/nexon3.png"],
// //       details: { fuel: "Diesel", model: "2022", seats: 5 },
// //     },
// //     {
// //       id: 5,
// //       name: "Honda City",
// //       rent: 1900,
// //       images: ["/cars/city1.png", "/cars/city2.png", "/cars/city3.png"],
// //       details: { fuel: "Petrol", model: "2023", seats: 5 },
// //     },
// //   ];

// //   const visibleCars = showAll ? cars : cars.slice(0, 3);

// //   return (
// //     <div>
// //       <Navbar />
// //       <Hero />
// //       <server/>
     


// //       <div className="p-6 bg-gray-100 min-h-screen" id='cars'>
// //         <h1 className="text-3xl font-bold mb-6 text-center">Available Cars</h1>

// //         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
// //           {visibleCars.map(car => (
// //             <CarCard key={car.id} car={car} />
// //           ))}
// //         </div>

// //         <div className="text-center mt-6">
// //           <button 
// //             onClick={() => setShowAll(!showAll)} 
// //             className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
// //           >
// //             {showAll ? "See Less Cars" : "See More Cars"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;







// import React, { useState } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import CarCard from './components/card/CarCard';
// import About from './pages/About';
// import Booking from './pages/Booking';


// const App = () => {
//   const [showAll, setShowAll] = useState(false);

//   const cars = [
//     {
//       id: 1,
//       name: "Maruti Swift",
//       rent: 1200,
//       images: ["/cars/swift.png", "/cars/Bolero.png", "/cars/scorpio.png"],
//       details: { fuel: "Petrol", model: "2022", seats: 5 },
//     },
//     {
//       id: 2,
//       name: "Hyundai i20",
//       rent: 1400,
//       images: ["/cars/i201.png", "/cars/i202.png", "/cars/i203.png"],
//       details: { fuel: "Diesel", model: "2023", seats: 5 },
//     },
//     {
//       id: 3,
//       name: "Toyota Innova",
//       rent: 2500,
//       images: ["/cars/innova1.png", "/cars/innova2.png", "/cars/innova3.png"],
//       details: { fuel: "Petrol", model: "2021", seats: 7 },
//     },
//     {
//       id: 4,
//       name: "Tata Nexon",
//       rent: 1600,
//       images: ["/cars/nexon1.png", "/cars/nexon2.png", "/cars/nexon3.png"],
//       details: { fuel: "Diesel", model: "2022", seats: 5 },
//     },
//     {
//       id: 5,
//       name: "Honda City",
//       rent: 1900,
//       images: ["/cars/city1.png", "/cars/city2.png", "/cars/city3.png"],
//       details: { fuel: "Petrol", model: "2023", seats: 5 },
//     },
//   ];

//   const visibleCars = showAll ? cars : cars.slice(0, 3);
  

//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <About />

      
//       <div className="p-6 bg-gray-100 min-h-screen" id='cars'>
//         <h1 className="text-3xl font-bold mb-6 text-center">Available Cars</h1>

//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {visibleCars.map(car => (
//             <CarCard key={car.id} car={car} />
            
//           ))}
//         </div>

//         <div className="text-center mt-6">
//           <button 
//             onClick={() => setShowAll(!showAll)} 
//             className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
//           >
//             {showAll ? "See Less Cars" : "See More Cars"}
//           </button>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './pages/About';
import Booking from './pages/Booking';
import CarCard from './components/card/CarCard';
import BookingSuccess from './pages/BookingSuccess';
import Footer from './components/Footer/Footer';
import Auth from './pages/Auth';

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const cars = [
    {
      id: 1,
      name: "Maruti Swift",
      rent: 1200,
      images: ["/cars/swift.png", "/cars/swift2.png", "/cars/swift3.png"],
      details: { fuel: "Petrol", model: "2022", seats: 5 },
    },
    {
      id: 2,
      name: "Hyundai i20",
      rent: 1400,
      images: ["/cars/h1.png", "/cars/h3.png", "/cars/h4.png"],
      details: { fuel: "Diesel", model: "2023", seats: 5 },
    },
    {
      id: 3,
      name: "Toyota Innova",
      rent: 2500,
      images: ["/cars/ti1.png", "/cars/ti2.png", "/cars/ti3.png"],
      details: { fuel: "Petrol", model: "2021", seats: 7 },
    },
    {
      id: 4,
      name: "Tata Nexon",
      rent: 1600,
      images: ["/cars/n1.png", "/cars/n2.png", "/cars/n3.png"],
      details: { fuel: "Diesel", model: "2022", seats: 5 },
    },
    {
      id: 5,
      name: "Honda City",
      rent: 1900,
      images: ["/cars/c1.png", "/cars/c2.png", "/cars/c3.png"],
      details: { fuel: "Petrol", model: "2023", seats: 5 },
    },
  ];

  const visibleCars = showAll ? cars : cars.slice(0, 3);

  return (
    <>
      <Hero />
      

      <div className="p-6 bg-gray-100 min-h-screen" id="cars">
        <h1 className="text-3xl font-bold mb-6 text-center">Available Cars</h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {visibleCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            {showAll ? "See Less Cars" : "See More Cars"}
          </button>
        </div>
      </div>
      <About />
      
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/success" element={<BookingSuccess />} /> {/* ✅ new route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/auth" element={<Auth />} />
        
      </Routes>
      <Footer />  {/* ✅ place at bottom */}
    </Router>
  );
};

export default App;
