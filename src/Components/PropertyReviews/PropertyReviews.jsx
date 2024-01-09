import React, { useEffect, useState } from 'react';
import PropertyReview from '../../Pages/PropertyDetails/PropertyReview';
import AxiosBase from '../../Axios/AxiosBase';

const PropertyReviews = ({id}) => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        if(!id){
            return;
        }
       
        AxiosBase().get(`/property/review?id=${id}`)
        .then(res=>{
            setReviews(res.data)
        })
    },[id])
  
   
    return (
        <div className='lg:p-10 p-5 space-y-5 bg-white shadow-md '>
        <h2 className='text-black text-2xl font-medium'>Reviews ({reviews.length})</h2>
        <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
        <div  className='space-y-4 h-[500px] overflow-y-auto'>
        {
            reviews.map(item=> <PropertyReview review = {item} key={item._id}></PropertyReview>)
        }
        </div>
        </div>
    );
}

export default PropertyReviews;
