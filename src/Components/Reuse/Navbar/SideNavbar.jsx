import React from 'react';
import UserAuth from '../../../Authentication/userAuth/userAuth';
import { NavLink } from 'react-router-dom';
import { BiSolidHome } from "react-icons/bi";
import { BsHousesFill } from "react-icons/bs";
import { RiContactsFill,RiLoginCircleFill } from "react-icons/ri";
import { FaUserEdit } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
const SideNavbar = ({toggleNavbar,close}) => {
  const {user} = UserAuth();
  console.log('sidebar',toggleNavbar)
    return (
        <div className={`min-w-[300px]  h-full font-pop px-5 pt-5  fixed top-0 left-0 bg-white text-black lg:hidden ${toggleNavbar ? 'left-0' :'-left-[200%]' } transition-all ease-out z-50 `}>
            
            <h3 className={`  text-black font-semibold text-4xl`}>Find<span className='text-[#ff385c] '>House</span></h3>
            <p>We are alwayes to help you</p>
<div className='py-5 flex flex-col space-y-4 text-black text-xl'>
            <div className='flex items-center gap-2'>
                <BiSolidHome className='text-2xl'></BiSolidHome>
                <NavLink  to="/"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}> Home </NavLink>
            </div>
                <div className='flex items-center gap-2'>
                    <BsHousesFill className='text-xl'></BsHousesFill>
                <NavLink  to="/properties"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}> Properties </NavLink>
                </div>
                <div className='flex items-center gap-2'>
                </div>
                {!user && <>
                    <div className='flex items-center gap-2'>
                <RiContactsFill className='text-xl'></RiContactsFill>
                <NavLink  to="/signup"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}>Signup</NavLink>
                </div>
                <div className='flex items-center gap-2'>
                <RiLoginCircleFill className='text-xl'></RiLoginCircleFill>
                <NavLink  to="/login"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}>Login</NavLink>
                </div>
                </>
}
</div>
<div className='text-xl text-black rounded-full absolute right-2 top-2 p-4 bg-gray-500' onClick={close}>
    <RxCross1></RxCross1>
</div>
        </div>
    );
}

export default SideNavbar;
