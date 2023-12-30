import React from 'react';
import Container from '../Reuse/Container/Container';
import Heading from '../Reuse/Heading/Heading';
import ColumnCard from '../Reuse/PropertyCard/ColumnCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
const PopularProperties = () => {
    return (
        <div className='font-pop py-10  bg-[#ff385c]'>
         <Container>
            <Heading heading={'Discover Popular Properties'} title={'We provide full service at every step'} color={'text-white'}></Heading>
            <div className='py-6 '>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper" >
            <SwiperSlide>
                <ColumnCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ColumnCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ColumnCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ColumnCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ColumnCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ColumnCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ColumnCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ColumnCard/>
            </SwiperSlide>
            </Swiper>
               </div>
         </Container>
        </div>
    );
}

export default PopularProperties;
