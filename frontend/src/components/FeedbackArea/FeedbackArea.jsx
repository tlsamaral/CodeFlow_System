import React, { useEffect, useRef, useState } from 'react';
//import { useInView } from 'react-intersection-observer';

import './FeedbackArea.css'; // Estilos CSS
import FeedbackSummary from '../FeedbackSummary/FeedbackSummary';

function FeedbackArea() {
  const sectionRef = useRef(null);

  const [averageRating, setAverageRating] = useState(75);
  const [totalComments, setTotalComments] = useState(32);
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(89);


  // Função que será chamada quando a seção estiver visível.
  const handleSectionVisible = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setAverageRating((prevAverageRating) => prevAverageRating + 1);
        setTotalComments((prevTotalComments) => prevTotalComments + 1);
        setSatisfiedCustomers((prevSatisfiedCustomers) => prevSatisfiedCustomers + 1);
      }
    });
  };
  
  useEffect(() => {
    const options = {
      root: null, // Use a viewport como o elemento "observador".
      rootMargin: '0px',
      threshold: 0.5, // Quando pelo menos 50% da seção estiver visível, ative a função.
    };
  
    const observer = new IntersectionObserver(handleSectionVisible, options);
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    // Lembre-se de desconectar o observador quando o componente for desmontado.
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div>
      <section className="section" ref={sectionRef}>
        <h2>Estatísticas de Satisfação</h2>
        <p>Confira as estatísticas de satisfação de nossos clientes abaixo:</p>

        <FeedbackSummary
          averageRating={averageRating}
          totalComments={totalComments}
          satisfiedCustomers={satisfiedCustomers}
        />

        <div className="custom-shape-divider-bottom-1699923656">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default FeedbackArea;
