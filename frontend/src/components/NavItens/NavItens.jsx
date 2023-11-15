import React, { useContext, useEffect, useState } from 'react';
import './NavItens.css';
import AppContext from '../../context/AppContext';
import ScrollToComponent from '../ScrollToComponent/ScrollToComponent'; // Certifique-se de importar o componente ScrollToComponent

function NavItens() {
  const { activeMenu } = useContext(AppContext);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.nav-list li').forEach((link, index) => {
      const animation = activeMenu ? `navLinkFade .5s ease forwards ${index / 7 + 0.3}s` : '';
      link.style.animation = animation;
    });
  }, [activeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className={`nav-list ${activeMenu && 'active'} ${scrolling ? 'active-scroll' : ''}`}>
      <li>
        <ScrollToComponent targetId="home">Início</ScrollToComponent>
      </li>
      <li>
        <ScrollToComponent targetId="aboutUs">Sobre</ScrollToComponent>
      </li>
      <li>
        <ScrollToComponent targetId="productGateway">Produtos</ScrollToComponent>
      </li>
      <li>
        <ScrollToComponent targetId="footer">Contatos</ScrollToComponent>
      </li>
    </ul>
  );
}

export default NavItens;
