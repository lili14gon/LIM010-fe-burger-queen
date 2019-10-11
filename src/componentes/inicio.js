import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div> 
      <header>Burguer queen</header>
      <body> 
      <button ><Link to ="/about">MESERO</Link></button>
      <button><Link to ="/users">JEDE DE COCINA</Link></button>
      </body>
      <footer>2019@Derechos Reservados</footer>
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