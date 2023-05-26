import React, { useState } from 'react';

/* TODO:
Improve image transition animation
Add meaningful text for each image
Use PNG's(with non-transparent pixels on right end) instead of jpeg's and show text 
on center-left instead of bottom-left, also reduce the height of each image.
More refined border for images and seperation from navbar.
*/
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    /* find better images, probably png */
    '/images/astronaut.png',
    '/images/image1.png',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='relative z-0 mx-32'>
      <img
        src={images[currentImage]}
        alt='Hero Image'
        className='object-cover h-auto w-full'
      />
      <div className='absolute bottom-0 left-0 mb-8 ml-8'>
        <h1 className='text-4xl text-white font-bold mb-4'>
          Welcome to NFT Marketplace
        </h1>
        <p className='text-lg text-white mb-8'>
          Discover and collect unique digital assets from artists around the
          world.
        </p>
        <a
          href='#explore'
          className='inline-block bg-white text-purple-500 rounded-full py-3 px-8 font-semibold shadow-lg hover:bg-purple-500 hover:text-white transition duration-300'
        >
          Explore Now
        </a>
      </div>
      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full'>
        <button
          className='p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition duration-300'
          onClick={prevImage}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        <button
          className='p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition duration-300'
          onClick={nextImage}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
