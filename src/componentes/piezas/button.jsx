import React from 'react';
const MiBoton = ({ setTipoFnc, titulo, tipo }) => (
  <button type="button" className="btn" onClick={() => { setTipoFnc(tipo) }}>{titulo}</button>
);
export default MiBoton;
