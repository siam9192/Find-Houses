import React from 'react';
import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaMessage } from "react-icons/fa6";
const AgentRoutes = ({pathname}) => {
    return (
       <>
       <div className={`px-10 py-5 ${pathname === '/dashboard/property-requests' ? 'bg-[#172133]' : ''} `}>
              <Link to = '/dashboard/client-properties' className='flex gap-3 items-center '><FaList></FaList> <h2>Client Properties</h2></Link>
              </div>
        <div className={`px-10 py-5 ${pathname === '/dashboard/property-requests' ? 'bg-[#172133]' : ''} `}>
              <Link to = '/dashboard/property-requests' className='flex gap-3 items-center '><FaList></FaList> <h2>Requests</h2></Link>
              </div>
              <div className={`px-10 py-5 ${pathname === '/dashboard/property-requests' ? 'bg-[#172133]' : ''} `}>
              <Link to = '/dashboard/Massages' className='flex gap-3 items-center '><FaMessage></FaMessage> <h2>Messages</h2></Link>
              </div>
       </>
    );
}

export default AgentRoutes;
