import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import NavBar from '../piezas/NavBar';
import '../../css/App.css';
import TituloPedidos from '../piezas/TituloPedidos';
import FormatoPedido from '../piezas/FormatoPedido';

const ListoParaServir = () => {
  const [servir, setServir] = useState([]);

  const getListos = () => {
    firebase.firestore().collection("orden")
      .where('estado', '==', 'listo')
      .get()
      .then(dato => {
        const array = [];
        dato.forEach(doc => {
          array.push(doc.data());
        });
        setServir(array)
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }
  useEffect(getListos);

  const Entregar = (id) => {
		firebase.firestore().collection("orden").doc(id).update({
			estado: 'entregado',
		});
  }
  
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <TituloPedidos texto="Listo para servir"/>
      <FormatoPedido origen={servir} CambiarEstado={Entregar} texto="Servir a Mesa"/>
      <Footer />
    </React.Fragment>
  );
}
export default ListoParaServir;