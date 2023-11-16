import React from 'react';
import propTypes from 'prop-types';
import './CategoryImage.css';

function CategoryImage(props) {
  const { category } = props;
  console.log(category.image);
  return (
    <div>
      {category.image ? (
        <img className="img" src={`data:image/png;base64,${category.image.data}`} alt="" />
      ) : (
        <div className="image-loading loading"></div>
      )}
    </div>
  );
}

export default CategoryImage;

CategoryImage.propTypes = {
  category: propTypes.object,
};
