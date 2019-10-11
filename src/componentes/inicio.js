import React from 'react';
import { Link } from "react-router-dom";
import  Footer from './piezas/Footer';
import Header from './piezas/Header'
function Home() {
    return (
      <div> 
      <Header/>
      <body> 
      <button ><Link to ="/about">MESERO</Link></button>
      <button><Link to ="/users">JEDE DE COCINA</Link></button>
      </body>
     <Footer/>
      </div>
    );
  }
  export default Home;
  
  // import React from 'react';
// function Inicio() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     <button>MESERO</button>
//     <button>JEFE DE COCINA</button>
//     </div>
//   );
// }
// export default Inicio;