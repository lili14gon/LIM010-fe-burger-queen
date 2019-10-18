import React from 'react';
import logo from '../image/burguer.png';
import '../../css/App.css'
function Logo() {
  return (
        <div>
          <img src={logo} alt="logo" className="logo"/>
        </div>
      );
  }
export default Logo;