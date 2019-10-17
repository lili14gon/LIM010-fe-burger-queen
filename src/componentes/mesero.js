import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from '../componentes/piezas/Header';
import Footer from '../componentes/piezas/Footer';

import '../css/App.css'

function About() {
  const [name,setName] = useState('');
  const [tipo, setTipo] = useState('');
  const [productos, setProductos] = useState([]);
  // const [categorias, setCategorias] = useState([]);

  const getProductos = () => {
    firebase.firestore().collection("productos").where('tipo', '==', tipo).get().then(function (dato) {
      const array = [];
      dato.forEach(function (doc) {
        array.push(doc.data());
      });
      setProductos(array)
    });
  }
  useEffect(getProductos, [tipo]);
  
  const handleNamChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <Header/>
      <div className="Row">
        <div className="Col Width-50 Margin-1 bg">
          <form className="">
            <h1 className="Subtitle">NUEVO PEDIDO</h1>
            <label>Nombre del Cliente:
              <input type="text" value={name} onChange = {handleNamChange}/>
            </label>
            <button type="button" onClick={() => { setTipo('desayuno') }}>DESAYUNO</button>
            <button type="button" id="almuerzo" onClick={(e) => { setTipo('almuerzo') }}>ALMUERZO  Y CENA</button>
            <input type="submit" />         
            <div>
              <button type="button">HAMBURGUESA</button>
              <button type="button">ACOMPAÑAMIENTO</button>
              <button type="button">BEBIDAS</button>
            </div>
            <ul>
              {productos.map((p) => (
                <li>{p.nombre}</li>
              ))}
            </ul>
          </form>
        </div>
        <div className="Col Width-50 Margin-1">
          <h1>ORDEN</h1>
          <label>Cliente:&nbsp;{name}</label>
          <ul className="Row">
            <li>Producto</li>
            <li>Cantidad</li>
            <li>Precio</li>
            <li>Eliminar</li>
          </ul>
         
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;