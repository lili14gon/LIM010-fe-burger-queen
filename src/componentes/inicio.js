import React from 'react';
import { Link } from "react-router-dom";
import Footer from './piezas/Footer';
import Header from './piezas/Header';
import '../css/App.css';
function Home() {
  return (
    <div className="">
      <Header />
      <div className="row">
        <button type="button" className="btn"><Link to="/about">Mesero</Link></button>
        <button type="button" className="btn"><Link to="/users">Jefe de Cocina</Link></button>
      </div>
      <Footer />
    </div>
  );
}
export default Home;

