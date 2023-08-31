import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BusinessImage1 from '../../assets/images/banners/business_image_1.jpg';
import BusinessImage2 from '../../assets/images/banners/business_image_2.jpg';
import BusinessImage3 from '../../assets/images/banners/business_image_3.jpg';

import './Banners.css';

function Banners() {
  return ( 
    <div className="carousel-container">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        <div className="slide-banner" 
          style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.661), rgba(0, 0, 0, 0.176)), url('${BusinessImage1}')`}}>
          <div className="slide-content">
            <h2>Transforme Seu Negócio com Nossos Sistemas Inteligentes</h2>

            <p>
                Transforme sua empresa com nossas soluções inovadoras. Maximize a eficiência operacional e alcance novos patamares de produtividade.
            </p>

            <ul>
              <li>
                <p>
                Nossa abordagem única em gestão otimiza seus processos, capacitando você a tomar decisões informadas e se adaptar rapidamente às mudanças.
                </p>
              </li>
              <li>
                <p>
                Integre tecnologia de ponta para automatizar tarefas complexas e focar no crescimento sustentável do seu negócio.
                </p>
              </li>
            </ul>

            <div className="button">
              <button>Saiba Mais</button>
            </div>
          </div>
        </div>
        <div className="slide-banner" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.661), rgba(0, 0, 0, 0.176)), url('${BusinessImage2}')`}}>
          <div className="slide-content content-2">
            <h2>Integrações Simplificadas | Análises Avançadas | Automação Eficiente | Personalização Completa</h2>
            <p>
            Aumente a colaboração entre equipes, tome decisões informadas com insights em tempo real e automatize tarefas repetitivas para focar no que realmente importa.
            </p>
            <div className="button">
              <button>Explore Recursos</button>
            </div>
            
          </div>
        </div>
        <div className="slide-banner" style={{backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.176), rgba(0, 0, 0, 0.661)), url('${BusinessImage3}')`}}>
          <div className="slide-content content-3">
            <h2>
                Tecnologia que Transforma: Desbloqueie Seu Potencial e Junte-se aos Vencedores
            </h2>
            
            <ol type="I">
              <li>
                Desbloqueie o Potencial:
                <ul>
                  <li>
                    Maximização da Eficiência Operacional.
                  </li>
                  <li>
                    Tomada de Decisões Informadas.
                  </li>
                  <li>
                    Crescimento Sustentável do Negócio.
                  </li>
                </ul>
              </li>
              <li>
                Junte-se aos Vencedores:
                <ul>
                  <li>
                    Histórias de Sucesso que Comprovam.
                  </li>
                  <li>
                    Resultados Excepcionais Alcançados.
                  </li>
                  <li>
                    Torne-se Parte da Próxima História de Sucesso.
                  </li>
                </ul>
              </li>
            </ol>

            <div className="button">
              <button>
              Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div> 
  );
}

export default Banners;
