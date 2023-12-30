import React from 'react';
import { Link } from 'react-router-dom';

const PopularCard = ({area,properties}) => {
    return (
        <Link className='flex items-center border-2 font-pop rounded-md'>
            <div>
                <img src="/images/1.jpg" alt="" className='h-32 rounded-l-md' />
            </div>
            <div className='space-y-1 px-5'>
                <h3 className='text-2xl'>{area} </h3>
                <p>{properties} Properties</p>
            </div>
        </Link>
    );
}

export default PopularCard;
