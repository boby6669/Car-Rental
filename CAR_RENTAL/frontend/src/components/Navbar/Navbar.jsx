// import React from 'react'
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

// const NavLinks = [
//     {
//         id:"1",
//         name: "HOME",
//         link:"/#",
//     },
//     {
//         id:"2",
//         name: "CARS",
//         link:"/#cars",
//     },
//     {
//         id:"3",
//         name: "ABOUT",
//         link:"/#about ",
//     },
//     {
//         id:"4",
//         name: "BOOKING",
//         link:"/#booking",
//     },

// ]
// const Navbar = () => {
//   return (
//     <nav className='shadow-md'>
//       <div className="container">
//         <div className="flex justify-between items-center">
//             <div>
//                 <h1 className='text-3xl font-bold font-serif'>Car Rental</h1>
//             </div>
//             <div className='"hidden md:block"'>
//                 <ul className='flex items-center gap-8'>
//                     {
//                         NavLinks.map((data) => (
                            

//                     <li key={data.id}
//                      className='py-4'>
//                         <a className=' py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg ' href={data.link}>{data.name}</a>
//                     </li>
                    
                            
//                         ))
//                     }
                    
//                 </ul>
//             </div>
//             {/* <div>
//                 {
//                     theme = "dark" ? (
//                         <BiSolidSun className='text-2xl'/>
//                     ) : (
//                         <BiSolidMoon className='text-2xl'/>
//                     )
//                 }
//                 <BiSolidSun className='text-2xl'/>
//             </div> */}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar




import React from 'react'
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const NavLinks = [
    {
        id: "1",
        name: "HOME",
        link: "/#",
    },
    {
        id: "2",
        name: "CARS",
        link: "/#cars",
    },
    {
        id: "3",
        name: "ABOUT",
        link: "/about",
    },
    {
        id: "4",
        name: "BOOKING",
        link: "/booking",
    },
    { id: "5", name: "LOGIN", link: "/auth" },
];

const Navbar = () => {
    return (
        <nav className='shadow-md'>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <h1 className='text-3xl font-bold font-serif'>Car Rental</h1>
                    </div>
                    <div className="hidden md:block">
                        <ul className='flex items-center gap-8'>
                            {NavLinks.map((data) => (
                                <li key={data.id} className='py-4'>
                                    <a
                                        className='py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg'
                                        href={data.link}
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                    
                    {/* Future toggle for dark/light theme:
                    <div>
                        {theme === "dark" ? (
                            <BiSolidSun className='text-2xl' />
                        ) : (
                            <BiSolidMoon className='text-2xl' />
                        )}
                    </div>
                    */}
                </div>
            </div>
        </nav>
    );
};



export default Navbar;
