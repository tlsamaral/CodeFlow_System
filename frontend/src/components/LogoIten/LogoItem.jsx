import React from 'react';
import ImageLogo from '../../assets/images/logo/CodeFlow-logo-white.svg';

import './LogoIten.css';

function LogoIten() {
  return ( 
    <a href="/" className="logo">
      <img src={ImageLogo} alt="image/png" />
    </a>
  );
}

export default LogoIten;
