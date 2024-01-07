import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { GrMail } from 'react-icons/gr';
import { MdCall } from 'react-icons/md';
import { TbHomeSignal } from "react-icons/tb";
import { CiTwitter } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { GoArrowUp } from "react-icons/go";
const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-y-0 space-y-5 bg-[#303441] py-20 px-4 font-pop text-white'>
                <div className='space-y-3 text-white'>
                   <div className='flex items-center gap-2'>
                   <TbHomeSignal className='text-white text-7xl'></TbHomeSignal><div>
                <h3 className={` font-semibold md:text-4xl text-2xl`}>Find<span className='text-[#ff385c] '>House</span></h3>
        </div>
                   </div>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, exercitationem!</p>
                   <div className='flex items-center gap-2 '>
                    <CiLocationOn ></CiLocationOn> <p>95 South Park Avenue, USA</p>
                   </div>
                   <div className='flex items-center gap-2 '>
                    <MdCall ></MdCall> <p>+456 875 369 208</p>
                   </div>
                   <div className='flex items-center gap-2 '>
                    <GrMail ></GrMail> <p>+456 875 369 208</p>
                   </div>
                </div>
                <div className='space-y-3'>
                <div>
                <h1 className='text-xl'>Navigation</h1>
                    <div className=' border-b-4 border-[#ff385c] pb-2 w-[20%]'>
                    </div>
                </div>
                    <div className='flex gap-3'>
                        <div>
                            {/* <ul className='space-y-2'>
                               <div className='border-b-2 w-full pb-2'>
                               <a href="" className='pb-2  '>Home one</a>
                               </div>
                               <div className='border-b-2 w-full pb-2'>
                               <a href="" className='pb-2  '>Home one</a>
                               </div>
                               <div className='border-b-2 w-full pb-2'>
                               <a href="" className='pb-2  '>Home one</a>
                               </div>
                               <div className='border-b-2 w-full pb-2'>
                               <a href="" className='pb-2  '>Home one</a>
                               </div>
                            </ul> */}
                        </div>
                        <div>
                            {/* <ul className='space-y-2'>
                               <div className='border-b-2 w-full pb-2'>
                               <a href="" className='pb-2  '>Home one</a>
                               </div>
                               <div className='border-b-2 w-full pb-2'>
                               <a href="" className='pb-2  '>Home one</a>
                               </div>
                               <div className='border-b-2 w-full pb-2'>
                               <a href="" className='pb-2  '>Home one</a>
                               </div>
                               <div className='border-b-2 w-full pb-2'>
                               <a href="" className='pb-2  '>Home one</a>
                               </div>
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div>
                <div className='space-y-3'>
                <div>
                <h1 className='text-xl'>Twitter Feeds</h1>
                    <div className=' border-b-4 border-[#ff385c] pb-2 w-[20%]'>
                    </div>
                </div>
                    
                </div>
                </div>
                <div>
                <div className='space-y-3'>
                <div>
                <h1 className='text-xl'>News Letters</h1>
                    <div className=' border-b-4 border-[#ff385c] pb-2 w-[20%]'>
                    </div>
                </div>
                    <p>Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.</p>
                    <div className='flex items-center'>
                    <input type="text" placeholder='Enter You Email' className='w-52 py-3 px-2 bg-[#454954] border-none outline-none'/> <button className='py-3 px-3 bg-[#ff385c] text-white'>Subscribe</button>
                    </div>
                </div>
                </div>
            </div>
            <div className='border-t-2 py-4 bg-[#303441] text-white px-4 flex justify-between items-center'>
                <p>2021 © Copyright - All Rights Reserved.</p>
                <div className='flex items-center text-xl gap-4'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    <div className='py-4 px-2 bg-[#ff385c] rounded-lg'>
                        <GoArrowUp></GoArrowUp>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
