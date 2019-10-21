import React, { useState } from 'react';

const [name, setName] = useState('');
const NombreCliente = () => {
 
    const handleNamChange = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div>
            <label className="row centered">Nombre del Cliente:
              <input type="text" className="text-box mg-1" value={name} onChange={handleNamChange} />
            </label>
        </div>
    )
}

export default NombreCliente;
