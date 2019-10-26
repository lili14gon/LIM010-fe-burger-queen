import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const PedidosCocina = () => {
	const [pedidos, setPedidos] = useState([]);

	useEffect(() => {
		firebase.firestore().collection("orden").orderBy('hora', 'asc').get().then(dato => {
			const array = [];
			dato.forEach(doc => {
				array.push(doc.data());
			});
			setPedidos(array)
		});
	});

	return (
		<React.Fragment>
			<ul>
				{pedidos.map((p) => (
					<div key={p.cliente} className="product" >
						<p>Cliente: {p.cliente}</p>
						<p>Hora: {p.hora.toDate().getHours()}{':'}{p.hora.toDate().getMinutes()}</p>
						{p.productos.map(prod =>
							<div key={p.prod}>
								<p>Producto: {prod.nombre}</p>
								<p>Cantidad: {prod.cantidad}</p>
								<p>Total a Pagar:{' $'} {prod.total}</p>
							</div>
						)}
					</div>
				))}
			</ul>
		</React.Fragment>
	);
}
export default PedidosCocina;