import Container from '../Reuse/Container/Container';
import Heading from '../Reuse/Heading/Heading'
import Marquee from "react-fast-marquee";
const Partners = () => {
    return (
        <div className='py-10 font-pop'>
           
                <Heading heading={'Our Partners'} title={'The companies that represents us'}></Heading>
                <div className='py-6'>
                    <Marquee>
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        <img src="https://i.ibb.co/JqvGxBD/pngwing-com-7.png" alt="" className='w-52' />
                        
                    </Marquee>
                </div>
        </div>
    );
}

export default Partners;
