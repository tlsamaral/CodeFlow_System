import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({children}) {
  const [activeMenu, setActiveMenu] = useState(false);
  const [closeChat, setCloseChat] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const value = {
    activeMenu, 
    setActiveMenu,
    closeChat, 
    setCloseChat,
    modalIsOpen, 
    setModalIsOpen,
    comments, 
    setComments
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
