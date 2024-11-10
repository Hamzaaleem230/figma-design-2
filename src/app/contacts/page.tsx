export const metadata = {
  title: "Contacts"
};

import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

const page = () => {
  return (
    <div className='w-[1000px] h-[1100px]'>
      {/* <h1 className='heading'>
       Contact
       </h1>
       <h1 className='head'>
         Information
       </h1>
       <h1 className='company'>
         Company Name
       </h1>
       <p className='parah'>1234 Sample Street Austin Texas 76401</p>
       <h1 className='numbers'>
       512.333.2222
       </h1>
       {/* <a href="#!" className='mail'>sampleemail@gmail.com</a> 
       <a href="mailto:sampleemail@gmail.com" className='mail'>
                         <AiOutlineMail className='size'/>
                         sampleemail@gmail.com</a>
                         <button className='click'><a href="#!"><h1 className='centered-button'>Contact Us</h1></a></button>*/}
                         <img className='absolute w-[800px] h-[400px] left-[600px] top-[286px]' src="/image 12.png" alt="pic" />
                         <h1 className="absolute text-30xl w-[312px] h-[64px] left-[135px] top-[200px] font-Roboto font-light text-[64px] leading-[64px] text-[#BDBDBD]">Contact Us</h1>
                  <input className="absolute w-[391px] h-[46px] left-[135px] top-[300px] bg-[#F3F3F3] pl-[20px]" type="text" placeholder="Name" />
                  <input className="absolute w-[391px] h-[45px] left-[135px] top-[360px] bg-[#F3F3F3] pl-[20px]" type="text" placeholder="Phone Number*" />
                  <input className="absolute w-[391px] h-[46px] left-[135px] top-[420px] bg-[#F3F3F3] pl-[20px]" type="text" placeholder="E-mail*" />
                  <input className="absolute w-[391px] h-[45px] left-[135px] top-[480px] bg-[#F3F3F3] pl-[20px]" type="text" placeholder="Interested In"/>
                  <textarea className="absolute w-[391px] h-[147px] left-[135px] top-[540px] bg-[#F3F3F3] pl-[20px] py-3"  placeholder="Message*"/>
                  <button className="absolute w-[222px] h-[71px] left-[135px] top-[705px] bg-[#333333]"></button>
                  <a href="#!"><img className="absolute w-[126px] h-[24px] left-[182px] top-[728px]" src="/Group email.png" alt="button" /></a>
    </div>
  )
}

export default page


