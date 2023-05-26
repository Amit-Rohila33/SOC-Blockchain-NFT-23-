import React, { useState } from 'react';
import Link from 'next/link';

/* TODO:
Add icons to hamburger buttons
Increase width of dropdown
Use a dropdown animation
Decide what options should be available here

Make it responsive, instead of dropdown; cover the entire screen in small screen devices
*/
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center p-2 text-white-500 rounded-md hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg">
          <div className="py-1">
            <Link legacyBehavior href="/">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
            </Link>
            <Link legacyBehavior href="/about">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Create</a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sell</a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Connect</a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Collections</a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Setting</a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
