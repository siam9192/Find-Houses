import React from 'react';
import { Link } from 'react-router-dom';
import UserAuth from '../../Authentication/userAuth/userAuth';

const Login = ({handleVisibility}) => {
    const {login} = UserAuth();

    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(res =>{
         handleVisibility()
        })

    }
    
    return (
        <div>
            <form action="" className='space-y-5' onSubmit={handleLogin}>
                <div className='space-y-2'>
                <p>Username or Email Address * </p>
                <input type="text" name='email' className='w-full py-3 rounded-lg border-2' />
                </div>
                <div className='space-y-2'>
                <p>Password * </p>
                <input type="text" name='password' className='w-full py-3 rounded-lg border-2' />
                </div>
                <button type='submit' className='bg-[#ff385c] text-white px-6  py-3 '>Login</button>
                <h1 className='text-end'>Forget <Link className = 'text-blue-600'>Password?</Link></h1>
            </form>
            
            
        </div>
    );
}

export default Login;
