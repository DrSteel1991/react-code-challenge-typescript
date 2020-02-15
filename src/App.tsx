import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Winners from './pages/Winners';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/winners/:year/:champion" component={Winners} />
      </Switch>
    </Router>
  );
};

export default App;
