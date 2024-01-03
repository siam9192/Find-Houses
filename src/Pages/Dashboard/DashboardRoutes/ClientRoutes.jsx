import React from 'react';
import { FaList } from 'react-icons/fa';
import { IoHeart } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ClientRoutes = ({pathname}) => {
    return (
        <>
          <div className={`px-10 py-5 ${pathname === '/dashboard/my-properties' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/my-properties' className='flex gap-3 items-center '><FaList></FaList> <h2>My Properties</h2></Link>
              </div>
              <div className={`px-10 py-5 ${pathname === '/dashboard/favourited-properties' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/favourited-properties' className='flex gap-3 items-center '><IoHeart></IoHeart> <h2>Favourited Properties</h2></Link>
              </div>
              <div className={`px-10 py-5 ${pathname === '/dashboard/add-property' ? 'bg-[#172133]' : ''} `}>
              <Link to = '/dashboard/add-property' className='flex gap-3 items-center '><FaList></FaList> <h2>Add Property</h2></Link>
              </div>
        </>
    );
}

export default ClientRoutes;
