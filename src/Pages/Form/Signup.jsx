import React from 'react';
import { Link } from 'react-router-dom';
import UserAuth from '../../Authentication/userAuth/userAuth';
import { updateProfile } from 'firebase/auth';
import auth from '../../Authentication/Firebase/Firebase.config';
import AxiosBase from '../../Axios/AxiosBase';

const Signup = () => {
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
 
    return (
        <div>
       <form action="" className='space-y-5' onSubmit={handleSignUp}>
                <div className='space-y-2'>
                <p>First Name * </p>
                <input type="text" name='firstName' className='w-full py-3 rounded-lg border-2' />
                </div>
                <div className='space-y-2'>
                <p>Last Name * </p>
                <input type="text" name='lastName' className='w-full py-3 rounded-lg border-2' />
                </div>
                <div className='space-y-2'>
                <p>Email Address * </p>
                <input type="text" name='email' className='w-full py-3 rounded-lg border-2' />
                </div>
                <div className='space-y-2'>
                <p>Password * </p>
                <input type="text" name='password' className='w-full py-3 rounded-lg border-2' />
                </div>
                <button  className='bg-[#ff385c] hover:bg-[#2e2c2c] text-white px-6  py-3 '>Sign up</button>
                <h1 className='text-end'>Don't have an account <Link className = 'text-blue-600'>Login?</Link></h1>
            </form>
        </div>
    );
}

export default Signup;
