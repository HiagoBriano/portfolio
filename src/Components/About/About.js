import { Component } from 'react';
import './About.css';
import fotoHiago from './Images/Foto-hiago.png';

export default class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <h3 className="about--h3">Sobre Mim</h3>
        <div className="about--conteudo">
          <img src={fotoHiago} alt="foto do desenvolvedor" height="450px" />
          <div className="about--texto">
            <p>
              Sou formado em Redes de Computadores pela Universidade Nove de
              Julho (UNINOVE).
            </p>
            <p>
              Estudei Desenvolvimento Web na Trybe, uma renomada escola que
              ensina a programar, a aprender e a trabalhar, onde concorri com
              mais de 11 mil pessoas para entrar na turma 16 e fui uns dos 300
              selecionados.
            </p>
            <p>
              Tenho conhecimento nas linguagens: JavaScript / TypeScript (React.js, Next.js, Node.js e Nest.js) e em Golang.
              Além de conhecimento em SQL, Docker, GitHub, HTML, CSS, JavaScript, testes unitários, Redux e Context.
            </p>
            <p>
              Me desafio constantemente, valorizando cada experiência adquirida
              ao longo da jornada e busco sempre aprimorar as minhas
              habilidades, tendo como objetivo continuar progredindo como pessoa
              e profissionalmente.
            </p>
            <p>
              Admiro as empresas que incentivam seus colaboradores a buscar o
              constante aprendizado, e empresas que tenham propósitos sólidos.
            </p>
            <div className="about--contato">
              <p>Telefone / Whatsapp: (11) 95461-4351 </p>
              <p>Jandira - SP</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
