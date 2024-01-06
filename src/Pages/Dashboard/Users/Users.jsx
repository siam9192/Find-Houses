import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AxiosBase from '../../../Axios/AxiosBase';

const Users = () => {
    // const [users,setUsers] = useState([]);
    const {data:users=[],isLoading,refetch} = useQuery({
        queryKey:['all-users'],
        queryFn:async()=>{
        const response = await AxiosBase().get('/users');
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
   
    return (
        <div>
     <div className=' bg-white shadow-lg font-pop p-5'>
            <div className='pt-5'>
                <div className='py-2'><input type="text" placeholder='Search users by email' name="" id="" className='lg:w-1/3 w-full p-2 rounded-lg border-[2px] border-black ' /></div>
            <div className="overflow-x-auto max-w-[1100px]">
  <table className="table min-h-[500px]">
    {/* head */}
    <thead className='text-gray-700 text-xl font-normal  bg-[#f5f7fb] p-2'>
      <tr className=''>
        <th className='text-black font-normal'>Photo</th>
        <th className='text-black font-normal text-[1rem]'>Name</th>
        <th  className='text-black font-normal text-[1rem]'>Email</th>
        <th  className='text-black font-normal text-[1rem]'>Role</th>
        <th  className='text-black font-normal text-[1rem]'>Edit</th>
        <th  className='text-black font-normal text-[1rem]'>Action</th>
       
      </tr>
    </thead>
    <tbody className='max-h-[250px] overflow-y-auto'>
      {
    users.map((user,index)=>{
   return   <tr>
   <td><img src="/images/1.jpg" alt="" className='w-20 h-20 rounded-full' /></td>
   <td>{user.firstName + ' ' + user.lastName}</td>
   <td>{user.email}</td>
   <td>{user.role}</td>
   <td>{user.role === 'client'?<button className='px-4 py-2 bg-primary text-white shadow-lg rounded-full hover:bg-pink-500' onClick={()=>changeRole(user.email,'agent')}>Make Agent</button> : <button className='px-4 py-2 bg-primary text-white shadow-lg rounded-full hover:bg-pink-500'onClick={()=>changeRole(user.email,'client')}>Make Client</button>}</td>
   <td><button className='px-4 py-2 bg-black text-white shadow-lg rounded-full hover:bg-red-500'>Remove</button></td>
   <td >
  

   </td>
 </tr>
        })
    
}
    </tbody>
  </table>

  {/* <div className='flex items-center gap-3 px-5'>
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md' onClick={prevPage}>Previous</button>
    {
        pages.map((page,index)=>{
            return <button className={`px-4 py-2 ${currentPage === page ? 'bg-black text-white' : ''} hover:bg-[#ff385c] border-2 border-[#ff385c] text-black hover:text-white rounded-md`} onClick={()=>handleCurrentPage(page)} key={index}>{page}</button>
        })
    }
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md' onClick={nextPage}>Next</button>
  </div> */}
</div>
            </div>
            </div>
        </div>
    );
}

export default Users;
