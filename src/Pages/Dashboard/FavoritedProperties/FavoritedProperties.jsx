import React from 'react';
import { MdDelete, MdOutlineModeEdit } from 'react-icons/md';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
const FavoritedProperties = () => {
    const array = [1,2,3,4,5]
    return (
       

        <div>
             {/* section 1 Listing */}
         <div className=' bg-white shadow-lg font-pop p-5'>
            <div className='pt-5'>
            <div className="overflow-x-auto max-w-[1100px]">
  <table className="table   ">
    {/* head */}
    <thead className='text-gray-700 text-xl font-normal  bg-[#f5f7fb] p-2'>
      <tr className=''>
        <th className='text-black font-normal'>Top Property</th>
        <th className='font-normal text-[1rem]'>Date Added</th>
        <th  className='font-normal text-[1rem]'>Views</th>
        <th  className='font-normal text-[1rem]'>Action</th>
        
      </tr>
    </thead>
    <tbody className='max-h-[250px] overflow-y-auto'>
      {/* row 1 */}
      <tr>
        <td>
            <div className='flex items-center  gap-2'>
                <img src="/images/banner1.jpg" alt="" className='w-40 h-32 rounded-lg'/>
                <div className='space-y-2'>
                    <h2 className='text-2xl'>Luxury House villa</h2>
                    <p>Est St, 77 - Central Park South, NYC</p>
                    <div className='flex items-center gap-2'>
                    <Rating initialRating={4} 
             emptySymbol={<TiStarOutline className='text-[#ff385c] text-xl hover:cursor-pointer'/>}
             fullSymbol={<TiStarFullOutline className='text-[#ff385c] text-xl hover:cursor-pointer'/>}
                        readonly
                    
/>
<p>(6 Reviews)</p>
                    </div>
                </div>
            </div>
        </td>
        <td>08.12.23</td>
        <td>125</td>
        <td >
        <IoEyeOutline className='hover:text-[#ff385c] hover:cursor-pointer text-xl'></IoEyeOutline>
    
        </td>
      </tr>

    </tbody>
  </table>
  <div className='flex items-center gap-3 px-5 py-5'>
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md'>Previous</button>
    {
        array.map((page,index)=>{
            return <button className='px-4 py-2 hover:bg-[#ff385c] border-2 border-[#ff385c] text-black hover:text-white rounded-md' key={index}>{page}</button>
        })
    }
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md'>Next</button>
  </div>
</div>
            </div>
            </div>
        </div>
    );
}

export default FavoritedProperties;
