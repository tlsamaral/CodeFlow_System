import React from 'react';
import './Navbar.css';

import NavItens from '../NavItens/NavItens';
import LogoIten from '../LogoIten/LogoItem';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {
  return ( 
    <nav>
      <LogoIten />
      <MobileMenu />
      <NavItens />
    </nav>
  );
}

export default Navbar;
