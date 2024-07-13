import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';

const Layout = () => {
    return (
        <section className='font-poppins'>
            <NavBar />

            <div>
                <Outlet />
            </div>
        </section>
    );
};

export default Layout;