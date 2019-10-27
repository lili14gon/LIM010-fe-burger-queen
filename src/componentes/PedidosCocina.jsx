import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const PedidosCocina = () => {
	const [pedidos, setPedidos] = useState([]);

	const getPedidos = () => {
		firebase.firestore().collection("orden").orderBy('hora', 'asc').get().then(dato => {
			const array = [];
			dato.forEach(doc => {
				array.push(doc.data());
			});
			setPedidos(array)
		});
	}
	useEffect(getPedidos);

	const Terminado = (id) => {
		firebase.firestore().collection("orden").doc(id).update({
			estado: 'listo'
		});
	}

	return (
		<React.Fragment>
			{pedidos.map((p) => (
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
						<p>Total a pagar: {p.total}</p>
					</div>
					<div>
						<button type="button" className="btn col" onClick={() => { Terminado(p.id) }}>Terminado</button>
					</div>
				</div>
			))}
		</React.Fragment >
	);
}
export default PedidosCocina;