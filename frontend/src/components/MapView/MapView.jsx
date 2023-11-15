import React from 'react';
import './MapView.css';

const MapView = () => {
  return (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8672035931218!2d-45.12542538859328!3d-22.733176731604477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc8e8fd6098a5%3A0x4564947f484e8d03!2sUnisal%20-%20Unidade%20Lorena%20%2F%20S%C3%A3o%20Joaquim!5e0!3m2!1spt-BR!2sbr!4v1699579046571!5m2!1spt-BR!2sbr" 
      width="600" 
      height="450"  
      allowfullscreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default MapView;
