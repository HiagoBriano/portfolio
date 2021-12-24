import { Component } from 'react';
import './Portfolio.css';

import Imagem1 from './Images/1.png';
import Imagem2 from './Images/2.gif';
import Imagem3 from './Images/3.gif';
import Imagem4 from './Images/4.gif';

export default class Portfolio extends Component {
  render() {
    const fotos = [
      {
        nome: 'Front End Online Store',
        fonte: Imagem3,
        feito: '18/11/2021',
        web: 'https://hiagobriano.github.io/projeto_front_end_online_store/',
        codigo: 'https://github.com/HiagoBriano/projeto_front_end_online_store',
      },
      {
        nome: 'Projeto Trybewarts',
        fonte: Imagem1,
        feito: '24/09/2021',
        web: 'https://hiagobriano.github.io/projeto_trybewarts/',
        codigo:
          'https://github.com/HiagoBriano/HiagoBriano.github.io/tree/master/projeto_trybewarts',
      },

      {
        nome: 'Projeto Todo List',
        fonte: Imagem2,
        feito: '13/09/2021',
        web: 'https://hiagobriano.github.io/projeto_todo_list/',
        codigo:
          'https://github.com/HiagoBriano/HiagoBriano.github.io/tree/master/projeto_todo_list',
      },
      {
        nome: 'Pixels Art',
        fonte: Imagem4,
        feito: '10/09/2021',
        web: 'https://hiagobriano.github.io/projeto_pixels_art/',
        codigo:
          'https://github.com/HiagoBriano/HiagoBriano.github.io/tree/master/projeto_pixels_art',
      },
    ];

    return (
      <section className="portfolio" id="portfolio">
        <h3 className="portfolio--h3">Portfólio</h3>
        <div className="portfolio--imagens">
          {fotos.map(({ fonte, nome, web, codigo }) => (
            <div className="portfolio--divImagem">
              <img
                src={fonte}
                alt={nome}
                key={nome}
                className="portfolio--imagem"
              />
              <div className="portfolio--linkImagem">
                <a href={codigo} rel="noreferrer" target="_blank">
                  Código do projeto
                </a>

                <a href={web} rel="noreferrer" target="_blank">
                  Site na Web
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
