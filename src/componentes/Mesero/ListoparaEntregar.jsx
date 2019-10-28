import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import FormatoPedidoServir from './FormatoListo';

const ListoParaEntregar = () => {
    const [servir, setServir] = useState([]);
  
    const getListos = () => {
      firebase.firestore().collection("orden")
        .where('estado', '==', 'listo')
        .get()
        .then(dato => {
          const array = [];
          dato.forEach(doc => {
            array.push({id:doc.id, ...doc.data()});
          });
          setServir(array)
        })
    }
    useEffect(getListos);
    return (
		// <FormatoPedido origen={pedidos} CambiarEstado={Terminado} texto="Terminado" />
		<FormatoPedidoServir origen={servir} texto="Servir a Mesa" />
	);
}
export default ListoParaEntregar;  