import React from 'react';
import Heading from '../Reuse/Heading/Heading';
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import Container from '../Reuse/Container/Container';
const Services = () => {
    return (
        <div className='font-pop py-5'>
            <Heading heading={'Why chose us'} title={'We provide full service at every step'}></Heading>
            <Container>
                <div className='py-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-0 px-2'>
                    <div className='space-y-2 border-2 p-2'>
                        <div className='flex justify-center items-center text-7xl text-[#ff385c]'>
                            <MdOutlineMapsHomeWork ></MdOutlineMapsHomeWork>
                        </div>
                        <h2 className='text-2xl text-black text-center'>Financing made easy</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed porro! Eius, placeat. Natus ut obcaecati asperiores aut quidem explicabo modi nemo vel libero?</p>
                
                    </div>
                    <div className='space-y-2 border-2 p-2'>
                        <div className='flex justify-center items-center text-7xl text-[#ff385c]'>
                          <FaRegHandshake></FaRegHandshake>
                        </div>
                        <h2 className='text-2xl text-black text-center'>Trusted by thousands</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed porro! Eius, placeat. Natus ut obcaecati asperiores aut quidem explicabo modi nemo vel libero?</p>
                
                    </div>
                    <div className='space-y-2 border-2 p-2'>
                        <div className='flex justify-center items-center text-7xl text-[#ff385c]'>
                          <GiWallet></GiWallet>
                        </div>
                        <h2 className='text-2xl text-black text-center'>Financing made easy</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed porro! Eius, placeat. Natus ut obcaecati asperiores aut quidem explicabo modi nemo vel libero?</p>
                
                    </div>
                    <div className='space-y-2 border-2 p-2'>
                        <div className='flex justify-center items-center text-7xl text-[#ff385c]'>
                          <GrMapLocation></GrMapLocation>
                        </div>
                        <h2 className='text-2xl text-black text-center'>We are here near you</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed porro! Eius, placeat. Natus ut obcaecati asperiores aut quidem explicabo modi nemo vel libero?</p>
                
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Services;
