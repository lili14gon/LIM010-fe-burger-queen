import React from 'react';
import { DateTime } from 'luxon';
DateTime.local();
const TiempoDePreparacion = ({ p }) => (
    //  <p>Tiempo transcurrido{Date(p.preparación).toString()}</p>
    // <p>Tiempo transcurrido{DateTime.local().hour}:</p>
    <p>Tiempo de preparación : {DateTime.local().hour} {':'} {DateTime.local().minute} {':'} {DateTime.local().second}</p> 
    //  <p>Tiempo de preparación : {(p.hora.toDate().getHours())} {':'} {(p.hora.toDate().getMinutes())} {':'} {(p.hora.toDate().getSeconds())}</p> 
);
export default TiempoDePreparacion;