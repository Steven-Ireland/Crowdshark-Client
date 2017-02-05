import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'semantic-ui-css/semantic.min.css';

class BasePage extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default BasePage;
