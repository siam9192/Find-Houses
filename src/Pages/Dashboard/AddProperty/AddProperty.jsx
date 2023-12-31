import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
const AddProperty = () => {
    const [features,setFeatures] = useState([]);
    const [images,setImages] = useState([]);
    const [extraInformation,setExtraInformation] = useState ({age:null,type:null,rooms:null})
    const getValue = (e,name)=>{
        return e.target[name].value;
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const title = getValue(e,'title');
        const description = getValue(e,'description')
        const photos = [...images];
        const location = {
            address: getValue(e,'address'),
            city: getValue(e,'city'),
            state: getValue(e,'state'),
            country: getValue(e,'country'),
            latitude: getValue(e,'latitude'),
            longitude: getValue(e,'longitude')
        }


    }
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
            <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Property Location </h1>
            <div className='pt-5 px-10 space-y-4'>
            <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Address</h3>
               <input type="text" placeholder='Enter Your Address' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>City</h3>
               <input type="text" placeholder='Enter Your City' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
               <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>State</h3>
               <input type="text" placeholder='Enter Your State' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Country</h3>
               <input type="text" placeholder='Enter Your Country' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
               <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Google Maps latitude</h3>
               <input type="text" placeholder='Google Maps latitude' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Google Maps longitude</h3>
               <input type="text" placeholder='Squre' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
                </div>
                </div>
                <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Extra information</h1>
            <div className='py-10 px-10 space-y-4'>
            <div className='flex justify-between items-center gap-3'>
                <div className='w-full p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>Select Age</h3> </div>
                <div className='w-full p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>Select Rooms</h3> </div>
                <div className='w-full p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>Select Bathrooms</h3> </div>
               </div>
                </div>
                </div>
                <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Property Features</h1>
            <div className='py-10 px-10 space-y-4'>
                <div className='flex flex-wrap gap-5 items-center'>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>Air Conditioning</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>Swimming Pool</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>Central Heating</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" value='Laundry Room' name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>Laundry Room</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" value='Gym' name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>Gym</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" value='Alarm' name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>Alarm</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" value='Window Covering' name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>Window Covering</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" value='Refrigerator' name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>Refrigerator
</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" value='TV Cable & WIFI' name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>TV Cable & WIFI
</h3>
               </div>
               <div className='flex gap-2 items-center'>
               <input type="checkbox" value='Microwave' name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>   Microwave
</h3>
               </div>
            
                </div>
                </div>
                </div>
                <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Contact Information</h1>
            <div className='py-10 px-10 space-y-4'>
            <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Name</h3>
               <input type="text" placeholder='Enter Your Name' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               </div>
               <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Email</h3>
               <input type="text" placeholder='Enter Contact Email' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Phone</h3>
               <input type="text" placeholder='Enter Contact Phone Number' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
                </div>
                <button className='px-6 py-3 bg-[#ff235c] text-white rounded-lg'>Submit Property</button>
                </div>
                </div>
        
    );
}

export default AddProperty;
