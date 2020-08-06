import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main.jsx';
import Header from './components/shared/Header.jsx';
import TestTrafficLaws from './components/TestTrafficLaws/TestTrafficLaws.jsx';

class App extends Component {
  render() {
    const { history } = this.props;
    const HeaderWithRouter = withRouter(Header);
    return (
        <>
          <HeaderWithRouter />
          <Switch>
            <Route history={history} path="/" exact component={Main} />
            <Route history={history} path="/test" exact component={TestTrafficLaws} />
          </Switch>
        </>
    );
  }
}

export default App;
