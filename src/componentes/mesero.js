import React, { useState, useEffect } from 'react';
import firebase from './firebase';

// const UseTime = () => {
// const [price,setPrice]= useState('');

// }
// const OpcionDesayuno = () => {
//     return(
//         <div>
//             <ul>
//                 <p>PEDIDO</p>
//                 <li>CAFE AMERICANO</li>
//                 <li>CAFE CON LECHE</li>
//                 <li>SÁNDWICH DE JAMÓN Y QUESO</li>
//                 <li>JUGO DE FRUTAS NATURAL</li>
//             </ul>
//             <ul>
//                 <p>COSTO</p>
//                 <li>$5</li>
//                 <li>$7</li>
//                 <li>$10</li>
//                 <li>$7</li>
//             </ul>
//         </div>
//     );
// }


// const desayuno = (callback) => {
//   firebase.firestore().collection('PEDIDOS').onSnapshot((datos) => {
//     const array = [];
//     datos.forEach((doc) => {
//       array.push({ id: doc.id, ...doc.data() });
//     });
//     callback(array);
//   });
// };

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

// const PedidoMesero = () => {
//   return (
//     <div>
//         <form>
//             <label>NOMBRE DEL CLIENTE
//             <input type="text"/>
//             </label>
//             <div>
//             <button type="button" onClick = {()=>OpcionDesayuno()}>DESAYUNO</button>
//             <button type="button" onClick = {()=>OpcionMenu()}>ALMUERZO  Y CENA</button>
//             </div>
//             <input type="submit"/>
//         </form>
//     </div>
//   );
// }

// const OpcionDesayuno = () => {
//     return(
//         <div>
//             <ul>
//                 <p>PEDIDO</p>
//                 <li>CAFE AMERICANO</li>
//                 <li>CAFE CON LECHE</li>
//                 <li>SÁNDWICH DE JAMÓN Y QUESO</li>
//                 <li>JUGO DE FRUTAS NATURAL</li>
//             </ul>
//             <ul>
//                 <p>COSTO</p>
//                 <li>$5</li>
//                 <li>$7</li>
//                 <li>$10</li>
//                 <li>$7</li>
//             </ul>

//         </div>
//     );
// }
// const OpcionMenu = () => {
//     return(
//         <div>
//         <ul>
//        <p>HAMBURGUESAS</p>
//        <li>HAMBURGUESA SIMPLE</li>
//        <li>HAMBURGUESA DOBLE</li>
//    </ul>
//    <ul>
//        <p>ACOMPAÑAMIENTOS</p>
//        <li>PAPAS FRITAS</li>
//        <li>AROS DE CEBOLLA</li>
//    </ul>
//    <ul>
//        <p>PARA TOMAR</p>
//        <li>Agua 500ml</li>
//        <li>Agua 750ml</li>
//        <li>Bebida/gaseosa 500m</li>
//        <li>Bebida/gaseosa 750ml</li>
//    </ul>
//    </div>   
//     );  
// }
// export default PedidoMesero;
// export { OpcionDesayuno, OpcionMenu } ;