import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbHomeSignal } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar2 = () => {
   
    return (
        <div className='py-6 bg-white font-lato px-3 bg-opacity-40 fixe top-0 w-full'>
         <div className='flex justify-between items-center text-black'>
            <div className='flex items-center gap-8'>
        <div>
        <TbHomeSignal className='text-6xl text-[#ff385c]'></TbHomeSignal>
        <h3>Find Houses</h3>
        </div>
                <nav>
             <ul className='flex justify-between items-center space-x-3 text-xl '>
             <NavLink  to="/"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Home </NavLink>
             <NavLink  to="/listing"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Listing </NavLink>
             <NavLink  to="/property"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Property </NavLink>
             <NavLink  to="/pages"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Pages </NavLink>
             <NavLink  to="/contact"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Contact </NavLink>
             </ul>
            </nav>
            </div>
           <div className='flex items-center gap-3'>
           <div className='p-2 border-r-2'><NavLink  to="/sign in"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Sign in </NavLink></div>
           {/* <span className='text-2xl'>|</span> */}
           <div className='flex items-center gap-2'>
           <div className="avatar online">
  <div className="w-10 rounded-full">
    <img src="/images/agents/1.jpg" />
  </div></div>
            <h4 className='flex items-center gap-2'><span>Hi,Harry!</span> <span><IoMdArrowDropdown></IoMdArrowDropdown></span></h4>
           </div>
           <button className='px-5 py-2 bg-[#ff385c] text-white rounded-md '>Add listing</button>
           </div>
         </div>
        </div>
    );
}

export default Navbar2;
