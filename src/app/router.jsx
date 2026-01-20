import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from '../features/home';
import ServicesPage from '../features/services';
import AfiliadosPage from '../features/afiliados';
import CatalogoPage from '../features/catalogo';
import FamiliaGharaPage from '../features/familia';
import CalculatorPage from '../features/calculator';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'servicios',
                element: <ServicesPage />,
            },
            {
                path: 'afiliados',
                element: <AfiliadosPage />,
            },
            {
                path: 'catalogo',
                element: <CatalogoPage />,
            },
            {
                path: 'familia',
                element: <FamiliaGharaPage />,
            },
            {
                path: 'calculadora',
                element: <CalculatorPage />,
            },
        ],
    },
]);
