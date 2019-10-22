import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from './piezas/Header';
import Footer from './piezas/Footer';
import Button from './piezas/button';
import Cliente from './piezas/cliente';
import '../css/App.css'

function About() {
  const [name, setName] = useState('');
  const [tipo, setTipo] = useState('');
  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    firebase.firestore().collection("productos").where('tipo', '==', tipo).get().then(function (dato) {
      const array = [];
      dato.forEach(function (doc) {
        array.push(doc.data());
        console.log(array);
      });
      setProductos(array)
    });
  }
  useEffect(getProductos, [tipo]);

  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <div className="col width-50 mg-1 centered">
          <form className="form-box">
            <h1 className="Subtitle">NUEVA ORDEN</h1>
            <Cliente name = {name} setName={setName}/>
            <div className="row centered">
              <Button setTipoFnc={setTipo} titulo="Desayuno" tipo="desayuno" />
              <Button setTipoFnc={setTipo} titulo="Almuerzo y Cena" tipo="almuerzo" />
            </div>
            {/* <div className="row centered">
              <button type="button" className="btn">HAMBURGUESA</button>
              <button type="button" className="btn">ACOMPAÑAMIENTO</button>
              <button type="button" className="btn">BEBIDAS</button> 
            </div> */}
            <ul >
              {productos.map((p) => (
                <li key={p.nombre} value="p.nombre">{p.nombre}</li>
              ))}
            </ul>
          </form>
        </div>
        <div className="col width-50 mg-1 center-item">
          <form className="form-box">
            <h1>DETALLES DE LA ORDEN</h1>
            <label className="mg-1">Cliente:&nbsp;{name}</label>
            <div>
              <table className="mg-1">
                <thead className="">
                  <tr className="">
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="button" className="btn">Enviar Orden</button>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );

}

export default About;