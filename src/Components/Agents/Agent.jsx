import React from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Agent = () => {
    return (
        <div className='border-2 relative'>
            <img src="/images/agents/1.jpg" alt="" className='h-72 w-full' />
            <div className='p-2 font-pop'>
                <h1 className='text-2xl text-black text-center font-semibold'>Carlos Jhon</h1>
                <p className='text-xl text-center'>Real Estate Agent</p>
            </div>
            <div className='absolute top-0 right-0 bg-black bg-opacity-20 text-white text-xl py-1'>
              <div className='p-2'>
                <FaFacebook></FaFacebook>
              </div>
              <div className=' border- border-white border-t-2 border-b-2'>
               <div className='p-2'>
               <FaTwitter></FaTwitter>
               </div>
              </div>
              <div className=' border- border-white border-t- border-b-2'>
               <div className='p-2'>
             <FaInstagram></FaInstagram>
               </div>
              </div>
              <div className='p-2'>
                <FaLinkedin></FaLinkedin>
              </div>
            </div>
        </div>
    );
}

export default Agent;
