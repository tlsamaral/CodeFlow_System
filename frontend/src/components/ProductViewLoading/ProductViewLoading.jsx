import React from 'react';
import './ProductViewLoading.css';

function ProductViewLoading() {
  return ( 
    <div className="container product-view-loading">
      <ul>
        <li className="loading "></li>
        <li className="loading"></li>
        <li className="loading"></li>
        <li className="loading"></li>
        <li className="loading"></li>
      </ul>

      <div className="image-loading loading">

      </div>
    </div>
  );
}

export default ProductViewLoading;
