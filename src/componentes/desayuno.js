import React from 'react';
 export const MiBoton = ({ funcionDeSetearTipo, texto, tipo }) => (
    <button type="button" className="btn" onClick={() => { funcionDeSetearTipo(tipo) }}>{texto}</button>
  );

const Desayuno = ({ agregarPedido, todosProductos, pedidos, setPedidos }) => {
    return (
        <div>

        </div>
    );
}
export default Desayuno;