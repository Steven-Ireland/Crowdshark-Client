import React, { Component } from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import 'purecss';
import './App.css';

import Register from './Register';
import Landing from './Landing';
import Browser from './Browser';
import Closeup from './Closeup';
import BasePage from './BasePage';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={BasePage}>
          <Route path="/about" component={Landing} />
          <Route path="/browse" component={Browser} />
          <Route path="/register" component={Register} />
          <Route path="/i/:link" component={Closeup} />
        </Route>
        <Redirect from="/" to="/about"/>
      </Router>
    );
  }
}

export default App;
