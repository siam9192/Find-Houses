import React from 'react';
import Banner from '../../Components/Banner/Banner';
import PopularPages from '../../Components/PopularPages/PopularPages';
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties';
import Services from '../../Components/Services/Services';
import PopularProperties from '../../Components/PopularProperties/PopularProperties';
import Agents from '../../Components/Agents/Agents';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Partners from '../../Components/Partners/Partners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='pt-10 space-y-10'>
                <PopularPages></PopularPages>
                {/* <FeaturedProperties></FeaturedProperties> */}
                <Services></Services>
                <PopularProperties></PopularProperties>
                <Agents></Agents>
                <Testimonials></Testimonials>
                <Partners></Partners>
            </div>
        </div>
    );
}

export default Home;
