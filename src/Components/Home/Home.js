import { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="apresentacao">
          <h2 className="home--nome">Hiago Briano da Silva</h2>
          <h3>Desenvolvedor Web</h3>
          <h3>Programador JavaScript</h3>
        </div>
      </section>
    );
  }
}
