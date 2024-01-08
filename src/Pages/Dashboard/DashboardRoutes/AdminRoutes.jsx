import React from 'react';

const AdminRoutes = () => {
    return (
        <>
            <div className={`px-10 py-5 ${pathname === '/dashboard/users' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/users' className='flex gap-3 items-center '><FaUsers></FaUsers> <h2>Properties</h2></Link>
              </div>
               <div className={`px-10 py-5 ${pathname === '/dashboard/users' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/users' className='flex gap-3 items-center '><FaUsers></FaUsers> <h2>Users</h2></Link>
              </div>
              <div className={`px-10 py-5 ${pathname === '/dashboard/users' ? 'bg-[#172133]' : ''} `}>
              <Link to='/dashboard/users' className='flex gap-3 items-center '><FaUsers></FaUsers> <h2>Agents</h2></Link>
              </div>
            
        </>
    );
}

export default AdminRoutes;
