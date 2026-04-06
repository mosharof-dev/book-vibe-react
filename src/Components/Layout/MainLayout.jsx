import React from 'react';
import NavBar from '../Shared/Navbar/NavBar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <div>
            
                <NavBar/>
           
                <Outlet/>
            
            <ToastContainer position="top-right" autoClose={3000} />
            
        </div>
    );
};

export default MainLayout;