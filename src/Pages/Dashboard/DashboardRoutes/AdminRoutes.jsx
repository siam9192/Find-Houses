import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
const AdminRoutes = ({pathname}) => {
    return (
        <>
            <div className={`px-10 py-5 ${pathname === '/dashboard/properties' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/users' className='flex gap-3 items-center '><RiHomeOfficeFill></RiHomeOfficeFill> <h2>Properties</h2></Link>
              </div>
               <div className={`px-10 py-5 ${pathname === '/dashboard/users' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/users' className='flex gap-3 items-center '><FaUsers></FaUsers> <h2>Users</h2></Link>
              </div>
              <div className={`px-10 py-5 ${pathname === '/dashboard/agents' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/users' className='flex gap-3 items-center '><MdOutlineSupportAgent></MdOutlineSupportAgent> <h2>Agents</h2></Link>
              </div>
            
        </>
    );
}

export default AdminRoutes;
