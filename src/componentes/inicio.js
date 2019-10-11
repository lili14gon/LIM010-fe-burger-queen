import React from 'react';
import PedidoMesero from './mesero';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// function Inicio() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     <button link>MESERO</button>
//     <button>JEFE DE COCINA</button>
//     </div>
//   );
// }

function Inicio() {
  return (
    <BrowserRouter>
    <div>
          <Switch>
          <Route exact path="/" component={PedidoMesero} />
          <Route path="/users" component={Cocina} />
          </Switch>
        </div>
    </BrowserRouter>       
  );
}


export default Inicio;