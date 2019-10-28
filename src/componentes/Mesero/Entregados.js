import React from 'react';
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import NavBar from '../piezas/NavBar';
import TituloPedidos from '../piezas/TituloPedidos';
import FormatoEntregados from './FormatoEntregados';

const Entregados = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <div>
        <TituloPedidos texto="Pedidos Entregados"/>
        <FormatoEntregados/>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Entregados;