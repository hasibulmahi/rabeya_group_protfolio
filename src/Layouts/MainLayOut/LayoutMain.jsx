import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const LayoutMain = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className=' bg-white '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default LayoutMain;