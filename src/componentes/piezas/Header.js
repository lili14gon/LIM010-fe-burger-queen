import React from 'react';
import Logo from './Logo';
import '../../css/App.css'

import { Link } from "react-router-dom";
function Header() {
  return (
    <header className=" row even center-item">
      <button type="image"><Logo><Link to="/"></Link></Logo></button>
      <p className="">BURGUER QUEEN</p>
      <div className="row">
        <button type="button" className="btn"><Link to="/about">Mesero</Link></button>
        <button type="button" className="btn"><Link to="/cocina">Jefe de Cocina</Link></button>

      </div>
    </header>
  );
}
export default Header;