import React from 'react';

const NombreCliente = ({ name, setName }) => {

	const handleNamChange = (e) => {
		setName(e.target.value);
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