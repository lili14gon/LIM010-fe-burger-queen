import React from 'react';
import TituloPedidos from './TituloPedidos'
import NombreCliente from './nombreCliente';
import BotonOpciones from './BotonOpciones';


const NuevaOrden = ({ name, setName, setTipo, productosDesayuno, seleccionados, setSeleccionados }) => {

	const Agregando = (nuevoproducto) => {
		seleccionados.map((select) => {
			if (select.nombre === nuevoproducto.nombre) {
				select.cantidad = select.cantidad + 1;
				return (
					select
				)
			}else{
				return(
					select
				)
			}
		})
		setSeleccionados([...seleccionados, { ...nuevoproducto, cantidad: 1 }]);
	}

	return (
		<div className="col width-50 mg-1 centered">
			<form className="form-box">
				<TituloPedidos texto="NUEVA ORDEN " />
				<NombreCliente name={name} setName={setName} />
				<div className="row centered">
					<BotonOpciones funcionDeSetearTipo={setTipo} texto="DESAYUNO" tipo="desayuno" />
					<BotonOpciones funcionDeSetearTipo={setTipo} texto="ALMUERZO  Y CENA" tipo="almuerzo" />
				</div>
				{productosDesayuno.map((p) => (
					<div key={p.nombre} className="opcion-color" onClick={() => { Agregando(p) }} >

						{p.nombre} &nbsp;
                 &nbsp;${p.precio}
						<img className="tamaño-producto" src={p.url} alt="" />
					</div>
				))}
			</form>
		</div>
	)
};
export default NuevaOrden;