import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main.jsx';
import Header from './components/shared/Header.jsx';
import Test from './components/Test/Test.jsx';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
        <>
          <Header />
          <Switch>
            <Route history={history} path="/" exact component={Main} />
            <Route history={history} path="/test" exact component={Test} />
          </Switch>
        </>
    );
  }
}

export default App;
