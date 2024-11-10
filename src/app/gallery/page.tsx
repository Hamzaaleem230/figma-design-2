export const metadata = {
  title: "Gallery"
};

import React from 'react'

const page = () => {
  return (
    <div className='w-[1440px] h-[1260px]'>
        <h1 className='absolute w-[277.76px] h-[64px] left-[135px] top-[165px] font-roboto font-light text-[64px] leading-[64px] text-[#BDBDBD]'>
        Photo
        </h1>
        <h1 className='absolute w-[203px] h-[64px] left-[135px] top-[229px] font-roboto font-bold text-[64px] leading-[64px] text-[#333333]'>
        Gallery
        </h1>
        <hr className='absolute w-[1170px] h-[1px] left-[135px] top-[323px] bg-[#F2F2F2]' />
        <img className='absolute w-[210px] h-[260px] left-[122px] top-[354px] bg-[#C4C4C4]' src="/Rectangle 22.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[375px] top-[354px] bg-[#C4C4C4]' src="/Rectangle 23.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[615px] top-[354px] bg-[#C4C4C4]' src="/Rectangle 24.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[855px] top-[354px] bg-[#C4C4C4]' src="/Rectangle 25.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[1095px] top-[354px] bg-gray-300 rounded-sm' src="/Rectangle 26.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[122px] top-[644px] bg-gray-300' src="/Rectangle 27.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[375px] top-[644px] bg-gray-300' src="/Rectangle 28.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[615px] top-[644px] bg-[#C4C4C4]' src="/Rectangle 29.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[855px] top-[644px] bg-[#C4C4C4]' src="/Rectangle 30.png" alt="photo" />
        <img className='absolute w-[210px] h-[260px] left-[1095px] top-[644px] bg-[#C4C4C4]' src="/Rectangle 31.png" alt="photo" />
        <img className='absolute w-[139.9px] h-[52px] left-[135px] top-[975px]' src="/slide-numbers.png" alt="number" />
        <a href="#!"><img className='absolute w-[52.95px] h-[53px] left-[304px] top-[964px]' src="/Frame 9.png" alt="arrow" /></a>
       <a href="#!"><img className='absolute w-[52.95px] h-[53px] left-[379.94px] top-[964px]' src="/Frame 8.png" alt="photo" /></a>
    </div>
  )
}

export default page