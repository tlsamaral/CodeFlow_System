import React from 'react';
import propTypes from 'prop-types';
import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PartialCommentCarousel.css'; // Estilos CSS personalizados

// Componente de Comentário Individual
function Comment({ rating, text }) {
  return (
    <div className="card">
      <div className="stars">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>

      <div className="infos">
        <p className="date-time">
          {rating}
        </p>
        <p className="description">
          {text}
        </p>
      </div>

      <div className="author">
       — John Doe
      </div>
    </div>
  );
}

// Componente do Carousel de Comentários com partes visíveis do anterior e do próximo
function PartialCommentCarousel({ comments }) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="partial-comment-carousel">
      <Slider {...settings}>
        {comments.map((comment, index) => (
          <div key={index} className="partial-comment-slide">
            <Comment rating={comment.rating} text={comment.text} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PartialCommentCarousel;

PartialCommentCarousel.propTypes = {
  comments: propTypes.array.isRequired,
};

Comment.propTypes = {
  rating: propTypes.number, 
  text: propTypes.string,
};
