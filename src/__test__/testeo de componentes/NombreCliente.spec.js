import React from 'react';
import NombreCliente from 'react-dom';
import { render, fireEvent, waitForElement } from '@testing-library/react';


it('NombreCliente',() => {
    const { queryByTestId } = render(<NombreCliente/>);
    expect(queryByTestId()).toBe(null); 
} )