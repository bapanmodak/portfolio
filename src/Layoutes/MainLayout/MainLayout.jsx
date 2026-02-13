import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <NavBar />
            <div className="px-4 lg:px-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;