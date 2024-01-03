import React from 'react';
import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AgentRoutes = ({pathname}) => {
    return (
       <>
        <div className={`px-10 py-5 ${pathname === '/dashboard/property-requests' ? 'bg-[#172133]' : ''} `}>
              <Link to = '/dashboard/property-requests' className='flex gap-3 items-center '><FaList></FaList> <h2>Requests</h2></Link>
              </div>
       </>
    );
}

export default AgentRoutes;
