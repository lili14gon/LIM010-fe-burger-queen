 import React from 'react';
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import TituloPedidos from '../piezas/TituloPedidos';
import FormatoEntregados from './FormatoEntregados';

const Entregados = () => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <TituloPedidos texto="Pedidos Entregados"/>
        <FormatoEntregados/>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Entregados;