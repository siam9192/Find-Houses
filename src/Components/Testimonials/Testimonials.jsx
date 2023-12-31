import React from 'react';
import Container from '../Reuse/Container/Container';
import Heading from '../Reuse/Heading/Heading';
import Review from './Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
      <div className='py-10 bg-[#f5f7fb]'>
          <Container>
              <Heading heading={'Clients Testimonials'} title={'We collect reviews from our customers'}></Heading>
              <div className='py-5 lg:px-0 px-2'>
                  <Swiper
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
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
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper" >
                 <SwiperSlide>
                  <Review></Review>
                 </SwiperSlide>
                 <SwiperSlide>
                  <Review></Review>
                 </SwiperSlide>
                 <SwiperSlide>
                  <Review></Review>
                 </SwiperSlide>
                 <SwiperSlide>
                  <Review></Review>
                 </SwiperSlide>
    </Swiper>
                  </div>
          </Container>
      </div>
  );
}

export default Testimonials;