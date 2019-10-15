import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './componentes/inicio';
import About from './componentes/mesero';
import Users from './componentes/jefecocina';
// import firebase from './componentes/firebase';

//   export const Proyecto = ()=>{
//   firebase.firestore().collection('PEDIDOS').doc('desayuno').set({
//   CaféAmericano: 5,
//   CaféConLeche:7,
//   SandwichDeJamón:10,
//   JugoDeFrutas:7,
//   })
//  };
export default function App() {
  // Proyecto();
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
