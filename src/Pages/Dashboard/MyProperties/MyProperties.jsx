import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdOutlineModeEdit } from 'react-icons/md';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import AxiosBase from '../../../Axios/AxiosBase';
import UserAuth from '../../../Authentication/userAuth/userAuth';
import Swal from 'sweetalert2';

const MyProperties = () => {
    const [properties,setProperties] = useState([]);
    const [refetch,setRefetch] = useState(false);
    const  [ pages,setPages ]= useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const {user} = UserAuth();
        
    // const {data:properties,isLoading,refetch} = useQuery({
    //     queryKey:['my-properties'],
    //     queryFn:async()=>{
    //         const response = await AxiosBase().get(`/client/properties?email=${user?.email}`)
    //         return response.data
    //     }
    // })
    useEffect(()=>{
        if(user){
     AxiosBase().get(`/client/properties?email=${user?.email}`)
     .then(res=>{
        setProperties(res.data)
        const total = res.data.length
        const pageCount = total/2;
        const array = []
        for(let i = 1 ; i <= pageCount; i++ ){
          array.push(i)   
        }
        setPages([...array])
     })
        }
        
    },[user,refetch])

   const handleRefetch = ()=>{
    setRefetch(!fetch);
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
    const handleDelete = (id)=>{
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            background:'#f5f7fb',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff385c",
            cancelButtonColor: "#000",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            AxiosBase().delete(`/client/delete/${id}`)
            .then(res=>{
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Property has been deleted.",
                        color:'#ff385c',
                        icon: "success",
                        iconColor:"#ff385c"
                      });
                      handleRefetch()
                }

            })
            }
          });
    }
    console.log(properties)

console.log('slice',)
    return (
        <div>
             {/* section 1 Listing */}
         <div className=' bg-white shadow-xl font-pop p-5'>
            <div className=''>
            <div className="overflow-x-auto max-w-[1100px]">
  <table className="table   ">
    {/* head */}
    <thead className='text-gray-700 text-xl font-normal  bg-[#f5f7fb] p-2'>
      <tr className=''>
        <th className='text-black font-normal'>My Properties</th>
        <th className='font-normal text-[1rem]'>Date Added</th>
        <th  className='font-normal text-[1rem]'>Views</th>
        <th  className='font-normal text-[1rem]'>Status</th>
        <th  className='font-normal text-[1rem]'>Action</th>
        
      </tr>
    </thead>
    <tbody className='max-h-[250px] overflow-y-auto'>
      {
     properties.slice((currentPage-1)*2,((currentPage-1)*2)+2).map((property,index)=>{
            return   <tr key={index}>
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
            <td>0{property.date.day}.{property.date.month + 1}.{property.date.year}</td>
            <td>125</td>
            <td>Pending..</td>
            <td >
                <div className='flex justify-between items-center'>
            <Link className='text-green-600 hover:text-[#ff385c]'>Edit</Link>
            <MdDelete className='hover:text-[#ff385c] text-xl hover:cursor-pointer'onClick={()=>handleDelete(property._id)}></MdDelete>
            </div>
            </td>
          </tr>
        })
    
}

    </tbody>
  </table>
 {pages.length !==0 && <div className='flex items-center gap-3 px-5'>
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md' onClick={prevPage}>Previous</button>
    {
        pages.map((page,index)=>{
            return <button className={`px-4 py-2 ${currentPage === page ? 'bg-black text-white' : ''} hover:bg-[#ff385c] border-2 border-[#ff385c] text-black hover:text-white rounded-md`} onClick={()=>handleCurrentPage(page)} key={index}>{page}</button>
        })
    }
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md' onClick={nextPage}>Next</button>
  </div>
}
</div>
            </div>
            </div>
        </div>
    );
}

export default MyProperties;
