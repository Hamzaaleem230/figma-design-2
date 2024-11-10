import React from 'react'
import { FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";
import Link from 'next/link';
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { ImLinkedin2 } from "react-icons/im";
import { LiaPinterestP } from "react-icons/lia";

const Footer = () => {
  return (
    <div>
        <footer className='bg-[#2C2C2C] py-8 px-10 text-white flex justify-around h-[417px]'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 '>
              <div>
                <img src="/logo.png" alt="logo" />
              </div>
                <div>
                    <h3 className='text-xl font-bold mb-4'>Information</h3>
                    <ul className='space-y-2 text-lg'>
                        <li className='pt-3'>Main</li>
                        <li className='pt-1'>Gallery</li>
                        <li className='pt-1'>Projects</li>
                        <li className='pt-1'>Certifications</li>
                        <li className='pt-1'>Contacts</li>
                    </ul>
                </div>
                {/* <div>
                <h3 className='text-xl font-bold mb-4'>Contacts</h3>
                <div className='flex '>
                  <img className='absolute' src="/Vector.png" alt="location" />
                <ul className='space-y-2 text-lg'>
                    <li className='pt-3'>1234 Sample Street <br />
                    Austin Texas 78704</li>
                    {/* <li className='pt-7'>512.333.2222</li>
                    <li className='pt-5'>sampleemail@gmail.com</li>
                </ul>
                </div>
                </div>  */}
                   <div>
                  <h3 className='text-xl font-bold mb-4'>Contacts</h3>
                  <div className='flex space-x-1'>
                  <picture className='mt-3 py-1'><IoLocationOutline /></picture>
                  <ul className='space-y-2 text-lg'>
                    <li className='pt-3'>1234 Sample Street <br />
                    Austin Texas 78704</li>
                    {/* <li className='pt-3'>512.333.2222</li>
                    <li className='pt-3'>sampleemail@gmail.com</li> */}
                    <div className='flex items-center pr-1'>
                    <div className='mr-2 mt-4 py-1'><LuPhone /></div>
                    <div className='pt-7'>512.333.2222</div>
                  </div>
                  <div className='pt-6'>
                  <a href="mailto:sampleemail@gmail.com" className='text-white underline flex items-center gap-3'>
                        <AiOutlineMail className='size-5'/>
                        sampleemail@gmail.com</a>
                  </div>
                    </ul>
                    </div>
                  </div>
                  

                <div>
                    <h3 className='text-xl font-bold mb-4'>Social Links</h3>
                    <div className='flex space-x-4 mb-4'>
                        <Link href="#"><FaFacebookF className='text-white w-7 h-7 pt-1 pb-1'/></Link>
                        <Link href="#"><FaTwitter className='text-white w-7 h-7 pt-1 pb-1'/></Link>
                        <Link href="#"><ImLinkedin2 className='text-[#2C2C2C] w-6 h-6 rounded-1xl bg-white pt-1 pb-1' /></Link>
                        <Link href="#"><LiaPinterestP className='text-white w-8 h-8 pt-1 pb-1'/></Link>
                        
                    </div>
                </div>
                <hr className='hr'/><hr className='hr2' /><hr className='hr3' /><hr className='hr4' />
                <div className='copyright'>
                  © 2021 All Rights Reserved
                  </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer