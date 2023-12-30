import React from 'react';

const Review = () => {
    return (
        <div className='p-10 bg-white space-y-5 '>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, animi! Mollitia, quas magnam quod praesentium obcaecati nulla iure ratione optio enim. Eveniet quasi natus harum tempore non ipsa culpa quidem!</p>
        <div className='flex justify-between items-center'>
         <div className='flex items-center gap-3'>
         <img src="/images/agents/1.jpg" alt="" className='w-20 h-20 rounded-full border-4 border-[#ff385c]'/>
         <div>
            <h2 className='text-2xl'>Gary Steven</h2>
            <p>Chicago</p>
         </div>
         </div>
        </div>
        </div>
    );
}

export default Review;
