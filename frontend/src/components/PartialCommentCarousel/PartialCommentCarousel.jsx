import React from 'react';
import propTypes from 'prop-types';
import Slider from 'react-slick';
import { formatDistanceToNow } from 'date-fns';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PartialCommentCarousel.css'; // Estilos CSS personalizados


// Componente de Comentário Individual
function Comment({ name ,rating, comment, submissionDate }) {
  const formattedDate = formatDistanceToNow(new Date(submissionDate), { addSuffix: true });
  
  const createStars = () => {
    let starsArray = [];

    for(let i = 0; i< rating; i++){
      starsArray.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    return starsArray;
  };

  return (
    <div className="card">
      <div className="stars">
        {createStars()}
      </div>

      <div className="infos">
        <p className="date-time">
          {formattedDate}
        </p>
        <p className="description">
          {comment}
        </p>
      </div>

      <div className="author">
       — {name}
      </div>
    </div>
  );
}

// Componente do Carousel de Comentários com partes visíveis do anterior e do próximo
function PartialCommentCarousel({ comments }) {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="partial-comment-carousel">
      <Slider {...settings}>
        {comments.map((comment, index) => (
          <div key={index} className="partial-comment-slide">
            <Comment {...comment} />
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
  name: propTypes.string,
  rating: propTypes.number, 
  comment: propTypes.string,
  submissionDate: propTypes.string
};
