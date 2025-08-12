import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import WhatsAppButton from '../components/WhatsAppButton';
import CustomCursor from '../components/CustomCursor';

const MainLayout = () => {
    return (
        <div className='px-4'>
            {/* <CustomCursor /> */}
            <NavBar />
            <div className="mt-[100px]">
                <Outlet />
            </div>
            <Footer />
            <WhatsAppButton />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;