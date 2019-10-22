import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from '../componentes/piezas/Header';
import Footer from '../componentes/piezas/Footer';
import '../css/App.css'

import NombreCliente from './nombreCliente';
import BotonOpciones from './BotonOpciones';
import OrdenDetalles from './OrdenDetalles';
import TituloPedidos from './TituloPedidos'


const Mesero = () => {
  const [tipo, setTipo] = useState('desayuno');
  const [productos, setProductos] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [name, setName] = useState('');

  const Agregando = (e) => {
    setSeleccionados(e.target.id);
  }

  useEffect(() => {
    firebase.firestore().collection("productos").where('tipo', '==', tipo).get().then(function (dato) {
      const array = [];
      dato.forEach(function (doc) {
        array.push(doc.data());
      });
      setProductos(array)
    });
  }, [tipo]);

  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <div className="col width-50 mg-1 centered">
          <form className="form-box">
            <TituloPedidos texto="NUEVA ORDEN " />
            <NombreCliente name ={name} setName={setName} />
            <div className="row centered">
              <BotonOpciones funcionDeSetearTipo={setTipo} texto="DESAYUNO" tipo="desayuno" />
              <BotonOpciones funcionDeSetearTipo={setTipo} texto="ALMUERZO  Y CENA" tipo="almuerzo" />
            </div>
            {productos.map((p) => (
              <div key={p.nombre} className="opcion-color" onClick={Agregando} id={p.nombre} >
                {p.nombre} &nbsp;
                 &nbsp;${p.precio}
                <img className="tamaño-producto" src={p.url} alt="" />

              </div>
            ))}
          </form>
        </div>
        <OrdenDetalles seleccionados={seleccionados} name ={name} />
      </div>
      <Footer />
    </React.Fragment >
  );
}

export default Mesero;

