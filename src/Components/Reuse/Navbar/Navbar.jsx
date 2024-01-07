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
// document.body.addEventListener('click',()=>{
//   setNavCard(false)
// })
console.log('trogg',toggleNavbar)

    return (
      <div >
        <div className={`lg:py-8 py-6 ${scrollY > 300 ?'bg-white':'bg-[#60605f]'} font-pop px-3 ${scrollY > 300 ?'':'bg-opacity-40'} fixed top-0 w-full z-50 shadow-md duration-1000`}>
         <div className={`flex justify-between items-center text-white ${scrollY > 300 ?'text-black':'text-white'}`}>
            <div className='flex items-center gap-8'>
        <div>
        {/* <TbHomeSignal className='text-6xl text-[#ff385c]'></TbHomeSignal> */}
        <img src="https://i.ibb.co/3skJsNn/pngwing-com-8.png" alt="" className='w-20 hidden' />
                <h3 className={` ${scrollY > 300? 'text-black':'text-white'} font-semibold text-4xl`}>Find<span className='text-[#ff385c] '>House</span></h3>
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
           <div className={`lg:flex items-center gap-3 lg:block hidden ${scrollY > 300 ?'text-black':'text-white'}`}>
          
           {/* <div className='p-2 border-r-2'><NavLink  to=""  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} onClick={handleVisibility}> Sign in </NavLink></div> */}
           {/* <span className='text-2xl'>|</span> */}
        {  user && <div className='flex items-center gap-2 '>
           <div className="avatar online">
  <div className="w-10 rounded-full">
    <img src={`${user?.photoURL ? user.photoURL : "/images/agents/1.jpg"}`}/>
  </div></div>
            <h4 className='flex items-center gap-2 hover:cursor-pointer' onClick={handleNavCard}><span>Hi,{user?.displayName.split(' ')[0]}!</span> <span >{navCard ? <MdArrowDropUp className='text-2xl'></MdArrowDropUp> : <IoMdArrowDropdown></IoMdArrowDropdown>}</span></h4>
           </div>
}
           <button className='px-5 py-2 bg-[#ff385c] text-white rounded-md '>Add listing</button>
           </div>
           <div className='text-3xl text-white font-semibold lg:hidden block' onClick={()=>handleToggleNavbar()}>
           <div className='p-3 bg-gray-700 text-white rounded-full'>
           <CiMenuBurger></CiMenuBurger>
           </div>
            {/* <label className="btn btn-circle swap swap-rotate" >
  
  
  <input type="checkbox" />
  
 
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label> */}
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
      <SideNavbar toggleNavbar = {toggleNavbar}></SideNavbar>
       {/* <AccountForms visibility={visibility} handleVisibility = {handleVisibility}></AccountForms> */}
        </div>
    );
}

export default Navbar;
