import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ClientFeedBackArea.css';
import PartialCommentCarousel from '../PartialCommentCarousel/PartialCommentCarousel';
import AppContext from '../../context/AppContext';

async function fetchData(setComments) {
  const baseUrl = 'http://localhost:3001/comments';
  const response = await axios.get(baseUrl);
  setComments(response.data);
}

function ClientFeedBackArea() {
  const { comments, setComments } = useContext(AppContext);

  useEffect(() => {
    fetchData(setComments);
  }, [setComments]);

  return (
    <div className="client-feedback-area">
      <h2>Veja Avaliações de outros clientes</h2>
      <PartialCommentCarousel comments={comments} />
    </div>
  );
}

export default ClientFeedBackArea;
