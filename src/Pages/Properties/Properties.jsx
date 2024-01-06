import React, { useEffect, useState } from 'react';
import Container from '../../Components/Reuse/Container/Container';
import Navbar2 from '../../Components/Reuse/Navbar2/Navbar2';
import { MdKeyboardArrowDown, MdOutlineSort } from "react-icons/md";
import { BsFillGridFill, BsFillUsbCFill } from "react-icons/bs";
import { CgLayoutList } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineBed } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { LuTriangleRight } from "react-icons/lu";
import { PiGarage } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { PiShareFat } from "react-icons/pi";
import { MdHome } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import ColumnCard from '../../Components/Reuse/PropertyCard/ColumnCard'
import FlexCard from '../../Components/Reuse/PropertyCard/FlexCard'
import { useQuery } from '@tanstack/react-query';
import AxiosBase from '../../Axios/AxiosBase';
import { FaList } from 'react-icons/fa6';
import Navbar from '../../Components/Reuse/Navbar/Navbar';
import { useNavigate, useSearchParams } from 'react-router-dom';
const Properties = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [layOutType, setLayOutType] = useState('grid');
    const [sortBy, setSortBy] = useState(null);
    const [keyword,setKeyword] = useState('');
    const navigate = useNavigate();
    const [pages,setPages] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const params = useSearchParams()[0]
  console.log(params)
    // handle all dropdowns
    const [locationMenu, setLocationMenu] = useState(false);
    const [propertyMenu, setPropertyMenu] = useState(false);
    const [bedroomsMenu, setBedroomsMenu] = useState(false);
    const [bathroomsMenu, setBathroomsMenu] = useState(false);

    // all drop down value

    const [location, setLocation] = useState(params.get('location')|| null);
    const [propertyStatus, setPropertyStatus] = useState(params.get('status')||null);
    const [bedrooms, setBedrooms] = useState(params.get('bedrooms')||null);
    const [bathrooms, setBathrooms] = useState(params.get('bathrooms')||null);


    // all drop down value in array
    const locationValues = ["Los Angeles","Chicago","San Francisco","Miami","Houseton"];
    const propertyStatusValues = ['Rent', 'Sale'];
    const bedroomsValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const bathroomsValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const searchParams = `key=${keyword}&location=${location}&status=${propertyStatus}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`



    const { data: properties = [], isLoading, refetch } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const response = await AxiosBase().get(`/properties?${searchParams}`)
            return response.data;
        }
    })

    useEffect(()=>{
        refetch()
        const total = properties.length
        
        const pageCount = Math.ceil(total/6);
      
        const array = []
        for(let i = 1 ; i <= pageCount; i++ ){
          array.push(i)   
        }
        setPages([...array])
       
    },[])
    const handleLayout = (layout) => {
        setLayOutType(layout);
    }
    const handleSort = (sortType) => {
        setSortBy(sortType)
    }

    //   handle all search menu
    function handleLocationMenu() {
        setPropertyMenu(false)
        setBedrooms(false)
        setBathroomsMenu(false)
        setLocationMenu(!locationMenu)
    }
    function handlePropertyMenu() {
        setLocationMenu(false)
        setBathroomsMenu(false)
        setBedroomsMenu(false)
        setPropertyMenu(!propertyMenu)
    }
    function handleBedroomsMenu() {
        setLocationMenu(false)
        setPropertyMenu(false)
        setBathroomsMenu(false)
        setBedroomsMenu(!bedroomsMenu)
    }
    function handleBathroomsMenu() {
        setLocationMenu(false)
        setPropertyMenu(false)
        setBedroomsMenu(false)
        setBathroomsMenu(!bathroomsMenu)
    }

    // set all dropdown value 
    function handleLocationValue(value) {
        setLocation(value)
    }
    function handlePropertyStatusValue(value) {
        setPropertyStatus(value)
    }
    function handleBedroomsValue(value) {
        setBedrooms(value)
    }
    function handleBathRoomsValue(value) {
        setBathrooms(value)
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
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#f5f7fb] font-pop'>
                <Container>
                    <div>

                    </div>
                    <div className='py-10 mt-32 lg:px-20 px-5 lg:flex gap-10'>
                        <div className='lg:w-[70%] space-y-10'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className='lg:text-xl text-black'>{properties.length} Search Results</h2>

                                </div>
                                <div className='flex items-center gap-3 '>
                                    <div className='flex items-center gap-2 hover:cursor-pointer'>
                                        <div className='flex items-center  gap-2'>
                                            <MdOutlineSort className='text-xl'></MdOutlineSort><h2 className='text-black font-semibold'>SORTBY</h2>
                                        </div>
                                        <div >
                                            <select name="" id="" className='w-full bg-transparent text-black hover:cursor-pointer'>
                                                <option value="top selling" className='hover:bg-[#ff385c]'>Top selling</option>
                                                <option value="low-high">Low to High</option>
                                                <option value="high-low">High to Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 '>
                                        <div className={`p-2 ${layOutType === 'grid' ? 'bg-[#ff385c]' : 'bg-black'} text-white hover:cursor-pointer `} onClick={() => {
                                            handleLayout('grid')
                                        }}>
                                            <BsFillGridFill></BsFillGridFill>
                                        </div>
                                        <div className={`p-2 ${layOutType === 'list' ? 'bg-[#ff385c]' : 'bg-black'} text-white hover:cursor-pointer`} onClick={() => {
                                            handleLayout('list')
                                        }}>
                                            <FaList></FaList>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                layOutType === 'grid' ?
                                    <div className='grid md:grid-cols-2 gap-5'>
                                        {  properties.slice((currentPage-1)*6,((currentPage-1)*6)+6).map(item => <ColumnCard id={item._id} image={item.photos[0]} title={item.title} details={item.details} address={item.location.address} key={item._id}></ColumnCard>)}
                                    </div>
                                    :
                                    <div className='space-y-4'>
                                        {
                                            properties?.map((item, index) => {
                                                return <FlexCard id={item._id} image={item.photos[0]} title={item.title} details={item.details} address={item.location.address} key={index}></FlexCard>
                                            })
                                        }
                                    </div>
                            }
                            {/* Pagination */}
                        { properties.length > 0 &&  <div className='flex justify-center items-center'>
                            <div className='flex items-center gap-3 px-5'>
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md' onClick={prevPage}>Previous</button>
    {
        pages.map((page,index)=>{
            return <button className={`px-4 py-2 ${currentPage === page ? 'bg-black text-white' : ''} hover:bg-[#ff385c] border-2 border-[#ff385c] text-black hover:text-white rounded-md`} onClick={()=>handleCurrentPage(page)} key={index}>{page}</button>
        })
    }
    <button className='px-6 py-3 bg-[#ff385c] text-white rounded-md' onClick={nextPage}>Next</button>
  </div>
                          
                            </div> }
                        </div>

                        <div className='lg:w-[30%] space-y-10 font-pop '>
                            <div className='p-5 shadow-lg bg-white space-y-4 rounded-lg'>
                                <h1 className='text-black text-2xl pb-3 border-b-2 border-gray-200'>Find House</h1>
                                <div className='space-y-6'>
                                    <input type="text" placeholder='Enter Keyword...' className='w-full py-3 px-2 border-2 border-gray-400 rounded-md text-black ' onChange={(e)=>setKeyword(e.target.value)} />
                                    <div className='relative' onClick={handleLocationMenu}>
                                        <div className='w-full py-3 px-2 border-2 border-gray-400 rounded-md  bg-white flex justify-between items-center text-xl text-gray-600 hover:cursor-pointer'>
                                            <div className='flex items-center gap-3'><MdLocationPin></MdLocationPin> <h2>{location || "Location"} </h2></div> {propertyMenu ? <MdKeyboardArrowDown></MdKeyboardArrowDown> : <MdKeyboardArrowUp></MdKeyboardArrowUp>}
                                        </div>
                                        <div className={`bg-black text-white  w-full absolute mt-2  left-2 transition ease-in-out delay-200  shadow-xl rounded-lg border-[1px] ${locationMenu ? 'block' : 'hidden'} z-10`}>
                                            {
                                                locationValues.map((lo, index) => {
                                                    return <div className='w-full   py-3 px-6  hover:bg-[#ff385c] hover:text-white hover:cursor-pointer ' key={index} onClick={() => {handleLocationValue(lo) }}>
                                                        {
                                                       lo
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                      
                                    </div>
                                    <div className='relative' onClick={handlePropertyMenu}>
                                        <div className='w-full py-3 px-2 border-2 border-gray-400 rounded-md  bg-white flex justify-between items-center text-xl text-gray-600 hover:cursor-pointer'>
                                            <div className='flex items-center gap-3'><MdHome></MdHome><h2>{propertyStatus || "Property Status"}</h2></div> {propertyMenu ? <MdKeyboardArrowDown></MdKeyboardArrowDown> : <MdKeyboardArrowUp></MdKeyboardArrowUp>}
                                        </div>
                                        <div className={`bg-black text-white  w-full absolute mt-2  left-2 transition ease-in-out delay-200  shadow-xl rounded-lg border-[1px] ${propertyMenu ? 'block' : 'hidden'} z-10 `}>
                                            {
                                                propertyStatusValues.map((status, index) => {
                                                    return <div className='w-full   py-3 px-6  hover:bg-[#ff385c] hover:text-white hover:cursor-pointer ' key={index} onClick={() => { handlePropertyStatusValue(status) }}>
                                                        {
                                                            status
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='relative' onClick={handleBedroomsMenu}>
                                        <div className='w-full py-3 px-2 border-2 border-gray-400 rounded-md  bg-white flex justify-between items-center text-xl text-gray-600 hover:cursor-pointer'>
                                            <div className='flex items-center gap-3'><LiaBathSolid></LiaBathSolid> <h2>{bedrooms || ""} Bedrooms</h2></div> {bedroomsMenu ? <MdKeyboardArrowDown></MdKeyboardArrowDown> : <MdKeyboardArrowUp></MdKeyboardArrowUp>}
                                        </div>
                                        <div className={`bg-black text-white  w-full absolute mt-2  left-2 transition ease-in-out delay-200  shadow-xl rounded-lg border-[1px] ${bedroomsMenu ? 'block' : 'hidden'} z-10`}>
                                            {
                                                bedroomsValue.map((room, index) => {
                                                    return <div className='w-full   py-3 px-6  hover:bg-[#ff385c] hover:text-white hover:cursor-pointer ' key={index} onClick={() => { handleBedroomsValue(room) }}>
                                                        {
                                                            room
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>


                                    <div className='relative' onClick={handleBathroomsMenu}>
                                        <div className='w-full py-3 px-2 border-2 border-gray-400 rounded-md  bg-white flex justify-between items-center text-xl text-gray-600 hover:cursor-pointer'>
                                            <div className='flex items-center gap-3'><MdHome></MdHome><h2>{bathrooms} Bathrooms</h2></div> {propertyMenu ? <MdKeyboardArrowDown></MdKeyboardArrowDown> : <MdKeyboardArrowUp></MdKeyboardArrowUp>}
                                        </div>
                                        <div className={`bg-black text-white  w-full absolute mt-2  left-2 transition ease-in-out delay-200  shadow-xl rounded-lg border-[1px] ${bathroomsMenu ? 'block' : 'hidden'} z-10`}>
                                            {
                                                bathroomsValue.map((room, index) => {
                                                    return <div className='w-full   py-3 px-6  hover:bg-[#ff385c] hover:text-white hover:cursor-pointer ' key={index} onClick={() => {handleBathRoomsValue(room) }}>
                                                        {
                                                            room
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                      
                                    </div>


                                    <button className='w-full bg-[#ff385c] hover:bg-[#292525] py-2 text-white rounded-md' onClick={()=>{navigate(`/properties?${searchParams}`)
                                    refetch()
                                    }}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Properties;
