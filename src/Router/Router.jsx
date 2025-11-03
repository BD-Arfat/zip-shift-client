import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home/Home/Home';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])