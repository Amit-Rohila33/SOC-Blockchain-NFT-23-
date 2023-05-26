import React from 'react';

const Explorer = () => {
  return (
      <div className='rounded bg-white ml-10 mr-10 my-10 px-4 py-2 flex justify-center'>
        <div className='w-1/6 bg-transparent h-12 flex items-center justify-center'>
          <button className='bg-white hover:bg-black hover:text-white text-black hover:border-white font-bold py-2 px-4 rounded-full'>
            All
          </button>
        </div>
        <div className='w-1/6 bg-transparent h-12 flex items-center justify-center'>
          <button className='bg-white hover:bg-black hover:text-white text-black hover:border-white font-bold py-2 px-4 rounded-full'>
            Sports
          </button>
        </div>
        <div className='w-1/6 bg-transparent h-12 flex items-center justify-center'>
          <button className='bg-white hover:bg-black hover:text-white text-black hover:border-white font-bold py-2 px-4 rounded-full'>
            Animal
          </button>
        </div>
        <div className='w-1/6 bg-transparent h-12 flex items-center justify-center'>
          <button className='bg-white hover:bg-black hover:text-white text-black hover:border-white font-bold py-2 px-4 rounded-full'>
            Anime
          </button>
        </div>
        <div className='w-1/6 bg-transparent h-12 flex items-center justify-center'>
          <button className='bg-white hover:bg-black hover:text-white text-black hover:border-white font-bold py-2 px-4 rounded-full'>
            Cyberpunk
          </button>
        </div>
        <div className='w-1/6 bg-transparent h-12 flex items-center justify-center'>
          <button className='bg-white hover:bg-black hover:text-white text-black hover:border-white font-bold py-2 px-4 rounded-full'>
            Abstract
          </button>
        </div>
      </div>
  );
};

export default Explorer;
