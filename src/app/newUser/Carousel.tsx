// components/Carousel.js
import { useState } from 'react';
import Image from 'next/image';
import Arrowleft from '@/public/arrow.png';
import Arrowright from '@/public/arrowright2.png'


const images = [
  '/Component.png',
  '/Component1.png',
  '/Component2.png',
  
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative col-span-2">
      <div className="relative h-80 w-full overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md"
      >
       <Image
      src={Arrowleft}
      alt="arrow"
      width={40}
      height={40}
    />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md"
      >
        <Image
      src={Arrowright}
      alt="arrow"
      width={40}
      height={40}
    />
      </button>
      <button className="absolute left-2 bottom-2 bg-[#538e53] text-white py-2 px-4 rounded">
        Shop Now
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#538e53]' : 'bg-white'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;














// // components/Carousel.js
// import { useState } from 'react';
// import Image from 'next/image';
// import Arrowleft from '@/public/arrow.png';
// import Arrowright from '@/public/arrowright2.png'

// const images = [
//     '/Component.png',
//     '/Component1.png',
//     '/Component2.png',
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative">
//       <div className="relative h-64 w-full overflow-hidden">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={handlePrevClick}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
//       >
//          <Image
//       src={Arrowleft}
//       alt="arrow"
//       width={20}
//       height={40}
//     />
//       </button>
//       <button
//         onClick={handleNextClick}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
//       >
//         <Image
//       src={Arrowright}
//       alt="arrow"
//       width={20}
//       height={40}
//     />
//       </button>
//       <button className="absolute left-4 bottom-4 bg-green-500 text-white py-2 px-4 rounded">
//         Shop Now
//       </button>
//     </div>
//   );
// };

// export default Carousel;
