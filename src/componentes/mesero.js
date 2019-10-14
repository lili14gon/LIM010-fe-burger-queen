import React from 'react';

const Mesero = ({ item, precio, click }) => {
  return (
    <div>
      <form>
        <label>NOMBRE DEL CLIENTE
                <input type="text"/>
        </label>
        <div>
          <button type="button" onClick = {click} >DESAYUNO</button>
          <button type="button">ALMUERZO  Y CENA</button>
        </div>
        <input type="submit" />
      </form>
      <h1>{item}</h1>
      <h1>{precio}</h1>
    </div>
  );
}

// const OpcionDesayuno = () => {
//   const [item, precio] = useState('');
//   return (
//     <div>
//       <h1>Item</h1>
//       <Mesero item = "café" precio={precio} />
//     </div>
//   );

// }

export default Mesero;
