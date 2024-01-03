import React, { useEffect, useState } from 'react';
import UserAuth from '../../../Authentication/userAuth/userAuth';
import { Link, useLocation } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";
import ClientRoutes from '../DashboardRoutes/ClientRoutes';
import AgentRoutes from '../DashboardRoutes/AgentRoutes';
import AxiosBase from '../../../Axios/AxiosBase';
const DashBar = () => {
  const [userRole,setUserRole] = useState(null);
    const {user} = UserAuth();
    const {pathname} = useLocation();
    useEffect(()=>{
      if(!user){
        return;
      }
    AxiosBase().get(`/user/check-role?email=${user.email}`)
    .then(res =>{
      setUserRole('agent')
    })
    },[user])
   
    return (
        <div className='w-full bg-[#1d293e] text-[#d3d5d9] h-[100vh] py-10 font-pop sticky top-0 left-0'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <img src={user?.photoURL} alt="" className='w-32 h-32 rounded-full border-4 border-green-600' />
                <h1 className='text-2xl'>{user?.displayName}</h1>
            </div>
            <div className='pt-10 space-y-'>
              <div className={`px-10 py-5 ${pathname === '/dashboard' ? 'bg-[#172133]' : ''} `}>
              <Link to = '/dashboard' className='flex gap-3 items-center '><MdLocationPin></MdLocationPin> <h2>Dashboard</h2></Link>
              </div>
              <div className={`px-10 py-5 ${pathname === '/dashboard/profile' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/profile' className='flex gap-3 items-center '><RiUser3Fill></RiUser3Fill> <h2>Profile</h2></Link>
              </div>
            
            {
              userRole === 'client' && <ClientRoutes pathname={pathname}></ClientRoutes> || userRole ==='agent' && <AgentRoutes></AgentRoutes>  || userRole === ''
            }
              
              {/* <div className={`px-10 py-5 ${pathname === '/dashboard/payments' ? 'bg-[#172133]' : ''} `}>
              <Link className='flex gap-3 items-center '><MdOutlinePayment></MdOutlinePayment> <h2>Payments</h2></Link>
              </div> */}
              <div className={`px-10 py-5 ${pathname === '/dashboard/change-password' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/change-password' className='flex gap-3 items-center '><IoLockClosedSharp></IoLockClosedSharp> <h2>Change Password</h2></Link>
              </div>
            </div>
          {/* section 3 */}
        </div>
    );
}

export default DashBar;
