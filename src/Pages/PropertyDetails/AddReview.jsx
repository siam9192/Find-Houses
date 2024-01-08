import { Rating } from '@mui/material';
import React from 'react';

const AddReview = () => {
    return (
        <div>
          <div className='lg:flex justify-between items-center space-y-4'>
        <div>
       <p>Your rating for this listing</p>
        <Rating name="size-large" defaultValue={2} />
        </div>
        <div>
        <button className='bg-[#ff385c] px-4 py-2 text-white rounded-full'>Upload photos</button>
        </div>
        </div>
        <form className='space-y-3 py-4  w-full '>
         <textarea placeholder='Review' className='p-2 border-2 w-full outline-none min-h-[200px] resize-none rounded-lg text-black'></textarea>
         <button className='bg-[#ff385c]  px-4 py-2 text-white rounded-md'>Submit Review</button>
        </form>
          
        </div>
    );
}

export default AddReview;
