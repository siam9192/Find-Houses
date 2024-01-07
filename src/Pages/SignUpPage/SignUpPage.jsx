import React from 'react';
import AxiosBase from '../../Axios/AxiosBase';
import UserAuth from '../../Authentication/userAuth/userAuth';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const SignUpPage = () => {
    const {createUser,googleLogin} = UserAuth();
    const handleSignUp = (e)=>{
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            firstName,
            lastName,
            email,
            profilePhoto:'',
            role:'client'
        }

        createUser(email,password)
        .then(res =>{
         updateProfile(auth.currentUser,{
         displayName:`${firstName} ${lastName}`
         })
         AxiosBase().post('/user/new',user)
         form.reset()
        })
    
    }
    const loginWithGoogle = () =>{
        googleLogin()
        .then(res =>{
        
          const user = {
            email:res.user.email,
            profilePhoto:'',
            role:'client'
        }})
    }
    return (
        <div className='flex justify-center items-center md:pt-5 font-pop'>
            <form action="" className='space-y-5 lg:w-1/3 md:w-1/2 w-full border- p-5 border-gray-600' onSubmit={handleSignUp}>
            <div className='space-y-3 '>
             <h3 className='text-3xl text-black text-center'>Sign up</h3>
           <div className='flex justify-center items-center bg-[#3b5998] py-4 rounded-lg text-white hover:cursor-pointer' >
            <div className='flex items-center gap-2'><FaFacebook className='text-2xl'></FaFacebook><span>Login with facebook</span></div>
           </div>
           <div className='flex justify-center items-center bg-[#55acee] py-4 rounded-lg text-white hover:cursor-pointer' onClick={loginWithGoogle}>
            <div className='flex items-center gap-2'><FaGoogle className='text-2xl'></FaGoogle><span>Login with Google</span></div>
           </div>
            </div>
            <h2 className='text-center'>Or</h2>
                <div className='space-y-2'>
                <p>First Name * </p>
                <input type="text" name='firstName' className='w-full px-2 py-3 rounded-lg border-2' />
                </div>
                <div className='space-y-2'>
                <p>Last Name * </p>
                <input type="text" name='lastName' className='w-full px-2 py-3 rounded-lg border-2' />
                </div>
                <div className='space-y-2'>
                <p>Email Address * </p>
                <input type="text" name='email' className='w-full px-2 py-3 rounded-lg border-2' />
                </div>
                <div className='space-y-2'>
                <p>Password * </p>
                <input type="text" name='password' className='w-full px-2 py-3 rounded-lg border-2' />
                </div>
                <button  className='bg-[#ff385c] hover:bg-[#2e2c2c] text-white px-6  py-3 '>Sign up</button>
                <h1 className='text-end'>Already have an account? <Link to='/login' className = 'text-blue-600'>Login</Link></h1>
            </form>
        </div>
    );
}

export default SignUpPage;
