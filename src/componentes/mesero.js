import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from '../componentes/piezas/Header';
import Footer from '../componentes/piezas/Footer';
import '../css/App.css'

const MiBoton = ({ funcionDeSetearTipo, texto, tipo }) => (
  <button type="button" className="btn" onClick={() => { funcionDeSetearTipo(tipo) }}>{texto}</button>
);
const subMenu = () =>
  {
    return (
      <div className="row centered">
    <button type="button" className="btn">HAMBURGUESA</button>
    <button type="button" className="btn">ACOMPAÑAMIENTO</button>
    <button type="button" className="btn">BEBIDAS</button>
  </div>
    ) 
  }
function About() {
  const [name, setName] = useState('');
  const [tipo, setTipo] = useState('');
  const [productos, setProductos] = useState([]);
  // const [categorias, setCategorias] = useState([]);
  // const menu = subMenu();

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
  }
 
  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <div className="col width-50 mg-1 centered">
          <form className="form-box">
            <h1 className="Subtitle">NUEVA ORDEN</h1>
            <label className="row centered">Nombre del Cliente:
              <input type="text" className="text-box mg-1" value={name} onChange={handleNamChange} />
            </label>
            <div className="row centered">
              <MiBoton funcionDeSetearTipo={setTipo} texto="DESAYUNO" tipo="desayuno" />
              <MiBoton funcionDeSetearTipo={setTipo} texto="ALMUERZO  Y CENA" tipo="almuerzo" />
              {/* <MiBoton funcionDeSetearTipo={<MiBoton funcionDeSetearTipo={setTipo} texto="Hamburguesa" tipo="almuerzo" />} texto="ALMUERZO  Y CENA" tipo="almuerzo" /> */}
              {/* <button type="button" className="btn" id="almuerzo" onClick={(e) => { subMenu() }}>ALMUERZO  Y CENA</button> */}
            </div>
            {/* <div className="row centered">
              <button type="button" className="btn">HAMBURGUESA</button>
              <button type="button" className="btn">ACOMPAÑAMIENTO</button>
              <button type="button" className="btn">BEBIDAS</button> 
            </div> */}
            <ul>
              {productos.map((p) => (
                <li value="1">{p.nombre}</li>
              ))}
            </ul>
            <button type="button" className="btn">Enviar Orden</button>
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
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );

}

export default About;