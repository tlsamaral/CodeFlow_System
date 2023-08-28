import React, { useContext } from 'react';
import './MobileMenu.css';
import AppContext from '../../context/AppContext';

function MobileMenu() {
  
  const {activeMenu, setActiveMenu} = useContext(AppContext);
  
  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return ( 
    <div className={`mobile-menu ${
      activeMenu ? 'active' : ''
    }`} 
    onClick={handleClickMenu}>
      <div className="line1"></div>    
      <div className="line2"></div>    
      <div className="line3"></div>    
    </div>
  );
}

export default MobileMenu;
