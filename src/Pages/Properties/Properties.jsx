import React from 'react';
import Container from '../../Components/Reuse/Container/Container';
import Navbar2 from '../../Components/Reuse/Navbar2/Navbar2';
import { MdOutlineSort } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { CgLayoutList } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineBed } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { LuTriangleRight } from "react-icons/lu";
import { PiGarage } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { PiShareFat } from "react-icons/pi";
import { MdHome } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import ColumnCard from '../../Components/Reuse/PropertyCard/ColumnCard'
const Properties = () => {
    const arr = [0,1,2,3,4,5,6,7,8,9,10]
    return (
        <div>
        <Navbar2></Navbar2>
   <div className='bg-[#f5f7fb] font-pop'>
   <Container>
    <div>
        
    </div>
        <div className='py-10 px-20 flex gap-10'>
            <div className='w-[70%] space-y-10'>
                <div className='flex justify-between items-center'>
                <div>
                    <h2>8 Search Results</h2>

                </div>
                <div className='flex items-center gap-3 '>
                    <div className='flex items-center gap-2'>
                     <div className='flex items-center  gap-2'>
                     <MdOutlineSort className='text-xl'></MdOutlineSort><h2 className='text-black font-semibold'>SORTBY</h2>
                     </div>
                     <div>
                       <select name="" id="" className='w-full bg-transparent'>
                        <option value="top selling">Top selling</option>
                        <option value="low-high">Low to High</option>
                       </select>
                     </div>
                    </div>
                    <div className='flex items-center gap-3 '>
                  <div className='p-2 bg-black text-white'>
                  <BsFillGridFill></BsFillGridFill>
                  </div>
                  <div className='p-2 bg-black text-white '>
                <CgLayoutList></CgLayoutList>
                  </div>
                    </div>
                </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    {arr.map(item => <ColumnCard key={item}></ColumnCard>)}
                </div>
                {/* Pagination */}
                <div className='flex justify-center items-center'>
                    <div className='flex items-center  gap-2'>
                        {arr.slice(0,7).map((item,index)=>{
                            return <div className='p-4 rounded-md bg-black text-white text-center' key={index}>{item}</div>
                        })}
                    </div>
                </div>
                </div>
                <div className='w-[30%] space-y-10 font-pop'>
                    <div className='p-5 shadow-lg bg-white space-y-4'>
                        <h1 className='text-black text-2xl pb-3 border-b-2 border-gray-200'>Find House</h1>
                        <div className='space-y-4'>
                            <input type="text" placeholder='Enter Keyword...' className='w-full py-3 px-2 border-2 rounded-md text-black '/>
                            <div  className='w-full py-3 px-2 border-2 rounded-md  bg-white flex justify-between items-center text-xl text-gray-600'>
                            <div className='flex items-center gap-3'><MdLocationPin></MdLocationPin><h2>Location</h2></div> <MdKeyboardArrowUp></MdKeyboardArrowUp>
                            </div>
                            <div  className='w-full py-3 px-2 border-2 rounded-md  bg-white flex justify-between items-center text-xl text-gray-600'>
                            <div className='flex items-center gap-3'><MdHome></MdHome><h2>Property Status</h2></div> <MdKeyboardArrowUp></MdKeyboardArrowUp>
                            </div>
                            <div  className='w-full py-3 px-2 border-2 rounded-md  bg-white flex justify-between items-center text-xl text-gray-600'>
                            <div className='flex items-center gap-3'><MdOutlineBed></MdOutlineBed> <h2>Bedrooms</h2></div> <MdKeyboardArrowUp></MdKeyboardArrowUp>
                            </div>
                            <div  className='w-full py-3 px-2 border-2 rounded-md  bg-white flex justify-between items-center text-xl text-gray-600'>
                            <div className='flex items-center gap-3'><LiaBathSolid></LiaBathSolid><h2>Bathrooms</h2></div> <MdKeyboardArrowUp></MdKeyboardArrowUp>
                            </div>
                           
                            <button className='w-full bg-[#ff385c] hover:bg-[#292525] py-2 text-white rounded-md'>Search</button>
                        </div>
                    </div>
                </div>
                </div>
                </Container>
                </div>
                </div>
    );
}

export default Properties;
