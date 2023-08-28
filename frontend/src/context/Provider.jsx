import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({children}) {
  const [activeMenu, setActiveMenu] = useState(false);


  const value = {
    activeMenu, 
    setActiveMenu 
  };

  return ( 
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.children,
}.isRequired;
