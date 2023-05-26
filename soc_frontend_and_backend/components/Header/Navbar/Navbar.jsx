import React from 'react';
import Image from 'next/image';
import Hamburger from '@/components/Header/Navbar/Hamburger';

/* TODO: 
Add correct logo for the website.
Add search button in the searchbar
Add day-night toggle button
Improve the 'connect-wallet' button
Make it all responsive
*/

const Navbar = () => {
  return (
    <nav className='bg-blue-500 shadow-lg'>
      <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
        <div className='flex items-center'>
          {/* Website Logo */}
          <Image src='next.svg' alt='Logo' width={100} height={100} />
          <div className='w-full px-4'>
            <input
              type='text'
              placeholder='Search'
              className='w-full px-4 py-2 text-black rounded border-gray-300'
            />
          </div>
        </div>
        <div className='flex items-end space-x-4'>
          {/* Account */}
          <button className='bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Connect wallet
          </button>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
