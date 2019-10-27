import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';

const NavBar = () => {
    return (
        <React.Fragment>
            <div className="product">
                <div className="row">
                    <button type="button" className="btn"><Link to="/about">Mesero</Link></button>
                    <button type="button" className="btn"><Link to="/cocina">Jefe de Cocina</Link></button>
                    <button type="button" className="btn"><Link to="/despacho">Listo para servir</Link></button>
                </div>
            </div>
        </React.Fragment>
    );
}
export default NavBar;