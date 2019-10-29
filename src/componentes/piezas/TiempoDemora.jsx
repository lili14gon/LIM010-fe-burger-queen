import React from 'react';
import { DateTime } from 'luxon';
DateTime.local();
console.log(DateTime.local().hour);
console.log(DateTime.local().minute);
console.log(DateTime.local().second);

const TiempoDemora = ({ p }) => {

    const hora = DateTime.local().hour - p.hora.toDate().getHours();
    const minuto = DateTime.local().minute - p.hora.toDate().getMinutes();
    const segundos = DateTime.local().second - p.hora.toDate().getSeconds();
    return (
        <p>Tiempo de preparación : {hora} {':'}
            {minuto} {':'}
            {segundos}</p>
    );

}

export default TiempoDemora;