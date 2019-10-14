import React, { useState } from "react";

const Perfil = ({ nombre, edad, click }) => (
    <div>
        <h1>{nombre}</h1>
        <h1>{edad}</h1>
        <button onClick={click}>HAZME CLICK</button>
    </div>
);


const ComponenteNuevo = () => {
    const [numero, actualizarNumero] = useState(0);

    return (
        <div>
            <h1>Hola</h1>
            <Perfil nombre="Moisés" edad={numero} click={() => {  (numero + 1) }} />
        </div>
    );
};

export default ComponenteNuevo;