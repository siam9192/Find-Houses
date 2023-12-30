import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
const AddProperty = () => {
    return (
        <div className='space-y-10'>
        <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Property description and price </h1>
            <div className='pt-5 space-y-4'>
               <div className='space-y-2'>
                <h3 className='font-semibold text-black'>Property Title</h3>
               <input type="text" placeholder='Enter your property title' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               <div className='space-y-2'>
                <h3 className='font-semibold text-black'>Property Description</h3>
               <textarea type="text" placeholder='Describe about your property' className='w-full p-2  border-[1px] outline-none min-h-[250px] rounded-lg'> </textarea>
               </div>
               <div className='flex justify-between items-center gap-3'>
                <div className='w-full p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>Select Status</h3> </div>
                <div className='w-full p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>Select Type</h3> </div>
                <div className='w-full p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>Select Rooms</h3> </div>
               </div>
               <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Price</h3>
               <input type="text" placeholder='USD' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Area</h3>
               <input type="text" placeholder='Squre' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
            </div>
        </div>
        <div className=' bg-white  font-pop p-5'>
        <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Property Media </h1>
        <div className='p-20'>
            <div className='w-full border-2 border-[#1abc9c] border-dashed flex flex-col justify-center items-center gap-5 h-52'>
               <IoMdCloudUpload className='text-7xl text-[#1abc9c]'></IoMdCloudUpload>
               <p className='text-[#1abc9c]'>Click here or drop files to upload</p>
            </div>
        </div>
            </div>
        </div>
    );
}

export default AddProperty;
