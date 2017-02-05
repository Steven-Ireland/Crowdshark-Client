import React, { Component } from 'react';
import './Jumbo.css';

class App extends Component {
  render() {
    return (
      <div className="Jumbo">
        <h1>{ this.props.title }</h1>
        <p>{ this.props.subtitle }</p>
      </div>
    );
  }
}

export default App;
