import React from 'react';
import propTypes from 'prop-types';
import './ProductCategory.css';

function ProductCategory(props) { 
  
  const { name, active,onClick } = props;

  return ( 
    <li className={`product-category ${active && 'active'}`} onClick={onClick}>
      <span>{name}</span>
    </li>
  );
}

export default ProductCategory;

ProductCategory.propTypes = {
  name: propTypes.string.isRequired,
  active: propTypes.bool,
  onClick: propTypes.func
}.isRequired;
