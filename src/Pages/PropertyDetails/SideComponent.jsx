import React, { useState } from 'react';
import { FaCalendarAlt, FaMinus, FaPlus } from "react-icons/fa";
import { CiLocationOn } from 'react-icons/ci';
import { GrMail } from 'react-icons/gr';
import { MdCall } from 'react-icons/md';
import UserAuth from '../../Authentication/userAuth/userAuth';
import AxiosBase from '../../Axios/AxiosBase';
const SideComponent = ({dangerouslySetInnerHTML,agent,id}) => {
    const [adult,setAdult] = useState(0);
    const [children,setChildren] = useState(0);
    const [messageSending,setMessageSending] = useState(false)
    const {user}   = UserAuth();
    const increaseAdult = ()=>{
    const value = adult + 1;
    setAdult(value)
    }
  
    const decreaseAdult = ()=>{
        const value = adult - 1;
        if(value < 0){
            return;
        }
        setAdult(value)
    }
    const increaseChildren = ()=>{
        const value = children + 1;
        setChildren(value)
        }
     
        const decreaseChildren = ()=>{
            const value = children - 1;
            if(value < 0){
                return;
            }
            setChildren(value)
        }
    const sendMessage = async(e) =>{
        setMessageSending(true)
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const phone = form.name.value;
        const email = form.email.value;
        const text = form.text.value.replace(/\n/g, '<br>');
        const message = {
            property_id: id,
            user_email: user.email,
            message:{
            name,
            phone,
            email,
            text,
            }
        }
    const response = await  AxiosBase().post('/user/message',message)
    const result = response.data;
    if(result.insertedId){
        setMessageSending(false);
        form.reset();
    }
     
      
        
    }
    return (
        <div className='space-y-5'>
            {/* <div className='bg-white p-5 shadow-md'>
                <div className='flex items-center gap-3 text-xl pb-5 border-b-2'>
                    <FaCalendarAlt className='text-[#ff385c]'></FaCalendarAlt> <h2 className='text-black'>Schedule a Tour</h2>
                </div>
                <div className='flex gap-2 pt-5'>
                <input type="date"  className='w-1/2 p-1 border-2 outline-none'/>
                <input type="datetime" className='w-1/2 p-1 border-2 outline-none'/>
              
                </div>
                <div className='flex gap-4 pt-5'>
                <div className='w-1/2'>
                    <h2 className='text-black text-xl'>Adult</h2>
                    <div className='gap-3 flex items-center '>
             <FaPlus className='text-[#ff385c]' onClick={increaseAdult}></FaPlus>
                    <input type="text" value={adult} className='w-full py-3 text-center'  />
                    <FaMinus className='text-[#ff385c]' onClick={decreaseAdult}></FaMinus>
             </div>
                </div>
                <div className='w-1/2'>
                <h2 className='text-black text-xl'>Children</h2>
             <div className='gap-3 flex items-center '>
             <FaPlus className='text-[#ff385c]' onClick={increaseChildren}></FaPlus>
                    <input type="text" value={children} className='w-full py-3 text-center' />
                    <FaMinus className='text-[#ff385c]' onClick={decreaseChildren}></FaMinus>
             </div>
                </div>
               
                </div>
                <button className='w-full bg-[#ff385c] text-white mt-4 py-3 rounded-lg'>Submit Request</button>
            </div> */}
            <div className='bg-white space-y-3 shadow-md p-5'>
                <h1 className='text-black text-xl'>Agent Information</h1>
                <div className='py-2 border-t-2 border-gray-500 space-y-3'>
                    <div className='flex gap-2'>
                        <img src="/images/agents/1.jpg" alt="" className='w-14 h-14 rounded-full'/>
                       <div className='space-y-1'>
                        <h2 className='text-xl text-black'>{agent?.name}</h2>
                        <p>Agent of property</p>

                       </div>
                    </div>
                    <div className='space-y-4 pt-3'>
                        <div className='flex items-center gap-3 '>
                            <GrMail className='text-[#ff385c]'></GrMail><h3>{agent?.email}</h3>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <MdCall className='text-[#ff385c]'></MdCall><h3>{agent?.phone}</h3>
                        </div>
                    </div>
                    <form action="" className='py-3 space-y-2' onSubmit={sendMessage}>
                    <h2 className='text-xl text-black'>Request Inquiry</h2>
                     <div className='space-y-3'>
                        <input type="text" name='name' placeholder='Full Name' className='w-full p-2 border-2 '/>
                        <input type="text" name='phone' placeholder='Phone Number' className='w-full p-2 border-2 '/>
                        <input type="text" name='email' placeholder='Email Address' className='w-full p-2 border-2 '/>
                        <textarea name="text" placeholder='Message' className='w-full p-2 border-2 h-52 resize-none rounded-lg'></textarea>
                        <button disabled={messageSending} className='w-full bg-[#ff385c] hover:bg-[#302c2c] text-white mt-4 py-3 rounded-md'>{messageSending?'Sending...' : 'Send Massage'}</button>
                     </div>
                    
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SideComponent;
