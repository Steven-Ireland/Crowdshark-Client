import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'purecss';
import './App.css';

import Landing from './Landing';
import Browser from './Browser';
import Closeup from './Closeup';
import BasePage from './BasePage';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BasePage}>
          <IndexRoute component={Landing} />
          <Route path="/browse" component={Browser} />
          <Route path="/i" component={Closeup} />
        </Route>
      </Router>
    );
  }
}

export default App;
