import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import NotFound from "./Routes/NotFound";
import AppContainer from "./Routes/AppContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>

            <Route path="/404" exact={true}>
              <NotFound />
            </Route>

            <Route path={'/'}>
              <AppContainer />
            </Route>

          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
