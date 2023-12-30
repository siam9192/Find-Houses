import Container from '../Reuse/Container/Container';
import React from 'react';
import PopularCard from './PopularCard';
import Heading from '../Reuse/Heading/Heading';

const PopularPages = () => {
    return (
        <div className='font-lato py-10'>
           <Container>
          <Heading heading={'Popular Pages'} title={'Properties In Most Popular Places'}></Heading>
            <div className='pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               <PopularCard area={'Los Angels'} properties={307}></PopularCard>
               <PopularCard area={'Los Angels'} properties={307}></PopularCard>
               <PopularCard area={'Los Angels'} properties={307}></PopularCard>
               <PopularCard area={'Los Angels'} properties={307}></PopularCard>
               <PopularCard area={'Los Angels'} properties={307}></PopularCard>
               <PopularCard area={'Los Angels'} properties={307}></PopularCard>
            </div>
           </Container>
        </div>
    );
}

export default PopularPages;
