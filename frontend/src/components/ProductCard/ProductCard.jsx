import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { IoIosArrowDown } from 'react-icons/io';

function ProductCard(props) {
  
  const { name, isComingSoon, isSelected , onClick } = props;

  const [btnMoreInfo, setBtnMoreInfo] = useState(true);

  const iconStyle = {
    fontSize: '22px'
  };

  return ( 
    <div 
      className={`product-card ${ isComingSoon ? 'desabled' : ''} ${isSelected ? 'selected blink' : ''}`}
      onClick={() => {
        onClick();
        setBtnMoreInfo(!btnMoreInfo);
      }}>
      <h3>{name}</h3>

      <div className="area-button">
        <div className="area-more-info">
          {
            !isSelected ? 
              <button className="btn-more-info">Saiba Mais</button> : 
              <button className="btn-arrow-info">
                <IoIosArrowDown style={iconStyle}/>
              </button>
          }
          
          
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isComingSoon: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
