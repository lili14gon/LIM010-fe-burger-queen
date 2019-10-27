import React from 'react';
import Header from './piezas/Header';
import Footer from './piezas/Footer';
import PedidosCocina from './PedidosCocina';
import NavBar from './NavBar';

const Cocina = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar/>
      <div>
        <h1>Pedidos</h1>
        <PedidosCocina/>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Cocina;