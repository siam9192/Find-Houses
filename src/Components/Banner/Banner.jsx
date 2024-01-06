import React from 'react';
import './Banner.css'
import Container from '../Reuse/Container/Container';
const Banner = () => {
    return (
        <div className='banner min-h-[95vh]'>
            <Container>
                <div className='pt-52 text-center space-y-5 font-lato lg:px-0 px-2'>
                    <h1 className='lg:text-6xl text-4xl text-white font-semibold font-lato'>Find Your Dream Property</h1>
                    <p className='text-xl text-white font-lato'>We have a million Property for you</p>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div className='flex items-center gap-4 text-white font-semibold'>
                            <button className='px-8 py-3 bg-[#ff385c] rounded-lg '>For Rent</button> <button  className='px-8 py-3 bg-[#ff385c] rounded-lg '>For Sale</button>
                        </div>
                        <div className='p-10 bg-white rounded-md flex lg:justify-between lg:flex-row flex-col lg:items-center gap-5 lg:min-w-1/2 w-full shadow-md shadow-[#847c7c]'>
                           {/* <input type="text"  placeholder='Enter keyword' className='min-w-[250px] p-2 b border-2 border-black text-black'/> */}
                           <select type="text"  placeholder='Location' className='min-w-[250px] p-2 b border-2 border-black text-black bg-white'>
                            <option value="Property type">Location</option>
                            <option value="Family house">Family house</option>
                            <option value="Apartment">Apartment</option> 
                            <option value="Condo">Condo</option>
                            </select>
                           <select type="text"  placeholder='Property type' className='min-w-[250px] p-2 b border-2 border-black text-black bg-white'>
                            <option value="Property type">Property type</option>
                            <option value="Rent">Rent</option>
                            <option value="Sale">Sale</option>
                            
                           </select>
                           <select type="text"  placeholder='Location' className='min-w-[250px] border-black p-2 b border-2 '>
                            <option value="Property type">Property type</option>
                            <option value="Family house">Family house</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Condo">Condo</option>
                           </select>
                           {/* <input type="text"  placeholder='Advance Search' className='min-w-[250px] p-2 b border-2 '/> */}
                           <button className='min-w-[250px] py-3 bg-[#ff385c] text-white rounded-lg font-semibold '>Search Now</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Banner;
