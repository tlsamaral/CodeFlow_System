import React from 'react';
//import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ClientFeedBackArea.css'; // Estilos CSS personalizados
import PartialCommentCarousel from '../PartialCommentCarousel/PartialCommentCarousel';

const comments = [
  { rating: 5, text: 'Ótimo sistema, fácil de usar!' },
  { rating: 4, text: 'Muito satisfeito com o serviço.' },
  { rating: 5, text: 'Excelente suporte ao cliente.' },
  { rating: 5, text: 'Ótimo sistema, fácil de usar!' },
  { rating: 4, text: 'Muito satisfeito com o serviço.' },
  { rating: 5, text: 'Excelente suporte ao cliente.' },
];
// Componente do Carousel de Comentários
function ClientFeedBackArea() {
  return (
    <div className="client-feedback-area">
      <h2>Veja Avaliações de outros clientes</h2>
      <PartialCommentCarousel comments={comments}/>
    </div>
  );
}

export default ClientFeedBackArea;
