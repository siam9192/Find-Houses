import React from 'react';
import Container from '../Reuse/Container/Container';
import Heading from '../Reuse/Heading/Heading';
import ColumnCard from '../Reuse/PropertyCard/ColumnCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
const PopularProperties = ({properties=[]}) => {
  console.log(properties)
    return (
        <div className='font-pop py-10  bg-[#ff385c]'>
         <Container>
            <Heading heading={'Discover Popular Properties'} title={'We provide full service at every step'} color={'text-white'}></Heading>
            <div className='py-6 lg:px-0 px-2'>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                }
              }}
            spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper" >
            {
              properties.map(item=>{
                return <SwiperSlide key={item._id}>
              <ColumnCard id={item._id} image={item.photos[0]} title={item.title} details={item.details} address={item.location.address} key={item._id}></ColumnCard>
            </SwiperSlide>
              })
            }
            </Swiper>
               </div>
         </Container>
        </div>
    );
}

export default PopularProperties;
