import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const FormatoEntregados = () => {
	const [pedidos, setPedidos] = useState([]);

	const getPedidos = () => {
		firebase.firestore().collection("orden")
			.where('estado', '==', 'entregado')
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

	return (
		
        <React.Fragment>
        {pedidos.map((p) => (
            <div key={p.cliente} className="row center-item">
                <div className="product col" >
                    <p>Cliente: {p.cliente}</p>
                    <table>
                        <thead>
                            <tr>
                                <th className="color-item">Producto</th>
                                <th className="color-item">Cantidad</th>
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
                </div>
                
            </div>
        ))}
    </React.Fragment>
	);
}
export default FormatoEntregados;