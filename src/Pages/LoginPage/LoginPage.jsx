import React from 'react';
import AxiosBase from '../../Axios/AxiosBase';
import UserAuth from '../../Authentication/userAuth/userAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const LoginPage = () => {
    const {login,googleLogin} = UserAuth();
    const {pathname,state} = useLocation();
    const navigate = useNavigate()
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
            document.getElementById('my_modal_3').showModal()
          const user = {
            email:res.user.email,
            firstName:res.user.displayName,
            lastName:'',
            profilePhoto:res.user.photoURL,
            role:'client'
        }
        AxiosBase().post('/user/login/google-facebook/new',user)
        .then(res =>{
            document.getElementById('my_modal_3').close()
            console.log(res.data)
            if(res.data.status){
                if(state){
                    navigate(state)
                     }
                     else{
                        navigate('/')
                     }
            }
        })
        
    })
     
       
    }
    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(res =>{
            if(state){
                navigate(state)
                 }
                 else{
                    navigate('/')
                 }
        })

    }
    return (
        <div className='flex justify-center items-center md:pt-20 p-10 font-pop'>
           <form action="" className='space-y-5 lg:w-1/3 md:w-1/2 w-full' onSubmit={handleLogin}>
           <div className='space-y-3 '>
             <h3 className='text-3xl text-black text-center'>Login to Continue</h3>
           <div className='flex justify-center items-center bg-[#3b5998] py-4 rounded-lg text-white hover:cursor-pointer' >
            <div className='flex items-center gap-2'><FaFacebook className='text-2xl'></FaFacebook><span>Login with facebook</span></div>
           </div>
           <div className='flex justify-center items-center bg-[#55acee] py-4 rounded-lg text-white hover:cursor-pointer' onClick={loginWithGoogle}>
            <div className='flex items-center gap-2'><FaGoogle className='text-2xl'></FaGoogle><span>Login with Google</span></div>
           </div>
            </div>
                <div className='space-y-2'>
                <p>Username or Email Address * </p>
                <input type="text" name='email' className='w-full px-2 py-3 rounded-lg border-2' />
                </div>
                <div className='space-y-2'>
                <p>Password * </p>
                <input type="text" name='password' className='w-full px-2 py-3 rounded-lg border-2' />
                </div>
                <button type='submit' className='bg-[#ff385c] text-white px-6  py-3 '>Login</button>
                <h1 className='text-end'>Don't have an account? <Link className = 'text-blue-600' to='/signup'> Signup</Link></h1>
            </form>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      
    </form>
   <div className='flex flex-col justify-center items-center py-14'>
   <span className="loading loading-spinner loading-lg text-center  text-info"></span>
   <p className='text-black mt-5 '>Just a moment please..</p>
   </div>
  </div>
</dialog>
        </div>
    );
}

export default LoginPage;
