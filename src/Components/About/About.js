import { Component } from 'react';
import './About.css';
import fotoHiago from './Images/Foto-hiago.jpg';

export default class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <h3 className="about--h3">Sobre Mim</h3>
        <div className="about--conteudo">
          <img src={fotoHiago} alt="foto do desenvolvedor" height="450px" />
          <div className="about--texto">
            <p>
              Sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre
              mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim
              sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre
              mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim
              sobre mim sobre mim sobre mim sobre sobre mim sobre mim sobre mim
              sobre
            </p>
            <p>
              Sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre
              mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim
              sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre
              mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim
              sobre mim sobre mim sobre mim sobre sobre mim sobre mim sobre mim
              sobre
            </p>
            <p>
              Sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre
              mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim
              sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre
              mim sobre mim sobre mim sobre mim sobre mim sobre mim sobre mim
              sobre mim sobre mim sobre mim sobre sobre mim sobre mim sobre mim
              sobre
            </p>
          </div>
        </div>
      </section>
    );
  }
}
