import React from 'react';
import { addOrder } from '../controller/order';

const Counter = ({ id, orders }) => {
    return (

        // const MiBoton = ({ funcionDeSetearTipo, texto, tipo }) => (
        //     <button type="button" className="btn" onClick={() => { funcionDeSetearTipo(tipo) }}>{texto}</button>
        //   );
        <div >
            <button id={id} type="button"
                onClick={() => { addOrder(id, orders)}}>
                {/* <img src="https://i.postimg.cc/xdyR0DQP/image.png" alt="" />*/}Agregar 
            </button>
        </div >
    )
}


export default Counter;