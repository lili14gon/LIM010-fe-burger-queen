import React from 'react';
import Logo from './Logo';
import '../../css/App.css'
function Header() {
  return (
    <header className=" row even center-item">
      <p className="">Burguer Queen</p>
      <Logo></Logo>
    </header>
  );
}
export default Header;