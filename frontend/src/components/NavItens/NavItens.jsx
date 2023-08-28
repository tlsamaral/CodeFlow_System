import React, {useContext, useEffect} from 'react';
import './NavItens.css';
import AppContext from '../../context/AppContext';

function NavItens() {
  const {activeMenu} = useContext(AppContext);

  useEffect(() => {
    document.querySelectorAll('.nav-list li').forEach((link, index) => {
      const animation = activeMenu ? `navLinkFade .5s ease forwards ${index/7 + .3}s` : '';

      link.style.animation = animation;
    });
  }, [activeMenu]);
  
  return ( 
    <ul className={`nav-list ${activeMenu && 'active'}`}>
      <li><a href="/">Início</a></li>
      <li><a href="/">Sobre</a></li>
      <li><a href="/">Produtos</a></li>
      <li><a href="/">Contatos</a></li>  
    </ul>
  );
}

export default NavItens;
