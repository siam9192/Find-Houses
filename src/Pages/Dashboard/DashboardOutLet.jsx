import React from 'react';
import Navbar from '../../Components/Reuse/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import DashBar from './DashBar/DashBar';


const DashboardOutLet = () => {
    return (
        <div>
        <div className='flex '>
            <div className='w-[20%] lg:block hidden'>
         <DashBar></DashBar>
            </div>
            <div className='lg:w-[80%] w-full bg-[#f5f7fb] lg:px-20 lg:py-10 md:px-10 px-2 py-5'>
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
}

export default DashboardOutLet;
