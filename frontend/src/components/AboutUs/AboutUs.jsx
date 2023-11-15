import React from 'react';
//import MapView from '../MapView/MapView';

import './AboutUs.css';

import ImageLogo from '../../assets/images/logo/CodeFlow-logo.svg';

function AboutUs() {
  return ( 
    <div className="about-us" id="aboutUs">
      <div className="custom-shape-divider-top-1699920100">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="content-about-us">
        <h2>Code Flow Innovation</h2>

        <div className="text-about-us">
          <p>
            A CodeFlow é uma empreitada que vai além das linhas de códigos; é uma história de paixão pela tecnologia e dedicação à inovação. Originada nos corredores da Universidade Salesiana de São Paulo, em Lorena, nossa empresa nasceu da visão de alunos do 4º semestre de Engenharia da Computação, decididos a transformar conhecimento acadêmico em soluções práticas.
          </p>
          <br />
          <p>
            Em um ambiente acadêmico dinâmico, encontramos inspiração para criar uma empresa que não se limita às barreiras do campus. Especializados em desenvolvimento de software e consultoria em TI, a CodeFlow é a materialização do aprendizado teórico aplicado em situações do mundo real.A CodeFlow é uma empreitada que vai além das linhas de códigos; é uma história de paixão pela tecnologia e dedicação à inovação. Originada nos corredores da Universidade Salesiana de São Paulo, em Lorena, nossa empresa nasceu da visão de alunos do 4º semestre de Engenharia da Computação, decididos a transformar conhecimento acadêmico em soluções práticas.
          </p>
          <br />
          <p>
            Em um ambiente acadêmico dinâmico, encontramos inspiração para criar uma empresa que não se limita às barreiras do campus. Especializados em desenvolvimento de software e consultoria em TI, a CodeFlow é a materialização do aprendizado teórico aplicado em situações do mundo real.
          </p>
          <br />
          <p>
            Lorena, situada no Vale do Paraíba, torna-se o cenário onde nossa jornada começa. O suporte da Universidade Salesiana de São Paulo é o alicerce que sustenta nossas ambições, proporcionando o conhecimento necessário para navegar pelo vasto mundo da tecnologia.
          </p>
          <br />
          <p>
            Na CodeFlow, acreditamos que a verdadeira inovação surge da combinação entre teoria e prática. Cada projeto é uma oportunidade para transcender os limites convencionais, desafiando-nos a oferecer soluções tecnológicas de vanguarda.
          </p>
          <br />
          <p>
            Nossa equipe, jovem e comprometida, está empenhada em oferecer qualidade excepcional. Cada desafio é encarado como uma chance de superação, uma oportunidade de deixar uma marca duradoura no cenário tecnológico.
          </p>
          <br />
          <p>
            Bem-vindo à CodeFlow, onde a inovação é mais do que uma aspiração; é uma jornada constante. Estamos determinados a moldar o futuro da tecnologia com uma abordagem criativa e técnica, comprometidos com a excelência em cada linha de código e em cada projeto que abraçamos.
          </p>
        </div>
      </div>
      <div className="image-about-us">
        <img src={ImageLogo} alt="image/png" />
      </div>
    </div>
  );
}

export default AboutUs;
