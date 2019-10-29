import React from 'react';
import { DateTime } from 'luxon';
DateTime.local();
const TiempoDePreparacion = ({ p }) => (

        <p>{Date(p.preparación).toString()}</p>
    // <p>Tiempo de preparación : {(p.preparación.toDate().getHours())-(p.hora.toDate().getHours())} {':'} {(p.preparación.toDate().getMinutes())-(p.hora.toDate().getMinutes())} {':'} {(p.preparación.toDate().getSeconds())-(p.hora.toDate().getSeconds())}</p> 
);
export default TiempoDePreparacion;