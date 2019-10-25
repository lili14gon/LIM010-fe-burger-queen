import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from './piezas/Header';
import Footer from './piezas/Footer';
import '../css/App.css'
import OrdenDetalles from './OrdenDetalles';
import NuevaOrden from './NuevaOrden';

const Mesero = () => {
  const [tipo, setTipo] = useState('desayuno');
  const [productos, setProductos] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [name, setName] = useState('');

 
  // const Agregando = (e) => {
  //   setSeleccionados(e.target.id);
  // }

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
        <NuevaOrden setTipo={setTipo} productosDesayuno={productos} setName={setName} seleccionados={seleccionados}  setSeleccionados={setSeleccionados}/>
        <OrdenDetalles seleccionados={seleccionados} name={name} />
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Mesero;