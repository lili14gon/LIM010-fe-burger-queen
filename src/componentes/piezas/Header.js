import React from 'react';
import Logo from './Logo';
import '../../css/App.css'

import { Link } from "react-router-dom";
function Header() {
  return (
    <header className=" row even center-item">
      <div>  <p className="">Burguer Queen</p>
      </div>
      <div> <Logo></Logo></div>
      <div className="row">
        <button type="button" className="btn"><Link to="/about">Mesero</Link></button>
        <button type="button" className="btn"><Link to="/cocina">Jefe de Cocina</Link></button>
        <button type="button" className="btn"><Link to="/despacho">Listo para servir</Link></button>
        <button type="button" className="btn"><Link to="/finalizados">Entregados</Link></button>
      </div>
    </header>
  );
}
export default Header;