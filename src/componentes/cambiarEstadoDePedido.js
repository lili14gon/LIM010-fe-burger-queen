import firebase from './firebase';

const CambiarEstadoDePedido = (collection, id, nuevoEstado) => {
    firebase.firestore().collection(collection).doc(id).update({
        estado: nuevoEstado,
        preparación: Date.now(),
    });
}
export default CambiarEstadoDePedido;