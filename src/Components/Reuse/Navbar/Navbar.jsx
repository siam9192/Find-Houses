import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TbHomeSignal } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import AccountForms from '../../../Pages/Form/AccountForm';
import UserAuth from '../../../Authentication/userAuth/userAuth';
import './Navbar.css'
import SideNavbar from './SideNavbar';
const Navbar = () => {
const [scrollY,setScrollY] = useState(0);
const [visibility,setVisibility] = useState(false)
const [navCard,setNavCard] = useState(false);
const [toggleNavbar,setToggleNavber] = useState(false)
const {user,logout} = UserAuth()
useEffect(()=>{
const handleScroll = ()=>{
  setScrollY(window.scrollY)
  }
window.addEventListener('scroll',handleScroll)
return () => {
  window.removeEventListener('scroll', handleScroll);
};
},[scrollY])

const handleVisibility = ()=>{
  setVisibility(!visibility)
}

const handleNavCard = ()=>{
  setNavCard(!navCard)
}
const handleToggleNavbar = ()=>{
  setToggleNavber(!toggleNavbar)
  
}



    return (
      <div >
        <div className={`lg:py-8 py-4 ${scrollY > 300 ?'bg-white':'bg-[#60605f]'} font-pop px-3 ${scrollY > 300 ?'':'bg-opacity-40'} lg:fixed absolute top-0 w-full z-40 shadow-md duration-1000`}>
         <div className={`flex justify-between items-center text-white ${scrollY > 300 ?'text-black':'text-white'}`}>
            <div className='flex items-center md:gap-8 gap-2'>
            <div className='text-3xl text-white font-semibold lg:hidden block' onClick={()=>handleToggleNavbar()}>
           <div className='p-3 bg-gray-700 text-white rounded-full'>
           <CiMenuBurger></CiMenuBurger>
           </div>
            
             </div>
        <div>
                <h3 className={` ${scrollY > 300? 'text-black':'text-white'} md:block hidden font-semibold md:text-4xl text-2xl`}>Find<span className='text-[#ff385c] '>House</span></h3>
        </div>
                <nav className='lg:block hidden'>
             <ul className={`flex justify-between items-center space-x-3 text-xl ${scrollY > 300 ?'text-black':'text-white'}`}>
             <NavLink  to="/"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}> Home </NavLink>
             <NavLink  to="/listing"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}> Listing </NavLink>
             <NavLink  to="/properties"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}> Properties </NavLink>
           
             <NavLink  to="/contact"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}> Contact </NavLink>
             {
              !user &&
             <>
             <NavLink  to="/login"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}>Login</NavLink>
             <NavLink  to="/signup"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff385c]" : ""}>Sign up</NavLink>
             </>
}
             </ul>
            </nav>
            </div>
           <div className={`lg:flex items-center gap-3 lg:block  ${scrollY > 300 ?'text-black':'text-white'}`}>
          
        {  user && <div className='flex items-center gap-2 '>
           <div className="avatar online">
  <div className="w-10 rounded-full">
    <img src={`${user?.photoURL ? user.photoURL : "https://i.ibb.co/TH1W6TG/default-Pic.png"}`}/>
  </div></div>
            <h4 className='flex items-center gap-2 hover:cursor-pointer' onClick={handleNavCard}><span>Hi,{user?.displayName.split(' ')[0]}!</span> <span >{navCard ? <MdArrowDropUp className='text-2xl'></MdArrowDropUp> : <IoMdArrowDropdown></IoMdArrowDropdown>}</span></h4>
           </div>
}
           <button className='px-5 py-2 bg-[#ff385c] text-white rounded-md lg:block hidden '>Add listing</button>
           </div>
       
         </div>
        </div>
        {/* sign up from */}
        <div className={`p-5 bg-white font-pop transition ease-in-out delay-150 ${navCard ? 'block' :'hidden'} flex flex-col gap-3 min-w-[250px] rounded-lg fixed top-20 right-4 z-50   `} style={{
          
        }}>
          <h1 className='text-xl font-semibold'>{user?.displayName || ''}</h1>
          <Link to='/profile' className='hover:text-[#ff385c] hover:text-xl'>Profile</Link>
          <Link to='/dashboard' className='hover:text-[#ff385c] hover:text-xl'>Dashboard</Link>
          <Link to='setting' className='hover:text-[#ff385c] hover:text-xl'>Setting</Link>
         { user && <Link  className='hover:text-[#ff385c] hover:text-xl'onClick={()=>{
            logout();
            handleNavCard()
          }}>Logout</Link>
        }
        </div>
      <SideNavbar toggleNavbar = {toggleNavbar} close = {handleToggleNavbar}></SideNavbar>
       {/* <AccountForms visibility={visibility} handleVisibility = {handleVisibility}></AccountForms> */}
        </div>
    );
}

export default Navbar;
