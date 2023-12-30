import React from 'react';
import Navbar from '../../Components/Reuse/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import DashBar from './DashBar/DashBar';


const DashboardOutLet = () => {
    return (
        <div>
        <div className='flex '>
            <div className='w-[20%]'>
         <DashBar></DashBar>
            </div>
            <div className='w-[80%] bg-[#f5f7fb] px-20 py-10'>
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
}

export default DashboardOutLet;
