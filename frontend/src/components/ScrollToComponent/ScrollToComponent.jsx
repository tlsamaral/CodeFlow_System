import React from 'react';
import propTypes from 'prop-types';

const ScrollToComponent = ({ targetId, children }) => {
  const handleScroll = (e) => {
    e.preventDefault();

    const targetComponent = document.getElementById(targetId);
    if (targetComponent) {
      targetComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleScroll}>
      {children}
    </a>
  );
};

export default ScrollToComponent;

ScrollToComponent.propTypes = {
  targetId: propTypes.string, 
  children: propTypes.string
};
