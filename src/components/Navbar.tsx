"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="absolute w-[1440px]  h-[102px] left-0 top-0 flex items-center justify-center mt-[30px] p-2">
        <header>
        <nav>
            <div>
                <img 
                src='/Group 11.png'
                alt='logo'
                className='absolute left-[9.38%] right-[85.76%] top-[0.72%] bottom-[98.2%] mt-0'
                />
            </div>
            <div>
                {/* <img className="absolute left-[37.15%] right-[58.12%] top-[0.98%] bottom-[98.99%] bg-[#333333]" src="/Rectangle 19.png" alt="line" /> */}
                <ul className='flex space-x-10'>
                    <li><Link href="/" className='absolute left-[38.12%] right-[57.15%] top-[1.1%] bottom-[98.61%] font-roboto font-normal text-[12px] leading-[12px] tracking-[0.2em] uppercase text-[#333333]'>MAIN</Link></li>
                    <li><Link href="/gallery" className="absolute  left-[46.04%] right-[49.44%] top-[1.1%] bottom-[98.6%] font-roboto font-normal text-[12px] leading-[12px] tracking-[0.2em] uppercase text-[#333333]">GALLERY</Link></li>
                    <li><Link href="/projects" className='absolute left-[54.79%] right-[39.93%] top-[1.11%] bottom-[98.62%] font-roboto font-normal text-[12px] leading-[12px] tracking-[0.2em] uppercase text-[#333333]'>PROJECTS</Link></li>
                    <li><Link href="/certifications" className='absolute left-[63.89%] right-[27.57%] top-[1.11%] bottom-[98.62%] font-roboto font-normal text-[12px] leading-[12px] tracking-[0.2em] uppercase text-[#333333]'>CERTIFICATIONS</Link></li>
                    <li><Link href="/contacts" className='absolute left-[75.83%] right-[18.68%] top-[1.1%] bottom-[98.61%] font-roboto font-normal text-[12px] leading-[12px] tracking-[0.2em] uppercase text-[#333333]'>CONTACTS</Link></li>
                </ul>
            </div>
        </nav>
        </header>
    </div>
  )
}

export default Navbar