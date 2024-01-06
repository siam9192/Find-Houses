import React from 'react';
import { Link } from 'react-router-dom';

const PopularCard = ({area,properties}) => {
    return (
        <Link className='flex lg:flex-row flex-col  items-center border-2 border-gray-700 font-pop rounded-md'>
            <div>
                <img src="/images/1.jpg" alt="" className='lg:h-52 lg:w-72 w-full  rounded-l-md' />
            </div>
            <div className='space-y-1 px-5 text-gray-700'>
                <h3 className='text-2xl'>{area} </h3>
                <p>{properties} Properties</p>
            </div>
        </Link>
    );
}

export default PopularCard;
