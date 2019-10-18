import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../src/css/App.css'
import Home from './componentes/inicio';
import Mesero from './componentes/mesero';
import Users from './componentes/jefecocina';

export default function App() {
  return (
    <Router>
      <div className="content">
        <React.Fragment>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <Mesero />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      </div>
    </Router>
  );
}
