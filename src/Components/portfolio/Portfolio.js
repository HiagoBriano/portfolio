import { Component } from 'react';
import './Portfolio.css';

import Imagem1 from './Images/1.png';
import Imagem2 from './Images/2.png';
import Imagem3 from './Images/3.png';
import Imagem4 from './Images/4.png';
import Imagem5 from './Images/5.png';
import Imagem6 from './Images/6.png';

export default class Portfolio extends Component {
  render() {
    const fotos = [
      {
        nome: 'Imagem 1',
        fonte: Imagem1,
        feito: '24/12/2021',
      },
      {
        nome: 'Imagem 2',
        fonte: Imagem2,
        feito: '24/12/2021',
      },
      {
        nome: 'Imagem 3',
        fonte: Imagem3,
        feito: '24/12/2021',
      },
      {
        nome: 'Imagem 4',
        fonte: Imagem4,
        feito: '24/12/2021',
      },
      {
        nome: 'Imagem 5',
        fonte: Imagem5,
        feito: '24/12/2021',
      },
      {
        nome: 'Imagem 6',
        fonte: Imagem6,
        feito: '24/12/2021',
      },
      {
        nome: 'Imagem 1',
        fonte: Imagem1,
        feito: '24/12/2021',
      },
      {
        nome: 'Imagem 2',
        fonte: Imagem2,
        feito: '24/12/2021',
      },
      {
        nome: 'Imagem 3',
        fonte: Imagem3,
        feito: '24/12/2021',
      },
    ];

    return (
      <section className="portfolio" id="portfolio">
        <h3 className="portfolio--h3">Portfólio</h3>
        <div className="portfolio--imagens">
          {fotos.map(({ fonte, nome }) => (
            <img
              src={fonte}
              alt={nome}
              key={nome}
              className="portfolio--imagem"
            />
          ))}
        </div>
      </section>
    );
  }
}
