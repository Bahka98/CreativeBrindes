// src/components/layout/Footer.jsx
import React, { useEffect } from 'react';
import SubFooter from './SubFooter';
import SocialIcons from '../ui/SocialIcons';

function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-[1rem] px-10">
      <SubFooter></SubFooter>

      <div>
        <SocialIcons></SocialIcons>
      </div>
    </footer>
  );
}

export default Footer;