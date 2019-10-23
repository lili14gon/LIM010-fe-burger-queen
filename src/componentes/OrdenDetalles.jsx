import React from 'react';
import '../css/App.css';
import TituloPedidos from './TituloPedidos';
export const OrdenDetalles = ({seleccionados, name,agregar}) => {
  return (
    <React.Fragment>
      <div className="col width-50 mg-1 center-item">
        <form className="form-box">
          <TituloPedidos texto="DETALLES DE LA ORDEN"/>
          <label className="mg-1">Cliente: &nbsp;{name}</label>
          <div>
            <table className="mg-1">
              <thead className="">
                <tr className="">
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{seleccionados}</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
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