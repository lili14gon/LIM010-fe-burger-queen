import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import FormatoPedido from '../piezas/FormatoPedido';

const PedidosCocina = () => {
	const [pedidos, setPedidos] = useState([]);

	const getPedidos = () => {
		firebase.firestore().collection("orden")
			.where('estado', '==', 'pendiente')
			.orderBy('hora', 'asc')
			.get()
			.then(dato => {
				const array = [];
				dato.forEach(doc => {
					array.push({id:doc.id, ...doc.data()});
				});
				setPedidos(array)
			});
	}
	useEffect(getPedidos);

	// const Terminado = (id) => {
	// 	firebase.firestore().collection("orden").doc(id).update({
	// 		estado: 'listo',
	// 		preparación: Date.now(),
	// 	});
	// }

	return (
		// <FormatoPedido origen={pedidos} CambiarEstado={Terminado} texto="Terminado" />
		<FormatoPedido origen={pedidos} texto="Terminado" />
	);
}
export default PedidosCocina;