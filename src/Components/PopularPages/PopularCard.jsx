import React from 'react';
import { Link } from 'react-router-dom';

const PopularCard = ({area,properties}) => {
    return (
        <Link className='flex   items-center border-2 border-gray-700 font-pop rounded-md'>
            <div>
                <img src="/images/1.jpg" alt="" className='md:h-52 md:w-60 w-32 h-20   rounded-l-md' />
            </div>
            <div className='space-y-1 px-5 text-gray-700'>
                <h3 className='md:text-2xl text-xl'>{area} </h3>
                <p>{properties} Properties</p>
            </div>
        </Link>
    );
}

export default PopularCard;
