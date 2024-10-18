

// import React from 'react';

// export default function Hero() {
//   return (
//     <div className="relative bg-[url(https://img.freepik.com/free-photo/startup-business-people-working-laptop_53876-42715.jpg?t=st=1729265516~exp=1729269116~hmac=7f16d8b8c2ee7e87934e3ed135c79bab1ce0ccd34b328e60244f4f6669968a92&w=900)] bg-cover bg-center bg-no-repeat">
//       {/* Pseudo-element for blur effect */}
//       <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
//       <div className="absolute inset-y-0 left-0 w-1/2 backdrop-blur-md"></div> {/* Blur overlay */}

//       <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
//         <div className="max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right">
//           <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
//             Let us find your
//           </h1>
//           <h1 className="text-6xl font-extrabold text-pink-600 sm:text-5xl">
//           Forever Home. 
//           </h1>

//           <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
//             numquam ea!
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4 text-center">
//             <a
//               href="#"
//               className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
//             >
//               Get Started
//             </a>

//             <a
//               href="#"
//               className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










"use client"
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images
  const images = [
    'https://img.freepik.com/free-photo/startup-business-people-working-laptop_53876-42715.jpg?t=st=1729265516~exp=1729269116~hmac=7f16d8b8c2ee7e87934e3ed135c79bab1ce0ccd34b328e60244f4f6669968a92&w=900',
    'https://img.freepik.com/free-photo/medium-shot-people-working-office-together_23-2149337277.jpg?semt=ais_hybrid',
    'https://stock.adobe.com/ng/images/empty-workplace-empty-office-empty-office-workspace-deserted-office-interior/914126791'
  ];

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})`,
      animation: "fadeIn 1s forwards"}}
    >
        
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="absolute inset-y-0 left-0 w-1/2 backdrop-blur-lg"></div> {/* Blur overlay */}

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-stone-800 sm:text-5xl">
            Let us find your
            <h2 className="text-4xl block font-extrabold text-stone-800"> Forever Home. </h2>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}





