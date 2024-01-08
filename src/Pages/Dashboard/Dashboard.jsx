import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Reuse/Navbar/Navbar';
import { FaList,FaStar} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Rating from 'react-rating';
import { TiStarFullOutline,TiStarOutline } from "react-icons/ti";
import AxiosBase from '../../Axios/AxiosBase';
import UserAuth from '../../Authentication/userAuth/userAuth';

const Dashboard = () => {
    const {user} = UserAuth();
    const [userRole,setUserRole]= useState(null);
    useEffect(()=>{
        AxiosBase().get(`/user/check-role?email=${user.email}`)
        .then(res =>{
          setUserRole(res.data)
        })
    },[])
    useEffect(()=>{
        if(userRole){
            AxiosBase().get(`/dashboard/data?email=${user.email}`)
            .then(res=>{
                console.log(res.data)
            })
        }
    })
    return (
        <div className='w-full space-y-10'>
         
                {/* section 1  */}
         <div className=' bg-white shadow-lg font-pop p-5'>
         <h1 className='text-black text-2xl'>Manage Dashboard</h1>
         <div className='grid md:grid-cols-2 gap-5 text-white pt-10'>
            <div className='bg-[#1ec38b] flex gap-3 p-10 rounded-lg'>
            <div className='border-r-2 pr-6'>
            <FaList className='md:text-5xl text-3xl'></FaList>
            </div>
            <div>
                <h1 className='md:text-4xl text-3xl'>345</h1>
                <p>Published Property</p>
            </div>
            </div>
            <div className='bg-[#ff9911] flex gap-3 p-10 rounded-lg'>
            <div className='border-r-2 pr-6'>
            <FaStar className='md:text-5xl text-3xl'></FaStar>
            </div>
            <div>
                <h1 className='md:text-4xl text-3xl'>116</h1>
                <p>Total Reviews</p>
            </div>
            </div>
            <div className='bg-[#66aaee] flex gap-3 p-10 rounded-lg'>
            <div className='border-r-2 pr-6'>
            <AiFillMessage className='md:text-5xl text-3xl'></AiFillMessage>
            </div>
            <div>
                <h1 className='md:text-4xl text-3xl'>432</h1>
                <p>Total Message</p>
            </div>
            </div>
            <div className='bg-[#f91942] flex gap-3 p-10 rounded-lg'>
            <div className='border-r-2 pr-6'>
            <FaHeart className='md:text-5xl text-3xl'></FaHeart>
            </div>
            <div>
                <h1 className='md:text-4xl text-3xl'>223</h1>
                <p>Total Bookmarked</p>
            </div>
            </div>
          </div>
         </div>
         {/* section 2 Listing */}
         <div className=' bg-white shadow-xl font-pop p-5'>
            <h1 className='text-black text-2xl '>Listing</h1>
            <div className='pt-10'>
            <div className="overflow-x-auto">
  <table className="table text-xl  ">
    {/* head */}
    <thead className='text-black text-xl'>
      <tr>
        <th>Listing Name</th>
        <th>Date</th>
        <th>Ratting</th>
        <th>Status</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody className='max-h-[250px] overflow-y-auto'>
      {/* row 1 */}
      <tr className="hover:bg-base-200">
        <td>Luxury Restaurant</td>
        <td>23 Jan 2020</td>
        <td>5.0</td>
        <td>Active</td>
        <td><MdOutlineModeEdit className='text-[#ff385c]'></MdOutlineModeEdit></td>
      </tr>
      <tr className="hover:bg-base-200">
        <td>Luxury Restaurant</td>
        <td>23 Jan 2020</td>
        <td>5.0</td>
        <td>Active</td>
        <td><MdOutlineModeEdit className='text-[#ff385c]'></MdOutlineModeEdit></td>
      </tr>
   
      <tr className="hover:bg-base-200">
        <td>Luxury Restaurant</td>
        <td>23 Jan 2020</td>
        <td>5.0</td>
        <td>Active</td>
        <td><MdOutlineModeEdit className='text-[#ff385c]'></MdOutlineModeEdit></td>
      </tr>
   
    </tbody>
  </table>
</div>
            </div>
            </div>
             {/* section 3 Message */}
         <div className=' bg-white shadow-xl font-pop p-5'>
         <h1 className='text-black text-2xl '>Message</h1>
            <div className='pt-10 space-y-4'>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-3'>
                    <img src="/images/agents/1.jpg" alt=""  className='w-20 h-20 rounded-full'/>
                    <div className='space-y-2'>
                        <h2 className='text-xl text-black'>Marry Smith</h2>
                        <h2>22 Minutes ago</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aut sed quaerat repellat quos aliquid at repudiandae placeat iste cum.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-600 text-xl'>
                    <IoEyeOutline></IoEyeOutline> <MdDelete></MdDelete>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-3'>
                    <img src="/images/agents/1.jpg" alt=""  className='w-20 h-20 rounded-full'/>
                    <div className='space-y-2'>
                        <h2 className='text-xl text-black'>Marry Smith</h2>
                        <h2>22 Minutes ago</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aut sed quaerat repellat quos aliquid at repudiandae placeat iste cum.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-600 text-xl'>
                    <IoEyeOutline></IoEyeOutline> <MdDelete></MdDelete>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-3'>
                    <img src="/images/agents/1.jpg" alt=""  className='w-20 h-20 rounded-full'/>
                    <div className='space-y-2'>
                        <h2 className='text-xl text-black'>Marry Smith</h2>
                        <h2>22 Minutes ago</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aut sed quaerat repellat quos aliquid at repudiandae placeat iste cum.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-600 text-xl'>
                    <IoEyeOutline></IoEyeOutline> <MdDelete></MdDelete>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-3'>
                    <img src="/images/agents/1.jpg" alt=""  className='w-20 h-20 rounded-full'/>
                    <div className='space-y-2'>
                        <h2 className='text-xl text-black'>Marry Smith</h2>
                        <h2>22 Minutes ago</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aut sed quaerat repellat quos aliquid at repudiandae placeat iste cum.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-600 text-xl'>
                    <IoEyeOutline></IoEyeOutline> <MdDelete></MdDelete>
                </div>
            </div>
                </div>
         </div>
            {/* section 4 Review */}
            <div className=' bg-white shadow-xl font-pop py-5 pl-5 pr-32'>
         <h1 className='text-black text-2xl '>Review</h1>
            <div className='pt-10 space-y-4'>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-3'>
                    <img src="/images/agents/1.jpg" alt=""  className='w-20 h-20 rounded-full'/>
                    <div className='space-y-2'>
                        <h2 className='text-xl text-black'>Marry Smith</h2>
                        <h2>22 Minutes ago</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aut sed quaerat repellat quos aliquid at repudiandae placeat iste cum.</p>
                        <Rating initialRating={4} 
             emptySymbol={<TiStarOutline className='text-[#ff385c]'/>}
             fullSymbol={<TiStarFullOutline className='text-[#ff385c]'/>}
                        readonly
                    
/>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-600 text-xl'>
                    <IoEyeOutline className='hover:text-[#ff385c] hover:cursor-pointer'></IoEyeOutline> <MdDelete className='hover:text-[#ff385c] hover:cursor-pointer'></MdDelete>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-3'>
                    <img src="/images/agents/1.jpg" alt=""  className='w-20 h-20 rounded-full'/>
                    <div className='space-y-2'>
                        <h2 className='text-xl text-black'>Marry Smith</h2>
                        <h2>22 Minutes ago</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aut sed quaerat repellat quos aliquid at repudiandae placeat iste cum.</p>
                        <Rating initialRating={4} 
             emptySymbol={<TiStarOutline className='text-[#ff385c]'/>}
             fullSymbol={<TiStarFullOutline className='text-[#ff385c]'/>}
                        readonly
                    
/>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-600 text-xl'>
                    <IoEyeOutline className='hover:text-[#ff385c] hover:cursor-pointer'></IoEyeOutline> <MdDelete className='hover:text-[#ff385c] hover:cursor-pointer'></MdDelete>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-3'>
                    <img src="/images/agents/1.jpg" alt=""  className='w-20 h-20 rounded-full'/>
                    <div className='space-y-2'>
                        <h2 className='text-xl text-black'>Marry Smith</h2>
                        <h2>22 Minutes ago</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aut sed quaerat repellat quos aliquid at repudiandae placeat iste cum.</p>
                        <Rating initialRating={4} 
             emptySymbol={<TiStarOutline className='text-[#ff385c]'/>}
             fullSymbol={<TiStarFullOutline className='text-[#ff385c]'/>}
                        readonly
                    
/>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-600 text-xl'>
                    <IoEyeOutline className='hover:text-[#ff385c] hover:cursor-pointer'></IoEyeOutline> <MdDelete className='hover:text-[#ff385c] hover:cursor-pointer'></MdDelete>
                </div>
            </div>
                </div>
         </div>
        </div>
    );
}

export default Dashboard;
