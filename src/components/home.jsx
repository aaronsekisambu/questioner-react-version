import React, {Component} from 'react';
import Container from './container'
import Header from './header';
import '../css/main.scss';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header header="" />
        <Container container="container-fluid" />
      </React.Fragment>
    )
  }
}

export default Home;