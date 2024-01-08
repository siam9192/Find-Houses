import React, { useEffect, useState } from 'react';
import Navbar2 from '../../Components/Reuse/Navbar2/Navbar2';
import Container from '../../Components/Reuse/Container/Container';
import { FaGraduationCap, FaLocationArrow, FaV } from 'react-icons/fa6';
import { GrNext,GrPrevious } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { FaUserDoctor,FaCar } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import PropertyReview from './PropertyReview';
import AddReview from './AddReview';
import ColumnCard from '../../Components/Reuse/PropertyCard/ColumnCard'
import Footer from '../../Components/Footer/Footer';
import SideComponent from './SideComponent';
import { Slide } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import AxiosBase from '../../Axios/AxiosBase';
import { useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import UserAuth from '../../Authentication/userAuth/userAuth';
import Navbar from '../../Components/Reuse/Navbar/Navbar';
const PropertyDetails = () => {
    const [imageIndex,setImageIndex] = useState(0);
    const {user} = UserAuth();
     const [isFev,setIsFav] = useState(null);
     const [isFullDescription,setFullDescription] = useState(false)
     const [favRefetch,setFavRefetch] = useState(false);
    // const images = ['https://img.rentola.com/04C-6Zchl4ytByKxX1MhZgqNqDE=/fit-in/635x405/filters:format(jpeg):fill(white)/https%3A%2F%2Fimages2.gnomen-europe.com%2Fc52bf5d419134a38438f8b04e07414c9%2Flarge%2F19898.jpg','https://img.rentola.com/aGiAzmbnn5wSJ2_HVPaIMneZD5Q=/fit-in/635x405/filters:format(jpeg):fill(white)/https%3A%2F%2Fimages2.gnomen-europe.com%2Fc52bf5d419134a38438f8b04e07414c9%2Flarge%2F19897.jpg','https://img.rentola.com/7mqEwgBQCuFZmW8rhnCu2-5ySXM=/fit-in/635x405/filters:format(jpeg):fill(white)/https%3A%2F%2Fimages2.gnomen-europe.com%2Fc52bf5d419134a38438f8b04e07414c9%2Flarge%2F19894.jpg','https://img.rentola.com/ngj8rCNRX_C33inHlSZLJShH9I0=/fit-in/635x405/filters:format(jpeg):fill(white)/https%3A%2F%2Fimages2.gnomen-europe.com%2Fc52bf5d419134a38438f8b04e07414c9%2Flarge%2F19893.jpg','https://img.rentola.com/QKK-tTwD6yeF_PPcEMlRo180Icc=/fit-in/635x405/filters:format(jpeg):fill(white)/https%3A%2F%2Fimages2.gnomen-europe.com%2Fc52bf5d419134a38438f8b04e07414c9%2Flarge%2F19892.jpg','https://img.rentola.com/vpH1_nnM0qaBQcOQCXB5312QsVc=/fit-in/635x405/filters:format(jpeg):fill(white)/https%3A%2F%2Fimages2.gnomen-europe.com%2Fc52bf5d419134a38438f8b04e07414c9%2Flarge%2F19896.jpg']
    const {id} = useParams();
    
    const {data:property,isLoading,refetch} = useQuery({
        queryKey:['property'],
        queryFn:async()=>{
            const response = await AxiosBase().get(`/property/${id}`)
            return response.data;
        }
    })
    useEffect(()=>{
        window.scrollTo(0,0)
        if(!user||!property){
            return;
        }
        AxiosBase().get(`/checkFavourite?email=${user?.email}&id=${property?._id}`)
        .then((res)=>{
        setIsFav(res.data)
        })
    },[user,property,favRefetch])
    const nextSlide = (index)=>{
        if(imageIndex === property?.photos.length - 1){
           setImageIndex(0)
           return;
        }
        setImageIndex(imageIndex + 1)

    }
    const prevSlide = ()=>{
        if(imageIndex === 0){
            setImageIndex(property?.photos.length - 1);
            return;
        }
        setImageIndex(imageIndex -1)
    }
    const handleFav = (id)=>{
        const fav = {
            propertyId:id,
            email:user.email
        }
        if(isFev){
          
            return;
        }
       
      AxiosBase().patch('/add-property/fav',{fav})
      .then(res => {
        if(res.data.insertedId){
           setFavRefetch(!favRefetch)
        }
      })
    }
    const handleFullDescription = (value)=>{
        setFullDescription(value);
    }
    return (
        <div>
           <Navbar></Navbar>
       <div className='py-32 bg-[#f5f7fb] font-pop'>
       <Container>
            <div className='py-10 lg:px-20 px-2 lg:flex gap-10'>
                <div className='lg:w-[70%] space-y-10'>
              <div  className='lg:flex justify-between items-center gap-5'>
                <div>
                    <div className='space-y-3'>
                        <div className='flex lg:flex-row flex-col-reverse gap-5'> <h1 className='text-3xl font-semibold text-black'>{property?.title}</h1> <h3 className='py-2 px-4 w-fit rounded-full bg-[#ff385c] text-white'>{property?.details.status}</h3></div>
                   
                    <div className='flex gap-2 items-center'><FaLocationArrow></FaLocationArrow><p>{property?.location.address}</p></div>
                    </div>
                </div>
                <div>
                <h1 className='text-3xl  text-[#ff385c] font-semibold'>$ 23000</h1>
                <h4>1200/sq ft</h4>
                </div>
              </div>
              <div className='bg-white lg:p-10 p-2 shadow-md space-y-5'>
                <h2 className='text-black text-2xl font-medium'>Gallery</h2>
                <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
                <div className=''>
                   <div className='relative'> <img src={property?.photos[imageIndex]} alt="" className='w-full' />
                   <div className='absolute top-0 left-0 flex justify-end w-full p-5'>
                    <div className={`px-4 py-2 lg:text-xl bg-white flex items-center gap-2 hover:cursor-pointer $ rounded-md shadow-lg`} onClick={()=>handleFav(property?._id)}><FaHeart className={`${isFev ? 'text-[#ff385c]' : 'text-black'}`}></FaHeart><h2>{isFev ? 'Saved' : 'Save'}</h2></div>
                   </div>
                   <div className='absolute flex justify-between items-center top-1/2 md:px-10 px-5 w-full'>
                    <button className='md:text-xl text-white bg-[#ff385c] hover:bg-black p-4 rounded-full' onClick={prevSlide}><GrPrevious></GrPrevious></button> <button className='md:text-xl text-white bg-[#ff385c] hover:bg-black  p-4 rounded-full' onClick={nextSlide}><GrNext></GrNext></button>
                    </div></div>
                </div>
                <div className='flex-none flex-wrap gap-2 grid grid-cols-4 items-center overflow-x-auto  lg:px-10 '>
                        {property?.photos?.map((image,index)=>{
                            return <div className='relative hover:cursor-pointer' key={index} onClick={()=> setImageIndex(index)}>
                                <img src={image} alt="" className=' '/>
                                <div className={`${imageIndex === index ? 'hidden' : 'block'} w-full h-full bg-[#e4e4e482] absolute top-0 right-0`}></div>
                            </div>
                        })}
                    </div>
              </div>
            <div className='lg:p-10 p-5 space-y-5 bg-white shadow-md transition ease-in-out delay-200'>
            <h2 className='text-black text-2xl font-medium'>Description</h2>
                <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
                <p>{!isFullDescription?property?.description.slice(0,380):property?.description}</p>
                <div className='pt-5'>
                   {
                   !isFullDescription 
                   ?
                   <button className='text-blue-700' onClick={()=>handleFullDescription(true)}>Show full description</button>
                   :
                    <button className='text-blue-700 ' onClick={()=>handleFullDescription(false)}>Show sort description</button>
}
                </div>
            </div>
            <div className='p-10 space-y-5 bg-white shadow-md'>
            <h2 className='text-black text-2xl font-medium'>Property Details</h2>
                <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
                <div className='flex justify-between'>
                    <div className='space-y-2 '>
                        <h1 className='font-semibold'>Property ID: <span className='font-normal'>V2543454</span></h1>
                        <h1 className='font-semibold'>Property Price: <span className='font-normal'>${property?.details.price?property.details.price : 2200}</span></h1>
                        <h1 className='font-semibold'>Bathrooms: <span className='font-normal'>{property?.details.extraInformation.bathRooms}</span></h1>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-semibold'>Property Type: <span className='font-normal'>House</span></h1>
                        <h1 className='font-semibold'>BedRooms: <span className='font-normal'>{property?.details.extraInformation.rooms}</span></h1>
                        <h1 className='font-semibold'>Garages: <span className='font-normal'>3</span></h1>
                    </div>
                    <div className='space-y-2 '>
                        <h1 className='font-semibold'>Property Status: <span className='font-normal'>{property?.details?.status}</span></h1>
                        <h1 className='font-semibold'>Bedrooms: <span className='font-normal'>{property?.details.bedrooms}</span></h1>
                        <h1 className='font-semibold'>Year Built: <span className='font-normal'>{2022}</span></h1>
                    </div>
                </div>
                <h2 className='text-black text-2xl font-medium'>Amenities</h2>
                <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
                <div className='flex  flex-wrap gap-3'>
                {
                    property?.details.features.map((item,index)=>{
                        return <div className='flex items-center gap-2' key={index}>
                              <ImCheckboxChecked className='text-[#ff385c]'></ImCheckboxChecked>
                              <h4>{item}</h4>
                        </div>
                    })
                }
                 <div className='flex items-center gap-2'>
                              <ImCheckboxChecked className='text-[#ff385c]'></ImCheckboxChecked>
                              <h4>Housing</h4>
                        </div>
                        <div className='flex items-center gap-2'>
                              <ImCheckboxChecked className='text-[#ff385c]'></ImCheckboxChecked>
                              <h4>Freshing</h4>
                        </div>' <div className='flex items-center gap-2'>
                              <ImCheckboxChecked className='text-[#ff385c]'></ImCheckboxChecked>
                              <h4>Internet</h4>
                        </div>
                </div>
            </div>
            {/* Floor planes */}
            <div className='lg:p-10 p-5 space-y-5 bg-white shadow-md'>
            <h2 className='text-black text-2xl font-medium'>Floor Planes</h2>
                <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
                <div>
                    <img src="https://i.ibb.co/PQP9H36/What-is-a-floor-plan-with-dimensions.png" alt="" className='w-full lg:h-[400px]' />
                </div>
                    </div>
                    <div className='lg:p-10 p-5 space-y-5 bg-white shadow-md'>
            <h2 className='text-black text-2xl font-medium'>Important places</h2>
                <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
                 <div>
                    <h3 className='text-xl flex items-center gap-2 text-[#5272db]'><span><FaGraduationCap></FaGraduationCap></span><span>Education</span></h3>
                    <div className='space-y-2 pt-2'>
                        <div className='flex justify-between items-center'>
                        <h2 className='text-black'>Education Mandarin <span className='text-gray-800'>(15.16 miles)</span></h2>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
                        </div>
                        <div className='flex justify-between items-center'>
                        <h2 className='text-black'>Education Mandarin <span className='text-gray-800'>(15.16 miles)</span></h2>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
                        </div>
                        <div className='flex justify-between items-center'>
                        <h2 className='text-black'>Education Mandarin <span className='text-gray-800'>(15.16 miles)</span></h2>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
                        </div>
                    </div>
                    
                 </div>
                 <div>
                    <h3 className='text-xl flex items-center gap-2 text-[#52db59]'><span><FaUserDoctor></FaUserDoctor></span><span>Health & Medical</span></h3>
                    <div className='space-y-2 pt-2'>
                        <div className='flex justify-between items-center'>
                        <h2 className='text-black'>Education Mandarin <span className='text-gray-800'>(15.16 miles)</span></h2>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
                        </div>
                        <div className='flex justify-between items-center'>
                        <h2 className='text-black'>Education Mandarin <span className='text-gray-800'>(15.16 miles)</span></h2>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
                        </div>
                        <div className='flex justify-between items-center'>
                        <h2 className='text-black'>Education Mandarin <span className='text-gray-800'>(15.16 miles)</span></h2>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
                        </div>
                    </div>
                    
                 </div>
                 <div>
                    <h3 className='text-xl flex items-center gap-2 text-[#de4d4d]'><span><FaCar></FaCar> </span><span>Transportation</span></h3>
                    <div className='space-y-2 pt-2'>
                       
                        <div className='flex justify-between items-center'>
                        <h2 className='text-black'>Transportation <span className='text-gray-800'>(15.16 miles)</span></h2>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
                        </div>
                        <div className='flex justify-between items-center'>
                        <h2 className='text-black'>Education Mandarin <span className='text-gray-800'>(15.16 miles)</span></h2>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        
                        </div>
                    </div>
                    
                 </div>
                    </div>
                    <div className='lg:p-10 p-5 space-y-5 bg-white shadow-md '>
            <h2 className='text-black text-2xl font-medium'>3Reviews</h2>
            <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
            <div  className='space-y-4 max-h-[500px] overflow-y-auto'>
            <PropertyReview></PropertyReview>
            <PropertyReview></PropertyReview>
            <PropertyReview></PropertyReview>
            </div>
            </div>
            <div className='lg:p-10 p-5 space-y-5 bg-white shadow-md '>
            <h2 className='text-black text-2xl font-medium'>Add Review</h2>
            <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
            <div  className='space-y-4 max-h-[500px] overflow-y-auto'>
           <AddReview></AddReview>
            </div>

            </div>
            <div className='p-10 space-y-5  '>
            <h2 className='text-black text-2xl font-medium'>Similar Properties</h2>
            <div className='border-t-4 border-[#ff385c] w-[8%]'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                <ColumnCard></ColumnCard>
                <ColumnCard></ColumnCard>
            </div>
            </div>
                </div>
                <div className='lg:w-[30%] relative'>
                    <SideComponent agent={property?.agentInformation}></SideComponent>
                </div>
                </div>
            </Container>
       </div>
       <Footer></Footer>
        </div>
    );
}

export default PropertyDetails;
