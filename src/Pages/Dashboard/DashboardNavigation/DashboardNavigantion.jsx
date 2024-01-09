import React, { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { FaList, FaUsers } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";
import ClientRoutes from '../DashboardRoutes/ClientRoutes';
import AgentRoutes from '../DashboardRoutes/AgentRoutes';
import AxiosBase from '../../../Axios/AxiosBase';
import AdminRoutes from '../DashboardRoutes/AdminRoutes';
import { RxCross2 } from "react-icons/rx";
import UserAuth from '../../../Authentication/userAuth/userAuth';
const DashboardNavigation = () => {
    const {pathname} = useLocation();
    const [open,setOpen] = useState(false);

    const [userRole,setUserRole] = useState(null);
    const {user} = UserAuth();
    
    useEffect(()=>{
      if(!user){
        return;
      }
    AxiosBase().get(`/user/check-role?email=${user.email}`)
    .then(res =>{
      setUserRole(res.data)
    })
    },[user])
    const handleOpen = ()=>{
        setOpen(!open)
    }
    return (
        <div className='px-5 lg:hidden block font-pop bg-white rounded-md text-black'>
            <div className='w-full p-5  flex gap-3 items-center'>
            <div className='text-4xl text-black hover:cursor-pointer' onClick={handleOpen}>{open?<RxCross2 className='rotate-90 duration-200 transition-all ease-in'></RxCross2> : <BiMenu></BiMenu>} </div>
            <h2>Dashboard Navigation</h2>
            
            </div>
            <div className={`${open?'block':'hidden'} duration-200  transition-all ease-in`}>
            <div className='pt-10 space-y-2'>
              <div className={`px-10 py-5 ${pathname === '/dashboard' ? 'bg-[#172133] text-white' : ''} `}>
              <Link to = '/dashboard' className='flex gap-3 items-center '><MdLocationPin></MdLocationPin> <h2>Dashboard</h2></Link>
              </div>
              <div className={`px-10 py-5 ${pathname === '/dashboard/profile' ? 'bg-[#172133] text-white' : ''} `}>
              <Link to='/dashboard/profile' className='flex gap-3 items-center '><RiUser3Fill></RiUser3Fill> <h2>Profile</h2></Link>
              </div>
           
            {
              userRole === 'client' && <ClientRoutes pathname={pathname} text = {'white'}></ClientRoutes> || userRole ==='agent' && <AgentRoutes pathname={pathname} text = {'white'}></AgentRoutes>  || userRole === 'admin' && <AdminRoutes pathname={pathname} text = {'white'}></AdminRoutes>
            }
              
              {/* <div className={`px-10 py-5 ${pathname === '/dashboard/payments' ? 'bg-[#172133]' : ''} `}>
              <Link className='flex gap-3 items-center '><MdOutlinePayment></MdOutlinePayment> <h2>Payments</h2></Link>
              </div> */}
              <div className={`px-10 py-5 ${pathname === '/dashboard/change-password' ? 'bg-[#172133] text-white' : ''} `}>
              <Link to='/dashboard/change-password' className='flex gap-3 items-center '><IoLockClosedSharp></IoLockClosedSharp> <h2>Change Password</h2></Link>
              </div>
            </div>
            </div>
        </div>
    );
}

export default DashboardNavigation;
