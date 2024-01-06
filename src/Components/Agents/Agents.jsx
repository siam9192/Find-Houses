import Container from '../Reuse/Container/Container';
import Heading from '../Reuse/Heading/Heading';
import Agent from './Agent';

const Agents = () => {
    return (
        <div className='py-10'>
            <Container>
                <Heading heading={'Meet our agents'} title={'Our agents are here to help you'}></Heading>
             <div className='py-6 lg:px-0 px-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
             <Agent></Agent>
             <Agent></Agent>
             <Agent></Agent>
             <Agent></Agent>
             <Agent></Agent>
             </div>
            </Container>
        </div>
    );
}

export default Agents;
