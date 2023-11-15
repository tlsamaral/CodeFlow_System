import React, { useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import { AiOutlineComment, AiOutlineBarChart, AiOutlineHeart } from 'react-icons/ai'; 
import './FeedbackSummary.css';

function FeedbackSummary({ averageRating, totalComments, satisfiedCustomers }) {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const { setModalIsOpen } = useContext(AppContext);

  console.log(averageRating);

  const style = {
    fontSize: '40px'
  };
 
  const targetRating = 74; // Valor desejado para a média

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter >= targetRating) {
        clearInterval(interval);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [counter, targetRating]);
  
  useEffect(() => {
    const targetCount = totalComments; // Número total de comentários desejado.
    const duration = 1000; // Duração da animação em milissegundos.

    const updateCount = (timestamp) => {
      if (!updateCount.startTimestamp) {
        updateCount.startTimestamp = timestamp;
      }

      const progress = (timestamp - updateCount.startTimestamp) / duration;
      const nextCount = Math.min(Math.floor(progress * targetCount), targetCount);

      setCount(nextCount);

      if (nextCount < targetCount) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [totalComments]);

  function openModal() {
    document.body.style.overflow = 'hidden'; 
    setModalIsOpen(true);
  }
    
  return (
    <div>
      <div className="feedback-summary">
        <div className="feedback-item">
          <AiOutlineBarChart style={style} />
          <h3>Avaliação Média</h3>
          <p>{counter}%</p>
        </div>

        <div className="feedback-item">
          <AiOutlineComment style={style}/>
          <h3>Total de Comentários</h3>
          <p>{count}</p>
        </div>

        <div className="feedback-item">
          <AiOutlineHeart style={style}/>
          <h3>Clientes Satisfeitos</h3>
          <p>{satisfiedCustomers}</p>
        </div>
      </div>
      <button className="meu-feedback" onClick={openModal}>Meu feedback</button>

    </div>
  );
}

FeedbackSummary.propTypes = {
  averageRating: propTypes.number,
  totalComments: propTypes.number,
  satisfiedCustomers: propTypes.number
};

export default FeedbackSummary;
