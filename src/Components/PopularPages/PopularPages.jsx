import Container from '../Reuse/Container/Container';
import React from 'react';
import PopularCard from './PopularCard';
import Heading from '../Reuse/Heading/Heading';

const PopularPages = () => {
    const locationValues = ["Los Angeles","Chicago","San Francisco","Miami","Houseton"];
    return (
        <div className='font-pop py-10'>
           <Container>
          <Heading heading={'Popular Pages'} title={'Properties In Most Popular Places'}></Heading>
            <div className='pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:px-0 px-2'>
             
               {
                locationValues.map(location=>{
                    return   <PopularCard area={location} properties={307}></PopularCard>
                })
               }
            </div>
           </Container>
        </div>
    );
}

export default PopularPages;
