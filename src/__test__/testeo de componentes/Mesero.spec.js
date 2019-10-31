import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Mesero from '../../componentes/Mesero/Mesero';
import { render, fireEvent, waitForElement, act } from '@testing-library/react';

const url = '/';

it('',async() => {
    const { queryByTestId } = render(<BrowserRouter ><Mesero url={url}/></BrowserRouter >);
    expect(queryByTestId()).toBe(null);
  
} )