import React from 'react';
import UserAuth from '../../../Authentication/userAuth/userAuth';
import { GrMail } from 'react-icons/gr';
import { MdCall } from 'react-icons/md';
import { IoIosCamera } from "react-icons/io";
const Profile = () => {
    const {user} = UserAuth();

    return (
        <div className= 'font-pop'>
            <div className='bg-white shadow-lg p-5 space-y-5'>
                <h1 className='text-xl text-black py-2 border-b-[1px] border-gray-300'>Profile Details</h1>
                <div className='py-6 flex gap-3'>
                  <div className='w-32 h-32 rounded-full relative border-4 border-[#ff385c]'><img src={'/images/1.jpg'} alt="" className='w-32 h-32 rounded-full' />
                  <div className='text-white text-xl absolute bottom-4 right-4'>
                    <IoIosCamera></IoIosCamera>
                    </div></div>
                    <div className='pt-3 space-y-2'>
                        <h1 className='text-2xl text-black font-semibold'>{user.displayName}</h1>
                        <h4>Role : Client</h4>
                    </div>
                </div>
                <div className='space-y-4 pt-3'>
                    <h2 className='text-xl text-black font-semibold'>Contact Information</h2>
                        <div className='flex items-center gap-3 '>
                            <GrMail className='text-[#ff385c]'></GrMail><h3>agent@gmail.com</h3>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <MdCall className='text-[#ff385c]'></MdCall><h3>017466887</h3>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='text-xl text-black font-semibold'>Update Profile Details</h2>
                        <div className='pt-4 space-y-4'>
                        <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>Your Name</h3>
               <input type="text" name='name' defaultValue='Jack abx' placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>Address</h3>
               <input type="text" name='name' defaultValue='Jack abx' placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>Contact Email</h3>
               <input type="text" name='name' defaultValue='Jack abx' placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
                        </div>
                    </div>
                    <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>Contact Phone</h3>
               <input type="text" name='name' defaultValue='01786785784' placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
               <button className='px-6 py-2 bg-[#ff385c] text-white'>Update Profile</button>
            </div>
            
        </div>
    );
}

export default Profile;
