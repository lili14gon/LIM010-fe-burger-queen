import React, { useState, useEffect } from 'react';
import firebase from './firebase';
function About() {
  const [tipo, setTipo] = useState('desayuno');
  const [productos, setProductos] = useState([]);
  
  const getProductos = () =>{
    firebase.firestore().collection("productos").where('tipo','==',tipo).get().then(function(dato) {
       const array = [];
      dato.forEach(function(doc) {
          array.push(doc.data());
      });
      setProductos(array)
    });
  }
  useEffect(getProductos, [tipo])
  return (
        <div>
            <form>
                <label>NOMBRE DEL CLIENTE
                <input type="text"/>
                </label>
                <div>
                <button type="button" onClick = {()=> {setTipo('desayuno')}}>DESAYUNO</button>
                <button type="button" onClick = {()=> {setTipo('almuerzo')}}>ALMUERZO  Y CENA</button>
                </div>
                <input type="submit"/>
            </form>
            <ul>
              {productos.map((p)=>(
                <li>{p.nombre}</li>
              ))}
            </ul>
        </div>
      );
  }
  


export default About;