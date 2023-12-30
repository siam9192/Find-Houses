import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { MdOutlineBed } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { LuTriangleRight } from "react-icons/lu";
import { PiGarage } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { PiShareFat } from "react-icons/pi";
import { Link } from 'react-router-dom';
const ColumnCard = () => {
    
    return (
        <Link to='/property-details/1' className='border-1 border-black font-pop '>
            <div className='relative'>
                <img src="/images/banner2.jpg" alt="" className='w-full h-72 rounded-t-lg'/>
                <div className='p-3 bg-black bg-opacity-40 text-white absolute top-2 right-2'>
                    <h3>For sale</h3>
                </div>
            </div>
            <div className='py-4 px-2 space-y-1 bg-white rounded-b-lg'>
            <h1 className='text-black text-xl font-'>Real Luxury Family House Vila</h1>
            <div className='flex items-center gap-3'><MdLocationPin></MdLocationPin><h4>Est-7,Central Park South,Nyc</h4></div>
            <div className='py-2 space-y-5 pr-5'>
             <div className='flex justify-between items-center'> <div className='flex items-center gap-3'><MdOutlineBed className='text-2xl'></MdOutlineBed> <span>6 Bathrooms</span></div>
             <div className='flex items-center gap-3'><LiaBathSolid className='text-2xl'></LiaBathSolid> <span>6 Bedrooms</span></div>
             </div>
             <div className='flex justify-between items-center'> <div className='flex items-center gap-3'><LuTriangleRight className='text-2xl'></LuTriangleRight> <span>6 Sqft</span></div>
             <div className='flex items-center gap-3'><PiGarage className='text-2xl'></PiGarage> <span>6 Garage</span></div>
             </div>
             <div className='border-t-2 pt-5 flex justify-between items-center'>
                <h1 className='text-xl text-black'>$245769</h1>
                <div className='flex items-center gap-3 text-xl'>
                 <CiHeart></CiHeart> <PiShareFat></PiShareFat>
                </div>
             </div>
            </div>
            </div>
        </Link>
    );
}

export default ColumnCard;
