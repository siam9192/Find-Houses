import React, { useEffect, useState } from 'react';
import UserAuth from '../../../Authentication/userAuth/userAuth';
import { GrMail } from 'react-icons/gr';
import { MdCall } from 'react-icons/md';
import { IoIosCamera } from "react-icons/io";
import axios from 'axios';
import AxiosBase from '../../../Axios/AxiosBase';
import { updateProfile } from 'firebase/auth';
import auth from '../../../Authentication/Firebase/Firebase.config';
const Profile = () => {
    const {user} = UserAuth();
    const [overlay,setOverlay] = useState(false);
    const [profilePhoto,setProfilePhoto] = useState(null);
    const [profile,setProfile] = useState(null)
    const handleOverlay = ()=>{
        setOverlay(!overlay);
    }
    const handleProfilePhoto = (e)=>{
     const file = e.target.files;
    const url = URL.createObjectURL(file[0]);
    setProfilePhoto([file[0],url])
    }
    useEffect(()=>{
        if(!user){
            return;
        }
        AxiosBase().get(`/user/profile?email=${user?.email}`)
        .then(res=>{
  setProfile(res.data)
        })
    },[user])
    

    const onSubmit = async(e)=>{
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value
        const address = form.address.value;
        const contact_email = form.contact_email.value;
        const contact_phone = form.contact_phone.value;
        const email = user?.email
        const contactInformation = {
            firstName,lastName,
             address,
            contact_email,contact_phone,contact_phone
        }
        const response = await axios.post('https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027',{image:profilePhoto[0]},{
            headers: {
            'content-type': 'multipart/form-data'
          },
        })
        const photoUrl = response.data.data.display_url;

        updateProfile(auth.currentUser,{
            displayName:`${firstName} ${lastName}`,
            photoURL:photoUrl

        })
        .then(res=>{
            axios.put('http://localhost:5000/api/v1/user/profile/update',{email,contactInformation})
            .then(res=>{
                if(res.data.modifiedCount > 0){
                    form.reset()
                }
            })
            
        })
      
    }
    return (
        <div className= 'font-pop'>
            <div className='bg-white shadow-lg p-5 space-y-5'>
                <h1 className='text-2xl text-black py-2 border-b-[1px] border-gray-300'>Profile Details</h1>
                <div className='py-6 flex gap-3'>
                  <div className='w-32 h-32 rounded-full relative ' onMouseEnter={handleOverlay} onMouseLeave={handleOverlay}><img src={profilePhoto?profilePhoto[1]: user?.photoURL ||'/images/1.jpg'} alt="" className='w-32 h-32 rounded-full' />
                  <div className={`bg-gray-700 ${overlay?'block':'hidden'} hover:cursor-pointer opacity-50  absolute top-0 left-0 w-full h-full z-10 rounded-full`}></div>
                  <input type="file"className={`bg-gray-700  hover:cursor-pointer opacity-0  absolute top-0 left-0 w-full h-full z-10 rounded-full`} onChange={handleProfilePhoto}/>
                  <div className='text-white text-xl absolute bottom-4 right-4 z-20 hover:cursor-pointer'>
                    <IoIosCamera></IoIosCamera>
                    </div>
                    </div>
                    <div className='pt-3 space-y-2'>
                        <h1 className='text-2xl text-black font-semibold'>{user?.displayName}</h1>
                        <h4>Role : Client</h4>
                    </div>
                </div>
                <div className='space-y-4 pt-3'>
                    <h2 className='text-xl text-black font-semibold'>Contact Information</h2>
                        <div className='flex items-center gap-3 '>
                            <GrMail className='text-[#ff385c]'></GrMail><h3>{profile?.contact_email}</h3>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <MdCall className='text-[#ff385c]'></MdCall><h3>{profile?.contact_phone}</h3>
                        </div>
                    </div>
                  <form action="" onSubmit={onSubmit}>
                  <div>
                        <h2 className='text-xl text-black font-semibold'>Update Profile Details</h2>
                        <div className='pt-4 space-y-4'>
                        <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>First Name</h3>
               <input type="text" name='firstName' defaultValue={profile?.firstName} placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>Last Name</h3>
               <input type="text" name='lastName' defaultValue={profile?.lastName} placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>Address</h3>
               <input type="text" name='address' defaultValue={profile?.address} placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>Contact Email</h3>
               <input type="email" name='contact_email' defaultValue={profile?.contact_email} placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold text-gray-700'>Contact Phone</h3>
               <input type="number"  name='contact_phone' defaultValue={profile?.contact_phone} placeholder='' className='w-full px-2 py-3 border-[1px] border-gray-600 text-black outline-none rounded-lg'/>
               </div>
                        </div>
                        
                    </div>
                   
               <button type='submit' className='px-6 py-2 bg-[#ff385c] text-white mt-5'>Update Profile</button>
                  </form>
            </div>
            
        </div>
    );
}

export default Profile;
