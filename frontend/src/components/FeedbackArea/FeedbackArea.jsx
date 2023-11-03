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
      </section>
    </div>
  );
}

export default FeedbackArea;
