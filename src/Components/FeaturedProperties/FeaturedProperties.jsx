import React from 'react';
import Heading from '../Reuse/Heading/Heading';
import FlexCard from '../Reuse/PropertyCard/FlexCard';
import Container from '../Reuse/Container/Container';
import { FaCircleArrowRight } from "react-icons/fa6";
const FeaturedProperties = () => {
    return (
        <div className='bg-[#f5f7fb] py-10'>
          <Container>
          <Heading heading={'Featured Properties'} title={'These is our featured properties'}></Heading>
            <div className='py-5 grid grid-cols-1 md:grid-cols-2 gap-10'>
                <FlexCard></FlexCard>
                <FlexCard></FlexCard>
                <FlexCard></FlexCard>
                <FlexCard></FlexCard>
                <FlexCard></FlexCard>
                <FlexCard></FlexCard>
            </div>
            <div className='flex justify-center items-center'><button className='px-4 py-3 bg-[#ff385c] rounded-full flex items-center gap-2 text-white font-pop text-xl'><span>View more</span><span><FaCircleArrowRight></FaCircleArrowRight></span></button></div>
          </Container>
        </div>
    );
}

export default FeaturedProperties;
