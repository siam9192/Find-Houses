import React from 'react';
import { IoIosStar } from 'react-icons/io';

const PropertyReview = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                   <div>
                    <img src="/images/agents/1.jpg" alt="" className='w-20 h-20 rounded-full' />
                    </div> 
                    <div className='space-y-3'>
                        <h2 className='text-[#de4d4d] text-xl'>Marry Smith</h2>
                         <p>May30 2020</p>
                    </div>
                </div>
                <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
            </div>
            <div className='p-10 space-y-3'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa assumenda dolorum, quo fugit esse repellendus incidunt? Dicta tempora nostrum eius!</p>
            <div>
                <img src="/images/banner1.jpg" alt=""  className='w-72 rounded-md'/>
            </div>
            </div>
        </div>
    );
}

export default PropertyReview;
