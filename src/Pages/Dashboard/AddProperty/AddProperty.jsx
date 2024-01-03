import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import UserAuth from '../../../Authentication/userAuth/userAuth';
const AddProperty = () => {
    const [features,setFeatures] = useState([]);
    const [images,setImages] = useState([]);
    const [imagesUrl,setImagesUrl] = useState([])
    const [previewImages,setPreviewImages] = useState([]);
    const [rooms,setRooms] = useState(null);
    const [bathRooms,setBathRooms] = useState(null);
    const [type,setType] = useState(null)
    const [status,setStatus] = useState(null)
    const [statusMenu,setStatusMenu] = useState(false);
    const [typeMenu,setTypeMenu] = useState(false);
    const [roomsMenu,setRoomsMenu] = useState(false);
    const [bathRoomsMenu,setBathRoomsMenu] = useState(false);
    const [draginMedia,setDragingMedia] = useState(false);
    const statusArray = ['Rent','Sale'];
    const typeArray = ['house','commercial','apartment','lot','garage'];
    const allRooms = [1,2,3,4,5,6,7];
    const featuresValue = ["Air Conditioning", "Swimming Pool", "Central Heating", "Laundry Room","Gym","Alarm","Window Covering","Refrigerator","TV Cable & WIFI","Microwave"
    ]
 const {user} = UserAuth();


    const getValue = (e,name)=>{
        const value = new FormData(e.currentTarget)
        return value[name];
    }
    const handleRoomsMenu = ()=>{
        setTypeMenu(false)
        setStatusMenu(false)
        setBathRoomsMenu(false)
        setRoomsMenu(!roomsMenu)
    }
    const handleBathRoomsMenu = ()=>{
        setTypeMenu(false)
        setStatusMenu(false)
        setRoomsMenu(false)
        setBathRoomsMenu(!bathRoomsMenu);
    }
    const handleRooms = (room)=> {
        setRooms(room)
    }
    const handleBathRooms = (room) =>{
        setBathRooms(room)
    }
    const handleStatusMenu = ()=>{
        setBathRoomsMenu(false)
        setRoomsMenu(false)
        setTypeMenu(false)
        setStatusMenu(!statusMenu)
    }
    const handleStatus = (status)=>{
        setStatus(status)
    }
    const handleTypeMenu = ()=>{
        setBathRoomsMenu(false)
        setRoomsMenu(false)
        setStatusMenu(false)
    setTypeMenu(!typeMenu)
    }
  
    const handleType = (type) =>{
        setType(type)
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const form = e.target;
        const today = new Date()
        const title = form.title.value;
        const description = form.description.value;
        const price = parseInt(form.price.value);
        const area = parseInt(form.area.value);
        const age = parseInt(form.age.value)
        const location = {
            address: form.address.value,
            city:  form.city.value,
            state:  form.state.value,
            country:  form.country.value,
            latitude:  form.latitude.value,
            longitude:  form.longitude.value,
        }

    const contact = {
    name:form.name.value,
    contact_email:form.email.value,
    contact_phone:form.phoneNumber.value
    }
 
    const property = {
        email:user.email,
        title,
        description,
        photos:[...imagesUrl],
        details:{
            price,
            area,
         status,
         type,
        extraInformation :{
            age,rooms,bathRooms
        },
        features
        },
        date:{
         day:today.getDay(),
         month:today.getMonth(),
         year:today.getFullYear()
        },
        contact,
        location,
        approved: false,
        agentInformation:{
            name: null,
            image: null,
            email: null,
            phone: null
            
        }
    }
    axios.post('http://localhost:5000/api/v1/property/post',property)
    .then(res =>{
        console.log(res.data)
    })
}
    
    const handleFeatures = (e)=>{
        if(e.target.checked){
        setFeatures([...features,e.target.value]);
        }
        else{
            const arr = [1,2,3]
            const index = features.indexOf(e.target.value);
            const temp = [...features]
          
            temp.splice(index,1)
           setFeatures(temp)
            
        }
    }
    const handleDragOver = (e)=>{
        e.preventDefault()
    // setDragingMedia(true);
    }

    
   
   const handleDrop = (e)=>{
    if(!e.target.files){
        return;
    }
    setDragingMedia(false)
    setImages([...images,e.target.files[0]])
    
   }
   const handleChange = async(e)=>{
    const imgUrl = URL.createObjectURL(e.target.files[0])
    if(images.length < 6){
    
    setPreviewImages([...previewImages,imgUrl])
   setImages([...images,...e.target.files])
   const response = await axios.post('https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027',{image:e.target.files[0]},{
    headers: {
    'content-type': 'multipart/form-data'
  },
}

);
setImagesUrl([...imagesUrl,response.data.data.display_url])
    }
    
}

const removeImage = (index)=>{
    const temp = images;
    const temp2 = imagesUrl
    temp.splice(index,1)
    temp2.splice(index,1)
    setImages([...temp])
    setImagesUrl([...temp2])
}



    return (
        <form className='space-y-10' onSubmit={handleSubmit}>
        <div className=' bg-white  font-pop p-5'>
        <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Property description and price </h1>
            <div className='pt-5 space-y-4'>
               <div className='space-y-2'>
                <h3 className='font-semibold text-black'>Property Title</h3>
               <input type="text" name='title' placeholder='Enter your property title' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               <div className='space-y-2'>
                <h3 className='font-semibold text-black'>Property Description</h3>
               <textarea type="text" name='description' placeholder='Describe about your property' className='w-full p-2  border-[1px] outline-none min-h-[250px] rounded-lg'> </textarea>
               </div>
               <div className='flex justify-between items-center gap-3'>
               <div className='w-full relative' onClick={handleStatusMenu}>
              <div className='p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>{status? status : 'Status'} </h3> </div>
              <div className={`bg-white w-full absolute  left-2   shadow-xl rounded-lg border-[1px] ${statusMenu ? 'opacity-100' : 'opacity-0'} ${statusMenu ? 'block' : 'hidden'} duration-500`}>
               {
                statusArray.map((status,index) =>{
                    return <div className='w-full  py-3 px-6 text-black hover:bg-blue-600 hover:text-white hover:cursor-pointer ' key={index} onClick={()=>{handleStatus(status)}}>
                    {
                        status
                    }
                    </div>
                })
               }
              </div>
              </div>
                <div className='w-full relative' onClick={handleTypeMenu}>
              <div className='p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>{type? type : 'Type'}</h3> </div>
              <div className={`bg-white w-full absolute  left-2   shadow-xl rounded-lg border-[1px] ${typeMenu ? 'opacity-100' : 'opacity-0'} ${typeMenu ? 'block' : 'hidden'} duration-500`}>
               {
                typeArray.map((type,index) =>{
                    return <div className='w-full  py-3 px-6 text-black hover:bg-blue-600 hover:text-white hover:cursor-pointer ' key={index} onClick={()=>{handleType(type)}}>
                    {
                        type
                    }
                    </div>
                })
               }
              </div>
              </div>
               </div>
               <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Price</h3>
               <input type="text" name='price' placeholder='USD' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Area</h3>
               <input type="text" name='area' placeholder='Squre' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
            </div>
        </div>
        <div className=' bg-white  font-pop p-5 relative'>
        <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Property Media </h1>
        <div className='p-20  relative'>
            <div className='w-full border-2 border-[#1abc9c] border-dashed flex flex-col justify-center items-center gap-5 h-52'>
               <IoMdCloudUpload className='text-7xl text-[#1abc9c]'></IoMdCloudUpload>
               <p className='text-[#1abc9c]'>Click here or drop files to upload</p>
               <input type="file" multiple  className='w-full h-full opacity-0 hover:cursor-pointer absolute' onDragOver={handleDragOver} onChange={handleChange} />
               <div className={`w-full h-full flex justify-center items-center bg-slate-950 ${draginMedia ? 'block' : 'hidden'} absolute z-10`}>
                <h1 className='text-white text-4xl '>Drop Now</h1>
               </div>
            </div>
        </div>
        <div className='flex flex-wrap items-center gap-3 overflow-y-auto'>
                {
                    images.map((item,index)=>{
                    return <div className='px-8 py-3 text-black bg-gray-200 rounded-full hover:cursor-pointer relative' key={index}>{item.name} <div className='absolute top-2 right-2 text-black text-xl' onClick={()=> removeImage(index)}><RxCross2></RxCross2></div></div>
                    })
                }
            </div>
            </div>
            <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Property Location </h1>
            <div className='pt-5 px-10 space-y-4'>
            <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Address</h3>
               <input type="text" name='address' placeholder='Enter Your Address' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>City</h3>
               <input type="text" name='city' placeholder='Enter Your City' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
               <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>State</h3>
               <input type="text" name='state' placeholder='Enter Your State' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Country</h3>
               <input type="text" name='country' placeholder='Enter Your Country' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
               <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Google Maps latitude</h3>
               <input type="text"name='latitude' placeholder='Google Maps latitude' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Google Maps longitude</h3>
               <input type="text" name='longitude' placeholder='Google Maps longitude' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
                </div>
                </div>
                <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Extra information</h1>
            <div className='py-10 px-10 space-y-4'>
            <div className='flex justify-between items-center gap-3'>
            <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>age</h3>
               <input type="number" name='age' placeholder='Age' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
            
              <div className='w-full relative' onClick={handleRoomsMenu}>
              <div className='p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>{rooms? rooms : 'Select'} Rooms</h3> </div>
              <div className={`bg-white w-full absolute  left-2   shadow-xl rounded-lg border-[1px] ${roomsMenu ? 'opacity-100' : 'opacity-0'} ${roomsMenu ? 'block' : 'hidden'} duration-500`}>
               {
                allRooms.map((room,index) =>{
                    return <div className='w-full  py-3 px-6 text-black hover:bg-blue-600 hover:text-white hover:cursor-pointer ' key={index} onClick={()=>{handleRooms(room)}}>
                    {
                        room
                    }
                    </div>
                })
               }
              </div>
              </div>
              <div>
            
              </div>
              <div className='w-full relative' onClick={handleBathRoomsMenu}>
              <div className='w-full p-3 border-[1px] flex justify-between items-center rounded-lg'><MdKeyboardArrowDown className='text-xl'></MdKeyboardArrowDown> <h3>{bathRooms ? bathRooms : 'Select'} Bathrooms</h3> </div>
              <div className={`bg-white w-full absolute  left-2   shadow-xl rounded-lg border-[1px] ${bathRoomsMenu ? 'opacity-100' : 'opacity-0'} ${bathRoomsMenu ? 'block' : 'hidden'} duration-500`} >
               {
                allRooms.map((room,index) =>{
                    return <div className={` w-full  px-6 py-3 text-black hover:bg-blue-600 hover:text-white hover:cursor-pointer `} key={index} onClick={()=> setBathRooms(room)}>
                    {
                        room
                    }
                    </div>
                })
               }
              </div>
              </div>
               </div>
                </div>
                </div>
                <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Property Features</h1>
            <div className='py-10 px-10 space-y-4'>
                <div className='flex flex-wrap gap-5 items-center'>
                    {
                        featuresValue.map((feature,index)=>{
                    return    <div className='flex gap-2 items-center' key={index} onChange={handleFeatures}>
                    <input type="checkbox" value={feature} name="" id="" className='form-checkbox h-5 w-5 accent-[#ff385c]' /> <h3>{feature}</h3>
                    </div>
                        })
                    }
              
                </div>
                </div>
                </div>
                {/* contact form */}
                <div className=' bg-white  font-pop p-5'>
            <h1 className='text-2xl text-[#ff385c] pb-5 border-b-[1px]'>Contact Information</h1>
            <div className='py-10 px-10 space-y-4'>
            <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Name</h3>
               <input name='name' type="text" placeholder='Enter Your Name' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               </div>
               <div className='flex gap-5'>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Email</h3>
               <input type="text" name='email' placeholder='Enter Contact Email' className='w-full px-2 py-3 border-[1px]  outline-none rounded-lg'/>
               </div>
               <div className='space-y-2 w-full'>
                <h3 className='font-semibold '>Phone</h3>
               <input type="text" name='phoneNumber' placeholder='Enter Contact Phone Number' className='w-full px-2 py-3 border-[1px] outline-none rounded-lg'/>
               </div>
               </div>
                </div>
                <button type='submit' className='px-6 py-3 bg-[#ff235c] text-white rounded-lg'>Submit Property</button>
                </div>
                </form>
        
    );
}

export default AddProperty;
