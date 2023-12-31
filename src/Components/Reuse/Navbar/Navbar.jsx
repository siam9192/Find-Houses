import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TbHomeSignal } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import AccountForms from '../../../Pages/Form/AccountForm';
import UserAuth from '../../../Authentication/userAuth/userAuth';
const Navbar = () => {
const [scrollY,setScrollY] = useState(0);
const [visibility,setVisibility] = useState(false)
const [navCard,setNavCard] = useState(false);
const {user} = UserAuth()
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
// document.body.addEventListener('click',()=>{
//   setNavCard(false)
// })

    return (
      <div>
        <div className={`py-6 ${scrollY > 300 ?'bg-white':'bg-[#999998]'} font-lato px-3 ${scrollY > 300 ?'':'bg-opacity-40'} fixed top-0 w-full z-50 shadow-md duration-1000`}>
         <div className={`flex justify-between items-center text-white ${scrollY > 300 ?'text-black':'text-white'}`}>
            <div className='flex items-center gap-8'>
        <div>
        <TbHomeSignal className='text-4xl text-[#ff385c]'></TbHomeSignal>
        <h3>Find Houses</h3>
        </div>
                <nav>
             <ul className={`flex justify-between items-center space-x-3 text-xl ${scrollY > 300 ?'text-black':'text-white'}`}>
             <NavLink  to="/"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Home </NavLink>
             <NavLink  to="/listing"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Listing </NavLink>
             <NavLink  to="/properties"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Properties </NavLink>
             <NavLink  to="/pages"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Pages </NavLink>
             <NavLink  to="/contact"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Contact </NavLink>
             </ul>
            </nav>
            </div>
           <div className={`flex items-center gap-3 ${scrollY > 300 ?'text-black':'text-white'}`}>
           <div className='p-2 border-r-2'><NavLink  to=""  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} onClick={handleVisibility}> Sign in </NavLink></div>
           {/* <span className='text-2xl'>|</span> */}
           <div className='flex items-center gap-2 '>
           <div className="avatar online">
  <div className="w-10 rounded-full">
    <img src={`${user?.photoURL ? user.photoURL : "/images/agents/1.jpg"}`}/>
  </div></div>
            <h4 className='flex items-center gap-2'><span>Hi,{user?.displayName.split(' ')[0]}!</span> <span onClick={handleNavCard}>{navCard ? <MdArrowDropUp className='text-2xl'></MdArrowDropUp> : <IoMdArrowDropdown></IoMdArrowDropdown>}</span></h4>
           </div>
           <button className='px-5 py-2 bg-[#ff385c] text-white rounded-md '>Add listing</button>
           </div>
         </div>
        </div>
        {/* sign up from */}
        <div className={`p-5 bg-white font-pop ${navCard ? 'block' :'hidden'} flex flex-col gap-3 min-w-[250px] rounded-lg fixed top-20 right-4 z-50  duration-200`}>
          <h1 className='text-xl font-semibold'>{user?.displayName}</h1>
          <Link to='/profile' className='hover:text-[#ff385c] hover:text-xl'>Profile</Link>
          <Link to='/dashboard' className='hover:text-[#ff385c] hover:text-xl'>Dashboard</Link>
          <Link to='setting' className='hover:text-[#ff385c] hover:text-xl'>Setting</Link>
          <Link  className='hover:text-[#ff385c] hover:text-xl'>Logout</Link>
        </div>
       <AccountForms visibility={visibility} handleVisibility = {handleVisibility}></AccountForms>
        </div>
    );
}

export default Navbar;