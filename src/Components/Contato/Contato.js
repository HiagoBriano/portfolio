import { Component } from 'react';
import './Contato.css';

export default class Contato extends Component {
  render() {
    return (
      <section className="contato" id="contato">
        <h3 className="contato--h3">Contatos:</h3>
        <h4>
          <a
            href="https://api.whatsapp.com/send?phone=5511954614351"
            className="contato--link"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp: (11) 95461-4351
          </a>
        </h4>
        <h4>
          <a
            href="mailto:hiago.artist@hotmail.com"
            className="contato--link"
            target="_blank"
            rel="noreferrer"
          >
            E-mail: hiago.artist@hotmail.com
          </a>
        </h4>
        <h4>
          <a
            href="https://www.linkedin.com/in/hiago-briano/"
            className="contato--link"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </h4>
      </section>
    );
  }
}
