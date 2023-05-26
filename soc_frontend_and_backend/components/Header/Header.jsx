import React from 'react';
import Navbar from '@/components/Header/Navbar/Navbar';
import HeroSection from '@/components/Header/HeroSection';
import Explorer from '@/components/Header/Explorer';

const Header = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Explorer />
    </>
  );
};

export default Header;
