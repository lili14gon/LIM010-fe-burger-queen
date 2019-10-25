import React from 'react';
import '../css/App.css';
import TituloPedidos from './TituloPedidos';
export const OrdenDetalles = ({ seleccionados, name }) => {
  const ArrayProductos = () => {
    const ListaProductos = [];
    ListaProductos.push(seleccionados);
    console.log(ListaProductos);
  }
  console.log(ArrayProductos());

  const Eliminar = (seleccionados, elegido) => {
    const NewArray = seleccionados.filter(element => element.id !== elegido)
    return NewArray;
  }
  return (
    <React.Fragment>
      <div className="col width-50 mg-1 center-item">
        <form className="form-box">
          <TituloPedidos texto="DETALLES DE LA ORDEN" />
          <label className="mg-1">Cliente: &nbsp;{name}</label>
          <div>
            <table className="mg-1">
              <thead className="">
                <tr className="">
                  <th>Cantidad</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Total</th>

                </tr>
              </thead>
              <tbody>
                {seleccionados.map(p => (
                  <tr key={p.nombre}>
                    <td> <input type="number" min="1" max="10" value={p.cantidad}></input></td>
                    <td>{p.nombre}</td>
                    <td>${p.precio}</td>
                    <td>${p.total}</td>
                    <td>
                      <button type="button" value={p.id} className="btn" onClick={() => { Eliminar() }}>X</button>
                    </td>
                  </tr>
                  
                ))}
                
              </tbody>
            </table>
          </div>
          <div>
            <button>ENVIAR</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
export default OrdenDetalles;

export const addOrder = (producto, arrPedidos) => {
  const arr = [];
  arr.push(producto);
  console.log(arr);

}