import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import NavBar from '../piezas/NavBar';
import FormatoPedido from '../piezas/FormatoPedido';
// Aqui va para la hu3 donde el mesero manda los entregados
const Entregados = () => {
	const [entregado, setEntregado] = useState([]);
	const getListos = () => {
		firebase.firestore().collection("orden")
			.where('estado', '==', 'entregado')
			.get()
			.then(dato => {
				const array = [];
				dato.forEach(doc => {
					array.push(doc.data());
				});
				setEntregado(array)
			})
			.catch(error => {
				console.log("Error getting documents: ", error);
			});
	}
	useEffect(getListos);


	return (
		<React.Fragment>
			<Header />
			<NavBar />
			<h1>Entregados</h1>
			<FormatoPedido origen={entregado}/>
			<Footer />
		</React.Fragment>
	);
}
export default Entregados;