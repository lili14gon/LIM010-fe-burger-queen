import React from 'react';
import Header from './piezas/Header';
import Footer from './piezas/Footer';
import NavBar from './NavBar';
// Aqui va para la hu3 donde el mesero manda los entregados
const Entregados = () => {
	return (
		<React.Fragment>
			<Header />
			<NavBar />
			<h1>Entregados</h1>
			<Footer />
		</React.Fragment>
	);
}
export default Entregados;