import React from 'react';
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import PedidosCocina from './PedidosCocina';
import NavBar from '../piezas/NavBar';
import TituloPedidos from '../piezas/TituloPedidos';

const Cocina = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <div>
        <TituloPedidos texto="Pedidos"/>
        <PedidosCocina />
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Cocina;