import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Header from '../../components/Header/index';

const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
