import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import Login from './Login';
import Signup from './Signup';
import UserAuth from '../../Authentication/userAuth/userAuth';
import AxiosBase from '../../Axios/AxiosBase';
const AccountForms = ({visibility,handleVisibility}) => {
  const [form,setForm] = useState('login')
  const {googleLogin} = UserAuth()
  const changeForm = (e,value)=>{
    // e.preventDefault()
    setForm(value)
  }
  const loginWithGoogle = () =>{
    googleLogin()
    .then(res =>{
    
      const user = {
        email:res.user.email,
        profilePhoto:'',
        role:'client'
    }
    AxiosBase().put('/user/new/update',{user})
    .then(res=>{
      if(res.data.modifiedCount > 0 || res.data.insertedId){
        handleVisibility()
      }
    })
     
    })
    }
  const  activeButton = 'bg-[#ff385c] text-white px-6  py-2 rounded-md'
  const  disableButton = 'bg-[#939192] text-black px-6  py-2 rounded-md '

    return (
        <div className={`w-full h-[100vh]   bg-[#2a252597] ${visibility ? 'block' : 'hidden'} fixed top-0 left-0 z-50 flex justify-center py-10 font-pop `}>
          <div className='bg-white rounded-lg lg:w-1/3 py-5 max-h-[100vh] overflow-y-auto'>
            <div className='flex justify-between items-center px-5 border-b-2 pb-2'>
                <h1 className='text-black text-2xl'>Welcome to <span className='font-semibold'>Find</span><span className='text-[#ff385c]'>Houses</span></h1>
              <div className='p-3 bg-[#ff385c] text-xl text-white font-semibold rounded-full hover:cursor-pointer' onClick={handleVisibility}><RxCross1></RxCross1></div>
            </div>

         <div className='space-y-5 pt-5 px-5'>
         <div className='space-y-3 '>
             <h3>Login</h3>
           <div className='flex justify-center items-center bg-[#3b5998] py-4 rounded-lg text-white hover:cursor-pointer' >
            <div className='flex items-center gap-2'><FaFacebook className='text-2xl'></FaFacebook><span>Login with facebook</span></div>
           </div>
           <div className='flex justify-center items-center bg-[#55acee] py-4 rounded-lg text-white hover:cursor-pointer' onClick={loginWithGoogle}>
            <div className='flex items-center gap-2'><FaGoogle className='text-2xl'></FaGoogle><span>Login with Google</span></div>
           </div>
            </div>
            <h2 className='text-center'>Or</h2>
          <div className='flex items-center gap-5'>
          <button className= {form === 'login' ? activeButton : disableButton}  onClick={(e)=>changeForm(e,'login')}>Login</button>
          <button className= {form === 'signup' ? activeButton : disableButton}  onClick={(e)=>changeForm(e,'signup')}>Sign up</button>
          </div>
       {
        form === 'login'? <Login handleVisibility = {handleVisibility}></Login> : <Signup></Signup>
       }
         </div>
          </div>
        </div>
    );
}

export default AccountForms;
