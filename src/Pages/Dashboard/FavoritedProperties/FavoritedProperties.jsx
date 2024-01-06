import React, { useEffect, useState } from 'react';
import { MdDelete, MdOutlineModeEdit } from 'react-icons/md';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import AxiosBase from '../../../Axios/AxiosBase';
import UserAuth from '../../../Authentication/userAuth/userAuth';
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
             {/* section 1 Listing */}
         <div className=' bg-white shadow-lg font-pop p-5'>
            <div className='pt-5'>
            <div className="overflow-x-auto max-w-[1100px]">
  <table className="table min-h-[500px]">
    {/* head */}
    <thead className='text-gray-700 text-xl font-normal  bg-[#f5f7fb] p-2'>
      <tr className=''>
        <th className='text-black font-normal'>Top Property</th>
        <th className='font-normal text-[1rem]'>Date Added</th>
        <th  className='font-normal text-[1rem]'>Remove</th>
        <th  className='font-normal text-[1rem]'>Visit</th>
        
      </tr>
    </thead>
    <tbody className='max-h-[250px] overflow-y-auto'>
      {
        properties.slice((currentPage-1)*4,((currentPage-1)*4)+4).map((property,index)=>{
   return   <tr>
   <td>
       <div className='flex items-center  gap-2'>
           <img src={property.photos[0]} alt="" className='w-40 h-32 rounded-lg'/>
           <div className='space-y-2'>
               <h2 className='text-2xl'>{property.title}</h2>
               <p>{property.location.address}</p>
               <div className='flex items-center gap-2'>
               <Rating initialRating={4} 
        emptySymbol={<TiStarOutline className='text-[#ff385c] text-xl hover:cursor-pointer'/>}
        fullSymbol={<TiStarFullOutline className='text-[#ff385c] text-xl hover:cursor-pointer'/>}
                   readonly
               
/>
<p>(6 Reviews)</p>
               </div>
           </div>
       </div>
   </td>
   <td>{property.date?.day}.{property.date?.month}.{property.date?.year}</td>
   <td><button className='px-4 py-2 bg-black text-white shadow-lg rounded-full hover:bg-red-500' onClick={()=>removerProperty(property._id)}>Remove</button></td>
   <td >
  <Link to={`/property-details/${property._id}`} > <IoEyeOutline className='hover:text-[#ff385c] hover:cursor-pointer text-xl'></IoEyeOutline></Link>

   </td>
 </tr>
        })
    
}
    </tbody>
  </table>

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
            </div>
        </div>
    );
}

export default FavoritedProperties;
