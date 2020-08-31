import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Home';
import NotFound from './NotFound';
import CountryDetails from './CountryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country/:id">
            <CountryDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
