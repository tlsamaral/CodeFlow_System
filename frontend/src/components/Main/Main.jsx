import React, { Fragment } from 'react';
import Banners from '../Banners/Banners';
import ProductGateway from '../ProductGateway/ProductGateway';

function Main() {
  return ( 
    <Fragment>
      <Banners />
      <ProductGateway />
    </Fragment>
  );  
}

export default Main;
