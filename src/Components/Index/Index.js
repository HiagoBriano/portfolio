import { Component } from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Home from '../Home/Home';

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
      </>
    );
  }
}
