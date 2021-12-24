import { Component } from 'react';
import About from '../About/About';
import Contato from '../Contato/Contato';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Portfolio from '../portfolio/Portfolio';

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      headerBack: false,
    };
  }

  componentDidMount() {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        this.setState({ headerBack: true });
      } else {
        this.setState({ headerBack: false });
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }

  render() {
    const { headerBack } = this.state;
    return (
      <>
        <Header headerBack={headerBack} />
        <Home />
        <About />
        <Portfolio />
        <Contato />
        <Footer />
      </>
    );
  }
}
