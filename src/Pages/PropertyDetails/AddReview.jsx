import { Rating } from '@mui/material';
import React, { useState } from 'react';
import UserAuth from '../../Authentication/userAuth/userAuth';
import axios from 'axios';
import AxiosBase from '../../Axios/AxiosBase';
import toast, { Toaster } from 'react-hot-toast';

const AddReview = ({id}) => {
  const  {user} = UserAuth();
  const [ratting,setRatting] = useState(2);
  const [photo,setPhoto] = useState([]);




  const handleImage =  (value)=>{
    const url = URL.createObjectURL(value);
    setPhoto([url,value])
  }
  const submitReview =async (e)=>{
    e.preventDefault();
    const text = e.target.review_text.value;
    
    const response = await axios.post('https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027',{image:photo[1]},{
      headers: {
      'content-type': 'multipart/form-data'
    },
  }
  
  );
  // console.log(photo)
  const photoUrl = response.data.data.display_url 
    const main = {
      property_id: id,
      name:user.displayName,
      email:user.email,
      profilePhoto:user.photoURL,
      review:{
        image: photoUrl,
        ratting:parseInt(ratting),
        text,

      },
    date:{
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    }

    }
  
    AxiosBase().post('/user/review/post',main)
    .then(res =>{
      if(res.data.insertedId){
        setPhoto([])
        setRatting(2);
        e.target.reset();
        toast.success('Review posted successfully')
      }
    })
  }
  
    return (
        <div>
          <div className='lg:flex justify-between items-center space-y-4'>
        <div>
       <p>Your rating for this listing</p>
        <Rating name="size-large" defaultValue={2} onChange={(e)=>setRatting(e.target.value)}/>
        </div>
        <div>
       <div className='relative'>
       <button  className='bg-[#ff385c] px-4 py-2 text-white rounded-full '>{photo.length ? 'Change photo' :'Upload photos'}</button>
        <input type='file'  className='absolute top-0 left-0 opacity-0 h-full w-full hover:cursor-pointer' onChange={(e)=>handleImage(e.target.files[0])}/>
       </div>
        </div>
        </div>
        <div className='py-2'>
          <img src={photo[0]} alt="" className='w-52'/>
        </div>
        <form className='space-y-3 py-4  w-full ' onSubmit={submitReview}>
         <textarea name='review_text' placeholder='Review' className='p-2 border-2 w-full outline-none min-h-[200px] resize-none rounded-lg text-black'></textarea>
         <button type='submit' className='bg-[#ff385c]  px-4 py-2 text-white rounded-md'>Submit Review</button>
        </form>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
}

export default AddReview;
