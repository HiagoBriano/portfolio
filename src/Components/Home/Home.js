import { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      textArray: ['React', 'GitHub', 'CSS'],
      typingDelay: 200,
      erasingDelay: 100,
      newTextDelay: 2000, // Delay between current and next text
      textArrayIndex: 0,
      charIndex: 0,

      typing: false,
      text: '',
    };
  }

  componentDidMount() {
    this.type();
  }

  type = () => {
    const {
      textArray,
      typingDelay,
      newTextDelay,
      charIndex,
      textArrayIndex,
      typing,
    } = this.state;

    let { text } = this.state;

    if (charIndex < textArray[textArrayIndex].length) {
      if (!typing) {
        this.setState({ typing: true });
      }
      const texto = (text += textArray[textArrayIndex].charAt(charIndex));
      const index = charIndex + 1;
      this.setState({ text: texto, charIndex: index });
      setTimeout(this.type, typingDelay);
    } else {
      this.setState({ typing: false });
      setTimeout(this.erase, newTextDelay);
    }
  };

  erase = () => {
    const {
      textArray,
      typingDelay,
      erasingDelay,
      charIndex,
      textArrayIndex,
      typing,
    } = this.state;

    if (charIndex > 0) {
      if (!typing) {
        this.setState({ typing: true });
      }
      const index = charIndex - 1;
      this.setState({
        text: textArray[textArrayIndex].substring(0, charIndex - 1),
        charIndex: index,
      });
      setTimeout(this.erase, erasingDelay);
    } else {
      const arrayIndex = textArrayIndex + 1;
      this.setState({ typing: false, textArrayIndex: arrayIndex });

      if (arrayIndex >= textArray.length) {
        this.setState({ textArrayIndex: 0 });
      }

      setTimeout(this.type, typingDelay + 1100);
    }
  };

  render() {
    const { typing, text } = this.state;
    return (
      <>
        <section id="home" className="home">
          <div className="apresentacao">
            <h2 className="home--nome">Hiago Briano da Silva</h2>
            <h3>Desenvolvedor Web</h3>
            <h3>Programador JavaScript</h3>

            <h3>
              Tenho conhecimento em
              <span className="home-textAnimado">{` ${text}`}</span>
              <span
                className={
                  typing ? 'home--cursor home--typing' : 'home--cursor'
                }
              >
                &nbsp;
              </span>
            </h3>
          </div>
        </section>
        <a href="#about" className="avancar" rel="noreferrer">
          AVANÇAR<span className="avancar--seta"> {'>>'} </span>
        </a>
      </>
    );
  }
}
