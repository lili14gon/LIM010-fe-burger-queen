import React, { useState, useEffect } from 'react';
import firebase from './firebase';
function About() {
  const [name, setName] = useState('');
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
  }

  return (
    <div>
      <form>
        <label>NOMBRE DEL CLIENTE
                {/* <input type="text" /> */}
          <input type="text"
            value={name}
            onChange={handleNamChange}
          />
        </label>
        <div>
          <button type="button" onClick={() => { setTipo('desayuno') }}>DESAYUNO</button>
          <button type="button" id="almuerzo" onClick={(e) => { setTipo('almuerzo') }}>ALMUERZO  Y CENA</button>
        </div>
        <input type="submit" />
      </form>
      {/* 
      {document.getElementById = "desayuno" ?
        <div>
          <button type="button">HAMBURGUESA</button>
          <button type="button">ACOMPAÑAMIENTO</button>
          <button type="button">BEBIDAS</button>
        </div>
        :
        null
      } */}
      <ul>
        {productos.map((p) => (
          <li>{p.nombre}</li>
        ))}
      </ul>
      <div> <p>{name}</p></div>
    </div>
  );
}
export default About;