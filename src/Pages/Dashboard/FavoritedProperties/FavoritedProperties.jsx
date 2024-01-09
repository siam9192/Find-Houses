import React, { useEffect, useState } from 'react';
import { MdDelete, MdOutlineBed, MdOutlineModeEdit } from 'react-icons/md';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import AxiosBase from '../../../Axios/AxiosBase';
import UserAuth from '../../../Authentication/userAuth/userAuth';
import { LiaBathSolid } from 'react-icons/lia';
import { PiGarage, PiShareFat } from 'react-icons/pi';
import { CiHeart } from 'react-icons/ci';
import { LuTriangleRight } from 'react-icons/lu';
const FavoritedProperties = () => {
    const [properties,setProperties] = useState([])
    const [refetch,setRefetch] = useState(false);
    const [pages,setPages] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const {user} = UserAuth();
    useEffect(()=>{
      if(!user){
        return;
      }
      AxiosBase().get(`/favourite-properties?email=${user.email}`)
      .then(res=>{
        setProperties(res.data)
       
        const total = res.data.length
        
        const pageCount = Math.ceil(total/4);
      
        const array = []
        for(let i = 1 ; i <= pageCount; i++ ){
          array.push(i)   
        }
        setPages([...array])
     })

    },[user,refetch])
    console.log(pages)
    const handleRefetch = ()=>{
      setRefetch(!refetch)
    }

    const removerProperty = (id)=>{
    AxiosBase().delete(`/client/favourite-property/remove?id=${id}&email=${user?.email}`)
    .then(res =>{
      if( 0 < res.data.deletedCount){
        handleRefetch()
      }
    })
    }

    const handleCurrentPage = (page)=>{
      setCurrentPage(page)
        }
      const prevPage =()=>{
      const newPage = currentPage - 1;
      if(newPage > 0){
         setCurrentPage(newPage)
      }
      }
      const nextPage = ()=>{
         const newPage = currentPage + 1;
         if(newPage <= pages[pages.length-1]){
             setCurrentPage(newPage)
          return;
         }
         
      }

   if(properties.length === 0)  {
return <div>
  <h1 className='text-2xl text-black text-center pt-32 font-pop '>No Properties added</h1>
</div>
    }
    return (

        <div>
       <div className='min-h-[500px] font-pop'>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 pb-5'>
    {
      properties?.map((property,index)=>{
        return <div className=' gap-2 bg-white p-2 shadow-md rounded-md'>
        <div>
        <img src={property.photos[0]} alt="" className='w-full h-52 rounded-md' />
        </div>
        <div className='pt-2 space-y-4'>
          <h1 className='text-2xl text-black'>{property.title}</h1>
          <p>{property.location.address}</p>
          <div className='py-2 space-y-5 pr-5'>
             <div className='flex justify-between items-center'> <div className='flex items-center gap-3'><MdOutlineBed className='text-2xl'></MdOutlineBed> <span>{property?.details?.extraInformation.rooms} Bedrooms</span></div>
             <div className='flex items-center gap-3'><LiaBathSolid className='text-2xl'></LiaBathSolid> <span>{property?.details?.extraInformation.bathRooms} Bathrooms</span></div>
             </div>
             <div className='flex justify-between items-center'> <div className='flex items-center gap-3'><LuTriangleRight className='text-2xl'></LuTriangleRight> <span>{property.details?.area ? property.details.area : 1200} Sqft</span></div>
             <div className='flex items-center gap-3'><PiGarage className='text-2xl'></PiGarage> <span>{property?.details?.garage? details.garage : 0} Garage</span></div>
             </div>
             <div className='border-t-2 pt-5 flex justify-between items-center'>
                <h1 className='text-xl text-black'>${property.details?.price}</h1>
                {/* <div className='flex items-center gap-3 text-xl'>
                 <CiHeart></CiHeart> <PiShareFat></PiShareFat>
                </div> */}
                <button className='bg-black py-2 px-4 text-white  rounded-lg' onClick={()=>removerProperty(property._id)}>Remove</button>
             </div>
            </div>
          <div>


          </div>
        </div>
        </div>
      })
    }
  </div>
       </div>

 <div className='flex justify-center items-center'>
 <div className='flex items-center gap-3 px-5'>
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md' onClick={prevPage}>Previous</button>
    {
        pages.map((page,index)=>{
            return <button className={`px-4 py-2 ${currentPage === page ? 'bg-black text-white' : ''} hover:bg-[#ff385c] border-2 border-[#ff385c] text-black hover:text-white rounded-md`} onClick={()=>handleCurrentPage(page)} key={index}>{page}</button>
        })
    }
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md' onClick={nextPage}>Next</button>
  </div>
         
 </div>
           
        </div>
    );
}

export default FavoritedProperties;
