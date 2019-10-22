import React from 'react';

const BotonOpciones = ({ funcionDeSetearTipo, texto, tipo }) => (
    <button type="button" className="btn" onClick={() => { funcionDeSetearTipo(tipo) }}>{texto}</button>
);
export default BotonOpciones