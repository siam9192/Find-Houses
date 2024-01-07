import React from 'react';
import UserAuth from '../../Authentication/userAuth/userAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = UserAuth()
    const {pathname,state}= useLocation();
    
      if(loading){
          return <div className='min-h-[80vh] flex justify-center items-center'>
  <span class="loading loading-bars loading-lg text-[#FF1F3D] "></span>
          </div>
      }
  if(user){
      return children;
  }
  else{
          return <Navigate to='/login' state={pathname} replace></Navigate>
      
  }
}

export default PrivateRoutes;
