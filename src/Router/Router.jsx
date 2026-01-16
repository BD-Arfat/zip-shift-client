import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home/Home/Home';
import AuthLayout from '../Pages/Authentication/AuthLayout/AuthLayout';
import LoginPage from '../Pages/Authentication/LoginPage/LoginPage';


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
    },
    {
        path : '/',
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path: 'login',
                Component: LoginPage
            }
        ]
    }
])