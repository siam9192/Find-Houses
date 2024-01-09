import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AxiosBase from '../../../Axios/AxiosBase';
import { FaUsers } from 'react-icons/fa';
import { SlOptions } from "react-icons/sl";
const Users = () => {
    const [optionsIndex,setOptionsIndex] = useState(null);
    const [searchEmail,setSearchEmail] = useState('');
    const {data:users=[],isLoading,refetch} = useQuery({
        queryKey:['all-users'],
        queryFn:async()=>{
        const response = await AxiosBase().get(`/users?searchEmail=${searchEmail}`);
        return response.data
        }
    })
  
    const changeRole = (email,role) =>{
        AxiosBase().patch('/user/update/role',{email,role})
        .then(res =>{
            if(res.data.modifiedCount > 0){
                refetch()
            }
        })
    }
    const handleOptions = (index)=>{
      if(index === optionsIndex){
        setOptionsIndex(null)
        return
      }
      setOptionsIndex(index)

    }
  
 

    return (
        <div className='font-pop'>
       <div className='lg:flex  justify-between items-center space-y-4'>
       <div className='flex items-center gap-2'><FaUsers className='text-[#ff385c] text-3xl'></FaUsers>  <h1 className='text-3xl text-black'>Users</h1></div>
       <div>
        <input type="text" placeholder='Search by email....' className='input input-primary' onChange={(e)=>{setSearchEmail(e.target.value)
           refetch()}}/>
       </div>
       </div>
       <div className='grid md:grid-cols-2 gap-5 py-5'>
       {
        users.map((item,index)=>{
          return <div className='bg-white p-5 shadow-lg rounded-md space-y-2 relative' key={index}>
          <div className='flex items-center gap-4'>
          <div className='relative'>
          <img src={item.profilePhoto || 'https://i.ibb.co/TH1W6TG/default-Pic.png' } alt="" className='w-20 h-20 rounded-full' />
          <div className={`absolute ${item.role==='client' && 'hidden'} bottom-1 -right-2 p-1 bg-black rounded-full`}>
            <img src={item.role==='admin'?"/images/adminBadge.png":"/images/agentBadge.png"} alt=""  className='w-5 h-5'/>
          </div>
          </div>
            <div>
              <h1 className='text-xl text-black'>{item.firstName + " " + item.lastName}</h1>
              <p>{item.professions||'Businessmen'}</p>
            </div>
          </div>
          <div className='flex flex-wrap justify-between'>
          <p>{item.email}</p>  <p className='text-black'>Joined:10 Jan 2024 </p>
          </div>
          <div className='p-4 bg-gray-300 rounded-full absolute top-2 right-2' onClick={()=>handleOptions(index)}>
        <SlOptions className={`${index === optionsIndex ? 'rotate-90' : 'rotate-0'} duration-200`}></SlOptions>
          </div>
          <div className={`option-menu min-w-[150px] p-5 space-y-4 flex flex-col absolute top-14 md:-right-10  -right-2 bg-white rounded-md  text-gray-800 text-start shadow-md  z-50 list-none ${optionsIndex===index ? 'block' : 'hidden'} transition ease-out delay-300`} >
         { item.role !== 'agent' && <li className='text-green-600 hover:cursor-pointer hover:text-blue-600' onClick={()=>changeRole(item.email,'agent')}>Set as agent</li>}
         { item.role === 'agent' && <li className='text-red-600 hover:cursor-pointer hover:text-blue-600' onClick={()=>changeRole(item.email,'client')}>Set as client</li>}
          <li className='hover:cursor-pointer hover:text-blue-600'>Visit Profile</li>
          <li className='hover:cursor-pointer hover:text-blue-600'>Ban user</li>
          </div>
          </div>
        })
       }
       </div>
        </div>
    );
}

export default Users;
