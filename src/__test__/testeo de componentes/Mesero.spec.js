import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Mesero from '../../componentes/Mesero/Mesero';
import NombreCliente from 'react-dom';
import { render, fireEvent, waitForElement } from '@testing-library/react';

// const url = '/';

// it('',async() => {
//     const { queryByTestId } = render(<BrowserRouter ><Mesero url={url}/></BrowserRouter >);
//     expect(queryByTestId()).toBe(null);
  
// } )

it('NombreCliente',async() => {
    const { queryByTestId } = render(<NombreCliente/>);
    expect(queryByTestId()).toBe(null); 
} )
