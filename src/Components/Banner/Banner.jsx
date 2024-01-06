import React from 'react';
import './Banner.css'
import Container from '../Reuse/Container/Container';
const Banner = () => {
    const [propertyType,setPropertyTpe] = useState('Rent')
    const locationValues = ["Los Angeles","Chicago","San Francisco","Miami","Houseton"];
    return (
        <div className='banner min-h-[95vh]'>
            <Container>
                <div className='pt-52 text-center space-y-5 font-pop lg:px-0 px-2'>
                    <h1 className='lg:text-6xl text-4xl text-white font-semibold font-lato'>Find Your Dream Property</h1>
                    <p className='text-xl text-white font-lato'>We have a million Property for you</p>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div className='flex items-center gap-4 text-white font-semibold'>
                           <div>
                           <button className='px-8 py-3 bg-[#ff385c] rounded-lg '>For Rent</button>
                            <div class=" bg-white rounded-l-[50px] rounded-r-[50px]  border-red-500"></div> 
                            </div>
                            <button  className='px-8 py-3 bg-[#ff385c] rounded-lg '>For Sale</button>
                        </div>
                        <div className='p-3 lg:min-w-1/2 w-full backdrop-blur-lg backdrop-brightness-100 backdrop-contrast-125 bg-white/20 rounded-md'>
                        <div className='p-10 bg-white rounded-md flex  lg:justify-between lg:flex-row flex-col lg:items-center gap-5 '>
                            <input type="text" placeholder='Enter your keyword...' className='w-full px-2 py-3  border-[1px] outline-none rounded-lg border-gray-500 text-black bg-white'></input> 
                           {/* <input type="text"  placeholder='Enter keyword' className='min-w-[250px] p-2 b border-2 border-black text-black'/> */}
                           <select type="text"  placeholder='Location' className='w-full px-2 py-3  border-[1px] rounded-lg border-gray-500 text-black bg-white'>
                           <option value="location">Location</option>
                            {
                                locationValues.map(location=>{
                                    return  <option value={location}>{location}</option>
                                })
                            }
                           
                           
                            </select>
                           <select type="text"  placeholder='Property type' className='w-full px-2 py-3 border-[1px] rounded-lg border-gray-500  text-black bg-white'>
                            <option value="Property type">Property type</option>
                            <option value="Rent">Rent</option>
                            <option value="Sale">Sale</option>
                            
                           </select>
                           {/* <select type="text"  placeholder='Location' className='w-full px-2 py-3 border-[1px] rounded-lg border-gray-500 bg-w '>
                            <option value="Property type">Property type</option>
                            <option value="Family house">Family house</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Condo">Condo</option>
                           </select> */}
                           {/* <input type="text"  placeholder='Advance Search' className='min-w-[250px] p-2 b border-2 '/> */}
                           <button className='min-w-[250px] py-3 bg-[#ff385c] text-white rounded-lg font-semibold '>Search Now</button>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Banner;
