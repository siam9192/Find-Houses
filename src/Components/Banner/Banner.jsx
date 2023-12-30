import React from 'react';
import './Banner.css'
import Container from '../Reuse/Container/Container';
const Banner = () => {
    return (
        <div className='banner min-h-[95vh]'>
            <Container>
                <div className='pt-52 text-center space-y-5 font-lato'>
                    <h1 className='text-6xl text-white font-semibold font-lato'>Find Your Dream Property</h1>
                    <p className='text-xl text-white font-lato'>We have a million Property for you</p>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div className='flex items-center gap-4 text-white font-semibold'>
                            <button className='px-8 py-3 bg-[#ff385c] rounded-lg '>For Rent</button> <button  className='px-8 py-3 bg-[#ff385c] rounded-lg '>For Sale</button>
                        </div>
                        <div className='p-10 bg-white rounded-md flex lg:flex-row flex-col items-center gap-5 min-w-1/2 shadow-md shadow-[#847c7c]'>
                           <input type="text"  placeholder='Enter keyword' className='min-w-[250px] p-2 b border-2 '/>
                           <select type="text"  placeholder='Property type' className='min-w-[250px] p-2 b border-2 '>
                            <option value="Property type">Property type</option>
                            <option value="Family house">Family house</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Condo">Condo</option>
                           </select>
                           <select type="text"  placeholder='Location' className='min-w-[250px] p-2 b border-2 '>
                            <option value="Property type">Property type</option>
                            <option value="Family house">Family house</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Condo">Condo</option>
                           </select>
                           <input type="text"  placeholder='Advance Search' className='min-w-[250px] p-2 b border-2 '/>
                           <button className='min-w-[250px] py-3 bg-[#ff385c] text-white rounded-lg font-semibold '>Search Now</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Banner;
