import React, { useState } from 'react';
import './Banner.css'
import Container from '../Reuse/Container/Container';
import { useNavigate } from 'react-router-dom';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
const Banner = () => {
    const [propertyStatus,setPropertyStatus] = useState('Rent');
    const navigate = useNavigate();
    const locationValues = ["Los Angeles","Chicago","San Francisco","Miami","Houseton"];
    const search = (e)=>{
        e.preventDefault();
        const form = e.target;
        const keyword = form.keyword.value;
        const location = form.location.value;
        const propertyType = form.propertyType.value;
        navigate(`/properties?key=${keyword}&location=${location}&status=${propertyStatus}&bedrooms=${null}&bathrooms=${null} `)
       
    }
    const [text,Cursor] = useTypewriter({
        words:['Property','House','Apartment','Plaza'],
        loop:{},
        cursor:true
    })
   
         
    const handlePropertyStatus = (status)=>{
        setPropertyStatus(status)
    }
    return (
        <div className='banner min-h-[95vh]'>
            <Container>
                <div className='pt-52 text-center space-y-5 font-pop lg:px-0 px-2'>
                    <h1 className='lg:text-6xl text-4xl text-white font-lato'>Find Your Dream  <Typewriter words={['Property','House','Apartment','Plaza']} loop = {true} cursor = {true} cursorColor='#ff385c'></Typewriter> </h1>
                    <p className='text-xl text-white font-lato'>We have a million Property for you</p>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div className='flex items-center gap-4 text-white font-semibold'>
                           <div className='relative' onClick={()=>handlePropertyStatus('Rent')}>
                           <button className={`px-8 py-3 rounded-lg ${propertyStatus === 'Rent' ? 'bg-[#ff385c] ' : 'bg-white text-black' }`}>For Rent</button>
                            <div class={propertyStatus === 'Rent' ? 'arrow_down' : 'hidden'}></div> 
                            </div>
                           <div className='relative' onClick={()=>handlePropertyStatus('Sale')}>
                           <button   className={`px-8 py-3 rounded-lg ${propertyStatus === 'Sale' ? 'bg-[#ff385c] ' : 'bg-white text-black' }`}>For Sale</button>
                           <div class={propertyStatus === 'Sale' ? 'arrow_down' : 'hidden'}></div> 
                           </div>
                        </div>
                        <form  onSubmit={search}>
                        <div className='p-3 lg:min-w-1/2 w-full backdrop-blur-lg backdrop-brightness-100 backdrop-contrast-125 bg-white/20 rounded-md'>
                        <div className='p-10 bg-white rounded-md flex  lg:justify-between lg:flex-row flex-col lg:items-center gap-5 '>
                            <input type="text" name='keyword' placeholder='Enter your keyword...' className='w-full px-2 py-3  border-[1px] outline-none rounded-lg border-gray-500 text-black bg-white'></input> 
                           {/* <input type="text"  placeholder='Enter keyword' className='min-w-[250px] p-2 b border-2 border-black text-black'/> */}
                           <select type="text" name='location'  placeholder='Location' className='w-full px-2 py-3  border-[1px] rounded-lg border-gray-500 text-black bg-white'>
                           <option value="location">Location</option>
                            {
                                locationValues.map(location=>{
                                    return  <option value={location}>{location}</option>
                                })
                            }
                           
                           
                            </select>
                           <select type="text" name='propertyType'  placeholder='Property type' className='w-full px-2 py-3 border-[1px] rounded-lg border-gray-500  text-black bg-white'>
                            <option value="Property type">Property type</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            
                           </select>
                           {/* <select type="text"  placeholder='Location' className='w-full px-2 py-3 border-[1px] rounded-lg border-gray-500 bg-w '>
                            <option value="Property type">Property type</option>
                            <option value="Family house">Family house</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Condo">Condo</option>
                           </select> */}
                           {/* <input type="text"  placeholder='Advance Search' className='min-w-[250px] p-2 b border-2 '/> */}
                           <button type='submit' className='min-w-[250px] py-3 bg-[#ff385c] text-white hover:bg-[#0f0f0f] rounded-lg font-semibold '>Search Now</button>
                        </div>
                        </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Banner;
