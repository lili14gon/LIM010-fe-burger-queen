import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import Header from './piezas/Header';
import Footer from './piezas/Footer';
import NavBar from './NavBar';
import '../css/App.css';

const ListoParaServir = () => {
	const [servir, setServir] = useState([]);

	const getListos = () => {
		firebase.firestore().collection("orden").where('estado', '==', 'pendiente').get().then(dato => {
			const array = [];
			dato.forEach(doc => {
				array.push(doc.data());
			});
			setServir(array)
		});
	}
	useEffect(getListos);

	return (
		<React.Fragment>
			<Header />
			<NavBar />
			<h1>Listo para servir</h1>
			{servir.map((p) => (
				<div key={p.cliente} className="row center-item">
					<div className="product col" >
						<p>Cliente: {p.cliente}</p>
						<table>
							<thead>
								<tr>
									<th>Producto</th>
									<th>Cantidad</th>
								</tr>
							</thead>
							<tbody>
								{p.productos.map(prod =>
									<tr key={prod.producto}>
										<td>{prod.producto}</td>
										<td>{prod.cantidad}</td>
									</tr>
								)}
							</tbody>
						</table>
						<p>Hora de Pedido: {p.hora.toDate().getHours()}{':'}{p.hora.toDate().getMinutes()}</p>
						<p>Tiempo de preparación : </p>
						<p>Total a pagar: {p.total}</p>
					</div>
				</div>
			))}
			<Footer />
		</React.Fragment>
	);
}
export default ListoParaServir;