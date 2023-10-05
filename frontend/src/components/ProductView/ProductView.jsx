import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import ProductCategory from '../ProductCategory/ProductCategory';
import './ProductView.css';
import CategoryImage from '../CategoryImage/CategoryImage';

function ProductView(props) {
  
  const { categories } = props.product;	
  const initialCategory = categories.find(c => c.id === 1);

  const [categorySelected, setCategorySelected] = useState(initialCategory);

  const handleCategorySelected = (id) => {
    const category = categories.find(p => p.id === id);

    setCategorySelected(category);
  };

  useEffect(()=> {
    console.log(categorySelected);
  }, [categorySelected]);

  return ( 
    <div className="container product-view">
      <ul>
        {categories.map(c => 
          <ProductCategory 
            key={c.id} 
            name={c.name} 
            onClick={() => handleCategorySelected(c.id)} 
            active={categorySelected && categorySelected.id === c.id}
          />
        )}
      </ul>
      
      <CategoryImage category={categorySelected}/>
    </div>
  );
}

export default ProductView;

ProductView.propTypes = {
  categories: propTypes.array
}.isRequired;
