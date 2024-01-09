import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import Rating from 'react-rating';

const PropertyReview = ({review}) => {
    const month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    return (
        <div>
            <div className='flex justify-between items-center space-y-2'>
                <div className='md:flex items-center gap-3'>
                   <div>
                    <img src={review.profilePhoto || 'https://i.ibb.co/TH1W6TG/default-Pic.png'} alt="" className='md:w-20 md:h-20 w-10 h-10 rounded-full' />
                    </div> 
                    <div className='md:space-y-2 space-y-1'>
                        <h2 className='text-[#de4d4d] text-xl'>{review.name}</h2>
                         <p>{review.date.day}{month[review.date.month-1]} {review.date.year}</p>
                    </div>
                </div>
                <Rating initialRating={review.review.ratting} 
                 emptySymbol={<TiStarOutline className='text-[#ff385c] text-xl hover:cursor-pointer'/>}
                 fullSymbol={<TiStarFullOutline className='text-[#ff385c] text-xl hover:cursor-pointer'/>}
                            readonly
                        
    />
                        
            </div>
            <div className='md:p-10 p-5 space-y-3'>
            <p className='text-black'>{review.review.text}</p>
            <div>
                <img src={review.review.image} alt=""  className='w-72 rounded-md'/>
            </div>
            </div>
        </div>
    );
}

export default PropertyReview;
