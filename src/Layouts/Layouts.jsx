import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../sheard/Navbar/Navbar';
import Footer from '../sheard/Footer/Footer';

const Layouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;