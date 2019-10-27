import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from './piezas/Header';
import Footer from './piezas/Footer';
import '../css/App.css'
import OrdenDetalles from './OrdenDetalles';
import NuevaOrden from './NuevaOrden';
import NavBar from './NavBar';
import ListoParaServir from './ListoParaServir';

const Mesero = () => {
  const [tipo, setTipo] = useState('desayuno');
  const [productos, setProductos] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);

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
      <NavBar/>
      <div className="row">
        <NuevaOrden setTipo={setTipo} productosDesayuno={productos} setName={setName} seleccionados={seleccionados} setSeleccionados={setSeleccionados} />
        <OrdenDetalles seleccionados={seleccionados} name={name} setSeleccionados={setSeleccionados} setTotal={setTotal} total={total} Envio />
        {/* <ListoParaServir/> */}
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Mesero;