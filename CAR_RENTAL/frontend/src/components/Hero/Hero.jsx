// import React from 'react'
// import carPng from "../Hero/car.png"

// const Hero = () => {
//   return (
//     <div className='dark:bg-black dark:text-white duration-300'>
//       <div className="container min-h-[620px]">
//         <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
//             <div className='order-1 sm:order-2'>
//                 <img src={car.png} alt="" />
//             </div>
//             <div className="order-2 sm:order-2">
//                 <p>Effortless</p>
//                 <h1>Car Rental</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum necessitatibus laborum maxime commodi illo aspernatur explicabo </p>
//             </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react';
import carPng from "../Hero/car.png";

const Hero = () => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative -z-20'>
      <div className="container min-h-[620px]">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div className='order-1 sm:order-2'>
            <img src={carPng} alt="Car" className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20_6px_rgba(0,0,0,0.50)]
            ' />
          </div>
          <div className="order-2 sm:order-1 space-y-8 sm:pr-32">
            <p className='text-primary text-2xl font-serif'>Effortless</p>
            <h1
               className='text-5xl lg:text-7xl font-semibold font-serif'
            >Car Rental</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolorum necessitatibus laborum maxime commodi illo aspernatur explicabo.
            </p>
            <button
              className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300"
            >Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



// import React from 'react';
// import carPng from "../Hero/car.png"; // Ensure the path is correct!

// const Hero = () => {
//   return (
//     <div className='dark:bg-black dark:text-white duration-300 relative -z-20'>
//       <div className="container min-h-[620px]">
//         <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
//           {/* Car Image */}
//           <div className='order-1 sm:order-2'>
//             <img
//               src={carPng}
//               alt="Car"
//               className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
//             />
//           </div>

//           {/* Text Section */}
//           <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
//             <p className='text-primary text-2xl font-serif'>Effortless</p>
//             <h1 className='text-5xl lg:text-7xl font-semibold font-serif'>
//               Car Rental
//             </h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
//               dolorum necessitatibus laborum maxime commodi illo aspernatur explicabo.
//             </p>
//             <button className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
