import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AxiosBase from '../../../Axios/AxiosBase';
import UserAuth from '../../../Authentication/userAuth/userAuth';

const ClientProperties = () => {
    const [properties,setProperties] = useState([])
    const {user} = UserAuth();
    // const {data:properties} = useQuery({
    //     queryKey:['client-properties'],
    //     queryFn:()=>{
    //         AxiosBase().get(`/client/properties?agent=${}`)
    //     }
    // })
    useEffect(()=>{
        if(!user){
            return
        }
        console.log(6876)
        AxiosBase().get(`/client-properties?agent=${user?.email}`)
        .then(res=>{
            setProperties(res.data)
        })

    },[user])
    console.log(properties)
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
   <th className='text-black font-normal'>Property Requests</th>
   <th className='font-normal text-[1rem]'>Date Requested</th>
   <th  className='font-normal text-[1rem]'>Approve</th>
   <th  className='font-normal text-[1rem]'>Delete</th>
   
 </tr>
</thead>
<tbody className='max-h-[250px] overflow-y-auto'>
 {/* row 1 */}
{
   properties?.map((property,index)=>{
       return   <tr key={index}>
       <td>
           <Link to={`/dashboard/property-requests/details/${property._id}`} className='flex items-center  gap-2'>
               <img src = {property.photos[0]} alt="" className='w-40 h-32 rounded-lg'/>
               <div className='space-y-2'>
                   <h2 className='text-xl'>{property.title}</h2>
                   <p>{property.location.address}</p>

               </div>
           </Link>
       </td>
       <td>08.12.23</td>
       <td><button className='btn btn-secondary' >Approve</button></td>
       <td >
           <div className='flex justify-between items-center'>
       <MdDelete className='hover:text-[#ff385c] text-xl  hover:cursor-pointer' ></MdDelete>
       </div>
       </td>
     </tr>
   })
}


</tbody>
</table>
{ 

<div className='flex items-center gap-3 px-5'>
<button className='px-6 py-3 bg-[#ff385c] text-white rounded-md'>Previous</button>
{/* {
   array.map((page,index)=>{
       return <button className='px-4 py-2 hover:bg-[#ff385c] border-2 border-[#ff385c] text-black hover:text-white rounded-md' key={index}>{page}</button>
   })
} */}
<button className='px-6 py-3 bg-[#ff385c] text-white rounded-md'>Next</button>
</div> }
</div>
       </div>
       </div>
   </div>
    );
}

export default ClientProperties;
